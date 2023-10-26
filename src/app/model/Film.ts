export class Film {   
    name:string = "";
    description:string = "";

    imageUrl: string = '';
   
    actors!: string;
    duration!: string;
    year!: string;
    price!: number;
    category!: string;
  
    constructor(name:string, description:string, imageUrl:string, actors: string, duration: string,year: string, price:number,category:string) {
    this.name = name;
    this.description = description;
    this.imageUrl= imageUrl;
    this.actors= actors;
    this.duration= duration;
    this.year= year;
    this.price= price;
    this.category= category;

   }
}