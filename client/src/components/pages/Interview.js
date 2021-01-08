import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {Delete, Work} from '@material-ui/icons'
import Modal from './Modal'
import '../css/homeComponents.css'
function Interview({interview, user, deleteJob, deleted}) {
    const [modal, setModal] = useState([])
    const [hideModal, setHideModal] = useState(false)

    const openModalHandler = (val) => {
        setModal(val)
        setHideModal(true)
    }
    const hideModalHandler = () =>{
        setHideModal(false)
    }

    return (
        <div className="homeComponent">
            <div className="home__container">
                <div className={`jobs`}>
                    <div className="interview__h1 title__div">
                        <h1>interview</h1>
                    </div>
                    {/* ************************* */}
                    {interview.map(job =>{
                        return job.section === "interview" && job.author.id === user.id ?
                            <div key={job._id} className={`jobs__content`}>
                                    <div className="close__div" >
                                        <Delete onClick={e=> deleteJob (e, job._id)} className="content__close" />
                                    </div>
                                    <div className="content__icon__div">
                                        <Work style={{color: "#B565A7"}} className="content__icon" />
                                    </div>
                                    <div className="content__body">
                                        <h1> {job.jobTitle} </h1>
                                        <p> {job.companyName} <span> {job.location} </span></p>
                                        <a href={job.jobLink} target="_blank" rel="noreferrer"> {job.jobLink} </a>
                                        <div className="content__body__text">
                                            <p> {job.description.substring(0, 150)} </p>
                                            <Button onClick={() => openModalHandler(job)} className="readmore__btn">Readmore</Button>
                                        </div>
                                    </div>
                            </div>
                        :   null
                    })} 
                    <Modal hideModalDefault={hideModal} hideModal={hideModalHandler} modal={modal} />
                </div>
            </div>
        </div>
    )
}

export default Interview
