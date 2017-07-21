import { Component } from '@angular/core';

@Component({
    selector: 'menu-item',
    template:
    `
    <h2>Name Of The Developer Is {{name}}</h2>
`
})

export class menuComponent {
    name = 'Shah Fahad';
}
