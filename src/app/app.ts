import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDisplay } from './features/weather/components/weather-display/weather-display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skycast-rx-dashboard');
}
