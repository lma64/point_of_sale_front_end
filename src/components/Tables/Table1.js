import React, { useState } from 'react'
import "./Table.css"
import Starters from '../Food/Starters'
import Navme from '../Nav/Navme'
import Beverages from '../Food/Beverages'

function Table1() {

  const [isbtn1active, setbtn1Active] = useState(true);
  const [isbtn2active, setbtn2Active] = useState(false);
  const [isbtn3active, setbtn3Active] = useState(false);
  const [isbtn4active, setbtn4Active] = useState(false);
  const [isbtn5active, setbtn5Active] = useState(false);

  const [isStater, setStarter] = useState(true)
  const showStarter = () => {
    if (!isStater) {
      setbtn1Active(true)
      setStarter(true)

      setBev(false)
      setbtn2Active(false)

      setbtn3Active(false)
      setSnacks(false)

      setbtn4Active(false)
      setWine(false)

      setbtn5Active(false)
      setDesert(false)
    }
  }

    const [isBev, setBev] = useState(false)
    const showBev = () => {
      if (!isBev) {
        setbtn1Active(false)
        setStarter(false)

        setbtn2Active(true)
        setBev(true)

        setbtn3Active(false)
        setSnacks(false)

        setbtn4Active(false)
        setWine(false)

        setbtn5Active(false)
        setDesert(false)
      }
    }

    const [isSnacks, setSnacks] = useState(false)
    const showSnacks = () => {
      if (!isSnacks) {
        setbtn3Active(true)
        setSnacks(true)

        setbtn1Active(false)
        setStarter(false)
        
        setbtn2Active(false)
        setBev(false)

        setbtn4Active(false)
        setWine(false)

        setbtn5Active(false)
        setDesert(false)
      }
    }

    const [isWine, setWine] = useState(false)
    const showWine = () => {
      if (!isWine) {
        setbtn4Active(true)
        setWine(true)
        
        setbtn3Active(false)
        setSnacks(false)

        setbtn1Active(false)
        setStarter(false)
        
        setbtn2Active(false)
        setBev(false)

        setbtn5Active(false)
        setDesert(false)
      }
    }

    const [isDesert, setDesert] = useState(false)
    const showDesert = () => {
      if (!isDesert) {
        setbtn5Active(true)
        setDesert(true)

        setbtn4Active(false)
        setWine(false)
        
        setbtn3Active(false)
        setSnacks(false)

        setbtn1Active(false)
        setStarter(false)
        
        setbtn2Active(false)
        setBev(false)
      }
    }


  return (
    <div>
        <Navme/>
        <div class="coco container">
            <div class="row">
                <div class="first-c col-8">
                    <div className='search-bar'>
                        <input type='text' placeholder='search'/>
                    </div>
                    <div className='bt-list'>
                        <button className= {isbtn1active ? 'bt btn-clicked' : 'bt btn-notclicked'} onClick={showStarter}>Appetizers</button>
                        <button className= {isbtn2active ? 'bt btn-clicked' : 'bt btn-notclicked'} onClick={showBev}>Beverages</button>
                        <button className= {isbtn3active ? 'bt btn-clicked' : 'bt btn-notclicked'} onClick={showSnacks}>Snacks</button>
                        <button className= {isbtn4active ? 'bt btn-clicked' : 'bt btn-notclicked'} onClick={showWine}>Wine</button>
                        <button className= {isbtn5active ? 'bt btn-clicked' : 'bt btn-notclicked'} onClick={showDesert}>Desert</button>
                    </div>
                    <div class="co">
                      {isStater && <Starters/>}
                      {isBev && <Beverages/>}
                    </div>
                </div>
                <div class="sec-c col-4">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table1