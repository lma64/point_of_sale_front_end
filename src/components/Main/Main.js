import React from 'react'
import Navme from '../Nav/Navme'
import tableimage from '../../assets/table.png'
import "./Main.css";
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Navme/>
      <div class="container">
        <h1>What table are you currently serving?</h1>
        <div class="row row1">
          <div class="col-sm">
          <Link to = "/table1"><img className='pointer' src={tableimage} width="100"/></Link><br></br>
            <span className='tnb'>Table 1</span>
          </div>
          <div class="col-sm">
            <img className='pointer' src={tableimage} width="100"/><br></br>
            <span className='tnb'>Table 2</span>
          </div>
          <div class="col-sm">
            <img className='pointer' src={tableimage} width="100"/><br></br>
            <span className='tnb'>Table 3</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <img className='pointer' src={tableimage} width="100"/><br></br>
            <span className='tnb'>Table 4</span>
          </div>
          <div class="col-sm">
            <img className='pointer' src={tableimage} width="100"/><br></br>
            <span className='tnb'>Table 5</span>
          </div>
          <div class="col-sm">
            <img className='pointer' src={tableimage} width="100"/><br></br>
            <span className='tnb'>Table 6</span>
          </div>
        </div>
      </div>
      <Link to = "/"><button type="button" class="btn ms-2 btn-primary btn-me">Logout</button></Link>
    </div>
  )
}
