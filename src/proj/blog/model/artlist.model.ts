export enum ArticleType{
  '草稿'=0,
  '原创'=1,
  '转载'=2,
}

export class ArtItem{
  constructor(
    public id: string,
    public title: string,
    public descItem: string,
    public author?: any,
    public postImage?: string,
    public content?: string,
    public tag?: TagItem,
    public createTime?: Date,
    public type?: number
  ){}
}
export class TagItem{
  constructor(
    public id: string,
    public title: string,
  ){}
}
export class CategoryItem{
  constructor(
    public id: string,
    public name: string,
  ){}
}
