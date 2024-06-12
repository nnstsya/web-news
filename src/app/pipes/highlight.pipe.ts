import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, search: string): string {
    if (!search) { return value; }
    const re = new RegExp(search, 'gi');
    return value.replace(re, `<span class="highlighted-text">$&</span>`);
  }
}
