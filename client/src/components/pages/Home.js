import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Close, Facebook} from '@material-ui/icons'
import Saved from './Saved'
import Applied from './Applied'
import Interview from './Interview'
import Offers from './Offers'
import '../css/home.css'
import axios from '../../containers/axios'
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
            {notLoggedIn ? <Redirect to="/login" />: null}
         <Saved />
         <Applied />
         <Interview />
         <Offers />
        </div>
    )
}

export default Home
