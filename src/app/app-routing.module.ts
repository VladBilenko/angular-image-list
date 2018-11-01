import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'photos', pathMatch: 'full'},
  {path: 'photos', loadChildren: 'app/photos/photos.module#PhotosModule'},
  {path: 'files', loadChildren: 'app/files/files.module#FilesModule'},
  {path: 'sharing', loadChildren: 'app/sharing/sharing.module#SharingModule'},
  {path: 'cabinet', loadChildren: 'app/cabinet/cabinet.module#CabinetModule'},
  {path: '**', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
