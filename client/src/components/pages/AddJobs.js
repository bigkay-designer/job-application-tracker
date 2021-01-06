import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import {Button} from '@material-ui/core'
import {Title, Business, LocationOn, Link, Description, Close, SelectAll} from '@material-ui/icons'
import axios from '../../containers/axios'

import '../css/addjobs.css'
function AddJobs() {
    const [user, setUser] = useState([])
    
    const [hideDiv, setHideDiv] = useState(false)
    const [jobTitle, setJobTtitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [location, setLocation] = useState('')
    const [jobLink, setJobLink] = useState('')
    const [description, setDescription] = useState('')
    const [section, setSection] = useState('')
    const [logo, setLogo] = useState('')

    useEffect( ()=>{
        axios.get('/api/jobs', {headers:{'auth-token': localStorage.getItem('token')}})
        .then(res=> {
            setUser(res.data)
        })
        .catch(err=> console.log(err))
        
    }, [])


    const onFormSubmit = e =>{
        e.preventDefault()
        const headers = {
            headers:{'auth-token': localStorage.getItem('token')}
        }
        const author = {
            id: user.id,
            name:user.name,
            username: user.username
        }
        const newJob = {jobTitle, companyName, jobLink, location, description, section,author}
        axios.post('/api/jobs/post', newJob, headers)
        .then(res=>{
            setJobTtitle('')
            setCompanyName('')
            setLocation('')
            setJobLink('')
            setDescription('')
            setHideDiv(true)
        })
        .catch(err=> console.log(err))

    }

    const hideDivHandler = (e) =>{
        e.preventDefault()
        setHideDiv(true)
    }
    
    return (
        <div className="addJobs">
            <Home />

            <div className={`addJobs__container `}>
                <div className="close__div" onClick={hideDivHandler}>
                    {hideDiv ? <Redirect to="/home" />: null}
                    <Close  className="close" />
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <Title className="icon" />
                        <input type="text" placeholder="Job Title" onChange={e => setJobTtitle(e.target.value)} value={jobTitle} required/>
                    </div>
                <div className="field">
                    <Business className="icon" />
                        <input type="text" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} value={companyName} required/>
                    </div>
                    <div className="field">
                        <LocationOn className="icon" />
                        <input type="text" placeholder="Location" onChange={e => setLocation(e.target.value)} value={location} required/>
                    </div>
                    <div className="field">
                        <Link className="icon" />
                        <input type="text" placeholder="Job Link" onChange={e => setJobLink(e.target.value)} value={jobLink} required/>
                    </div>
                    <div className="field">
                        <Description className="icon" />
                        <textarea placeholder="Job Description" onChange={e => setDescription(e.target.value)} value={description} cols="30" rows="10"></textarea>
                    </div>
                    <div className="field">
                        <SelectAll className="icon" />
                        <select onChange={e => setSection(e.target.value)} required>
                            <option value="choose">choose</option>
                            <option className="option" value="saved ">saved jobs</option>
                            <option className="option" value="applied">applied jobs</option>
                            <option className="option" value="interview">interview</option>
                            <option className="option" value="offers">offers</option>
                        </select>
                    </div>
                    <div className="btn__div">
                        <Button type="submit" className="btn">add job</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddJobs
