import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'charcount'})
export class CharCountPipe implements PipeTransform {
  transform(value: string): number {
    return value.length;
  }
}