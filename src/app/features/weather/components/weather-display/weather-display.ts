import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, catchError, map, of, startWith, switchMap, tap } from 'rxjs';
import { Search } from '../search/search';
import { CurrentWeatherCard } from '../current-weather-card/current-weather-card';
import { StatCard } from '../stat-card/stat-card';
import { WeatherService } from '../../../../core/services/weather';

type UiState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: any };

@Component({
  selector: 'app-weather-display',
  imports: [ CommonModule, Search, CurrentWeatherCard, StatCard],
  templateUrl: './weather-display.html',
  styleUrl: './weather-display.css',
})
export class WeatherDisplay {
  private city$ = new BehaviorSubject<string>('Nairobi');

  vm$ = this.city$.pipe(
    switchMap((city) =>
      this.weather.getWeatherByCity(city).pipe(
        map((api) => ({ status: 'success', data: api } as const)),
        startWith({ status: 'loading' } as const),
        catchError((err) => {
          console.log('Weather API error:', err);

          const msg =
            err?.status === 404 ? 'City not found' :
            err?.status === 401 ? 'Invalid API key' :
            `Something went wrong (${err?.status || 'network'})`;

          return of({ status: 'error', message: msg } as const);
        })

      )
    ),
    startWith({ status: 'idle' } as const)
  );

  constructor(private weather: WeatherService) {}

  onCityChange(city: string) {
    this.city$.next(city);
  }

}
