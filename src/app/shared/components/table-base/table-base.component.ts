import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableQueryParams, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { PageInfo } from 'src/app/core/model/page-info.model';

export interface DataItem {
  id: number;
  checked?: boolean;
  disabled?: boolean;
  colors?: string[];
  [propname: string]: any
}
type Type = 'text'
  |'tag'
  |'status'
  |'action';

export class ColumnItem{
  constructor(
    public name: string,  //名称
    public code?: string,  //字段
    public items?: any[],
    public type?: Type,   //类型
    public flex?: 'left'|'right'|null,
    public align?: 'left'|'right'|'center'|null,
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
  //标题数据
  @Input() headerData: ColumnItem[] = []
  //page数据
  @Input() pageData: PageInfo<DataItem>
  //是否有选择框
  @Input() checkbox = false
  //加载回调
  @Output() paramsEvent = new EventEmitter()
  //没有数据的提示信息
  @Input() nzNoResult = '暂无数据'
  // 延时防闪烁
  @Input() nzLoadingDelay = 1


  indeterminate=false
  setOfCheckedId = new Set<number>();
  checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(_: number, item: DataItem): Number {
    return item.id;
  }
  trackByName(_: number, item: ColumnItem): string {
    return item.name;
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
