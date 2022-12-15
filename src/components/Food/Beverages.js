import React, { useState } from 'react'
import '../Food/Food.css';
import moscow from '../../assets/beverages/k_Photo_Recipes_2019-12-How-to-Moscow-Mule_HT-Moscow-Mule_049.jpg'
import tinto from '../../assets/beverages/Tinto-de-verano-1260-Blog-500x500.jpg'
import ayran from '../../assets/beverages/Turkish-Ayran-photography.jpg'
import coffee from '../../assets/beverages/ezgif-5-f5ea48fbe1.webp'
import irish from '../../assets/beverages/irish-coffee-14-1200.jpg'
import mai from '../../assets/beverages/mai-tai-720x720-primary-e09e24f1cacd4b3896f5aa32ba51dcdd.jpg'
import limon from '../../assets/beverages/limoncello-lemon-flavored-liqueur_1200x800.jpg'
import tea from '../../assets/beverages/peppermint-f662d6e.jpg'


const Beverages = () => {
    const [isClicked1, setClicked1] = useState(false)
    const [isClicked2, setClicked2] = useState(false)
    const [isClicked3, setClicked3] = useState(false)
    const [isClicked4, setClicked4] = useState(false)
    const [isClicked5, setClicked5] = useState(false)
    const [isClicked6, setClicked6] = useState(false)
    const [isClicked7, setClicked7] = useState(false)
    const [isClicked8, setClicked8] = useState(false)

    const showClicked = event => {
    if (event.currentTarget.id == 'first') {
        setClicked1(true)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'second') {
        setClicked1(false)
        setClicked2(true)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'third') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(true)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'fourth') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(true)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'five') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(true)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'six') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(true)
        setClicked7(false)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'seven') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(true)
        setClicked8(false)
    }
    else if (event.currentTarget.id == 'eight') {
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(true)
    }
  }
  return (
    <div>
    <div class="row">
        <div class="col-sm">
            <div className={isClicked1 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="first" onClick={showClicked}>
                <div className='price-tag'>5.00$</div>
                <img src={moscow} width='140px'/>
                <br></br>
                <span className='item-name'>Moscow Mule</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked2 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="second" onClick={showClicked}>
                <div className='price-tag'>9.99$</div>
                <img src={tinto} width='140px'/>
                <br></br>
                <span>Tinto De Verano</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked3 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="third" onClick={showClicked}>
                <div className='price-tag'>1.50$</div>
                <img src={ayran} width='140px'/>
                <br></br>
                <span>Ayran Yogurt</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked4 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="fourth" onClick={showClicked}>
                <div className='price-tag'>2.40$</div>
                <img src={coffee} width='140px'/>
                <br></br>
                <span>Caffe Americano</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
            <div className={isClicked5 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="five" onClick={showClicked}>
                <div className='price-tag'>6.66$</div>
                <img src={irish} width='140px'/>
                <br></br>
                <span>Irish Coffee</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked6 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="six" onClick={showClicked}>
                <div className='price-tag'>15.30$</div>
                <img src={mai} width='140px'/>
                <br></br>
                <span>Mai Tai</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked7 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="seven" onClick={showClicked}>
                <div className='price-tag'>10.33$</div>
                <img src={limon} width='140px'/>
                <br></br>
                <span>Limoncello</span>
            </div>
        </div>
        <div class="col-sm">
            <div className={isClicked8 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="eight" onClick={showClicked}>
                <div className='price-tag'>9.30$</div>
                <img src={tea} width='140px'/>
                <br></br>
                <span>Mint Tea</span>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default Beverages