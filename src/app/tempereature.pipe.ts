import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempereature',
  pure: true
})
export class TempereaturePipe implements PipeTransform {

  transform(value: number) {
    if (value && !isNaN(value)) {
      const tempareature = (value - 32) / 1.8;
      return tempareature.toFixed(2);
    }
    return null;
  }

}
