export interface Tag {
  color: string; //颜色
  value: string; //消息数量
}

export interface Menu {
  id: Number;
  pid: Number;
  sort: Number;
  title: string;
  type: MenuType; // 类型
  icon: string; // 图标
  disabled: boolean; // 禁用
  selected: boolean;  // 选中
  open?: boolean; // 打开
  route?: string; // 路由地址
  link?: string;  // 链接地址
  badge?: Tag;  // 消息
  children?: Menu[];
  isMenuShow?: Boolean; // 是否在菜单栏显示
  isBreadcrumbShow?: Boolean; // 是否在面包屑显示
  authorityList?:String[]; //权限 对应权限表
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
  authorityList?:String[]; //权限
}

export type MenuType = 'link' | 'router' | 'sub' ;