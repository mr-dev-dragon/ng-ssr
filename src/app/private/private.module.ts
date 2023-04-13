import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';

import { PipePipe } from './pipes/pipe.pipe';
import { AComponent } from './components/a/a.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PipePipe, AComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
 
    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
})
export class PrivateModule {}
