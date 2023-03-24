import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Home from '../header/Home';
import Main from '../main/Main';
import './Payment.css'

function Paymen() {
    const [id, setId] = useState(0)
    let num = JSON.parse(window.localStorage.getItem('ARR1'))
  return (
    <>
    <Home/>
    <Main/>
    <div className='payment'>
        <div className='payment__inner'>
            <h2>Payment</h2>
            <p>3 payment method available</p>
        </div>
        <div className='payment__pay'>
            <h4>Payment Method</h4>
            <ul className='payment__list'>
                <button id='0' onClick={(e)=>setId(e.target.id)} className={id == '0'? 'payment__active' : ''}>
                    <i id='0' className="bi bi-credit-card"></i>
                    <p id='0'>Credit Card</p>
                </button>
                <button id='1' onClick={(e)=>setId(e.target.id)} className={id == '1'? 'payment__active' : ''}>
                    <i id='1' className="bi bi-paypal"></i>
                    <p id='1'>Paypal</p>
                </button>
                <button id='2' onClick={(e)=>setId(e.target.id)} className={id == '2'? 'payment__active' : ''}>
                    <i id='2' className="bi bi-cash"></i>
                    <p id='2'>Cash</p>
                </button>
            </ul>
        </div>
        
        <div className='payment__input'>
            <div className='payment__name'>
                <label htmlFor="name">Cardholder Name</label>
                <input type="text" id="name" placeholder='Levi Ackerman'/>
            </div>
            <div className='payment__name'>
                <label htmlFor="name1">Card Number</label>
                <input type="number" id="name1" placeholder='2564 1421 0897 1244'/>
            </div>
            <div className='payment__name name__list'>
                <div className='name__inner'>
                    <label htmlFor="name2">Expiration Date</label>
                    <input type="text" id='name2' placeholder='02/2022'/>
                </div>
                <div className='name__inner name__parol'>
                    <label htmlFor="name3">CVV</label>
                    <input type="password" id='name3' placeholder='123'/>
                </div>
            </div>
        </div>

        <div className='payment__name name__list'>
                <div className='name__inner'>
                    <label htmlFor="name2">Expiration Date</label>
                    <select>
                        <option>Dine In</option>
                        <option>To Go</option>
                        <option>Delivery</option>
                    </select>
                </div>
                <div className='name__inner name__parol'>
                    <label htmlFor="name3">Table no.</label>
                    <input type="number" id='name3' placeholder={num}/>
                </div>
        </div>
        
        <div className='flex payment__footer'>
            <Link to='/home'>
                <button className='cancel'>Cancel</button>
            </Link>
            <Link to='/home'>
                <button className='confirm'>Confirm Payment</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Paymen