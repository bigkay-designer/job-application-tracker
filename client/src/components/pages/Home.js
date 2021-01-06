import React, {useEffect, useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Close, Facebook} from '@material-ui/icons'
import Saved from './Saved'
import Applied from './Applied'
import Interview from './Interview'
import Offers from './Offers'
import '../css/home.css'
import axios from '../../containers/axios'
import Nav from '../Nav'
import {Button} from "@material-ui/core"
function Home() {
    const [notLoggedIn, setNotLoggedIn] = useState(false)
    const [user, setUser] = useState()
    // useEffect(()=>{
    //     axios.get('/api/currentuser', {headers: {"auth-token": localStorage.getItem('token')}})
    //     .then(res=>{
    //         setUser(res.data)
    //         if(!localStorage.token){
    //             setNotLoggedIn(true)
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(()=>{
        if(!localStorage.token){
            setNotLoggedIn(true)
        }
    }, [])


    return (

        <div className="home">
            <Nav />
                {notLoggedIn ? <Redirect to="/login" />: null}
                <div className="home__Add__btn">
                    <Link to="/addjobs">
                        <Button className="btn">Add job</Button>
                    </Link>
                </div>
            <div className="home__container">
                <Saved />
                <Applied />
                <Interview />
                <Offers />
            </div>
        </div>
    )
}

export default Home
