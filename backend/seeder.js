import connectDB from './config/index.js';
import dotenv from 'dotenv';
import Hacker from './models/hackers.js';
import hackerData from './mocks/hackers.js';
import User from './models/users.js';
import UserData from './mocks/users.js';
import Settings from './models/settings.js';
import SettingData from './mocks/settings.js';

dotenv.config();

connectDB();

const ImportData = async () => {
	try {
		// await Hacker.deleteMany();
		await User.deleteMany();
		await Settings.deleteMany();
		// await Hacker.insertMany(hackerData);
		const insertDataIntoUserTable = await User.insertMany(UserData);
		const adminId = insertDataIntoUserTable[0]._id;
		const sampleData = UserData.map((setting) => {
			return { ...setting, user: adminId };
		});
		await Settings.insertMany(sampleData);
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
		await Settings.deleteMany();
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
