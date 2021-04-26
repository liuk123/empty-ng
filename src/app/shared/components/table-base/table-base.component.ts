import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableQueryParams, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { PageInfo } from 'src/app/core/model/page-info.model';

export interface DataItem {
  id: number;
  checked?: boolean;
  disabled?: boolean;
  [propname: string]: any
}
type Type = 'text'
  |'tag';

export class ColumnItem{
  constructor(
    public name: string,
    public item: string,
    public type?: Type,
    public flex?: 'left'|'right'|null,
    public sortOrder?: NzTableSortOrder | null,
    public sortFn?: NzTableSortFn | null | boolean,
    public sortDirections?: NzTableSortOrder[],

    public listOfFilter?: NzTableFilterList,
    public filterFn?: NzTableFilterFn | null | boolean,
    public filterMultiple?: boolean,
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
  @Input() pageData: PageInfo<DataItem>
  @Input() checkbox = false
  @Output() paramsEvent = new EventEmitter()

  indeterminate=false
  setOfCheckedId = new Set<number>();
  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.pageData.list.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
  
  onAllChecked(checked: boolean): void {
    this.pageData.list.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onQueryParamsChange(params: NzTableQueryParams){
    this.paramsEvent.emit(params);
  }
}
