import React from "react"

function StockData({ stockdata }) {

    const DisplayData = Object.entries(stockdata).map(([key, value]) => {

        return (

            <tr>
                <th>{key}</th>
                <td>{value.toString()}</td>
            </tr>


        )

    })
 
    return (
        <table class="table table-striped">
            {DisplayData}
        </table>
    )
}

export default StockData