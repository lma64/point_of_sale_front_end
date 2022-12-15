import React from 'react';
import '../Nav/Navme.css';
import { Link } from 'react-router-dom';

const Navme = () => {
  return (
    <div className='na'>
      <div className='account'>
        <div class="container">
          <i class="i-user pointer fas fa-user"></i>
          <Link to = "/profile"><button class="btn btn-nav">VENDOR</button></Link>
        </div>
      </div>

    </div>
  )
}

export default Navme