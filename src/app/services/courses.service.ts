import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../constants';
import { HttpService } from './http.service';

export const COURSES_SERVICE = new InjectionToken<CoursesService>(
  'COURSES_SERVICE'
);

export const coursesProvider = (http: HttpService) => new CoursesService(http);

@Injectable()
export class CoursesService {
  constructor(private http: HttpService) {}

  getCourses(): Observable<Course[]> {
    return this.http.get();
  }
}
