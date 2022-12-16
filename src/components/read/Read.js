import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const[apiData, setApiData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:8080/api/product/get-all`).
      then((getData) => {
        setApiData(getData.data)
      })
    }, [])

    const setData = (id, name, categoryId, price, description, quantity) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('name', name)
        localStorage.setItem('categoryId', categoryId)
        localStorage.setItem('price', price)
        localStorage.setItem('description', description)
        localStorage.setItem('quantity', quantity)
    }

    const getData = () => {
        axios.get(`http://localhost:8080/api/product/get-all`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/api/product/delete-product/${id}`)
        .then(() => {
            getData();
        })
    }
  return (
    <div className='container fs-4'>
        <h1 className='text-center'>Inventory Table</h1>
        <table class="table table-striped mt-4">
            <thead>
                <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Category Id</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
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
                            <td>
                                <Link to='/upgrade'>
                                    <button className='btn btn-success' onClick={() => setData(data.id, data.name, data.categoryId, data.price, data.description, data.quantity)}>Update</button>
                                </Link>
                            </td>
                                
                            <td>
                                <Link to='/delete'>
                                <button className='btn btn-danger' onClick={() => onDelete}>Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        <Link to='/create'><button className='btn btn-primary fs-4'>Add Item</button></Link>
    </div>
  )
}

export default Read