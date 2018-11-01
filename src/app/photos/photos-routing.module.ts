import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos.component';


export const PHOTOS_ROUTES: Routes = [
  {
    path: '', component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(PHOTOS_ROUTES)],
  exports: [RouterModule]
})

export class PhotosRoutingModule {
}
