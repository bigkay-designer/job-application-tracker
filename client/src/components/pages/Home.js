import React from 'react'
import {Close, Facebook} from '@material-ui/icons'
import Saved from './Saved'
import Applied from './Applied'
import Interview from './Interview'
import Offers from './Offers'
import '../css/home.css'
function Home() {
    return (
        <div className="home">
         <Saved />
         <Applied />
         <Interview />
         <Offers />
        </div>
    )
}

export default Home
