import { Car } from "./car";
import { CarImage } from "./carImage";
import { ResponseModel } from "./ResponseModel";

export interface CarDetails{
    carId:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePaths:CarImage[];
}