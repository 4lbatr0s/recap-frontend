import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/carDetails';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  //value: the value we want to change : cars
  // carFilterText : the value we are going to use when we filter.
  transform(value:any, carFilterText:string):any {
     carFilterText = carFilterText ? carFilterText.toLocaleLowerCase() : ""
     let filteredCars:any = carFilterText
      ? value.filter((car:CarDetails) => car.description.toLocaleLowerCase().indexOf(carFilterText) !== -1)
      : value
      return filteredCars;
  }
}
