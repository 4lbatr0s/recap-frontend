import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailsService } from 'src/app/services/car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  dataLoaded:boolean;
  carDetail:CarDetails;
  imagePathCounter:number = 0 
  defaultImage:CarImage  = {
    imagePath:"https://localhost:44358/Uploads/Images/default-car.jpg",
    carId:'',
    carImageId:'',
    date:''
  }
  constructor(private carDetailService:CarDetailsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
    })
  }


  getCarDetails(carId:string){
    this.carDetailService.getCarDetails(carId).subscribe(response =>{
      this.carDetail = response.data
      let portUrl:string = "https://localhost:44358/"
      if(this.carDetail.imagePaths.length>0){
          this.carDetail.imagePaths.
        forEach(value => {
          value.imagePath = portUrl + value.imagePath.split("\\")
          .slice(1)
          .join('/')
      })} else {
        this.carDetail.imagePaths.push(this.defaultImage)
      }
      this.dataLoaded = true
    }) 
  }


  changeImage(){
    this.imagePathCounter+=1
    if(this.imagePathCounter>this.carDetail.imagePaths.length-1){
      this.imagePathCounter = 0
    }
  }

 
}

 