import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../../context/Context'
import { data } from '../../../data/data'

import './Main.css'

const arrCategory = []

function Main() {
  const Time = new Date()
  const Hafta = Time.getDay()
  const sortt = Hafta == '1' ? 'Dushanba' : Hafta == '2' ? 'Seshanba' : Hafta == '3' ? 'Chorshanba' : Hafta == '5' ? 'Juma' : Hafta == '4' ? 'Payshanba' : Hafta == '6' ? 'Shanba' : 'Yakshanba'
  const Day = Time.getDate()
  const Month = Time.getMonth()
  const sortMonth = Month == '0' ? 'Yan' : Month == '1' ? 'Feb' : Month == '2' ? 'Mar' : Month == '3' ? 'Apr' : Month == '4' ? 'May' : Month == '5' ? 'Iyun' : Month == '6' ? 'Iyul' : Month == '7' ? 'Avg' : Month == '8' ? 'Sen' : Month == '9' ? 'Okt' : Month == '10' ? 'Noy' : 'Dek'
  const Year = Time.getFullYear()
  
  data.forEach((e, i) => {
    if (!arrCategory.includes(e.type))
    arrCategory.push(e.type)
  })
  const [category, setCategory] = useState(arrCategory[0])
  
  
  const data2 = [];
  const [searchData, setSearchData] = useState([])
  const searchItem = (evn) => {
    data.map((item) => {
      if (item.title.toLowerCase().includes(evn.toLowerCase())) {
        data2.push(item);
      }
    });
    setSearchData(data2);
  };
  
  const { order, setOrder } = useContext(Context)
  const { som, setSon } = useContext(Context)
  const { setSuv } = useContext(Context)
  return (
    <div className='container cont'>
      <div className="main">
        <div className="main__inner">
          <div className="flex">
            <div>
              <h1>Jaegar Resto</h1>
              <h4>{sortt}, {Day} {sortMonth} {Year}</h4>
            </div>
            <div className='label'>
              <label className='label__search' htmlFor="foryou"><i className="bi bi-search"></i></label>
              <input onChange={(e) => searchItem(e.target.value)} className='search' type="text" placeholder='Search' id='foryou'/>
            </div>
          </div>
          <div className='main__list'>
            <div>
              {
                arrCategory?.map((e, i) => (
                  <button className={category == e ? 'button__active': ''} onClick={() => setCategory(e)} key={i}>{e}</button>
                ))
              }
            </div>
          </div>
          <div className='flex main__choose'>
            <label htmlFor="dish">Choose Dishes</label>
            <select className='main__select' name="choose" id="dish" onChange={(q) => setSuv(q.target.value)}>
              <option></option>
              <option>Dine In</option>
              <option>To Go</option>
              <option>Delivery</option>
            </select>
          </div>
          <ul className='lillar'>
            {
              searchData.length > 0
                ? searchData.map((item, i) => (
                  <li
                    onClick={() => {
                      setOrder([...new Set([...order, item])]);
                      item.number = item.number ? item.number + 1 : 1;
                    }}
                    key={i}
                    className="cardd"
                  >
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <b>$ {item.price}</b>
                    <span>{item.have} Bowls available</span>
                  </li>
                )) :
                data.length >0 ?
                  data?.filter((e) => e.type == category).map((item, i) => (
                    <li key={i} onClick={() => (
                      setOrder([...new Set([...order, item])]),
                      item.number = item.number ? item.number + 1 : 1,
                      setSon(som + item.price)
                    )} className='cardd'>
                      <img src={item.img} alt="" />
                      <h5>{item.title}</h5>
                      <p>$ {item.price}</p>
                      <h6>{item.have} Have</h6>
                    </li>
                  ))
                  :data?.filter((e) => e.type !== category).map((item, i) => (
                    <li key={i} onClick={() => (
                      setOrder([...new Set([...order, item])]),
                      item.number = item.number ? item.number + 1 : 1,
                      setSon(som + item.price)
                    )} className='cardd'>
                      <img src={item.img} alt="" />
                      <h5>{item.title}</h5>
                      <p>$ {item.price}</p>
                      <h6>{item.have} Have</h6>
                    </li>))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main