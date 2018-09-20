import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {AboutComponent} from "./about.component";
import {SharedModule} from "../Utilities/shared.module";

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [AboutComponent],
  entryComponents: [AboutComponent],
})
export class AboutModule { }
