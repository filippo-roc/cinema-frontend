export class Film {   
    name:string = "";
    description:string = "";

    imageUrl: string = '';
   
    actors!: string;
    duration!: string;
    year!: string;
    price!: number;
    categoryName!: string;
  
    constructor(name:string, description:string, imageUrl:string, actors: string, duration: string,year: string, price:number,categoryName:string) {
    this.name = name;
    this.description = description;
    this.imageUrl= imageUrl;
    this.actors= actors;
    this.duration= duration;
    this.year= year;
    this.price= price;
    this.categoryName= categoryName;

   }
}