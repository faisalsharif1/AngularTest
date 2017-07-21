import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
`
    <h1>Name Of The Developer Is {{name}}</h1>
    <h2>Father Name Of The Developer Iss {{fatherName}}</h2>
`,
})

export class AppComponent
{
    name = 'Faisal Sharif';
    fatherName  = "Sharif Khan"
}
