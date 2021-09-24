import React, {useState} from 'react'

const Screen2 = () => {

    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('resultArr')));
    console.log(arr)
    

    return (
        <div>
            <h2>Updated Stock List</h2>
            
            <table>
            <tr>
              <th>ProductID</th>
              <th>ProductName</th>
              <th>Price</th>
              <th>SellerName</th>
              <th>Quantity</th>
            </tr>
          
              {
                arr.map((item)=>{
                return(
                <tr>
                  <td>{item.value}</td>
                  <td>{item.label}</td>
                  <td>{item.price}</td>
                  <td>{item.owner}</td>
                  <td>{item.quantity}</td>
                </tr>
                )
              })}
          </table>
        </div>
    )
}

export default Screen2
