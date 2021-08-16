import axios from 'axios';
import React, { useEffect, useState } from 'react'
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

export const CurrencyRow: React.FC<Props> = (props) => {
    const {
        currencies,
        selectedCurrency,
        onChangeCUrrency,
        // amount,
        onChangeAmount,
        value2,
        id,
        currencyName,
        user3,
        onChangeCurrency,
        symbol,
        currencyOption,
        selectCurrency


    } = props;

    // const [currencyOption, setCurrencyOptions] = useState([]);
    // const [symbol, setSymbol] = useState("");


    // useEffect(() => {
    //     async function getCurrencyList() {

    //         const response = await axios.get("https://free.currconv.com/api/v7/currencies?apiKey=c728cb6404e7db7045e9");
    //         console.log(response);

    //         if (response != null) {
    //             let data = await response.data.results;
    //             console.log(data[user3.currencyID]);
    //             setSymbol(data[user3.currencyID])
    //             setCurrencyOptions(Object.keys(data).map(function (key) {
    //                 return data[key]
    //             }))
    //         }
    //     }
    //     console.log(currencyOption);

    //     getCurrencyList();

    //     return () => {

    //     }
    // }, [])

    // const onChangeCurrency = (e) => {

    // }


    console.log(selectCurrency);

    console.log(user3.currencyID);
    return (
        <div className="flex " style={{ justifyContent: "flex-end" }}>
            <div className="">
                <h3>Currency List</h3>

                {/* value={selectCurrency} */}
                <select style={{ width: "300px" }} onChange={onChangeCurrency}>

                    {currencyOption.map((option) => {
                        const {
                            currencyName,
                            id
                        } = option
                        return (<option className="" key={id} value={currencyName}>
                            {currencyName}
                        </option>)
                    })}


                </select>
            </div>

        </div>
    )
}

// value={selectedCurrency}
// value={amount}