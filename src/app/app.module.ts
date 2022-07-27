import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouelDailyImageComponent } from './carouel-daily-image/carouel-daily-image.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageOfTheDayComponent } from './image-of-the-day/image-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouelDailyImageComponent,
    HeaderComponent,
    FooterComponent,
    ImageOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
