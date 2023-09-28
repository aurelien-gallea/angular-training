import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
    selector : '.[no-open]'
})
export class NoOpenDirective {

    @HostListener('click', ['$event'])
    onClick(event : MouseEvent) {     
        event.preventDefault();
    }
}