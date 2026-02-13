import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-current-weather-card',
  imports: [DecimalPipe],
  templateUrl: './current-weather-card.html',
  styleUrl: './current-weather-card.css',
})
export class CurrentWeatherCard {
  @Input() api: any;

}
