import { Component } from '@angular/core';
import { testComponent } from './test.component';

@Component({
  selector: 'my-app',
  template: 
`
    <h1>Name Of The Developer Is {{name}}</h1>
    <test-app></test-app>
`
})

export class AppComponent
{
    name = 'Faisal Sharif';
    fatherName  = "Sharif Khan"
}
