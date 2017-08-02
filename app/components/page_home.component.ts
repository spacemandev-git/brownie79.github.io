import { Component } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'page-home',
  templateUrl: '../html/page_home.html'
})
export class Page_HomeComponent  {
  ngAfterViewInit(){
    //initalize materialize css components
    $(".button-collapse").sideNav({
      closeOnClick: true
    });    
  }
}
