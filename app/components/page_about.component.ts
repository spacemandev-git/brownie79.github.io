import { Component } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'page-about',
  templateUrl: '../html/page_about.html'
})
export class Page_AboutComponent  {
  ngAfterViewInit(){
    //initalize materialize css components
    $(".button-collapse").sideNav({
      closeOnClick: true
    });    
  }
}
