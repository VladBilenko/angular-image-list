import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosItemsService} from './services/photos-items.service';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [PhotosComponent],
})
export class PhotosModule { }
