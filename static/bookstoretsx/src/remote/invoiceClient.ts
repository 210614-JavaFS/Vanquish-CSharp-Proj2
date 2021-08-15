import axios from "axios";

const invoiceClient = axios.create({

    baseURL: 'http://localhost:8080/bookstore/order',
    headers: {
        'Content-Type':'application/json',
    }

})

export default invoiceClient;