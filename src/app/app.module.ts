import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AMAComponent } from './ama/ama.component';
import { AmaCardComponent } from './ama-card/ama-card.component';
import { AmaDetailsComponent } from './ama-details/ama-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewsComponent, AMAComponent, AmaCardComponent, AmaDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
