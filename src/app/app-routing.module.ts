import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlListComponent } from './components/url/url-list/url-list.component';
import { UrlInfoComponent } from './components/urlinfo/url-info/url-info.component';
import { AboutInfoComponent } from './components/about/about-info/about-info.component';

const routes: Routes = [
  { path: '/urlinfo', component: UrlInfoComponent },
  { path: '/url', component: UrlListComponent },
  { path: '/about', component: AboutInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
