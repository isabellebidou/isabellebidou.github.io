import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
<my-step-detail></my-step-detail>
<step-search></step-search>
<my-steps></my-steps>



  `,
  styleUrls: ['steps.component.css'],
})
export class AppComponent {
  title = 'which DVD?';
}
