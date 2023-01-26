import { Component } from '@angular/core';
import { COURSES } from '../constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'core-deep-dive';
  courses = COURSES;

  onClickEventBubbled(): void {
    console.log('AppComponent - click event bubbled up');
  }
}
