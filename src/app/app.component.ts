import { Component, inject, Inject } from '@angular/core';
import { Course } from '../constants';
import {
  COURSES_TOKEN,
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
      provide: COURSES_TOKEN,
      useFactory: coursesProvider,
      deps: [HttpService],
    },
  ],
})
export class AppComponent {
  private readonly coursesService = inject(COURSES_TOKEN);

  title = 'core-deep-dive';
  courses$ = this.coursesService.getCourses();

  // constructor(
  //   @Inject(COURSES_TOKEN) private readonly coursesService: CoursesService
  // ) {}

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }

  onCourseView(course: Course): void {
    console.log(course);
  }
}
