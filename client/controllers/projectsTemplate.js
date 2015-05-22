var projectsData = [
{
	projectName: 		'Hakken',
	projectDescription: 'A native iOS Hackernews app that I\'m currently working on. This app is on the app store.',
	projectURL:  		'https://github.com/ssathy2/Hakken',
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
	projectDescription: 'With the release of the official Hackernews (https://news.ycombinator.com/news) API, I didn\'t like the way in which comments and stories were being returned from the API so I created a wrapper around that API that will return full JSON responses instead of arrays of IDs',
	projectURL:  		'https://github.com/ssathy2/hn-wrapper',
	projectImages:[]

},
{
	projectName: 		'SWAiOS',
	projectDescription: 'The current Southwest iPhone iOS app is terrible and I wanted to create something that\'s a lot better. This app allows me to play around with a reactive programming framework for iOS called Reactive Cocoa and also includes some neat transtions and blurring effects. I\'ll probably reuse a lot of the components from this project as they will prove to be very useful in future projects.',
	projectURL:  		'https://github.com/ssathy2/SWAiOS',
	projectImages:
	[
	  	'images/swaios_login.png',
		'images/swaios_side_panel.png',
		'images/swaios_user_home.png'
	]
},
{
	projectName:    'My Website',
	projectDescription: 'I didn\'t want to create my personal website with an existing platform like Wordpress so I\'m instead creating my own website from scratch using Meteor JS. I created the first version of my website using Ruby on Rails and bootstrap but it looked very plain.',
	projectURL: 'https://github.com/ssathy2/siddsathyam_meteor',
	projectImages: []
}
];

Template.projectsTemplate.helpers({
	projects: projectsData
});
