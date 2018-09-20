import {
  MatAccordionDisplayMode,
  MatButtonModule,
  MatCardModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkAccordion} from "@angular/cdk/accordion";



@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterModule,
    MatExpansionModule,
  ]
})
export class SharedModule {

}
