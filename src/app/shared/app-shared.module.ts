import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule, MatProgressSpinnerModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './components/logo/logo.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatMenuModule, MatProgressSpinnerModule, FontAwesomeModule],
  exports: [NavComponent, LogoComponent, ContentContainerComponent, LoaderComponent],
  declarations: [NavComponent, LogoComponent, ContentContainerComponent, LoaderComponent],
  providers: [],
})
export class AppSharedModule {}
