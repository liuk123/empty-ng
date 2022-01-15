
export class ArtItem{
  constructor(
    public id: string,
    public title: string,
    public descItem: string,
    public author?: any,
    public imgUrl?: string,
    public content?: string,
    public tagList?: TagItem[],
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
