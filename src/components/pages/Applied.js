import React from 'react'
import {Close, Facebook} from '@material-ui/icons'
import '../css/homeComponents.css'
function Home() {
    return (
        <div className="homeComponent">
            <div className="home__container">
                <div className="jobs">
                    <h1>Applied jobs</h1>
                    <div className="jobs__content">
                        <div className="content__icon__div">
                            <Facebook className="content__icon" />
                        </div>
                        <div className="content__body">
                            <h1>job title</h1>
                            <p>company name <span>location</span></p>
                        </div>
                        <div >
                            <Close className="content__close" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
