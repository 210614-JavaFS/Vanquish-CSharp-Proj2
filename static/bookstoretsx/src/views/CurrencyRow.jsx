import React from 'react'

export const CurrencyRow = (props) => {
    const {
        currencies,
        selectedCurrency,
        onChangeCUrrency,
        // amount,
        onChangeAmount,
        value2
    } = props;


    return (
        <div>
            <input type="text" className="inputelement" value={"value2"} onChange={null} />

            {/* <select value={"selectedCurrency"} onChange={null}>

                {currencies.map((currenc) => {

                    return (<option key={currenc} value={currenc}>{currenc}</option>)
                })}

            </select> */}
        </div>
    )
}

// value={selectedCurrency}
// value={amount}