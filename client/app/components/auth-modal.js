import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function () {
		console.log('inserted');
	},

  	actions: {
		click: function(evt) {
			//Pass the click action defined in the signup/login template up to router
      		return this.sendAction('click');
		}
  	}
});
