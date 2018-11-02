import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CompareService} from './services/compare.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [CompareService],
})
export class CoreModule { }
