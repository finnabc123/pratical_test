import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities = [
    {
      name: 'Newry',
      country: 'UK',
      lon: -6.34,
      lat: 54.175,
      url: ''
    },
    {
      name: 'Liverpool',
      country: 'UK',
      lon: -6.34,
      lat: 54.175,
      url: ''
    },
    {
      name: 'Lincoln',
      country: 'UK',
      lon: -6.34,
      lat: 54.175,
      url: ''
    },
    {
      name: 'Lichfield',
      country: 'UK',
      lon: -6.34,
      lat: 54.175,
      url: ''
    },
    {
      name: 'Perth',
      country: 'UK',
      lon: -6.34,
      lat: 54.175,
      url: ''
    }
  ]

  preloadedModules: string[] = [];
  constructor(private http: HttpClient) {
    this.getWeatherDetails();
  }


  api = 'http://api.openweathermap.org/data/2.5/weather';
  apiForecast = 'http://api.openweathermap.org/data/2.5/forecast';
  appid = '3d8b309701a13f65b660fa2c64cdc517';
  //query = '?q=London,uk&appid=';
  /* 
   City Name :
    Newry, Northern Ireland, the UK	54.175999	-6.349000
    Newcastle Upon Tyne, the UK	54.966667	-1.600000
    Liverpool, Merseyside, the UK	53.400002	-2.983333
    Lincoln, Lincolnshire, the UK	53.234444	-0.538611
    Lichfield, Staffordshire, the UK	52.683498	-1.826530
    Perth, Scotland, the UK	56.396999	-3.437000
    Nottingham, the UK	52.950001	-1.150000
  */



  citiesWeather = [];

  getWeatherDetails(): void {
    this.cities.forEach(city => {
      city.url = `${this.api}?q=${city.name},${city.country.toLowerCase()}&appid=${this.appid}`;
      this.http.get(city.url).subscribe(res => this.citiesWeather.push(res));
    });
  }

  getCityWeatherDetails(cityId: number): Observable<object> {
    const city = this.citiesWeather.find(cw => cw.id === cityId)
    const url = `${this.apiForecast}?q=${city.name}&appid=${this.appid}`;
    return this.http.get(url);
  }

}
