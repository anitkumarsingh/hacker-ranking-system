import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Anit',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true,
		isAdmin: true
	},
	{
		name: 'Kevin Mitnik',
		email: 'kevin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		isAdmin: false,
		hacker: '608d71aa42aa738be51572d4'
	},
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true,
		hacker: '608d71aa42aa738be51572d5'
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572d6'
	},
	{
		name: 'Loream',
		email: 'loream@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572d7'
	},
	{
		name: 'Rocky',
		email: 'rocky@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572d8'
	},
	{
		name: 'Kevin sharma',
		email: 'kevinsharma@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572d9'
	},
	{
		name: 'John smith',
		email: 'smith@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572da'
	},
	{
		name: 'Pratibha',
		email: 'pratibha@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true,
		hacker: '608d71aa42aa738be51572db'
	},
	{
		name: 'Loream doe',
		email: 'doe@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		hacker: '608d71aa42aa738be51572dc'
	},
	{
		name: 'Rocky gutam',
		email: 'rockygutam@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true,
		hacker: '608d71aa42aa738be51572dd'
	}
];
export default users;
