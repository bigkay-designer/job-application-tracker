import React from 'react'
import {Close, Facebook} from '@material-ui/icons'
import '../css/homeComponents.css'
function Home({offers, user}) {
    return (
        <div className="homeComponent">
            <div className="home__container">
                <div className="jobs">
                    <h1>Offers</h1>
                    {offers.map(job =>{
                        if(job.section === "offers" && job.author.id === user.id){
                            return (
                                <div key={job._id} className="jobs__content">
                                        <div className="content__icon__div">
                                            <Facebook className="content__icon" />
                                        </div>
                                        <div className="content__body">
                                            <h1> {job.jobTitle} </h1>
                                            <p> {job.companyName} <span> {job.location} </span></p>
                                            <p> {job.jobLink} </p>
                                            <p> {job.description} </p>
                                        </div>
                                        <div >
                                            <Close className="content__close" />
                                        </div>
                                </div>
                            )
                        }
                    })} 
                </div>
            </div>
        </div>
    )
}

export default Home
