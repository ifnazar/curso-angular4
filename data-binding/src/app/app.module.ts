import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingClassStyleComponent } from './data-binding/data-binding-class-style/data-binding-class-style.component';
import { DataBindingInterpolationComponent } from './data-binding/data-binding-interpolation/data-binding-interpolation.component';
import { DataBindingEventComponent } from './data-binding/data-binding-event/data-binding-event.component';
import { DataBindingTwoWayBindingComponent } from './data-binding/data-binding-two-way-binding/data-binding-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingClassStyleComponent,
    DataBindingInterpolationComponent,
    DataBindingEventComponent,
    DataBindingTwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
