import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/carDetails';
import { Color } from '../models/color';

@Pipe({
  name: 'colorPipe',
})
export class ColorPipe implements PipeTransform {
  transform(value: CarDetails[], filterText: string): CarDetails[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (c: CarDetails) =>
            c.colorName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
