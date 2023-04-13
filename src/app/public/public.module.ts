import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { DateFormatPipe } from './pipes/date-format.pipe';
// import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
// import { TestComponent } from './components/test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { RelayOnComponent } from './components/about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './components/about/About-Components/top-content/top-content.component';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { FullComponent } from './components/layout/full/full.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DateFormatPipe,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    RelayOnComponent,
    TopContentComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    // BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
})
export class PublicModule {}
