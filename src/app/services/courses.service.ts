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
  prefix = 'root';

  constructor(private http: HttpService) {}

  getCourses(): Observable<Course[]> {
    return this.http.get();
  }

  log(): void {
    console.log('createCourseService', counter++, this.prefix);
  }
}
