import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BrowserComponent } from './browser/browser.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BrowserComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
