import React from 'react';
import '../Profile/Profile.css';
import { Link } from 'react-router-dom';

export const Profile = () => {

  return (
    <div class="container">
        <div class="row">
            <div class="first col-3">
                <i class="icon-user fas fa-user"></i>
                <div>
                    <span className='bold'>Name: </span> <br></br>
                    <span>Laena Awad</span>
                    <br></br>

                    <span className='bold'>Job Position: </span> <br></br>
                    <span>Waiter</span>
                    <br></br>

                    <span className='bold'>ID: </span> <br></br>
                    <span>202002598</span>
                    <br></br>

                    <span className='bold'>Email: </span> <br></br>
                    <span>lma64@mail.aub.edu</span>
                    <br></br>

                    <span className='bold'>Phone Number: </span> <br></br>
                    <span>0123454</span>
                    <br></br>

                    <span className='bold'>Location: </span> <br></br>
                    <span>Beirut, Hamra</span>
                    <br></br>
                </div>
            </div>
            <div class="col-1">
                <div>
                </div>
            </div>
            <div class="second col-7">
                <h1>Account Settings</h1>
                <hr></hr>
                <div class="container1">
                    <div class="row">
                        <div class='col'>
                            <label for="fname">First Name</label><br></br>
                            <input type="text" id="fname" name="fname"/><br></br>
                            <br></br>

                            <label for="number">Phone Number</label><br></br>
                            <input type="text" id="number" name="number"/><br></br>
                            <br></br>

                            <label for="city">City</label><br></br>
                            <select id="city" name="cars" className='dropdown'>
                                <option value="beirut">Beirut</option>
                                <option value="byblos">Byblos</option>
                                <option value="batroun">Batroun</option>
                                <option value="tyre">Tyre</option>
                            </select>
                            <br></br>

                        </div>
                        <div class='col'>
                            <label for="lname">Last Name</label><br></br>
                            <input type="text" id="lname" name="lname"/><br></br>
                            <br></br>

                            <label for="email">Email Adress</label><br></br>
                            <input type="email" id="email" name="email"/><br></br>
                            <br></br>

                            <label for="street">Street</label><br></br>
                            <select id="street" name="street" className='dropdown'>
                                <option value="hamra">Hamra</option>
                                <option value="saida">saida</option>
                                <option value="sour">sour</option>
                                <option value="jbeil">jbeil</option>
                            </select>
                            <br></br>
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="button" class="btn btn-primary btn-me">update</button>
                <br></br>
            </div>
        </div>
        <Link to = "/main"><button type="button" class="btn btn-primary btn-me">Back to Main</button></Link>
        <Link to = "/"><button type="button" class="btn ms-2 btn-primary btn-me">Logout</button></Link>
    </div>
    )
}
