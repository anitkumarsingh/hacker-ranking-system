import connectDB from './config/index.js';
import dotenv from 'dotenv';
import Hacker from './models/hackers.js';
import hackerData from './mocks/hackers.js';
import User from './models/users.js';
import UserData from './mocks/users.js';

dotenv.config();

connectDB();

const ImportData = async () => {
	try {
		await Hacker.deleteMany();
		await User.deleteMany();
		await Hacker.insertMany(hackerData);
		await User.insertMany(UserData);
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
		await User.deleteMany();
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
