import { CarImage } from "./carImage";

export interface CarDetails{
    carId:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePaths:CarImage[];
    brandId:string;
    colorId:string;
}