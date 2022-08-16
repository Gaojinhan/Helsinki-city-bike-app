import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { StationComponent } from './pages/station/station.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'journey', component: JourneyComponent},
  { path: 'station', component: StationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
