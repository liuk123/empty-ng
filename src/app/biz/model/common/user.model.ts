export class User{
  constructor(
    public id?: string,
    public username?: string,
    public password?: string,
    public phone?: number,
    public createTime?: string,
    public email?: string,
  ){}
}