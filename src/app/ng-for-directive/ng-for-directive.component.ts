import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.scss'],
})
export class NgForDirectiveComponent implements OnInit {
  data: any[] = [];

  ngOnInit(): void {
    this.data = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        id: 2,
      },
      {
        firstName: 'erwer',
        lastName: 'Dweroe',
        age: 31,
        id: 3,
      },
      {
        firstName: 'srsrds',
        lastName: 'sdfdsfDoe',
        age: 32,
        id: 1,
      },
      {
        firstName: 'sdf',
        lastName: 'sfdsf',
        age: 34,
        id: 4,
      },
    ];
  }

  shuffleData() {
    this.data = JSON.parse(
      JSON.stringify(this.data.sort((a, b) => b.age - a.age))
    );
  }

  addData() {
    this.data.unshift({
      firstName: 'Jane',
      lastName: 'Doe',
      age: 22,
      id: 5,
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackById(index: number, obj: any): number {
    return obj.id;
  }
}
