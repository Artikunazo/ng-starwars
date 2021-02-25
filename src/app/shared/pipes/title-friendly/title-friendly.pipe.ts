import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFriendly'
})
export class TitleFriendlyPipe implements PipeTransform {

  transform(value: string): any {
    if(value !== null){
      return value.split(' ').join('-');
    }
  }

}
