import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarService } from 'src/app/services/car.service';
import { BrandComponent } from '../brand/brand.component';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded:boolean
  cars:CarDetails[] = []
  carDetails:CarDetails
  carViewImage:string
  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute) { }

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

  setImageView(imagePath:string){
    let portUrl:string = "https://localhost:44358/"
    let path = portUrl + imagePath.split("\\").slice(1).join('/')
    return path
  }
}
