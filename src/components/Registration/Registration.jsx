import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addUser, data } from '../../store/features/UserData/UserData';

function Registration() {

    const user = useSelector(data)
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handler(event){
        event.preventDefault()
        // console.log(name)
        dispatch(addUser({ name, email, password }))
        setName("")
        setEmail("")
        setPassword("")
    }

  return (
    <div>
        <form onSubmit={handler}>
            <input type='text' value={name} placeholder="name" onChange={(event) => setName(event.target.value)}  />
            <input type='email' value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)}  />
            <input type='password' value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)}  />
            <button>Registration</button>
        </form>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
        {/* {
            console.log(user)
        } */}
        
    </div>
  )
}

export default Registration