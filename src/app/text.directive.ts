import { Directive, ElementRef } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(el:ElementRef)
  {

    el.nativeElement.style.color='green';
    el.nativeElement.style.background="yellow";
    el.nativeElement.style.fontStyle="italic";
    el.nativeElement.style.textAlign="center";

   }

}
