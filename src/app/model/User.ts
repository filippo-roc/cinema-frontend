export class User {
     nome : string = "";
     surname : string = "";
     email:string = "";
     phoneNumber = "";
     password = "";
     token : string = "";
    

    constructor(nome: string, surname: string, email:string,phoneNumber :string, password:string) {
        this.email = email;
        this.nome = nome;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
    
}