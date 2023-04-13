import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
})
export class CoreModule {}
