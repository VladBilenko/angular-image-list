import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharingComponent} from './sharing.component';


export const SHARING_ROUTES: Routes = [
  {
    path: '', component: SharingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(SHARING_ROUTES)],
  exports: [RouterModule]
})

export class SharingRoutingModule {
}
