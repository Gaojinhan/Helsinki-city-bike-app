import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { StationComponent } from './pages/station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    JourneyComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
