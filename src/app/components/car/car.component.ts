import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded:boolean
  cars:Car[] = []
  currentCar:Car
  carDetails:CarDetails

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
        if(params["colorId"]) {
          this.getCarsByColor(params["colorId"])
        } 
      } else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      } else {
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrand(brandId:string){
    this.carService.getByBrandId(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByColor(colorId:string){
    this.carService.getByColorId(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }


  setCurrentCar(car:Car){
    console.log(car.brandName+ car.description);
    this.currentCar = car;
    console.log(`current car is ${this.currentCar.brandName + this.currentCar.description}`);
    
  }

}
