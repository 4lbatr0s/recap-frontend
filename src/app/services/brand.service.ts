import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl:string = "https://localhost:44358/"
  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<ListResponseModel<Brand>>{
    let newUrl = this.apiUrl + "Brands/All"
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl)
  }
}
