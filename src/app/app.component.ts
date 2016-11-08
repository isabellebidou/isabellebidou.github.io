import { Component, OnInit } from '@angular/core';
////http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>


    <nav>
     <div routerLink="/search" class="tab" [style.color]="getSearchStyle()"(click)="showSearchStyle = true;showListStyle = false;">search by name</div>
     <div routerLink="/list" class="tab" [style.color]="getListStyle()" (click)="showListStyle = true;showSearchStyle = false;">show full list</div>
   </nav>
<router-outlet></router-outlet>
<div id = "disclaimer">
The information contained in this website is for general information purposes only. The information is provided by Isabelle Bidou and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
</div>



  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'which DVD?';
  showListStyle: false;
  showSearchStyle: true;
    //public selectedElement: HTMLDivElement;

    ngOnInit(): void{
      this.showListStyle= false;
      this.showSearchStyle= true;
      this.getSearchStyle();
    }

    getSearchStyle() {
      if(this.showSearchStyle){
        return "#ff80df";
      } else {
        return "";
      }
    }
    getListStyle() {
      if(this.showListStyle){
        return "#ff80df";
      } else {
        return "";
      }
    }


}
