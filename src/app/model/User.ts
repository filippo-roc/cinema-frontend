export class User {
    nome : string = "";
    surname : string = "";
    email:string = "";
    phoneNumber = ""
    password:string = "";
    token : string = "";
    

    constructor(nome: string, surname: string, email:string,phoneNumber : string, password:string) {
        this.email = email;
        this.password = password;
        this.nome = nome;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
    setToken(token:string){
        this.token = token;
    }
}