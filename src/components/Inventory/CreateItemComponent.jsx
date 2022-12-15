import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InventoryService from './InventoryService';

export default class CreateItemComponent extends Component {
  constructor(props) {
        super(props) 
        this.state = {
          itemName: '',
          itemQuantity: ''
        }   
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem = (e) => {
      e.preventDefault();
      let item = { itemName: this.state.itemName, itemQuantity: this.state.itemQuantity}
      InventoryService.createItem(item).then (res => {
        this.props.history.push('/inventory')
      });
    }

    changeNameHandler = (event) => {
      this.setState({
        itemName: event.target.value
      });
    }

    changeQuantityHandler = (event) => {
      this.setState({
        itemQuantity: event.target.value
      });
    }

    cancel() {

      this.props.history.push('/inventory')
    }

    render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h1 className='text-center'>Add Item</h1>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Item Name: </label>
                    <input placeholder='Item Name' name='itemName' className='form-control fs-5 text'
                      value={this.state.itemName} onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Item Quantity: </label>
                    <input placeholder='Item Quantity' name='itemQuantity' className='form-control fs-5 text'
                      value={this.state.itemQuantity} onChange={this.changeQuantityHandler}
                    />
                  </div>

                  <button className='btn btn-success fs-4' onClick={this.saveItem}>Save</button>
                  <button className='btn btn-danger fs-4' 
                  onClick={this.cancel.bind(this)} 
                  style={{marginLeft: '10px'}}>Cancel</button>
                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    )
  }
}

