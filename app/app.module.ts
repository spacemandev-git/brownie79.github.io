import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Page_HomeComponent }  from './components/page_home.component';
import { Page_AboutComponent }  from './components/page_about.component';
import { Page_BlogComponent } from './components/page_blog.component';
import { HeaderComponent }  from './components/header.component';

import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, Routing ],
  declarations: [ Page_HomeComponent, Page_AboutComponent, HeaderComponent, Page_BlogComponent ],
  bootstrap:    [ Page_HomeComponent ]
})
export class AppModule { }
