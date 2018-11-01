import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(collection: any[], field: string, value: string): any[] {
    if (!collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }

    return collection.filter(item => item[field].toLowerCase().includes(value.toLocaleLowerCase()));
  }

}
