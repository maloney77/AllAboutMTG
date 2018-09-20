import {NgModule} from '@angular/core';
import {HomeComponent} from "./home.component";
import {SharedModule} from "../Utilities/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [HomeComponent],
  entryComponents: [HomeComponent],
})
export class HomeModule { }
