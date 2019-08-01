import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(person => {
        if (person.name) {
          return person.name.search(searchText) !== -1;
        }
      });
    }
  }
}
