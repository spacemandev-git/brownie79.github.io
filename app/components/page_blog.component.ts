import { Component } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'page-blog',
  templateUrl: '../html/page_blog.html'
})
export class Page_BlogComponent  {
  ngAfterViewInit(){
    //initalize materialize css components
    $(".button-collapse").sideNav({
      closeOnClick: true
    });    
  }
}
