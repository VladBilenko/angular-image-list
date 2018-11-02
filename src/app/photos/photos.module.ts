import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosItemsService} from './services/photos-items.service';
import {AppSharedModule} from '../shared/app-shared.module';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import {MatButtonToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule,
    AppSharedModule,
    MatButtonToggleModule
  ],
  declarations: [PhotosComponent, PhotoItemComponent],
})
export class PhotosModule { }
