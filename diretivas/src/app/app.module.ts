import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DifertivaNgifComponent } from './difertiva-ngif/difertiva-ngif.component';
import { DifertivaNgswitchComponent } from './difertiva-ngswitch/difertiva-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DifertivaNgifComponent,
    DifertivaNgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
