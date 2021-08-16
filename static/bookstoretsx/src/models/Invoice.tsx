import User from "./User";

export default class Invoice {
    constructor(
        public invoiceID: number,
        public user: User,
        public invoiceStatus: string,
        public usdAmount: number,
        public nativeCurrency: string,
        public nativeAmount: number
    ){}
}