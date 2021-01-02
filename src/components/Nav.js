import React from 'react'
import {Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import './css/nav.css'
function Nav() {
    return (
        
        <div className="nav nav--small">
            <div className="nav__menu">
                <Menu className="nav__menu--icon" />
            </div>
            <div className="nav__container">
                <div className="nav__left">
                    <h1>job application tracker</h1>
                </div>
                <div className="nav__right">
                    <Button className="nav__right__btn nav__right__login">login</Button>
                    <Button className="nav__right__btn nav__right__signup-color">signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Nav
