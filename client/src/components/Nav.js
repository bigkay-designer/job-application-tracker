import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import {Menu, Close} from '@material-ui/icons'
import axios from '../containers/axios'
import './css/nav.css'
function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    const [ifLoggedIn, setIfLoggedIn] = useState(true)

    useEffect(()=>{
        if(!localStorage.token){
            setIfLoggedIn(true)
        }else{
            setIfLoggedIn(false)
        }
    }, [])    
    
    const openMenuHandler = (e)=>{
        e.preventDefault()
        setOpenMenu(true)
    }
    
    const closeMenuHandler = e=>{
        e.preventDefault()
        setOpenMenu(false)
    }
        
    const loggoutHandler = e=>{
        e.preventDefault()
        localStorage.removeItem("token")
        setOpenMenu(false)
        setIfLoggedIn(true)
        window.location = '/'
    }
    return (
        
        <div className={`nav nav--small `}>
            <div className="nav__menu" onClick={openMenuHandler}>
                <Menu className="nav__menu--icon" />
            </div>
            <div className="nav__container">
                <div className="nav__left">
                    <h1>job application tracker</h1>
                </div>
                <div className={`nav__right ${openMenu && "nav__right--open"}`}>
                    <Close className="nav__menu--close" onClick={closeMenuHandler} />
                    {ifLoggedIn ? 
                    <div onClick={closeMenuHandler}> 
                        <Link  to="/login">
                            <Button className="nav__right__btn nav__right__login">login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="nav__right__btn nav__right__signup-color">signup</Button>
                        </Link> 
                    </div>
                    :<Button onClick={loggoutHandler} className="nav__right__btn nav__right__login">Logout</Button>
                    }
    
                </div>
            </div>
        </div>
    )
}

export default Nav
