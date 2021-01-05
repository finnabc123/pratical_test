import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { CityDetailsComponent } from './city-details/city-details.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    CityDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class WeatherDetailsModule { }
