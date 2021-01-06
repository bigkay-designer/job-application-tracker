import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import {Button} from '@material-ui/core'
import {Title, Business, LocationOn, Link, Description, Close} from '@material-ui/icons'

import '../css/addjobs.css'
function AddJobs() {
    
    const [hideDiv, setHideDiv] = useState(false)

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
                <form action="">
                    <div className="field">
                        <Title className="icon" />
                        <input type="text" placeholder="Job Title" required/>
                    </div>
                <div className="field">
                    <Business className="icon" />
                        <input type="text" placeholder="Company Name" required/>
                    </div>
                    <div className="field">
                        <LocationOn className="icon" />
                        <input type="text" placeholder="Location" required/>
                    </div>
                    <div className="field">
                        <Link className="icon" />
                        <input type="text" placeholder="Job Link" required/>
                    </div>
                    <div className="field">
                        <Description className="icon" />
                        <textarea placeholder="Job Description" cols="30" rows="10"></textarea>
                    </div>
                    <div className="btn__div">
                        <Button className="btn">add job</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddJobs
