import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Upgrade = () => {
    const[name, setitemName] = useState('')
    const[categoryId, setCat] = useState('')
    const[price, setPrice] = useState('')
    const[description, setDes] = useState('')
    const[quantity, setQuant] = useState('')
    const[id, setID] = useState(null)

    const sendDataToApi = () => {
        axios.put("http://localhost:8080/api/product/update-product", + '/' + id, {
            name,
            categoryId,
            price,
            description,
            quantity
        })

        alert("your product has been added")
    }

    useEffect(() => {
        setitemName(localStorage.getItem('name'))
        setCat(localStorage.getItem('categoryId'))
        setPrice(localStorage.getItem('price'))
        setDes(localStorage.getItem('description'))
        setQuant(localStorage.getItem('quantity'))
        setID(localStorage.getItem('id'))
    }, [])
  return (
    <div className='cont fs-4'>
        <h1 className='text-center'>Update Product</h1>
        <div className='row'>
            <div className='col-6 mt-4'>
                <label>Name:</label>
                <br></br>
                <input 
                    value={name}
                    name='name' 
                    placeholder='Item Name' 
                    onChange={(e) => setitemName(e.target.value)}
                />
            </div>
        </div>
        <div className='row'>
            <div className='col-6 mt-4'>
            <label>Category Id:</label><br></br>
            <input 
                value={categoryId}
                name='cat'
                placeholder='Category ID'
                onChange={(e) => setCat(e.target.value)}
            />
            </div>
        </div>
        <div className='row'>
            <div className='col-6 mt-4'>
            <label>Price:</label><br></br>
            <input 
                name='price'
                value = {price}
                placeholder='Item Price'
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
        </div>
        <div className='row'>
            <div className='col-6 mt-4'>
            <label>Quantity:</label><br></br>
            <input 
                value={quantity}
                name='quantity'
                placeholder='Item Quantity'
                onChange={(e) => setQuant(e.target.value)}
            />
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col-6'>
            <label>Description</label><br></br>
            <textarea 
                value={description}
                name="des" 
                rows="4" cols="50" 
                placeholder='Item Description'
                onChange={(e) => setDes(e.target.value)}
            ></textarea>
            </div>
        </div>
        <br></br>
        <button className='btn btn-primary fs-4' type='submit' onClick={sendDataToApi}>Update</button>
        <Link to='/'><button className='btn btn-danger ml-2 fs-4'>Cancel</button></Link>
    </div>
  )
}

export default Upgrade