var projectsData = [ 
{
	projectName: 		'Hoarders',
	projectDescription: 'This project was created out of frustration that I (and possibly many other people) have: how the heck do I manage data in different cloud services? This project attempts to solve this issue using some python and in the future, an OSX app. Still in development.',
	projectURL: 		'https://github.com/ssathy2/hoarders'
}, 
{
	projectName: 		'SWAiOS',
	projectDescription: 'The current Southwest iPhone iOS app is terrible and I wanted to create something that\'s a lot better. This app allows me to play around with a reactive programming framework for iOS called Reactive Cocoa and also includes some neat transtions and blurring effects. I\'ll probably reuse a lot of the categories in future projects as they\'re really useful. Still in development.',
	projectURL:  		'https://github.com/ssathy2/SWAiOS'
},
{
	projectName: 	'H4ck3rN3ws',
	projectDescription: 'A toy iPhone/iPad app for the website <a href=\"https://ycombinator.com/news\">Hacker News</a>. App presents content on website in an easy to read manner for iOS devices. This was the first app I wrote from scratch so the code is most likely really messy and the UI leaves much to be desired.',
	projectURL:'https://github.com/ssathy2/H4ck3rN3ws'
},
{
	projectName:    'My Website',
	projectDescription: 'I didn\'t want to create my personal website with an existing platform like Wordpress so I\'m instead creating my own website from scratch using Meteor JS. I created the first version of my website using Ruby on Rails and bootstrap but it looked very plain.',
	projectURL: 'https://github.com/ssathy2/siddsathyam_meteor'
}
];

Template.projectsTemplate.helpers({ 
	projects: projectsData 
});