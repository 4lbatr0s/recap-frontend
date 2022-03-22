import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetails } from 'src/app/models/carDetails';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailsService } from 'src/app/services/car-details.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandComponent } from '../brand/brand.component';
import { CarDetailsComponent } from '../car-details/car-details.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded:boolean
  brandId:string
  colorId:string
  brand:Brand;
  color:Color;
  brands:Brand[]
  colors:Color[]
  cars:CarDetails[] = []
  carDetails:CarDetails
  carViewImage:string
  carFilterText:string = ""
  constructor(private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.getColors()
    this.getBrands()

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

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
  }

  getCarsWithBrandAndColor(){
    if(this.brandId == undefined && this.colorId == undefined){
      this.getCars()
    } else if(this.brandId == undefined){
      this.getCarsByColor(this.colorId)
    } else if(this.colorId ==undefined){
      this.getCarsByBrand(this.brandId)
    } else {
      this.carService.
      getCarsWithBrandAndColor(this.brandId, this.colorId)
      .subscribe(response => {
        this.cars = response.data
      })
    }
  }
 
}
