/*global _, $, Backbone, console */


(function(){

'use strict';

	var calcentral = calcentral || {};

	///////////
	// Model //
	///////////
	calcentral.User = Backbone.Model.extend({
		initialize: function() {
			//console.log('User model has been initialized.');
		},
		defaults: {
			preferredName: 'tewtwer'
		}
	});

	// Save the User to the database
	// user.save();

	// Get/set the preferred name
	// christian.get('preferredName');
	// christian.set({
	//  preferredName: 'Natalie'
	// });

	////////////////
	// Collection //
	////////////////
	var UserList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: calcentral.User
	});

	// Create our global collection of **Todos**.
	calcentral.Users = new UserList();


	//////////
	// View //
	//////////
	calcentral.userView = Backbone.View.extend({
		el: '#main',
		userTemplate: _.template($('#user-template').html()),
		initialize: function() {
			this.model.on('change', this.render, this);
		},
		render: function() {
			this.$el.html(this.userTemplate({
				preferredName: this.model.get('preferredName')
			}));
			$('footer').html(this.model.get('preferredName'));
			return this;
		},
		events: {
			'submit form': 'update'
		},
		update: function() {
			this.model.set({
				preferredName: $('input', this.$el).val()
			});
			/*this.model.save({
				preferredName: this.get('preferredName')
			});*/
			return false;
		}
	});

	//////////
	// Init //
	//////////
	
	var user = new calcentral.User({
		preferredName: 'Christian Vuerings'
	});

	new calcentral.userView({model: user});

	user.set({
		preferredName: 'Natalie'
	});
})();