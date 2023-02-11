import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child works!</p>
    <ng-content></ng-content>
  `,
  styles: [],
})
export class ChildComponent
  implements
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() someValue = 'someValue';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent - ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log(`ChildComponent - ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`ChildComponent - ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`ChildComponent - ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`ChildComponent - ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`ChildComponent - ngAfterViewChecked`);
  }
}
