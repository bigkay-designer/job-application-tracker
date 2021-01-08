import React, {useEffect, useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Saved from './Saved'
import Applied from './Applied'
import Interview from './Interview'
import Offers from './Offers'
import '../css/home.css'
import AddJobs from './AddJobs'
import axios from '../../containers/axios'
import Nav from '../Nav'
import {Button} from "@material-ui/core"
function Home() {
    const [user, setUser] = useState([])
    const [notLoggedIn, setNotLoggedIn] = useState(false)
    const [jobs, setJobs] = useState([])
    const [removeJob, setRemoveJob] = useState(true)
    
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

    }, [removeJob])

    const deleteJobHandler = (e, id) =>{
        e.preventDefault()
        axios.delete(`/api/jobs/delete/${id}`,  {headers: {"auth-token": localStorage.getItem('token')}})
        .then(res => {
            setRemoveJob(jobs.filter(el => el.id !== id))
            // console.log(res)
        })
        .catch(err => console.log(err))
    }

    
    return (

        <div key="1" className="home">
            <Nav />
                {notLoggedIn ? <Redirect to="/login" />: null}
                <div className="home__Add__btn">
                    <Link to="/addjobs">
                        <Button className="btn">Add job</Button>
                    </Link>
                </div>
            <div className="home__container__main">
                <Saved saved={jobs} user={user} deleted={removeJob} deleteJob={deleteJobHandler} />
                <Applied applied={jobs} user={user} deleted={removeJob} deleteJob={deleteJobHandler} />
                <Interview interview={jobs} user={user} deleted={removeJob} deleteJob={deleteJobHandler} />
                <Offers offers={jobs} user={user} deleted={removeJob} deleteJob={deleteJobHandler} />
            </div>
        </div>
    )
}

export default Home
