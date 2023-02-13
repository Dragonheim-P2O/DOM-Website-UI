import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AmaDetailsComponent } from "./ama-details/ama-details.component";
import { AMAComponent } from "./ama/ama.component";
import { COMINGSOONComponent } from "./coming-soon/coming-soon.component";
import { HomeComponent } from "./home/home.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { NewsComponent } from "./news/news.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "coming-soon", component: COMINGSOONComponent },
  { path: "news", component: NewsComponent },
  { path: "ama", component: AMAComponent },
  { path: "ama-details", component: AmaDetailsComponent },
  { path: "news-details", component: NewsDetailsComponent },
  { path: "team", component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
