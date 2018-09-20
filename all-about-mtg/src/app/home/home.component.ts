import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home_title">
      All About MTG - Learn all about magic!
    </div>

    <!--<div class="app-home_content-container">-->
      <!--<mat-card class="app-home_standard-container">-->
        <!--<mat-toolbar class="app-home_standard-header">Standard Events</mat-toolbar>-->
        <!--<mat-card-content class="app-home_standard-content">-->
          <!--<li *ngFor="let event of standardEvents">-->
            <!--{{event}}-->
          <!--</li>-->
        <!--</mat-card-content>-->
      <!--</mat-card>-->
    <!--</div>-->
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  standardEvents: string[];

  constructor() {
  }

}
