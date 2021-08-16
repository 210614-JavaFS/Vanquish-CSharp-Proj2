import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';


type Props = {

    getCurrencyRate: (uppass: number) => void;
}

const GetCurrencies: React.FC<Props> = ({ getCurrencyRate }) => {

    const user = useSelector(selectUser);

    const [currencies, setCurrencies] = useState([]);
    const [defaultCurrency, setDefaultCurrency] = useState<string>("USD_");
    const [converyCurrency, setConvertCurrency] = useState<string>(user.currencyID);
    const [rate, setRate] = useState({});




    useEffect(() => {
        const URL = `https://free.currconv.com/api/v7/convert?q=USD_${converyCurrency}&compact=ultra&apiKey=`
        const URL1 = `https://free.currconv.com/api/v7/convert?q=USD_${converyCurrency},${converyCurrency}_USD&compact=ultra&apiKey= `;
        const URL2 = "https://free.currconv.com/api/v7/currencies?apiKey=";
        const URL3 = "https://free.currconv.com/api/v7/countries?apiKey=";
        const KEY = "c728cb6404e7db7045e9"
        let source = axios.CancelToken.source();
        console.log(user);
        try {
            const getCurriencies = async () => {
                const response = await axios.get(URL2 + KEY, {
                    cancelToken: source.token
                });
                const data = await response;
                console.log(data.data.results);
                console.log(data);

            }
            getCurriencies();
        } catch (error) {
            console.log(error);
        }


        try {
            const convertCurrency = async () => {
                const response2 = await axios.get(URL + KEY);
                const data = await response2.data;
                console.log(data.data);
                console.log(response2.data);
                setRate(Object.keys(data).map(function (key) {
                    getCurrencyRate(data[key]);
                    return data[key]
                }))

                // for(key in data) {
                //     if(data.hasOwnProperty(key)) {
                //         let value = data[key];
                //         setRate(value)
                //     }
                // }

            }
            convertCurrency();

        }

        catch (error) {
            console.log(error);
        }

        return () => {
            console.log("Cancelling api call");
            source.cancel();
        }
    }, [])
    console.log(rate);

    return (<div>
    </div>
    )
}

export default GetCurrencies
