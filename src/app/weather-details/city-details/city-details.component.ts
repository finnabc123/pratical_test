import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  cityWeather: any

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((pm) => {
      const cityId = +pm.get('id')
      this.weatherService.getCityWeatherDetails(cityId).subscribe((cw: any) => {
        cw.city.sunrise = cw.city.sunrise * 1000;
        cw.city.sunset = cw.city.sunset * 1000;
        cw.list = cw.list.slice(0, 5);
        cw.list.forEach(ele => {
          ele.dt = ele.dt * 1000;
        });
        this.cityWeather = cw;
        console.log('this.cityWeather=====',this.cityWeather)
      });
    });
  }
}
