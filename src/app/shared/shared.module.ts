import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DarkModeComponent } from './components/dark-mode-toggle/dark-mode.component';
import { RightAsideComponent } from './components/right-aside/right-aside.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { PrimaryHeaderComponent } from './components/header/primary-header/primary-header.component';
import { SecondaryHeaderComponent } from './components/header/secondary-header/secondary-header.component';



import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerContentComponent } from './components/banner-content/banner-content.component';
import { BannerNavigationComponent } from './components/banner-navigation/banner-navigation.component';





@NgModule({
  declarations: [
    DateFormatPipe,
    DarkModeComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    FooterComponent,
    BannerComponent,
    BannerContentComponent,
    BannerNavigationComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgModule,
  ],
  exports: [
    BannerContentComponent,
    BannerComponent,
    RightAsideComponent,
    LeftAsideComponent,
    RightAsideComponent,
    LeftAsideComponent,
    PrimaryHeaderComponent,
    SecondaryHeaderComponent,
    FooterComponent,
    BannerNavigationComponent,
  ],
})
export class SharedModule {}
