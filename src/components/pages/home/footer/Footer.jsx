import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context'
import Home from '../header/Home'
import Main from '../main/Main'
import './Footer.css'

function Footer() {
  let num = JSON.parse(window.localStorage.getItem('ARR1'))
  const [count, setCount] = useState(num)
  window.localStorage.setItem('ARR1', JSON.stringify(count))

  const {order, setOrder} = useContext(Context)
  const {som, setSon} = useContext(Context)
  const {suv} = useContext(Context)
  const arr = ['Dine In', 'To Go','Delivery']


  const removeElement = (inx) => {
    const newOrder = order.filter((_, i) => i !== inx)
    setOrder(newOrder)
  }
  const removeElementt = (inx) => {
    const newOrder = order.filter((_, i) => i > inx)
    setOrder(newOrder)
  }



  return (
    <>
    <Home/>
    <Main/>
    <div className='containeer'>
      <div className="footer">
        <div>
          <h3>Orders #{num}</h3>
          <ul className='footer__list'>
            {
              arr?.map((e,i)=>(
                <li key={i} className={suv === e? 'activee' :''}>{e}</li>
              ))
            }
          </ul>
        </div>
        <div className='flex'>
          <h5>Item</h5>
          <div className='flex price'>
            <h5>QTY</h5>
            <h5>Price</h5>
          </div>
        </div>
        <div className='footer__inner'>
          {
            order?.map((e,i)=>(
              <li key={i} className='footer__items'>
                <div className='flex'>
                  <div className='flex footer__icon'>
                    <div className='flex icons'>
                      <img src={e.img} alt="icon" />
                      <span>
                        <b>{e.title}</b>
                        <p>${e.price}</p>
                      </span>
                    <p className='num1'>{e.number}</p>
                    </div>
                    <input type="text" placeholder='asdawsdawsdqwas'/>
                  </div>
                  <div className='fex-2'>
                    <b>${e.number * e.price}</b>
                    <button className='trash' onClick={()=>{
                      removeElement(i)
                    }}><i className="bi bi-trash"></i></button>
                  </div>
                </div>
              </li>
            ))
          }
          
        </div>
        
        <div className='flex sub'>
          <h6>Discount</h6>
          <h6>$ {}0</h6>
        </div>
        <div className='flex sub'>
          <h6>Sub Total</h6>
          <h6>$ {som}</h6>
        </div>
        <div className='sub subb'>
          <button onClick={()=>(
            order?.map((e,i)=>(
              removeElementt(i),
              setCount(count + 1),
              setSon(0),
              e.number = 0
            ))
          )} className='continue'><Link to='/payment'>Continue Payment</Link></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer