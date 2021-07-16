import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://community-open-weather-map.p.rapidapi.com/weather';
  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(params?: any): Observable<any> {
    const options = {
      params: {
        q: 'Hanoi',
        ...params
      },
      headers: {
        'x-rapidapi-key': 'f4d13c0779mshd7fe16133bcf822p13422bjsn9213a63569c5',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    return this.httpClient.get(this.url, options);
  }
}
