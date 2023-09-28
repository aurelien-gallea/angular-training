import { Component, ElementRef, Input } from '@angular/core';
@Component({
    selector : 'user-profile',
    template : `
    <h3 [class.hired]="isHired">{{firstName}} {{lastName | uppercase | lowercase | uppercase}}</h3>
    <img src="{{avatar}}" alt="">
    <span>Metier : <strong>{{job}} ({{revenue | currency : 'EUR'}} / mois)</strong></span>
    <button (click)="onCLickBtn($event.clientX)">Embaucher</button>
    <input (keydown.enter)="onKeyUp($event)" type="text" placeholder="nouveau prenom">
    `,
    styles : [`

        .hired {
            background-color : green;
        }
        h3 {
            color: blue;
        }
    `]
})
export class UserProfileComponent {
    @Input('first-name')
    firstName = '';
    @Input('last-name')
    lastName = '';
    @Input('job')
    job = '';
    @Input('hired')
    isHired = false;

    onKeyUp(event : Event) {
        this.firstName = (event.target as HTMLInputElement).value;
            console.log("linput a été touché");
        
    }

    onCLickBtn(coordX : number) {
        console.log(coordX);
        this.isHired = true;
    }

    avatar = 'https://via.placeholder.com/30';
    revenue = 1200;

    constructor(private elementRef : ElementRef<HTMLElement>) {}

    ngOnInit() {
        // this.elementRef.nativeElement.innerHTML = `
        // <h3>${this.firstname} ${this.lastname}</h3>
        // <span>Metier : <strong>${this.job}</strong></span>
        // `
    }
}