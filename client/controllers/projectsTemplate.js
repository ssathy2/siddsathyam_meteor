var projectsData = 
{
	"side_projects" : [
		{
			projectName: 		'Hakken',
			projectURL:  		'https://github.com/ssathy2/Hakken',
			projectDates: 		"November 2014 - Present", 
			projectDescription: 'This app is on the app store (https://itunes.apple.com/us/app/hakken/id968138989). A native iOS Hackernews app that I\'m currently working on. Fully opensourced, it uses Reactive Cocoa and an model-view-view model architecture. For data services, it uses the hn-wrapper that I created to provide a convienient API wrapper around the YCombinator news API to easily consume stories on Hacker News. It currently supports the ability to view the top stories, save stories to a device read later queue, and view comments for a given stories. Future versions will have the ability to view Ask HN stories, Jobs, New stories, and Show HN stories.',
			projectImages:
			[
				'images/topstories6.png',
				'images/detail6.png',
				'images/comments6.png',
				'images/savedstories6.png'
			]
		},
		{
			projectName: 	'hn-wrapper',
			projectDescription: 'With the release of the official Hackernews (https://news.ycombinator.com/news) API (https://github.com/HackerNews/API), I didn\'t like the way in which comments and stories were being returned from the API so I created a wrapper around that API that will return full JSON responses instead of arrays of IDs. The wrapper returns Top Stories, Ask HN stories, new stories, Jobs, and Show HN stories. This wrapper is live in two places: Heroku: http://damp-bayou-8238.herokuapp.com/ and Digital Ocean at (as a subdomain of siddsathyam.com): http://hackernews-api-newyork1.siddsathyam.com . This project initially started off as a fork of a project hackernews-api-newyork1.siddsathyam.com . This is mainly a way to experiment with RxJS, Redis, Restify, and request.',
			projectURL:  		'https://github.com/ssathy2/hn-wrapper',
			projectDates: 		"October 2014 - Present", 
			projectImages:[]

		},
		{
			projectName:    'siddsathyam.com',
			projectDescription: 'I didn\'t want to create my personal website with an existing platform like Wordpress so instead I created my own website from scratch using MeteorJS. This is a way for me to play around with MeteorJS and web development in general. Hosted on Digital Ocean.',
			projectURL: 'https://github.com/ssathy2/siddsathyam_meteor',
			projectDates : "February 2014 - Present", 
			projectImages: []
		},
		{
			projectName: 		'SWAiOS',
			projectDescription: 'The current Southwest iPhone iOS app is terrible and I wanted to create something that\'s a lot better. This app allows me to play around with a reactive programming framework for iOS called Reactive Cocoa and also includes some neat transtions and blurring effects. I\'ll probably reuse a lot of the components from this project as they will prove to be very useful in future projects.',
			projectURL:  		'https://github.com/ssathy2/SWAiOS',
			projectDates: "December 2013 - February 2014",
			projectImages:
			[
			  	'images/swaios_login.png',
				'images/swaios_side_panel.png',
				'images/swaios_user_home.png'
			]
		}
	],
	"work_projects" : [
		{
			projectName: 		'Well-Being Together™',
			projectURL:  		'https://itunes.apple.com/us/app/wbtogether/id1044304918',
			projectDates: 		"March 2015 - October 2015",
			projectDescription: 'An app that I architected from start to finish. Acted as lead on the project and worked with one other developer. The app allows for the social tracking of activities across five different spaces. The app allows users to track progress in those activities, post about their progress in those activities (using text, photos, location checkins, and user tags), and has a Facebook style message board to notify their teammates about their progress in their activities. The app is free to download but requires registration with an account through participating employers, health plans, or physicians.',
			projectImages:
			[
				'http://a3.mzstatic.com/us/r30/Purple3/v4/23/27/e5/2327e5a5-d546-cc45-3b7d-acc4253d8f1c/screen322x572.jpeg',
				'http://a5.mzstatic.com/us/r30/Purple3/v4/60/dc/36/60dc3689-4f6c-b26c-cdfd-cf10a16ac190/screen322x572.jpeg',
				'http://a3.mzstatic.com/us/r30/Purple3/v4/68/3e/8d/683e8d5e-f086-49aa-d3e4-f64a385fbbab/screen322x572.jpeg',
				'http://a5.mzstatic.com/us/r30/Purple6/v4/a9/ed/34/a9ed3400-df1b-3748-98f7-690c5921cf10/screen322x572.jpeg',
				'http://a1.mzstatic.com/us/r30/Purple6/v4/a5/0b/fa/a50bfa41-5d21-a29d-61ea-66a430773611/screen322x572.jpeg'
			]
		},
		{
			projectName: 		"McDonald's",
			projectURL: 		"https://itunes.apple.com/us/app/mcdonalds/id922103212?mt=8",
			projectDates: 		"November 2014 - February 2015",
			projectDescription: 'My involvement in this app included fixing bugs, refactoring code, and adding new features. I implemented social login (Facebook and Google) and the offer redemption flow in the app. The app allows users to redeem exclusive offers, browse the menu and get nutrition information, as well as assisting in finding the nearest McDonald\'s location.',
			projectImages:
			[
				'http://a3.mzstatic.com/us/r30/Purple49/v4/2c/e0/27/2ce027e2-a477-b65b-f63e-a4e78696a723/screen322x572.jpeg',
				'http://a1.mzstatic.com/us/r30/Purple69/v4/6c/96/c1/6c96c1d4-0ac5-024c-67b8-989a99785de3/screen322x572.jpeg',
				'http://a2.mzstatic.com/us/r30/Purple69/v4/6b/fc/33/6bfc3379-d2b3-8c48-91cb-271232d6e4c0/screen322x572.jpeg',
				'http://a1.mzstatic.com/us/r30/Purple49/v4/cb/05/52/cb05525f-2ca9-ce02-dfb2-aa42b50cc647/screen322x572.jpeg'
			]
		},
		{
			projectName: 		'Well-Being GO™',
			projectURL:  		'https://itunes.apple.com/us/app/well-being-go/id904737200',
			projectDates: 		"February 2014 - October 2014",
			projectDescription: 'An app that I co-architected from start to finish. Worked with one other developer on the project. The app begins with a survey that covers a wide aspect of users\' lives. Then the app personalizes a plan that based on this survey. The plan consists of activities that the user can take part in to improve their well-being. These activities can include articles, polls, and recommendations. Along the way, the user can track their progress with photos, location checkins, and helpful text. The app is free to download but requires registration with an account through participating employers, health plans, or physicians.',
			projectImages:
			[
				'http://a2.mzstatic.com/us/r30/Purple3/v4/d9/e5/b9/d9e5b9ca-6a01-fd23-3339-1e30c5120869/screen568x568.jpeg',
				'http://a2.mzstatic.com/us/r30/Purple5/v4/19/1e/72/191e726f-075f-b0f5-6da6-e6c878a525ca/screen568x568.jpeg',
				'http://a1.mzstatic.com/us/r30/Purple4/v4/8b/82/0c/8b820c41-d3af-f9b9-c31b-cf290e7ccc57/screen568x568.jpeg',
				'http://a3.mzstatic.com/us/r30/Purple4/v4/b4/00/36/b40036c8-379c-390e-a08c-a3977991daed/screen568x568.jpeg'
			]
		},
		{
			projectName: "Scottrade Mobile App for iPhone® and iPad®",
			projectURL: "https://itunes.apple.com/us/app/scottrade-mobile-app-for-iphone/id657861657",
			projectDates: "August 2013 - February 2014",
			projectDescription: 'My involvement in this app included fixing bugs, refactoring code, and adding new features. I implemented the dashboard view (first screenshot) and parts of the money movement flow associated with Scottrade Bank® (second screenshot). The app allows users to see real time streaming quotes, create watchlists that synchronize to the Scottrade® website, and Scottrade Bank® access.',
			projectImages: 
			[
				'http://a5.mzstatic.com/us/r30/Purple6/v4/23/e2/f1/23e2f1c8-74bf-bf71-32c6-fa9d61a106a1/screen568x568.jpeg',
				'http://a4.mzstatic.com/us/r30/Purple/v4/6a/64/61/6a64611b-7763-e475-0896-e29426f3302a/screen568x568.jpeg',
				'http://a3.mzstatic.com/us/r30/Purple4/v4/42/e5/a6/42e5a6dc-492e-05eb-556e-e6b1b5da6318/screen568x568.jpeg',
				'http://a1.mzstatic.com/us/r30/Purple6/v4/0b/22/9d/0b229d50-670b-00b5-dfc9-60a87e1a484e/screen568x568.jpeg',
				'http://a5.mzstatic.com/us/r30/Purple/v4/1f/3b/6d/1f3b6dca-8647-0573-58ac-f29c90597b36/screen520x924.jpeg'
			]
		}
	]
};

Template.projectsTemplate.helpers({
	workProjects: projectsData["work_projects"],
	sideProjects: projectsData["side_projects"]
});
