import { ElementRef, Input } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';
@Directive({
    selector : '.[confirm]', 
})


export class ConfirmDirective {
    
    // constructor(private elementRef : ElementRef<HTMLElement>) {
    //     const msg  = elementRef.nativeElement.getAttribute('confirm-message');
    //     msg != null ? this.message = msg : this.message = this.message;
        
    // }
    @Input('confirm-message')
    message : string = 'Voulez-vous aller vers ce site ?';
    
    @HostListener('click', ['$event'])
    confirmOnClick(event: Event) {
        window.confirm(this.message) ? null: event.preventDefault();
    }
}