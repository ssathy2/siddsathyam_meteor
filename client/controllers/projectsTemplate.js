var projectsData = [
{
	projectName: 		'Hakken',
	projectURL:  		'https://github.com/ssathy2/Hakken',
	projectDescription: 'A native iOS Hackernews app that I\'m currently working on. Fully opensourced, it uses Reactive Cocoa and an model-view-view model architecture. For data services, it uses the hn-wrapper that I created to provide a convienient API wrapper around the YCombinator news API to easily consume stories on Hacker News. It currently supports the ability to view the top stories, save stories to a device read later queue, and view comments for a given stories. Future versions will have the ability to view Ask HN stories, Jobs, New stories, and Show HN stories. This app is on the app store.',
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
	projectDescription: 'With the release of the official Hackernews (https://news.ycombinator.com/news) API (https://github.com/HackerNews/API), I didn\'t like the way in which comments and stories were being returned from the API so I created a wrapper around that API that will return full JSON responses instead of arrays of IDs. The wrapper returns Top Stories, Ask HN stories, new stories, Jobs, and Show HN stories. This wrapper is live in two places: Heroku: http://damp-bayou-8238.herokuapp.com/ and Digital Ocean (as a subdomain of siddsathyam.com): http://hackernews-api-newyork1.siddsathyam.com',
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
	projectDescription: 'I didn\'t want to create my personal website with an existing platform like Wordpress so instead I created my own website from scratch using MeteorJS. This is a way for me to play around with MeteorJS and web development in general. Hosted on Digital Ocean.',
	projectURL: 'https://github.com/ssathy2/siddsathyam_meteor',
	projectImages: []
}
];

Template.projectsTemplate.helpers({
	projects: projectsData
});
