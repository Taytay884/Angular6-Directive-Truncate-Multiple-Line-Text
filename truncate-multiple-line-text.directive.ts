/*
* Usage:
* Using two elements, container (div) and a child inside, (span).
* Adding the directive to the container.
*
  * Example:
  *
  * HTML:
  * <div appTruncateMultipleLineText class="name-container">
      <span>{{text...}}</span>
    </div>
  *
  * STYLE:
  * Give the container constant height or max-height, when the textElement is taller than the container,
  * It will truncate the text.
  * .name-container {
      display: block;
      font-size: 13px;
      height: 26px;
      line-height: 13px;
    }

  * Every line is 13px, on the next line the span size will be 39px and the container is 26px.
  * This approach will cause text truncate.
* */

import {AfterViewInit, Directive, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({selector: '[appTruncateMultipleLineText]'})
export class TruncateMultipleLineTextDirective implements OnInit, AfterViewInit {

  private containerElement: HTMLElement;
  private textElement: HTMLElement;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit() {
    this.containerElement = this.element.nativeElement;
    this.textElement = <HTMLElement>(this.containerElement.children[0]);
  }

  ngAfterViewInit(): void {
    this.truncateTooLongName();
  }

  private truncateTooLongName(): void {
    const words = this.textElement.innerText.split(' ');
    while (this.containerElement.offsetHeight < this.textElement.offsetHeight) {
      words.pop();
      this.renderer.setProperty(this.textElement, 'innerText', words.join(' ') + '...');
    }
  }
}
