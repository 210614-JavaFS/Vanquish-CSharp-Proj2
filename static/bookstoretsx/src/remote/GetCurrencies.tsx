import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';
import { CurrencyRow } from '../views/CurrencyRow';


type Props = {

    defaultUserID: String,
    getCurrencyRate: (uppass: number) => void;
}

const GetCurrencies: React.FC<Props> = ({ getCurrencyRate, defaultUserID }) => {

    console.log(defaultUserID);
    const user = useSelector(selectUser);
    // user.currencyID
    const [currencies, setCurrencies] = useState([]);
    const [defaultCurrency, setDefaultCurrency] = useState<String>("USD");
    const [convertCurrency, setConvertCurrency] = useState(defaultUserID);
    const [rate, setRate] = useState({});
    const [fromCurrency, setFromCurrency] = useState("");

    const [defaultUserCurrency, setDefaultUserCurrency] = useState("");


    console.log(convertCurrency);
    console.log(fromCurrency);
    useEffect(() => {
        const URL = `https://free.currconv.com/api/v7/convert?q=USD_${convertCurrency}&compact=ultra&apiKey=`
        const URL1 = `https://free.currconv.com/api/v7/convert?q=USD_${convertCurrency},${convertCurrency}_USD&compact=ultra&apiKey= `;
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
                async function getCurrencyList() {

                    const response = await axios.get("https://free.currconv.com/api/v7/currencies?apiKey=c728cb6404e7db7045e9");
                    console.log(response);

                    if (response != null) {
                        let data2 = await response.data.results;
                        console.log(data2);


                        console.log(user);
                        console.log(data2[user.currencyID]);
                        const userSymbol = data2[user.currencyID].currencySymbol

                        const userDcurrency = data2[user.currencyID].currencyName;
                        console.log(userDcurrency);
                        setDefaultUserCurrency(userDcurrency);
                        // setSymbol(data2[user3.currencyID].currencyName)

                        // getCurrencySymbol(data2[user3.currencyID]);

                        // setCurrencyOptions(Object.keys(data2).map(function (key) {
                        //     return data2[key]
                        // }))
                    }
                }

                getCurrencyList()



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
        <CurrencyRow selectedCurrency={defaultUserCurrency} onChangeCurrency={(e: any) => setFromCurrency(e.target.value)} />
    </div>
    )
}

export default GetCurrencies
