import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  baseURL="https://v6.exchangerate-api.com/v6/7e8a74d1ea24d8ea5179702c/latest/USD";

  constructor(private http: HttpClient) { }
  get() : Observable<any> {
    return this.http.get(this.baseURL);

  }
}
