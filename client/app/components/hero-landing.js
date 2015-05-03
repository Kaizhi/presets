import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function () {
		this.set('heroEl', $('.hero'));

		$(window).on('resize', Ember.run.bind(this, this.handleResize));
		this.get('heroEl').css('height', window.innerHeight);
	},

	handleResize: function (event) {
		this.get('heroEl').css('height', event.target.innerHeight);
	},

	willDestroy: function() {
		$(window).off('resize');
	}
});
