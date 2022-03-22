import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { CarDetails } from '../models/carDetails';

@Pipe({
  name: 'brandPipe'
})
export class BrandPipe implements PipeTransform {

 
  transform(value: Brand[], filterBrand: string): Brand[] {
    filterBrand=filterBrand?filterBrand.toLocaleLowerCase():""
    return filterBrand?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterBrand)!==-1):value;
  }

}

