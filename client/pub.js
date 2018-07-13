if (Meteor.isServer) {
	//only return reviews if the admin has vetted
	/*Meteor.publish('Jokes', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('not authorized');
		} else {
			return Jokes.find();
		}
	});
	Meteor.publish('Users', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('not authorized');
		} else {
			return Meteor.users.find();
		}
	});*/

	Meteor.publish('Reviews', function() {

			return Reviews.find();

	});

	Meteor.publish('Comments', function() {

			return Comments.find();

	});

	Meteor.publish('Users', function() {

			return Meteor.users.find();

	});

}
