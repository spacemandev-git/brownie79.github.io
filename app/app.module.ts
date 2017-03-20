import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BodyComponent }  from './components/body.component';
import { HeaderComponent }  from './components/header.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BodyComponent, HeaderComponent ],
  bootstrap:    [ BodyComponent ]
})
export class AppModule { }
