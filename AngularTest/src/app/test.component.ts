import { Component } from '@angular/core';

@Component({
    selector: 'test-app',
    template:
    `
    <h2>Name Of The Developer Is {{name}}</h2>
`
})

export class testComponent {
    name = 'Shah Fahad';
}
