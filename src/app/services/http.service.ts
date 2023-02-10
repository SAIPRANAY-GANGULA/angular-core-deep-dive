import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, COURSES } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  get(): Observable<Course[]> {
    return of(COURSES);
  }
}
