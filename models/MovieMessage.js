import mongoose from 'mongoose';

const MovieSchema = mongoose.Schema({
    title: String,
    message: String,
    createdAt: {
        type: Date,
        deafult: new Date()
    }
})

const MovieMessage = mongoose.model('MovieMessage', MovieSchema);

export default MovieMessage;