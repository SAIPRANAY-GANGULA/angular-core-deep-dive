import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit, OnDestroy {
  @Input() row: any;

  ngOnInit(): void {
    console.log('new row added');
  }

  ngOnDestroy(): void {
    console.log('row is destroyed');
  }
}
