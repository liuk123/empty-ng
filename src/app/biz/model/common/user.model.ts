export class User{
  constructor(
    public id?: string,
    public username?: string,
    public password?: string,
    public phone?: number,
    public createTime?: string,
    public email?: string,
    public avatar?:string,
    public authorities?: Authority[]
  ){}
}
interface Authority{
  id: number,
  name: string,
  url: string,
  [propName:string]: any
}