import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Kevin Mitnik',
		email: 'kevin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false,
		isAdmin: true
	},
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Loream',
		email: 'loream@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Rocky',
		email: 'rocky@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Kevin sharma',
		email: 'kevinsharma@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'John smith',
		email: 'smith@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Pratibha',
		email: 'pratibha@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true
	},
	{
		name: 'Loream doe',
		email: 'doe@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Rocky gutam',
		email: 'rockygutam@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true
	}
];
export default users;
