import { Component } from '@angular/core';
import { LazyService } from '../lazy.service';

@Component({
  selector: 'app-lazy',
  template: ` <p>lazy works!</p> `,
  styles: [],
})
export class LazyComponent {
  constructor(private lazy: LazyService) {
    this.lazy.prefix = 'lazy component';
  }
}
