import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InventoryService from './InventoryService';

export default class CreateItemComponent extends Component {
  constructor(props) {
        super(props) 
        this.state = {
          name: '',
          categoryId: '',
          price: '',
          description: '',
          quantity: ''
        }   
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCatHandler = this.changeCatHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeDesHandler = this.changeDesHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem = (e) => {
      e.preventDefault();
      let item = {name: this.state.name, categoryId: this.state.categoryId, price: this.state.price,description: this.state.description, quantity: this.state.quantity}
      console.log('product => ' + JSON.stringify(item))

      InventoryService.createProduct(item).then(res =>{
        const { history } = this.props
        history.push("/")
      });
    }


    changeNameHandler = (event) => {
      this.setState({
        name: event.target.value
      });
    }

    changeCatHandler = (event) => {
      this.setState({
        categoryId: event.target.value
      });
    }

    changePriceHandler = (event) => {
      this.setState({
        price: event.target.value
      });
    }

    changeDesHandler = (event) => {
      this.setState({
        description: event.target.value
      });
    }

    changeQuantityHandler = (event) => {
      this.setState({
        quantity: event.target.value
      });
    }

    render() {
    return (
      <div>
        <div className='container fs-2 mt-5'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h1 className='text-center mt-3'>Add Item</h1>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Item Name: </label>
                    <input placeholder='Item Name' name='name' className='form-control fs-5 text'
                      value={this.state.name} onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Category Id</label>
                    <input placeholder='Category Id' name='categoryId' className='form-control fs-5 text'
                      value={this.state.categoryId} onChange={this.changeCatHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Price: </label>
                    <input placeholder='Item Price' name='price' className='form-control fs-5 text'
                      value={this.state.price} onChange={this.changePriceHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Quantity: </label>
                    <input placeholder='Item Quantity' name='quantity' className='form-control fs-5 text'
                      value={this.state.quantity} onChange={this.changeQuantityHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Description </label>
                    <textarea placeholder='Item Description' rows="4" cols="50" name='description' className='form-control fs-5 text'
                      value={this.state.description} onChange={this.changeDesHandler}
                    />
                  </div>

                  <button className='btn btn-success fs-4' onClick={this.saveItem}>Save</button>
                  <Link to='/'><button className='btn btn-danger fs-4'  
                    style={{marginLeft: '10px'}}>Cancel</button>
                  </Link>
                  
                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    )
  }
}

