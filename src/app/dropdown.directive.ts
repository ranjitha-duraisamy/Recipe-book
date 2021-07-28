import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onDropdownClick() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-bs-toggle', 'dropdown');
  }

}
