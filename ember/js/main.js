// Ember.js example
(function(){

	/*global console, Em*/

	'use strict';

	var calcentral = calcentral || {};

	///////////
	// Model //
	///////////

	calcentral.User = Em.Object.extend({
		preferedName: 'Slim Shady',
		what: function() {
			// We shouldn't use this.preferredName here, use getters/setters instead
			console.log('My name is ' + this.get('preferedName'));
		}
	});

	var jan = calcentral.User.create();
	jan.what();

})();