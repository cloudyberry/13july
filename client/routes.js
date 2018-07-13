Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// reviews
	this.route('reviews', {
		path: '/reviews',
		template: 'reviews'
	});

	// Login
	this.route('login', {
		path: '/',
		template: 'login'
	});

	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	// Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});

	this.route('approved', {
		path: '/approved',
		template: 'approved'
	});

	this.route('unapproved', {
		path: '/unapproved',
		template: 'unapproved'
	});
});
