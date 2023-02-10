import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../constants';
import { HttpService } from './http.service';

export const COURSES_TOKEN = new InjectionToken<CoursesService>(
  'COURSES_SERVICE'
);

let counter = 1;

export const coursesProvider = (http: HttpService) => new CoursesService(http);

@Injectable()
export class CoursesService {
  constructor(private http: HttpService) {
    console.log('createCourseService', counter++);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get();
  }
}
