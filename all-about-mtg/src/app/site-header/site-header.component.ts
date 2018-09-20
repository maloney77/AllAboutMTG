import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-site-header',
  template: `
    <!--<mat-form-field>-->
    <!--<mat-select placeholder="Format" class="site-header_formats-selector">-->
    <!--<mat-option *ngFor="let format of formats" [value]="format" class="test">-->
    <!--{{format}}-->
    <!--</mat-option>-->
    <!--</mat-select>-->
    <!--</mat-form-field>-->

    <mat-toolbar class="site-header mat-elevation-z6">
      <div class="site-header_element-container">
        <div class="site-header_button-container">
          <a routerLink="home" routerLinkActive="active">
            <button mat-button class="site-header_button">Home</button>
          </a>
        </div>

        <div class="site-header_button-container">
          <a routerLink="/about" routerLinkActive="active">
            <button mat-button class="site-header_button">About</button>
          </a>
        </div>
        
        <div class="site-header_button-container">
          <a routerLink="/starting-out" routerLinkActive="active">
            <button mat-button class="site-header_button">Starting out</button>
          </a>
        </div>
        
        <div class="site-header_button-container">
          <button mat-button (click)="showFormats()" class="site-header_button">Formats</button>
          <div *ngIf="shouldShowFormats" class="site-header_format-buttons-container">
            <button mat-button *ngFor="let format of formats" class="site-header_format-button">{{format}}</button>
          </div>
        </div>
        
      </div>
    </mat-toolbar>


  `,
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  formats: string[];
  shouldShowFormats: boolean;

  constructor() {
  }

  ngOnInit() {
    this.formats = ['Standard', 'Modern', 'Legacy'];
  }

  showFormats() {
    this.shouldShowFormats = !this.shouldShowFormats;
  }

}
