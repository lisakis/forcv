export class Member {
  id: number;
  name: string;
  email: string;
  role: string;
  created: string;


  constructor(id: number, name: string, email: string, role: string, created: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.created = created;
  }

}
