import React, { Component } from 'react'
import InventoryService from './InventoryService'
import { Link } from 'react-router-dom'

export default class ListInventoryComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        InventoryService.getInventory().then ((res) => {
            this.setState({ products: res.data })
        });
    }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Inventory List</h1>
        <br></br>
        <div className='row'>
            <div className='col'>
               <Link to='/add-inventory'><button className='btn btn-primary fs-4'>Add Item</button></Link>
            </div>

        </div>
        <div className='row'> 
            <table className='table table-striped table-bordered fs-4'>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Category Id</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map(
                            product => 
                            <tr key = {product.Id}>
                                <td>{product.name}</td>
                                <td>{product.categoryId}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table> 
        </div>
      </div>
    )
  }
}
