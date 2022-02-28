import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl:string = "https://localhost:44358/"
  constructor(private httpClient:HttpClient) { }


  getColors():Observable<ListResponseModel<Color>>{
    let newUrl = this.apiUrl + "Colors/All"
    return this.httpClient.get<ListResponseModel<Color>>(newUrl)
  }
  
}
