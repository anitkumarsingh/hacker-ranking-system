import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Kevin Mitnik',
		profileLink: 'https://randomuser.me/api/portraits/men/97.jpg',
		location: 'Banglore',
		challengeSolved: 300,
		education: '',
		solutionsSubmitted: 450,
		solutionsAccepted: 400,
		overallRank: 1118,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 20.0,
			'c++': 89.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Phone'
	},
	{
		name: 'John Doe',
		profileLink: 'https://randomuser.me/api/portraits/women/79.jpg',
		location: 'Delhi',
		education: 'M Tech',
		challengeSolved: 30,
		solutionsSubmitted: 4520,
		solutionsAccepted: 900,
		overallRank: 1658,
		followers: 10,
		following: 554,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 20.0,
			'c++': 29.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Laptop'
	},
	{
		name: 'Jane Doe',
		profileLink: 'https://uifaces.co/our-content/donated/rSuiu_Hr.jpg',
		location: 'Mysure',
		education: 'M Tech',
		challengeSolved: 4050,
		solutionsSubmitted: 6350,
		solutionsAccepted: 4500,
		overallRank: 1238,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 20.0,
			'c++': 95.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Phone'
	},
	{
		name: 'Loream',
		profileLink: 'https://randomuser.me/api/portraits/men/58.jpg',
		location: 'Mumbai',
		education: 'M Tech',
		challengeSolved: 200,
		solutionsSubmitted: 350,
		solutionsAccepted: 300,
		overallRank: 1318,
		followers: 150,
		following: 5755,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 10.0,
			'c++': 49.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Laptop'
	},
	{
		name: 'Rocky',
		profileLink: 'https://randomuser.me/api/portraits/men/76.jpg',
		location: 'Banglore',
		education: 'M Tech',
		challengeSolved: 300,
		solutionsSubmitted: 450,
		solutionsAccepted: 400,
		overallRank: 1118,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 70.0,
			'c++': 89.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Tablet'
	},
	{
		name: 'Kevin sharma',
		profileLink: 'https://randomuser.me/api/portraits/men/27.jpg',
		location: 'Chanai',
		challengeSolved: 30,
		education: '',
		solutionsSubmitted: 450,
		solutionsAccepted: 0,
		overallRank: 119918,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 9.1,
			algorithms: 0.0,
			'c++': 9.2,
			java: 5.8,
			python: 8.6,
			html: 2.7,
			javascript: 7.3
		},
		noOfVotes: 55,
		deviceType: 'Laptop'
	},
	{
		name: 'John smith',
		profileLink: 'https://randomuser.me/api/portraits/women/59.jpg',
		location: 'Delhi',
		education: 'M Tech',
		challengeSolved: 50,
		solutionsSubmitted: 420,
		solutionsAccepted: 60,
		overallRank: 16258,
		followers: 10,
		following: 554,
		competitivePercentitle: {
			dataStructures: 49.1,
			algorithms: 50.0,
			'c++': 69.2,
			java: 35.8,
			python: 68.6,
			html: 82.7,
			javascript: 37.3
		},
		noOfVotes: 5455,
		deviceType: 'Laptop'
	},
	{
		name: 'Pratibha',
		profileLink: 'https://randomuser.me/api/portraits/women/39.jpg',
		location: 'Mysure',
		education: 'M Tech',
		challengeSolved: 1050,
		solutionsSubmitted: 6350,
		solutionsAccepted: 5500,
		overallRank: 138,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 20.0,
			'c++': 15.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Phone'
	},
	{
		name: 'Loream doe',
		profileLink: 'https://randomuser.me/api/portraits/men/78.jpg',
		location: 'Mumbai',
		education: 'M Tech',
		challengeSolved: 200,
		solutionsSubmitted: 350,
		solutionsAccepted: 350,
		overallRank: 1118,
		followers: 150,
		following: 5755,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 10.0,
			'c++': 49.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Laptop'
	},
	{
		name: 'Rocky gutam',
		profileLink: 'https://randomuser.me/api/portraits/men/16.jpg',
		location: 'Banglore',
		education: 'M Tech',
		challengeSolved: 300,
		solutionsSubmitted: 50,
		solutionsAccepted: 10,
		overallRank: 3118,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 70.0,
			'c++': 89.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Tablet'
	}
];
export default users;
