// Ember.js example

/*global Calcentral, console, Em*/

window.Calcentral = Em.Application.create();

(function(){

	'use strict';

	///////////
	// Model //
	///////////

	Calcentral.User = Em.Object.extend({
		preferredName: null,
		what: function() {
			// We shouldn't use this.preferredName here, use getters/setters instead
			console.log('My name is - ' + this.get('preferredName'));
		},
		nameChanged: function() {
			console.log('The name changed to - ' + this.get('preferredName'));
		}.observes('preferredName')
	});

	var slimShady = Calcentral.User.create({
		preferredName: 'Slim Shady'
	});
	slimShady.what();

	// Change the preferredName
	slimShady.set('preferredName', 'The real Slim Shady');


	////////////////
	// Controller //
	////////////////

	Calcentral.userController = Em.Object.create({
		user: slimShady
	});

	//////////
	// View //
	//////////

	Calcentral.UserText = Em.TextField.extend({
		formBlurredBinding: 'Calcentral.userController.formBlurred'
	});

	Calcentral.UserView = Em.View.create({
		templateName: 'template-user',
		preferredNameBinding: 'Calcentral.userController.user.preferredName'
	});
	Calcentral.UserView.append();

})();
