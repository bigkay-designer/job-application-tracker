import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobs = new Schema ({
    jobTitle:String,
    companyName: String,
    location: String,
    jobLink: String,
    description: String,
    logo: String,
    section: String,
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        name: String,
        username: String
      },
})

export default mongoose.model('jobs', jobs)