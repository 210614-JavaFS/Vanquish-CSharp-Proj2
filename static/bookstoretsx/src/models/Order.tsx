import Book from "./Book";
import Invoice from "./Invoice";
import User from "./User";

export default class Order {
    constructor(
        public orderId:number,
        public orderQuantity:number,
        public invoice: Invoice | null,
        public book: Book | null,
        public user: User | null,
    ){}
}