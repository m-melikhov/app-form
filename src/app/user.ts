export class User {
  constructor(
    public id: number,
    public name: string | null,
    public age: number | null,
    public role: string | null,
  ) { }
}