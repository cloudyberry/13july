Template.sidebar.rendered = function(){

}

Template.sidebar.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("you Are Now Logged Out", "success", "growl-top-right");
			}
		});
	},
});

Template.sidebar.helpers({

	admin: function() {
	  var adminId = Meteor.users.findOne({username: 'Admin'})._id;
		var userId = Meteor.userId();
	 	if (userId === adminId) {
		return true;
}

},
	nonAdmin: function() {
			var adminId = Meteor.users.findOne({username: 'Admin'})._id;
			var userId = Meteor.userId();
			if (userId !== adminId) {
			return true;
		}
	},

	loggedIn: function() {
			var fullname = (Router.current().params.query["openid.ax.value.fullname"]);
			if (fullname != null) {
				return true;
			}
	},


	loggedOut: function() {
			var fullname = (Router.current().params.query["openid.ax.value.fullname"]);
			if (fullname == null) {
				return true;
			}
	}
});
