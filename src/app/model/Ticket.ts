export class Ticket {
    email: string;
    schedulingId: number;
    price: number
    constructor(email, schedulingId, price){
        this.email = email;
        this.schedulingId = schedulingId;
        this.price = price;
    }

}