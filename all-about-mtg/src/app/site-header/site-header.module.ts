import {SiteHeaderComponent} from './site-header.component';
import {NgModule} from '@angular/core';
import {SharedModule} from "../Utilities/shared.module";
import {MatButtonModule, MatFormFieldModule, MatMenuModule, MatSelectModule, MatToolbarModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    SiteHeaderComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [SiteHeaderComponent],
  entryComponents: [SiteHeaderComponent],
})
export class SiteHeaderModule { }
