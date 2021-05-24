import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppParent } from './app-parent-test';
import { AppChildren } from './app-children'

@NgModule({
  declarations: [
    AppComponent,
    AppParent,
    AppChildren,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
