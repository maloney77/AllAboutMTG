import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app/app.component';
import {SiteHeaderComponent} from "../site-header/site-header.component";
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {SiteHeaderModule} from "../site-header/site-header.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routes";
import {AboutModule} from "../about/about.module";
import {HomeModule} from "../home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared.module";
import {StartingOutModule} from "../starting-out/starting-out.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    SiteHeaderModule,
    HttpClientModule,
    AboutModule,
    HomeModule,
    StartingOutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
