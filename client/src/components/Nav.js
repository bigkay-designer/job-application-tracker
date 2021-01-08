import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import {Menu, Close, Person, Bookmarks, Home} from '@material-ui/icons'
import axios from '../containers/axios'
import './css/nav.css'
function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    const [ifLoggedIn, setIfLoggedIn] = useState(true)
    const [user, setUser] = useState([])

    useEffect(()=>{
        axios.get('/api/currentuser', {headers: {"auth-token": localStorage.getItem("token")}})
        .then(res=>{
            setUser(res.data)

        })
        .catch(err => console.log(err))
    }, [])

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
        window.location = '/login'
    }
    return (
        
        <div className={`nav nav--small `}>
            <div className="nav__menu" onClick={openMenuHandler}>
                <Menu className="nav__menu--icon" />
            </div>
            <div className="nav__container">
                <div className="nav__left">
                    <Bookmarks className="icon" />
                    <Link to="/">
                        <h1>jobook</h1>
                    </Link>
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
                    :
                    <div className="loggedUser"> 
                        <>
                            <Person className="icon" /><h3> {user.name} </h3>
                        </>

                        <Link to="/home" ><Home className="icon" /><Button className="nav__right__btn nav__right__login">Home</Button> </Link>
                        <Button onClick={loggoutHandler} className="nav__right__btn nav__right__login">Logout</Button>
                    </div>
                    }
    
                </div>
            </div>
        </div>
    )
}

export default Nav
