import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';
import { CurrencyRow } from '../views/CurrencyRow';


type Props = {

    defaultUserID: String,
    getCurrencyRate: (uppass: number) => void;
    getCurrencyRate2: (uppass: String) => void;
}

const GetCurrencies: React.FC<Props> = ({ getCurrencyRate, defaultUserID, getCurrencyRate2 }) => {

    function textx() {
        return fromCurrency != null ? fromCurrency : defaultUserID;
    }
    console.log(defaultUserID);
    const user = useSelector(selectUser);
    // user.currencyID
    const [fromCurrency, setFromCurrency] = useState(defaultUserID);
    const [currencies, setCurrencies] = useState([]);
    let [test, setTest] = useState(textx);
    const [defaultCurrency, setDefaultCurrency] = useState<String>("USD");
    const [convertCurrency, setConvertCurrency] = useState(fromCurrency);
    const [rate, setRate] = useState({});

    const [defaultUserCurrency, setDefaultUserCurrency] = useState("");


    console.log(convertCurrency);
    getCurrencyRate2(convertCurrency);
    // const URL = `https://free.currconv.com/api/v7/convert?q=USD_${convertCurrency}&compact=ultra&apiKey=`
    // const URL = `https://free.currconv.com/api/v7/convert?q=USD_${convertCurrency}&compact=ultra&apiKey=`
    // const KEY = "c728cb6404e7db7045e9"
    const URL = `https://prepaid.currconv.com/api/v7/convert?q=USD_${convertCurrency}&compact=ultra&apiKey=`
    const KEY = "pr_4824fc0563d9440788473967ed6f8fd0"
    useEffect(() => {




        const URL1 = `https://free.currconv.com/api/v7/convert?q=USD_${convertCurrency},${convertCurrency}_USD&compact=ultra&apiKey= `;
        const URL2 = "https://prepaid.currconv.com/api/v7/currencies?apiKey=";
        const URL3 = "https://free.currconv.com/api/v7/countries?apiKey=";



        let source = axios.CancelToken.source();

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



    const convertCurrency2 = async () => {
        const response2 = await axios.get(URL + KEY);
        const data = await response2.data;
        console.log(data.data);
        console.log(response2.data);

        setRate(Object.keys(data).map(function (key) {
            getCurrencyRate(data[key]);
            return data[key]
        }))
    }
    async function getCurrencyList2() {

        const response = await axios.get("https://free.currconv.com/api/v7/currencies?apiKey=c728cb6404e7db7045e9");
        console.log(response);

        if (response != null) {
            let data2 = await response.data.results;
            console.log(data2);
            let a: any = convertCurrency
            const userSymbol = data2[a]

            const userDcurrency = data2[user.currencyID].id;
            console.log(userDcurrency);
            setDefaultUserCurrency(userDcurrency);
            const s = (data2[user.currencyID])

            console.log(s);
        }
    }

    function handleChange(e: any) {
        setConvertCurrency(e.target.value)
        // setFromCurrency(e.target.value)
        callConverter();
    }

    function callConverter() {
        convertCurrency2();
        // getCurrencyList2();
    }


    return (<div>
        <CurrencyRow selectedCurrency={defaultUserCurrency} onChangeCurrency={handleChange} />
    </div>
    )
}
export default GetCurrencies
