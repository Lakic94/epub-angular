import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[lakicReader]' })
export class ReaderDirective {
    constructor(private el: ElementRef) {
        console.log(el);

    }
}