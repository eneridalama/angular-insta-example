import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  set birthdate(value: string | undefined){
    if(value){
      const birthdate: Date = new Date(value);
      const age: number = Math.abs(Date.now()) - birthdate.getFullYear();
      const style: any = this.el.nativeElement.style;
      if(age > 18){
        style.backgroundColor = 'red';
      }
    }
  }

  constructor(private el: ElementRef) { 
    
    // this.el.nativeElement.style.backgroundColor = 'red';
  }

}
