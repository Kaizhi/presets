import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var scope = this;
		var req = $.ajax({
			url: 'http://localhost:1337/user/current',
			xhrFields: { withCredentials: true }
		});

		return Ember.RSVP.resolve(req).then(function (data) {
			console.log(data);
			scope.store.push('user', {
			  id: data.id,
			  username: data.username
			});
			return data;

		}, function (err) {
			console.log('rejected');
			return {};
		});

	},
  	actions: {
		openModal: function(modalName) {
		  	return this.render(modalName, {
				into: 'application',
				outlet: 'modal'
			});
		},
		closeModal: function(evt) {
		  	return this.disconnectOutlet({
		   		outlet: 'modal',
		    	parentView: 'application'
		  	});
		}
  	}
});
