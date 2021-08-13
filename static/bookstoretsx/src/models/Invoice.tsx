export default class Invoice {
    constructor(
        public invoiceID: number,
        public invoiceStatus: string,
        public nativeCurrencyName: string,
        public nativeAmount: number,
        public usdAmount: number
        
    ){}
}