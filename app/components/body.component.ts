import { Component } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'body-comp',
  templateUrl: '../html/body.html'
})
export class BodyComponent  {
  ngAfterViewInit(){
    //initalize materialize css components
    $(".button-collapse").sideNav();    
  }

}
