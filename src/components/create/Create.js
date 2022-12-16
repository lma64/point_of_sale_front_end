import React, { useState } from 'react'
import axios from 'axios'
import '../create/Create.css'

const Create = () => {
    const[itemName, setitemName] = useState('')
    const[itemCat, setCat] = useState('')
    const[itemPrice, setPrice] = useState('')
    const[itemDes, setDes] = useState('')
    const[itemQuant, setQuant] = useState('')

    console.log(itemName)

    const sendDataToApi = () => {
        axios.post("http://localhost:8080/api/product/add-product", {
            itemName,
            itemCat,
            itemPrice,
            itemDes,
            itemQuant
        })
    }
  return (
    <div className='cont fs-4'>
        <div className='row'>
            <div className='col-6 mt-4'>
                <label>Name:</label>
                <br></br>
                <input 
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
                placeholder='Item Price'
                onChange={(e) => setPrice(e.target.value)}
            />
            </div>
        </div>
        <div className='row'>
            <div className='col-6 mt-4'>
            <label>Quantity:</label><br></br>
            <input 
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
                name="des" 
                rows="4" cols="50" 
                placeholder='Item Description'
                onChange={(e) => setDes(e.target.value)}
            >

            </textarea>
            </div>
        </div>
        <br></br>
        <button className='btn btn-primary fs-4' type='submit' onClick={sendDataToApi}>Submit</button>
    </div>
  )
}

export default Create