import { Component, inject, Optional } from '@angular/core';
import { Course } from '../constants';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly coursesService = inject(CoursesService, {
    optional: true, // doesn't throw error even if it is not provided.
  });

  title = 'core-deep-dive';
  courses$ = this.coursesService?.getCourses();

  constructor(@Optional() private readonly courses: CoursesService) {}

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }

  onCourseView(course: Course): void {
    console.log(course);
  }
}
