import Invoice from "./Invoice";

export default class User {
    constructor(
        public userId: number | undefined,
        public username: string | undefined,
        public userEmail: string,
        public userPassword: string,
        public firstName: string | undefined,
        public lastName: string | undefined,
        public address: string | undefined,
        public currencyID: string | undefined,
        public userRole: string | undefined,
        //NOTE. need invoice model
        public invoice?: Array<Invoice>,

    ){}
}