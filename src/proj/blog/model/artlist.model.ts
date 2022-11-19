
export class ArtItem{
  constructor(
    public id: string,
    public title: string,
    public descItem: string,
    public author?: any,
    public postImage?: string,
    public content?: string,
    public tag?: TagItem,
    public createTime?: Date
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
