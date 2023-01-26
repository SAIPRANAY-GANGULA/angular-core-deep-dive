import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../constants';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course | undefined; //property-binding
  @Output() courseView = new EventEmitter<Course>(); //event-binding

  onCourseView(): void {
    console.log('CourseCardComponent - onCourseView clicked');
    this.courseView.emit(this.course);
  }
}
