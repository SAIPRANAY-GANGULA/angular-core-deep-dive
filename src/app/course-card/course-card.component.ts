import { Component, Input } from '@angular/core';
import { Course } from '../../constants';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course | undefined; //property-binding
}
