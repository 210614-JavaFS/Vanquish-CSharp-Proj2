export default class Book {
    constructor(
        public bookId: number | undefined,
        public bookName: string | undefined,
        public bookDescription: string | undefined,
        public bookCategory: string | undefined,
        public costUSD: string | undefined,
        public imgURL: string | undefined,
        public bookStockQuantity: number | undefined,
        public author: string | undefined,
    ){}
}