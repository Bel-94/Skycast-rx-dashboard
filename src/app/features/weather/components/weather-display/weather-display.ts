import { Component } from '@angular/core';
import { Search } from '../search/search';
import { CurrentWeatherCard } from '../current-weather-card/current-weather-card';
import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-weather-display',
  imports: [ Search, CurrentWeatherCard, StatCard],
  templateUrl: './weather-display.html',
  styleUrl: './weather-display.css',
})
export class WeatherDisplay {

}
