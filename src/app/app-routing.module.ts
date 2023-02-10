import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmaDetailsComponent } from './ama-details/ama-details.component';
import { AMAComponent } from './ama/ama.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'ama', component: AMAComponent },
  { path: 'ama-details', component: AmaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}