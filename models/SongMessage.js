import mongoose from 'mongoose';

const SongSchema = mongoose.Schema({
    title: String,
    artist: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const SongMessage = mongoose.model('SongMessage', SongSchema);

export default SongMessage;