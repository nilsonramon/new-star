import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elemet: ElementRef) {
    elemet.nativeElement.style.backgroundColor = 'red';
  }

}
