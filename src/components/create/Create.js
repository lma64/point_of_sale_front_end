import React, { useState } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios'

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
    <Form>
        <Form.Field>
            <label>Name:</label>
            <input 
                name='name' 
                placeholder='Item Name' 
                onChange={(e) => setitemName(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Category Id:</label>
            <input 
                name='cat'
                placeholder='Category ID'
                onChange={(e) => setCat(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Price:</label>
            <input 
                name='price'
                placeholder='Item Price'
                onChange={(e) => setPrice(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Quantity:</label>
            <input 
                name='quantity'
                placeholder='Item Quantity'
                onChange={(e) => setQuant(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Description</label>
            <textarea 
                name="des" 
                rows="4" cols="50" 
                placeholder='Item Description'
                onChange={(e) => setDes(e.target.value)}
            >

            </textarea>
        </Form.Field>
        <Button type='submit' onClick={sendDataToApi}>Submit</Button>
    </Form>
  )
}

export default Create