import {NgModule} from "@angular/core";
import {StartingOutComponent} from "./starting-out.component";
import {SharedModule} from "../Utilities/shared.module";

@NgModule({
  declarations:[
    StartingOutComponent
  ],
  imports:[
    SharedModule
  ],
  exports: [StartingOutComponent],
  entryComponents: [StartingOutComponent],
})
export class StartingOutModule {}
