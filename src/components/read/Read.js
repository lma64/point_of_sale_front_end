import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Read = () => {
    const[apiData, setApiData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/api/product/get-all").
      then((getData) => {
        setApiData(getData.data)
      })
    })
  return (
    <div className='container fs-4'>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Category Id</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {apiData.map((data) => {
                    return (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.categoryId}</td>
                            <td>{data.price}</td>
                            <td>{data.quantity}</td>
                            <td>{data.quantity}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default Read