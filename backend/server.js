import express from 'express';
import hackersRouter from './routes/hackers.js';
import dotenv from 'dotenv';
import connectDB from './config/index.js';
import { notFound, errorHandler } from './middleware/index.js';

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/hackers', hackersRouter);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
