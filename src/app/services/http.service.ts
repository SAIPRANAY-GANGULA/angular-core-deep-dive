import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, COURSES } from '../../constants';

// export const HTTP_TOKEN = new InjectionToken<HttpService>('COURSES_SERVICE');
//
// export const httpProvider = () => new HttpService();

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  get(): Observable<Course[]> {
    return of(COURSES);
  }
}
