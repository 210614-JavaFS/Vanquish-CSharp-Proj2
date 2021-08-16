import axios from "axios";

const adminClient = axios.create({

    baseURL: 'http://localhost:8080/bookstore/admin',
    headers: {
        'Content-Type':'application/json',
    }

})

export default adminClient;