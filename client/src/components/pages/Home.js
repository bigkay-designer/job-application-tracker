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
    const [user, setUser] = useState([])
    const [notLoggedIn, setNotLoggedIn] = useState(false)
    const [jobs, setJobs] = useState([])
    
    useEffect(()=>{
        axios.get('/api/currentuser', {headers: {"auth-token": localStorage.getItem('token')}})
        .then(res=>{
            setUser(res.data)
        })
    }, [])

    useEffect(()=>{
        if(!localStorage.token){
            setNotLoggedIn(true)
        }
    }, [])

    useEffect(()=>{
        axios.get('/api/jobs', {headers: {"auth-token": localStorage.getItem('token')}})
        .then(res => {
            setJobs(res.data)
        })

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
                <Saved savedJobs={jobs} user={user} />
                <Applied applied={jobs} user={user} />
                <Interview interview={jobs} user={user} />
                <Offers offers={jobs} user={user} />
            </div>
        </div>
    )
}

export default Home
