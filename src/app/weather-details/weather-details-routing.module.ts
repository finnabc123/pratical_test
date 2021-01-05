import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityDetailsComponent } from './city-details/city-details.component';

const routes: Routes = [
 
  {
    path: '',
    component: CityDetailsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherDetailsRoutingModule { }
