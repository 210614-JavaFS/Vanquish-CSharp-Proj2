import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Books from '../models/Books';
import { BookApiResponse } from '../remote/bookApi';
import booksClient from '../remote/BooksClient';
import GetCurrencies from '../remote/GetCurrencies';

type Props = {
    // getRate: number
}

const GetBooks: React.FC<Props> = () => {
    const user = useSelector(selectUser);
    const [books, setBooks] = useState<[]>([]);
    const baseURL = "http://localhost:8080/bookstore/admin/allbook";

    const [currencyOption, setCurrencyOptions] = useState([]);
    const [symbol, setSymbol] = useState();
    const [toCurrency, setToCurrency] = useState("");

    const [getRate, SetGetRate] = useState<number | undefined>();
    const [defaultUserID, setDefaultUserID] = useState(user.currencyID);

    const [author2, setauthor2] = useState();
    const [userId2, setuserId2] = useState();
    const [bookId, setbookId2] = useState();
    const [nativeAmount, setnativeAmount2] = useState("");
    const [currencyName, setcurrencyName2] = useState(user.currencyID);
    const [userId, setuserID2] = useState();
    // const holdSmbol = useRef(symbol);
    // console.log(holdSmbol.current);

    async function addOrder() {
        const URLaddorder = `http://localhost:8080/bookstore/user/addOrder/${userId}/${bookId}/${nativeAmount}/${symbol}`;
        const request = await axios.post(URLaddorder, { withCredentials: true }).then(response => console.log(response))
    }

    useEffect(() => {
        console.log(getRate);
        const abortController = new AbortController();
        const signal = abortController.signal;
        let source = axios.CancelToken.source();

        const fetchBooks = async () => {
            const res = await axios.get(baseURL, {
                cancelToken: source.token
            })

            if (res != null) {
                const data = res;
                console.log(data);
                console.log(data.data);
                setBooks(data.data);
            }
            console.log(defaultUserID);

            async function getCurrencyList() {

                // const response = await axios.get("https://free.currconv.com/api/v7/currencies?apiKey=c728cb6404e7db7045e9");
                const response = await axios.get("https://prepaid.currconv.com/api/v7/currencies?apiKey=pr_4824fc0563d9440788473967ed6f8fd0");
                console.log(response);

                if (response != null) {
                    let data2 = await response.data.results;
                    console.log(data2);

                    console.log(user);
                    console.log(data2[user.currencyID]);
                    const userSymbol = data2[user.currencyID].currencySymbol
                    console.log(userSymbol);
                    setSymbol(userSymbol)
                    const userDcurrency = data2[user.currencyID].currencyName;
                    console.log(userDcurrency);

                }
            }

            getCurrencyList()

            return () => {
                console.log("Cancelling api call");
                source.cancel();
            }

        }
        fetchBooks();
    }, [])
    console.log(author2);
    console.log(books)
    const ApiGetBooks = async (): Promise<BookApiResponse> => {
        const response = await booksClient.get<Books>("");
        console.log(response.data);
        if (response.status === 200) {

            // setBooks(response.data);
            return { status: response.status, payload: response.data }
        }
        if (response.status === 404) {
            return { status: response.status, message: "Failed to retrieve books" }
        }

        return { status: 404, message: "Failed to fetch Book" }
    }
    const getCurrencyRate = (uppass: any) => {

        console.log(uppass);
        SetGetRate(uppass);
    }

    const getCurrencyRate2 = (uppass: any) => {

        console.log(uppass);
        // setSymbol(uppass);
    }
    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <GetCurrencies getCurrencyRate={getCurrencyRate} defaultUserID={defaultUserID} getCurrencyRate2={getCurrencyRate2} />
                    <div className="font-caps font-size-lg">
                        Here are your favorite books on sales!
                    </div>

                </div>
            </div>
            <div className="flexwrap justify">
                {books.map((book) => {

                    const {
                        bookId,
                        author,
                        bookCategory,
                        bookDescription,
                        bookName,
                        bookStockQuantity,
                        costUSD,
                        imgURL
                    } = book

                    const usdPrice = costUSD;


                    const convertedPrice = getRate ? (getRate * costUSD).toFixed(2) : "0";


                    function handleOrderButton(e: any) {
                        console.log(e);
                        setauthor2(author)
                        setnativeAmount2(convertedPrice)
                        setbookId2(bookId)
                        setuserID2(user.userId)
                        setuserID2(user.userId)
                        addOrder();
                    }


                    return (
                        <div className="padding1 col-sm3" key={bookId} style={{

                            width: "370px", height: "620px", border: "1px solid white",
                            margin: "5%",
                            fontSize: "1rem",
                            textAlign: "start",
                            lineHeight: "1.8rem"
                        }}>
                            <div className="" >

                                <div className="flex justify">
                                    <img src={imgURL} alt="book_image" style={{ minWidth: "310px", height: "310px" }} />
                                </div>
                                <div className="justify flex font-caps font-size-md">
                                    {bookName}
                                </div>
                                <div className="justify flex">
                                    <hr />
                                </div>

                                <div className="share-font">
                                    <strong>Author: </strong>      &nbsp; {author}
                                </div>
                                <div className="textoverflow share-font">
                                    <strong> Description: </strong>    &nbsp; {bookDescription}
                                </div>

                                <div className="share-font">
                                    <strong>Catagory:  </strong>   &nbsp; {bookCategory}
                                </div>
                                <div className="share-font">
                                    <strong>Quantity:  </strong>   &nbsp; {bookStockQuantity}
                                </div>

                                <div className="share-font">
                                    <strong> USD Price:</strong>     &nbsp;${usdPrice}

                                </div>
                                <div className="share-font">
                                    <strong>Converted Price: </strong>
                                    &nbsp; <strong style={{ color: "green" }}> {convertedPrice} </strong>
                                    &nbsp;
                                </div>
                                    <button className="btn btn-primary btn-sm float-right" onClick={handleOrderButton}>Add to Order</button>

                            </div>
                        </div>
                    )
                }
                )}
            </div>


        </div>
    )
}

export default GetBooks
