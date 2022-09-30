import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingVisualizerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
