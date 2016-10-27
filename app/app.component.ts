import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>


    <nav>
     <a routerLink="/search" class="tab">search by name</a>
     <a routerLink="/list" class="tab">show full list</a>
   </nav>
<router-outlet></router-outlet>



  `,
  styleUrls: ['steps.component.css'],
})
export class AppComponent {
  title = 'which DVD?';
}
