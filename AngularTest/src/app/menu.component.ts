import { Component } from '@angular/core';

@Component({
    selector: 'menu-item',
    template:
    `
    <h2>Name Of The Developer Is {{name}}</h2>
    <h3>Another</h3>
    <h3>Yet Another</h3>
`
})

export class menuComponent {
    name = 'Shah Fahad';
}
