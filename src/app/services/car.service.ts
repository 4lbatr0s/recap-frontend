import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Car } from '../models/car';
import { Brand } from '../models/brand';
import { CarDetails } from '../models/carDetails';
import { ResponseModelSingle } from '../models/ResponseModelSingle';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:any = "https://localhost:44358/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+ "Cars/details"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
 
  getByColorId(colorId:string):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + `Cars/detailsbycolorid?colorId=${colorId}`
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getByBrandId(brandId:string):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + `Cars/detailsbybrandid?brandId=${brandId}`
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails(carId:string):Observable<ResponseModelSingle<CarDetails>>{
    let newPath = this.apiUrl + `Cars/detailsbyid?carId=${carId}`
    return this.httpClient.get<ResponseModelSingle<CarDetails>>(newPath)
  }
}
