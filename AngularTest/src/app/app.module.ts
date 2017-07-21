import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { menuComponent } from './menu.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, menuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
