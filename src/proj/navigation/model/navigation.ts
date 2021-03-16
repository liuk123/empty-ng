

export interface Navigation {
  title: string;
  descItem: string;
  data: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  descItem: string;
  url?: string;
  route?: string;
  ico: string;
  type: 'link'|'router';
}
