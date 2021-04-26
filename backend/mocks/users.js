import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin user',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
		isActive: true
	},
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: true
	},
	{
		name: 'Loream',
		email: 'loream@example.com',
		password: bcrypt.hashSync('123456', 10),
		isActive: false
	}
];
export default users;
