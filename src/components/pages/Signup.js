import React from 'react'
import {Button} from '@material-ui/core'
import '../css/authForm.css'
function Signup() {
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
                        <form action="#" className="auth__form--input">
                            <input className="input1" type="text" required placeholder="First name" />
                            <input className="input2" type="text" required placeholder="Last name" />
                            <input className="input3" type="email" required placeholder="Emai address" />
                            <input className="input4" type="passowrd" required placeholder="Create password" />
                            <Button className="auth__form__btn" type="submit">Register</Button>
                        </form>
                    </>
                </div>

            </div>
            
        </div>
    )
}

export default Signup
