import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom'
import {Email, LockOpen} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import axios from '../../containers/axios'
import './authForm.css'
function Signup() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedInUser, setLoggedInUser] = useState(false)

    const onFormSubmit = (e) =>{
        e.preventDefault()

        let newUser = {username, password}
        axios.post('/api/login',newUser)
        .then(res=>{
            localStorage.setItem("token", res.data.token)
            window.location = '/home'
            setLoggedInUser(true)
            setUsername('')
        })
        .catch(err=>{
            console.log(err)
        })
        setPassword('')
    }
    
    return (
        <div className="auth__form">
            {/* {loggedInUser ? <Redirect to="/home" />  : null} */}
            <div className="auth__form__container">
                <div className="auth__form--title">
                    <h2>Ready to track your applications?</h2>
                </div>
                <div className="auth__form__sec">
                    <>
                        <h3>Login to your account</h3>
                    </>
                    <>
                        <form onSubmit={onFormSubmit} className="auth__form--input">
                            <Email className="icons" /><input className="input__login" type="text" onChange={e=> setUsername(e.target.value)} value={username} required placeholder="Username" />
                            <LockOpen className="icons" /><input className="input__login2" type="password" onChange={e=> setPassword(e.target.value)} value={password} required placeholder="Create password" />
                            <Button className="auth__form__btn" type="submit">Login</Button>
                            <Link to="/signup">
                                Don't have an accoun? <Button>Sign up</Button>
                            </Link>
                        </form>
                    </>
                </div>

            </div>
            
        </div>
    )
}

export default Signup
