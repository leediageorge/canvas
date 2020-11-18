

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <canvas #canvas width="600" height="300"></canvas>
    <button (click)="animate()">Play</button>   
  `,
  styles: ['canvas { border-style: solid }']
})
export class AppComponent{
  context:CanvasRenderingContext2D;
  @ViewChild("mycanvas") mycanvas;

  preview(e:any):void{
    let canvas=this.mycanvas.nativeElement;
    let context=canvas.getContext('2d');
  
  // canvas: ElementRef<HTMLCanvasElement>;  
  // 
  // private ctx: CanvasRenderingContext2D;

  ngOnInit():  {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  
  animate():  {
    context.clearRect(0,0,300,300);

  var render=new.FileReader();
  render.onload=function(event){
    var img=new Image();
    img.onload=function(){
      canvas.width=img.width;
      canvas.height=img.height;
      context.drawImage(img,0,0);
    };
    img.src=event.target.result;
  };
  render.readAsDataURL(e.target.files[0]);
}
  }
 