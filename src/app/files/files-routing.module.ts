import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilesComponent} from './files.component';


export const FILES_ROUTES: Routes = [
  {
    path: '', component: FilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(FILES_ROUTES)],
  exports: [RouterModule]
})

export class FilesRoutingModule {
}
