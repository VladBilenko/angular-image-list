import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingComponent } from './sharing.component';
import {SharingRoutingModule} from './sharing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharingRoutingModule
  ],
  declarations: [SharingComponent]
})
export class SharingModule { }
