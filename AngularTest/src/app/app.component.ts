import { Component } from '@angular/core';
import { menuComponent } from './menu.component';

@Component({
  selector: 'my-app',
  template: 
`
    <h1>Name Of The Developer Is {{name}}</h1>
    <menu-item></menu-item>
`
})

export class AppComponent
{
    name = 'Faisal Sharif';
    fatherName  = "Sharif Khan"
}
