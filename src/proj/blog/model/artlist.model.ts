export class ArtList{
  constructor(
    public id: string,
    public title: string,
    public descItem: string,
    public author?: any,
    public imgUrl?: string,
    public content?: string,
    public tag?: string[],
  ){}
}