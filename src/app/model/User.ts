export class User {
     name : string = "";
     surname : string = "";
     email:string = "";
     phoneNumber = "";
     password = "";
     token : string = "";
     isAdmin : boolean = false;

    constructor(name: string, surname: string, email:string,phoneNumber :string, password:string) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

}