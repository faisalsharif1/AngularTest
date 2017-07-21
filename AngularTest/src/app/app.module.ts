import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { testComponent } from './test.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, testComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
