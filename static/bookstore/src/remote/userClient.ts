import axios from "axios";

const userClient = axios.create({

    baseURL: 'http://localhost:8080/bookstore/user',
    headers: {
        'Content-Type':'application/json',
    }

})

export default userClient;