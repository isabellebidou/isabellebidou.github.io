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
