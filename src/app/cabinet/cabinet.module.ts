import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import {CabinetRoutingModule} from './cabinet-routing.module';
import {AppSharedModule} from '../shared/app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule,
    AppSharedModule,
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }
