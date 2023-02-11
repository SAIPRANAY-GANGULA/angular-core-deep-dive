import { Component, Inject, inject, Self, SkipSelf } from '@angular/core';
import { Course } from '../constants';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from '../config';
import { LazyService } from './lazy/lazy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CoursesService],
})
export class AppComponent {
  // private readonly coursesService = inject(CoursesService, {
  //   // optional: true, // doesn't throw error even if it is not provided.
  //   // self: true, // doesn't follow dependency hierarchy checking,only checks in its own Dependency providers array
  //   skipSelf: true,
  // });

  title = 'core-deep-dive';
  courses$ = this.courses?.getCourses();

  constructor(
    @Self() private readonly courses: CoursesService,
    @SkipSelf() private readonly parentCourses: CoursesService, // follow dependency hierarchy checking, skips own providers & checks in the hierarchical providers
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig,
    private lazy: LazyService
  ) {
    if (courses) {
      this.courses.prefix = 'App Component';
      this.courses.log();
    }

    if (parentCourses) {
      this.parentCourses.log();
    }
    this.lazy.prefix = 'app component';

    console.log('appConfig', this.config);
  }

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }

  onCourseView(course: Course): void {
    console.log(course);
  }
}
