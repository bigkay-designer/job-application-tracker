import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const user = new Schema ({
    name: String,
    username: String,
    email: String,
    password: String
})

export default mongoose.model('user', user) 