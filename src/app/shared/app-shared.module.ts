import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatMenuModule, FontAwesomeModule],
  exports: [NavComponent, LogoComponent],
  declarations: [NavComponent, LogoComponent],
  providers: [],
})
export class AppSharedModule {}
