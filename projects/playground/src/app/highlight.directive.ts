import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: 'p[highlight]'
})
export class HighLightDirective {
    constructor(private elementRef : ElementRef<HTMLElement>) {
        // elementRef.nativeElement.addEventListener('mouseenter', ($event) => {
        //     this.onMouseEnter($event.clientX);
        // });
    }
    
    ngOnInit() {
        
        this.color = this.baseColor;
    }
    
    @HostBinding('style.backgroundColor')
    color= 'transparent';

    @Input('background-color')
    backgroundColor = 'yellow';

    @Input("base-color")
    baseColor = 'transparent';

    @HostListener('mouseenter', ["$event"])
    onMouseEnter(event: MouseEvent) {
        this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
        
    }

    @HostListener('mouseout', ['$event'])
    onMouseOut(event: MouseEvent) {
        this.elementRef.nativeElement.style.backgroundColor = this.baseColor;
    }
}