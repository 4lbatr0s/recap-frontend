import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  currentBrand:Brand
  brands:Brand[] = []
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  setCurrentBrand(brand:Brand){
    console.log(brand.brandName);
    this.currentBrand = brand
    console.log(`current brand is ${this.currentBrand.brandName}`)
  }

  getCurrentBrand(brand:Brand){
    if(this.currentBrand == brand){
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllCars(){
    if(!this.currentBrand){
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  setCurrentBrandNull(){
     this.currentBrand = {
       brandCountry:"",
       brandId:"",
       brandName:"",
       slogan:""
     }
  }
}
