import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingComponent } from './sharing.component';
import {SharingRoutingModule} from './sharing-routing.module';
import {AppSharedModule} from '../shared/app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharingRoutingModule,
    AppSharedModule
  ],
  declarations: [SharingComponent]
})
export class SharingModule { }
