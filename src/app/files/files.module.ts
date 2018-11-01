import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {FilesRoutingModule} from './files-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  declarations: [FilesComponent]
})
export class FilesModule { }
