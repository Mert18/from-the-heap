import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import postRoutes from './routes/PostRoutes.js';
import movieRoutes from './routes/MovieRoutes.js';
import userRoutes from './routes/UserRoutes.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/posts', postRoutes)
app.use('/movies', movieRoutes)


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`server is running on ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);