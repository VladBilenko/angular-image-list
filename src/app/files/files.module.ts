import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {FilesRoutingModule} from './files-routing.module';
import {AppSharedModule} from '../shared/app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FilesRoutingModule,
    AppSharedModule
  ],
  declarations: [FilesComponent]
})
export class FilesModule { }
