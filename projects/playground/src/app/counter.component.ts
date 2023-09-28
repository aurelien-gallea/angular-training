import { Component, Input } from '@angular/core';
@Component({
    selector :'counter',
    template : `
        <div>
            <span>{{value}}</span>
            <button (click)="onClickMinus($event)" > - {{step}}</button>
            <button (click)="onClickPlus($event)"> + {{step}}</button>
        </div>
    `,
    styles : [`
        div {
            display : flex;
            width : 30vw;
            justify-content: center;
            align-items : center;
            gap: 2rem;
            border : 1px solid black;
            border-radius: 0.375rem;
            padding : 10px;
            margin: 1rem auto;
        }
    `]
})
export class Counter {
    
    @Input('initial-value')
    value = 0;

    @Input('step')
    step = 1;

    onClickMinus(event : Event) {
        this.value -= this.step;
    }
    onClickPlus(event : Event) {
        this.value += this.step;
    }
    // onClick(event: Event, operator : string) {
    //     switch (operator) {
    //         case "-":
    //             this.value -= this.step;
    //             break;
    //         case "+":
    //             this.value += this.step;
    //             break;
    //         default:
    //             break;
    //     }
        
    // }
}