import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  currentList: any;

  constructor(private http: HttpClient) { }

  codepen() {
    return this.http.get('https://codepen.io/jobs.json');
  }

  github() {

  }
}
