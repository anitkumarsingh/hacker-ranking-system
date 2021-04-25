import connectDB from './config/index.js';
import dotenv from 'dotenv';
import Hacker from './models/hackers.js';
import hackerData from './mocks/hackers.js';

dotenv.config();

connectDB();

const ImportData = async () => {
	try {
		await Hacker.deleteMany();
		await Hacker.insertMany(hackerData);
		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`Error ${error.message}`);
		process.exit(1);
	}
};

const DestoryData = async () => {
	try {
		await Hacker.deleteMany();
		console.log('Data Destred!!!');
		process.exit();
	} catch (error) {
		console.error(`Error ${error.message}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	DestoryData();
} else {
	ImportData();
}
