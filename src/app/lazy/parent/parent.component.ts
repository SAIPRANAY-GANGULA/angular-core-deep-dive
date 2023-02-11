import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child [someValue]="'someValue'">
    content projection
  </app-child>`,
  styles: [],
})
export class ParentComponent implements DoCheck {
  ngDoCheck(): void {
    console.log(`ParentComponent - ngDoCheck`);
  }
}
