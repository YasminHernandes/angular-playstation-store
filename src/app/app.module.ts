import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardCategoriesComponent } from './components/card-categories/card-categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlagDeviceComponent } from './components/flag-device/flag-device.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardBannerComponent,
    MenuBarComponent,
    CardBannerComponent,
    CardProductComponent,
    CardCategoriesComponent,
    FooterComponent,
    FlagDeviceComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
