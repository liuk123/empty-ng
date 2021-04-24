import { Component, Input, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface DataItem {
  name: string;
  age: number;
  address: string;
}
type Type = 'text'
  |'tag';

export class ColumnItem{
  constructor(
    public name: string,
    public type?: Type,
    public sortOrder?: NzTableSortOrder | null,
    public sortFn?: NzTableSortFn | null,
    public listOfFilter?: NzTableFilterList,
    public filterFn?: NzTableFilterFn | null,
    public filterMultiple?: boolean,
    public sortDirections?: NzTableSortOrder[],
  ){
    if(!type){
      this.type="text"
    }
  }
}

@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.less']
})
export class TableBaseComponent implements OnInit {
  @Input() headerData: ColumnItem[] = []
  @Input() data: DataItem[] = []
  

  constructor() { }

  ngOnInit(): void {
  }

}
