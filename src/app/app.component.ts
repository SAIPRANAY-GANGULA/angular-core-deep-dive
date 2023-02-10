import { Component, inject, Self } from '@angular/core';
import { Course } from '../constants';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CoursesService],
})
export class AppComponent {
  private readonly coursesService = inject(CoursesService, {
    // optional: true, // doesn't throw error even if it is not provided.
    self: true, // doesn't follow dependency hierarchy checking,
    // only checks in its own Dependency providers array
  });

  title = 'core-deep-dive';
  courses$ = this.coursesService?.getCourses();

  constructor(@Self() private readonly courses: CoursesService) {}

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }

  onCourseView(course: Course): void {
    console.log(course);
  }
}
