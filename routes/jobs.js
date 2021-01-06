import express from 'express'
const router = express.Router()

import jobs from '../models/jobs'

router.route('/jobs/post').post(async (req, res)=>{
    const {jobTitle, companyName, location, jobLink, description, logo} = req.body

    const existJob = await jobs.findOne({jobLink: jobLink})
    if(existJob) 
    return res.status(400).json({msg: "You have already added this job to your portal"})
    const newJob = new jobs ({jobTitle, companyName, location, jobLink, description, logo})
    newJob.save()
    .then(resData=>{
        res.json(resData)
    })
    .catch(err=>{
        res.status(500).json({error: err.message})
    })
})


export default router