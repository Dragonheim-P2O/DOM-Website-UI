import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { COMINGSOONComponent } from "./coming-soon/coming-soon.component";
import { NewsComponent } from "./news/news.component";
import { AMAComponent } from "./ama/ama.component";
import { AmaCardComponent } from "./ama-card/ama-card.component";
import { AmaDetailsComponent } from "./ama-details/ama-details.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { FaqComponent } from "./faq/faq.component";
import { HomeComponent } from "./home/home.component";
import { TeamComponent } from './team/team.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    COMINGSOONComponent,
    HomeComponent,
    NewsComponent,
    AMAComponent,
    AmaCardComponent,
    AmaDetailsComponent,
    NewsDetailsComponent,
    FaqComponent,
    TeamComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
