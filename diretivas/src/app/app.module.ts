import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DifertivaNgifComponent } from './difertiva-ngif/difertiva-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    DifertivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
