import React from 'react';
import { CurrencyRow } from '../views/CurrencyRow';

export const CurrencyConverter = (): JSX.Element => {

    return (
        <div className="textalign margintop">
            <h2>Convert:</h2>
            <div className="margintop1">
                <CurrencyRow
                    value2={"first"}
                // currencies={currencies}
                // selectedCurrency={fromCurrency}
                // onChangeCUrrency={e => setFromCurrency(e.target.value)}
                // amount={fromAmount}
                // onChangeAmount={handleFromAmountChnage}
                />

            </div>
            <div className="margintop equals">
                <button className="btn btn-primary" >Convert</button>    =
            </div>
            <div className="margintop">
                <CurrencyRow
                    value2={"second"}
                // currencies={currencies}
                // selectedCurrency={toCurrency}
                // onChangeCUrrency={e => setToCurrency(e.target.value)}
                // amount={toAmount}
                // onChangeAmount={handleToAmountChnage}
                />
            </div>
        </div>

    )

}