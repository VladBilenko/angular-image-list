import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import {CabinetRoutingModule} from './cabinet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }
