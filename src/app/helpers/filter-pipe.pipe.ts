import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], maxValue: number): any[] {
    if (!items) return [];
    if (!maxValue) return items;
    return items.filter(it => {
      return it.roomPrice <= maxValue;
    });
  }

}
