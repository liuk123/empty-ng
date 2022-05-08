export interface MenuTree{
  id?: Number;
  title: string;
  type: MenuType;
  link?: string;
  route?: string;
  children?: any;
  selected?: boolean;  // 选中
  sort?: Number;
}

export interface Tag {
  color: string; //颜色
  value: string; //消息数量
}

export interface Menu extends MenuTree{
  pid: Number;
  icon: string; // 图标
  disabled: boolean; // 禁用
  open?: boolean; // 打开
  badge?: Tag;  // 消息
  isMenuShow?: Boolean; // 是否在菜单栏显示
  isBreadcrumbShow?: Boolean; // 是否在面包屑显示
  authorityList?:String[]; //权限 对应权限表
}

export interface BreadcrumbMenu extends MenuTree{
  icon?: string;
  isMenuShow?: Boolean;
  isBreadcrumbShow?: Boolean;
  authorityList?:String[]; //权限
}

export type MenuType = 'link' | 'router' | 'sub' ;