import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Kevin Mitnik',
		profileLink: 'https://randomuser.me/api/portraits/men/97.jpg',
		location: 'Banglore',
		challengeSolved: 300,
		solutionsSubmitted: 450,
		solutionsAccepted: 400,
		overallRank: 1118,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 0.0,
			'c++': 89.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Mobile'
	},
	{
		name: 'John Doe',
		profileLink: 'https://randomuser.me/api/portraits/women/79.jpg',
		location: 'Delhi',
		challengeSolved: 30,
		solutionsSubmitted: 4520,
		solutionsAccepted: 900,
		overallRank: 1658,
		followers: 10,
		following: 554,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 0.0,
			'c++': 29.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Desktop'
	},
	{
		name: 'Jane Doe',
		profileLink: 'https://uifaces.co/our-content/donated/rSuiu_Hr.jpg',
		location: 'Mysure',
		challengeSolved: 4050,
		solutionsSubmitted: 6350,
		solutionsAccepted: 4500,
		overallRank: 1238,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 0.0,
			'c++': 95.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Mobile'
	},
	{
		name: 'Loream',
		profileLink: 'https://randomuser.me/api/portraits/men/58.jpg',
		location: 'Mumbai',
		challengeSolved: 200,
		solutionsSubmitted: 350,
		solutionsAccepted: 300,
		overallRank: 1318,
		followers: 150,
		following: 5755,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 0.0,
			'c++': 49.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Desktop'
	},
	{
		name: 'Anit Kumar Singh',
		profileLink: 'https://avatars.githubusercontent.com/u/24611589?v=4',
		location: 'Banglore',
		challengeSolved: 300,
		solutionsSubmitted: 450,
		solutionsAccepted: 400,
		overallRank: 1118,
		followers: 150,
		following: 55,
		competitivePercentitle: {
			dataStructures: 79.1,
			algorithms: 0.0,
			'c++': 89.2,
			java: 55.8,
			python: 88.6,
			html: 92.7,
			javascript: 97.3
		},
		noOfVotes: 5755,
		deviceType: 'Mobile'
	}
];
export default users;
