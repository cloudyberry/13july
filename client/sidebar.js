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
		Session.set('name',null);
	},
	"click #login-link": function(event) {
	//'click button'(event, instance) {


		try {


			var loginUrl = 'https://openid.nus.edu.sg/auth/' +
			'?openid.ns=http://specs.openid.net/auth/2.0' +
			'&openid.mode=checkid_setup' +
			'&openid.return_to=http://localhost:3000' +
			'&openid.realm=' + Meteor.absoluteUrl() +
			'&openid.ax_mode=fetch_request' +
			'&openid.ns.ax=http://openid.net/srv/ax/1.0' +
			'&openid.ns.sreg=http://openid.net/extensions/sreg/1.1' +
			'&openid.identity=http://specs.openid.net/auth/2.0/identifier_select' +
			'&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select' +
			'&openid.ax.type.contact_email=http://axschema.org/contact/email' +
			'&openid.ax.type.fullname=http://axschema.org/namePerson' +
			'&openid.ax.type.user_id= http://axschemas.org/user/id' +
			'&openid.ax.type.nickname=http://axschema.org/contact/nickname' +
			'&openid.ax.required=contact_email, fullname' +
			'&oopenid.sreg.required=email' +
			'&oopenid.sreg.required=fullname' +
			'&oopenid.sreg.required=nickname' +
			"&controller=server&action=index&module=default"

			OAuth.launchLogin({
				loginService: 'nus',
				loginStyle: "redirect",
				loginUrl: loginUrl,
				credentialRequestCompleteCallback: function(data)
				{
					console.log(data)
				},
				credentialToken: Random.secret()
			});

		} catch (e) {
			console.log("error")
		}

	},

});

Template.sidebar.helpers({

	admin: function() {
	  var adminId = Meteor.users.findOne({"emails.address": "e0201623@u.nus.edu"})._id;
		var userId = Meteor.userId();
	 	if (userId === adminId) {
		return true;
	}
		// if (Session.get('name')=='Shi Kai Ning') {
		// 	return true;
		// }
},
	nonAdmin: function() {
			var adminId = Meteor.users.findOne({"emails.address": "e0201623@u.nus.edu"})._id;
			var userId = Meteor.userId();
			if (userId === adminId) {
			return false;
		}
			// if (Session.get('name')!='Shi Kai Ning') {
			// 	return true;
			// }
	}
});
