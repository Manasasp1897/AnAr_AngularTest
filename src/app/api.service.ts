import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToDo } from './todo';

const API_URL = 'https://jsonplaceholder.typicode.com/';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url): Observable<ToDo[]> {
    return this.http.get(API_URL + url).pipe(map((res: ToDo[]) => res));
  }
}
