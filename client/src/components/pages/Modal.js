import React from 'react'
import {Close, Work, Delete} from '@material-ui/icons'
import JobStatus from './JobStatus'

import '../css/modal.css'
function Modal({modal, hideModal, hideModalDefault}) {

    return (
        <div className={`modal ${hideModalDefault &&  "modal--hide"}`}>
            <div onClick={hideModal} className="modal__overlay"></div>
            <div className="modal__container">
                <Close onClick={hideModal} className="content__clos" />
                <div className="modal__type">
                    <h3> {modal.section} </h3>
                </div>
                <div key={modal._id} className={`jobs__content`}>
                    <div className="close__div" >
                    <Delete  className="content__close" />   
                    </div>
                    <div className="content__icon__div">
                        <Work style={{color: "#B565A7"}} className="content__icon" />
                    </div>
                    <div className="content__body">
                        <h1> {modal.jobTitle} </h1>
                        <p> {modal.companyName} <span> {modal.location} </span></p>
                        <a href={modal.jobLink} target="_blank" rel="noreferrer"> {modal.jobLink} </a>
                        <div className="content__body__text">
                            <p> {modal.description} </p>
                        </div>
                    </div>
                </div>
              <JobStatus jobId={modal._id} modalSection={modal.section} />
            </div>
        </div>
    )
}

export default Modal
