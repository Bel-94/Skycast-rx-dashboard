import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CurrentWeather {
  city: string;
  tempC: number;
  feelsLikeC: number;
  description: string;
  icon: string; // icon code e.g. "10d"
  humidity: number;
  windKph: number;
  pressure: number;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private base = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const url =
      `${this.base}?q=${encodeURIComponent(city)}&appid=${environment.openWeatherApiKey}&units=metric`;
    return this.http.get(url);
  }
}
