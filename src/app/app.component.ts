import { Component, inject } from '@angular/core';
import { Course } from '../constants';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly coursesService = inject(CoursesService);

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
