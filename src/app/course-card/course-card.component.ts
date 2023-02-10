import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Course } from '../../constants';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input('courseAlias') course: Course | undefined; //property-binding
  @Input() index: number | undefined;
  @Output('onCourseSelected') onCourseSelected = new EventEmitter<Course>(); //event-binding

  private readonly coursesService = inject(CoursesService);

  onCourseView(): void {
    console.log('CourseCardComponent - onCourseView clicked');
    this.onCourseSelected.emit(this.course);
  }

  getCardClass() {
    return {
      beginner: this.course?.category === 'BEGINNER',
      intermediate: this.course?.category === 'INTERMEDIATE',
      advanced: this.course?.category === 'ADVANCED',
    };
  }
}
