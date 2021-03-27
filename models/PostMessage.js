import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    spotify: String,
    youtube: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;