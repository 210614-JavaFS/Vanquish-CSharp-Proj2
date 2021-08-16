import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
// interface User {
//     userId: number,
//     username: string,
//     userEmail: string,
//     userPassword: string,
//     firstName: string,
//     lastName: string,
//     currencyID: string,
//     address: string,
//     userRole: string
// }

// type Props = {
//     getRate: number,
//     user3: User
// }

export const CurrencyRow = (props) => {
    const user = useSelector(selectUser);
    const {
        // currencies,
        selectedCurrency,
        // onChangeCUrrency,
        // amount,
        // onChangeAmount,
        value2,
        id,
        currencyName,
        user3,
        onChangeCurrency,
        symbol,
        setConvertCurrency,
        defaultUserCurrency,
        setFromCurrency

    } = props;

    const [currencyOptions, setCurrencyOptions] = useState([]);
    // const [symbol, setSymbol] = useState("");


    useEffect(() => {
        async function getCurrencyList() {
            const response = await axios.get("https://prepaid.currconv.com/api/v7/currencies?apiKey=pr_4824fc0563d9440788473967ed6f8fd0");

            // const response = await axios.get("https://free.currconv.com/api/v7/countries?apiKey=c728cb6404e7db7045e9");
            console.log(response);

            // if (response != null) {
            let data = await response.data.results;
            // console.log(data[user3.currencyID]);
            // setSymbol(data[user3.currencyID])
            setCurrencyOptions(Object.keys(data).map(function (key) {
                return data[key]
            }))
            // }
        }
        currencyOptions ? console.log(currencyOptions) : console.log("");;

        getCurrencyList();

        return () => {


        }
    }, [])

    // const onChangeCurrency = (e) => {

    // }

    console.log(selectedCurrency);



    return (
        <div className="flex " style={{ justifyContent: "flex-end" }}>
            <div className="">
                <h3>Currency List</h3>
                {/* value={selectedCurrency} */}
                <select style={{ width: "300px" }} value={defaultUserCurrency} onChange={onChangeCurrency}  >

                    {currencyOptions.map((option) => {
                        const {
                            currencyName,
                            id
                        } = option
                        return (<option className="" key={id} value={id}>
                            {currencyName}
                        </option>)
                    })}

                </select>
                <div className="flex justifyend">
                    <button onClick={onChangeCurrency}>Convert</button>
                </div>
            </div>

        </div>
    )
}

// value={selectedCurrency}
// value={amount}