import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetComponent} from './cabinet.component';


export const CABINET_ROUTES: Routes = [
  {
    path: '', component: CabinetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(CABINET_ROUTES)],
  exports: [RouterModule]
})

export class CabinetRoutingModule {
}
