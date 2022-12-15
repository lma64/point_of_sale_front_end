import React, { useState } from 'react'
import '../Food/Food.css';
import parmesan from '../../assets/starters/Chicken-Parmesan-Slider-Bake_EXPS_MTCBBZ17_204498_D03_01_3b-4.jpg'
import proscuitto from '../../assets/starters/Fried-Prosciutto-Tortellini_EXPS_THN16_196633_C06_16_1b-5.jpg'
import board from '../../assets/starters/Fruit-Charcuterie-Board_EXPS_JMZ18_224813_C03_07_8b-14.jpg'
import tomato from '../../assets/starters/Grilled-Tomato-Peach-Pizza_EXPS_HC17_142137_D07_29_4b-7.jpg'
import ham from '../../assets/starters/Ham-n-Cheese-Biscuit-Stacks_EXPS_HC17_31947_D10_19_8b-2.jpg'
import artichocke from '../../assets/starters/Hot-Artichoke-Spinach-Dip_EXPS_DIYD21_26044_E-MK08_24_1b-1.jpg'
import glazed from '../../assets/starters/Orange-Glazed-Meatballs_EXPS_THSO18_228881_D04_19_9b-1.jpg'
import sausage from '../../assets/starters/Tuscan-Sausage-Bean-Dip_EXPS_THCSF16_157522_A06_01_4b-13.jpg'

export default function Starters() {

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
                    <div className='price-tag'>13.30$</div>
                    <img className='food-img' src={parmesan} width='140px'/>
                    <br></br>
                    <span className='item-name'>Chicken Parmesan Slider Bake</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked2 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="second" onClick={showClicked}>
                    <div className='price-tag'>9.99$</div>
                    <img src={proscuitto} width='140px'/>
                    <br></br>
                    <span>Fried Prosciutto Tortellini</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked3 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="third" onClick={showClicked}>
                    <div className='price-tag'>5.76$</div>
                    <img src={board} width='140px'/>
                    <br></br>
                    <span>Fruit Charcuterie Board</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked4 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="fourth" onClick={showClicked}>
                    <div className='price-tag'>15.40$</div>
                    <img src={tomato} width='140px'/>
                    <br></br>
                    <span>Grilled Tomato-Peach Pizza</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <div className={isClicked5 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="five" onClick={showClicked}>
                    <div className='price-tag'>6.66$</div>
                    <img src={ham} width='140px'/>
                    <br></br>
                    <span>Ham 'n' Cheese Biscuit Stacks</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked6 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="six" onClick={showClicked}>
                    <div className='price-tag'>5.30$</div>
                    <img src={artichocke} width='140px'/>
                    <br></br>
                    <span>Hot Spinach Artichoke Dip</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked7 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="seven" onClick={showClicked}>
                    <div className='price-tag'>10.33$</div>
                    <img src={glazed} width='140px'/>
                    <br></br>
                    <span>Orange-Glazed Meatballs</span>
                </div>
            </div>
            <div class="col-sm">
                <div className={isClicked8 ? 'item pointer item-clicked' : 'item pointer item-notclicked'} id="eight" onClick={showClicked}>
                    <div className='price-tag'>9.30$</div>
                    <img src={sausage} width='140px'/>
                    <br></br>
                    <span>Tuscan Sausage & Bean Dip</span>
                </div>
            </div>
        </div> 
    </div>
  )
}
