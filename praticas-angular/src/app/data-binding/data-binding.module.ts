import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    EventBindingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { 

}
