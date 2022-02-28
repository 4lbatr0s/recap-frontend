import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { ResponseModelSingle } from '../models/ResponseModelSingle';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {
  


  apiUrl:string = "https://localhost:44358/"
  constructor(private httpClient:HttpClient) { }


  getCarDetails(carId:string):Observable<ResponseModelSingle<CarDetails>>{
    let newUrl = this.apiUrl + `Cars/detailsbyid?carId=${carId}`
    return this.httpClient.get<ResponseModelSingle<CarDetails>>(newUrl)
  }
}
