import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeShopSectionComponent } from './components/home-shop-section/home-shop-section.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeFeaturesProductsComponent } from './components/home-features-products/home-features-products.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeTestimonialComponent } from './components/home-testimonial/home-testimonial.component';
import { WatchesComponent } from './components/watches/watches.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSliderComponent,
    HomeShopSectionComponent,
    AboutusComponent,
    HomeFeaturesProductsComponent,
    ContactusComponent,
    HomeTestimonialComponent,
    WatchesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
