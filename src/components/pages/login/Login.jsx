import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const data = [
    {
        id:1,
        user: 'ali',
        pass: 123
    },
    {
        id:2,
        user: 'salim',
        pass: 222
    },
    {
        id:3,
        user: 'vali',
        pass: 333
    }
]

function Login() {

    const navigate = useNavigate()
    const login = (e)=>{
        e.preventDefault()
        let user = e.target.elements.userName.value
        let pass = e.target.elements.password.value
        
        for(let i = 0; i <= data.length; i++){
            if(data[i].user === user && data[i].pass === parseInt(pass)){
                window.localStorage.setItem('key', '123456')
                break
            }else{
                window.localStorage.setItem('key', 'error')
            }
        }
        if(window.localStorage.getItem('key') === '123456'){
            navigate('/home')
        }
    }

  return (
    <div className='container'>
        <div className='login'>
            <form action="#" className='form' onSubmit={login}>
                <input className='input1' name='userName' type="text" placeholder='Username'/>
                <input className='input2' name='password' type="password" placeholder='Password'/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login