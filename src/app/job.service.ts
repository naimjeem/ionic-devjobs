import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  currentList: any;

  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP
  ) { }

  codepen() {
    return this.http.get('https://codepen.io/jobs.json');
  }

  github(value, page) {
    return this.http.get(`https://jobs.github.com/positions.json?page=${page}&search=${value}`);
  }
}
