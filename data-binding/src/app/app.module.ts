import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingClassStyleComponent } from './data-binding-class-style/data-binding-class-style.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { DataBindingEventComponent } from './data-binding-event/data-binding-event.component';
import { DataBindingTwoWayBindingComponent } from './data-binding-two-way-binding/data-binding-two-way-binding.component';
import { DataBindingIoPropertiesComponent } from './data-binding-io-properties/data-binding-io-properties.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingClassStyleComponent,
    DataBindingInterpolationComponent,
    DataBindingEventComponent,
    DataBindingTwoWayBindingComponent,
    DataBindingIoPropertiesComponent,
    InputPropertiesComponent,
    OutputPropertiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
