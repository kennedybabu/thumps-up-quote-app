import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor( private elem:ElementRef) { }

}
