import express from 'express'
const router = express.Router()
import auth from '../middleware/auth'
import jobs from '../models/jobs'


// Add a job  Route
router.route('/jobs/post').post(auth, async (req, res)=>{
    const {jobTitle, companyName, location, jobLink, description, logo, section} = req.body
    let author = {
        id: req.user._id,
        name: req.user.name,
        username: req.user.username
    }

    const existJob = await jobs.findOne({jobLink: jobLink})
    if(existJob) 
    return res.status(400).json({msg: "You have already added this job to your portal"})
    const newJob =  new jobs ({jobTitle, companyName, location, jobLink, description, logo, section, author})
    newJob.save()
    .then(resData=>{
        res.json(resData)
    })
    .catch(err=>{
        res.status(500).json({error: err.message})
    })
})

// Delete Jobs Route
router.route('/jobs/delete/:id').delete(auth, (req, res)=>{
    jobs.findByIdAndDelete(req.params.id)
    .then(resData => {
        res.json(`deleted job ${resData}`)
    })
    .catch(err => res.status(400).json(`error ${err}`))
})


// Update jobs section
router.route('/jobs/update/:id').put(auth, (req, res)=>{
    jobs.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedJob => {
        res.json(updatedJob)
    })
    .catch(err =>{
        res.status(400).json(`error ${err}`)
    })
})


// Get all jobs Route
router.route('/jobs').get(auth, async (req, res)=>{
    try{
        const addedJobs = await jobs.find(req.jobs).sort({_id: -1})
        res.json(addedJobs)

    }catch (err){
        res.status(500).json({err: err.message})
    }
})


export default router