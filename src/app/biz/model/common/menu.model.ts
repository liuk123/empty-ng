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
  isMenuShow?: Boolean;
  isBreadcrumbShow?: Boolean;
  authorityList?:String[]; //权限
}

export interface BreadcrumbMenu {
  id: Number;
  title: string;
  type?: MenuType;
  icon?: string;
  link?: string;
  route?: string;
  children?: any;
  isMenuShow?: Boolean;
  isBreadcrumbShow?: Boolean;
  auth?:String[]; //权限
}

export type MenuType = 'link' | 'router' | 'sub' ;