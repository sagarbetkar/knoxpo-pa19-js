import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {DataService} from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Object = {};
  weatherTemps$: Object;
  //weatherDates$: Object;
  constructor(private data: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.data.postWeather(this.weather).subscribe((data) => {
      //console.log(data['message'].temp);
      this.weatherTemps$ = data['message'].temp;
      //this.weatherDates$ = data['message'].date;
    });
  }
}
