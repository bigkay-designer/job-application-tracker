import React, {useState} from 'react'
import {Button} from  '@material-ui/core'
import axios from '../../containers/axios'
import '../css/jobStatus.css'
function JobStatus({jobId, modalSection}) {  
    const [section, setSection] = useState('')
    const headers = {
        headers:{"auth-token": localStorage.getItem('token')}
    }
    const changeHandler = e =>{
        // console.log(section)
        setSection(e.target.value)
    }
    const onFormSubmit = (id) =>{
        const newData = {section}
        axios.put(`/api/jobs/update/${id}`,newData, headers )
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))

    }
    return (
        <div className="job__stage">
            <div className="job__stage__h1">
                <h1>update your job stage</h1>
            </div>
            <div className="job__stage__container">
                <form onSubmit={() => onFormSubmit(jobId)}>
                    <div className="form__input">
                        <div className="label">
                            <input onChange={changeHandler} value="saved" name="selector" type="radio"/>
                            <label className="saved" htmlFor=""> Saved </label>
                        </div>
                        <div className="label">
                            <input onChange={changeHandler} value="applied" name="selector" type="radio"/>
                            <label className="applied" htmlFor=""> Applied </label>
                        </div>
                        <div className="label">
                            <input onChange={changeHandler} value="interview" name="selector" type="radio"/>
                            <label className="interview" htmlFor=""> Interview </label>
                        </div>
                        <div className="label">
                            <input onChange={changeHandler} value="offer" name="selector" type="radio"/>
                            <label className="offers" htmlFor=""> Offer </label>
                        </div>
                    </div>
                    <div className="btn">
                        <Button className="select__btn" type="submit">update job</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobStatus
