export interface Tag {
  color: string; //颜色
  value: string; //消息数量
}

export interface Menu {
  id: Number,
  pid: Number,
  sort: Number,
  title: string;
  type: MenuType;
  icon: string;
  disabled: boolean;
  selected: boolean;
  open?: boolean;
  route?: string;
  link?: string;
  badge?: Tag;
  children?: Menu[];
}

export interface BreadcrumbMenu {
  id: Number;
  title: string;
  type?: MenuType;
  icon?: string;
  link?: string;
  route?: string;
  pRoute?: string;
  children?: any;
}

export type MenuType = 'link' | 'router' | 'sub' ;