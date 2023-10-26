export class Film {   
     
    title:string = "";
    description:string = "";

    imageURL: string = '';
   
    actors!: string;
    duration!: string;
    year!: string;
    price!: number;
    category!: string;
  
    constructor(title:string, description:string, imageURL:string, actors: string, duration: string,year: string, price:number,category:string) {
    this.title = title;
    this.description = description;
    this.imageURL= imageURL;
    this.actors= actors;
    this.duration= duration;
    this.year= year;
    this.price= price;
    this.category= category;

   }
}