import { Component, Inject } from '@angular/core';
import { Course } from '../constants';
import {
  COURSES_SERVICE,
  coursesProvider,
  CoursesService,
} from './services/courses.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesProvider,
      deps: [HttpService],
    },
  ],
})
export class AppComponent {
  title = 'core-deep-dive';
  courses$ = this.coursesService.getCourses();

  constructor(
    @Inject(COURSES_SERVICE) private readonly coursesService: CoursesService
  ) {}

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }

  onCourseView(course: Course): void {
    console.log(course);
  }
}
