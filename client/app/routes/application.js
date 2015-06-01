import Ember from 'ember';

export default Ember.Route.extend({
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
