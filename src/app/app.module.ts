import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlListComponent } from './components/url/url-list/url-list.component';
import { UrlInfoComponent } from './components/urlinfo/url-info/url-info.component';
import { AboutInfoComponent } from './components/about/about-info/about-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    UrlInfoComponent,
    AboutInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
