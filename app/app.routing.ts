import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import {Page_HomeComponent}   from './components/page_home.component';
import {Page_AboutComponent}  from './components/page_about.component';
import {Page_BlogComponent}   from './components/page_blog.component';

const appRoutes: Routes = [
    { path: '', component: Page_BlogComponent },
    { path: 'about', component: Page_AboutComponent }
] 

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);