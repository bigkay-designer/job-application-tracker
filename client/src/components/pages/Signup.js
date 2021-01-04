import React, {useState} from 'react'
import axios from '../../containers/axios'
import {Button} from '@material-ui/core'
import { Person, People, Email, LockOpen } from '@material-ui/icons'
import '../css/authForm.css'
function Signup() {
    const [user, setUser] = useState()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const onFormSubmit = (e) =>{
        e.preventDefault()
        const newUser = {
            name: name,
            email: email,
            username: username,
            password: password
        }
        axios.post('/api/signup', newUser)
        .then(res =>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="auth__form">
            <div className="auth__form__container">
                <div className="auth__form--title">
                    <h2>Ready to track your applications?</h2>
                </div>
                <div className="auth__form__sec">
                    <>
                        <h3>sign up for a free account</h3>
                    </>
                    <>
                        <form onSubmit={onFormSubmit}  className="auth__form--input">
                            <Person className="icons" /><input className="input1" type="text" onChange={e => setName(e.target.value)} required placeholder="Name" />
                            <Email className="icons" /><input className="input3" type="text" onChange={e => setUsername(e.target.value)} required placeholder="Username" />
                            <Email className="icons" /><input className="input3" type="email" onChange={e => setEmail(e.target.value)} required placeholder="Emai address" />
                            <LockOpen className="icons" /><input className="input4" type="password" onChange={e => setPassword(e.target.value)} required placeholder="Create password" />
                            <Button className="auth__form__btn" type="submit">Register</Button>
                        </form>
                    </>
                </div>

            </div>
            
        </div>
    )
}

export default Signup
