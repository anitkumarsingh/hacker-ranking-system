import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Kevin Mitnik',
		profileLink: 'http://www.hackerearth.com/@coding-guru-007',
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
		profileLink: 'http://www.hackerearth.com/@john-doe-007',
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
		profileLink: 'http://www.hackerearth.com/@jane-doe-007',
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
		profileLink: 'http://www.hackerearth.com/@loream-007',
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
	}
];
export default users;
