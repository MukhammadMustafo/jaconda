import React, { useState } from 'react'
import './Home.css'
import Logo from '../../../image/Logo.png'
import { Link, useLocation } from 'react-router-dom'

function Home() {
  const local = useLocation()
  const [id, setId] = useState(1)
  const del = (e)=>{
    window.localStorage.removeItem('key')
    console.log(local.pathname);
  }

  return (
    <>
    <div className='container conta'>
        <div className="header">
          <Link to='/' className='header__logo'>
            <img src={Logo} alt="" />
          </Link>
          <ul className='header__list'>
            <li onClick={(e)=>setId(e.target.id)} className={id == '0'? 'header__item active2': 'header__item'} id='0'><Link id='0' className={id == '0'? 'active': ''}><i id='0' className="bi bi-house-door"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '1'? 'header__item active2': 'header__item'} id='1'><Link id='1' className={id == '1'? 'active': ''}><i id='1' className="bi bi-patch-plus"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '2'? 'header__item active2': 'header__item'} id='2'><Link id='2' className={id == '2'? 'active': ''}><i id='2' className="bi bi-pie-chart-fill"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '3'? 'header__item active2': 'header__item'} id='3'><Link id='3' className={id == '3'? 'active': ''}><i id='3' className="bi bi-envelope"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '4'? 'header__item active2': 'header__item'} id='4'><Link id='4' className={id == '4'? 'active': ''}><i id='4' className="bi bi-bell"></i></Link></li>
            <li onClick={(e)=>setId(e.target.id)} className={id == '5'? 'header__item active2': 'header__item'} id='5'><Link id='5' className={id == '5'? 'active': ''}><i id='5' className="bi bi-gear-wide"></i></Link></li>
          </ul>
          <Link to='/'>
            <button onClick={del} className='header__btn'><i class="bi bi-box-arrow-right"></i></button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Home


