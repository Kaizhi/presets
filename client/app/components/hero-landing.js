import Ember from 'ember';

var navHeight = 65;

export default Ember.Component.extend({
	actions: {
		scrollToContent: function () {
			var top = parseInt(this.get('heroEl').css('height'), 10);

			$('html, body').animate({
				scrollTop: top - navHeight
			}, 900);
		}
	},

	didInsertElement: function () {
		this.set('heroEl', $('.hero'));

		$(window).on('resize', Ember.run.bind(this, this.handleResize));
		$(window).on('scroll', Ember.run.bind(this, this.handleScroll));

		this.get('heroEl').css('height', window.innerHeight);
		this.set('height', window.innerHeight);
	},

	handleResize: function (event) {
		this.get('heroEl').css('height', event.target.innerHeight);
		this.set('height', event.target.innerHeight);
	},

	handleScroll: function (event) {
		var $nav = $('.navbar');
		console.log(window.scrollY);

		if (window.scrollY > this.get('height') / 2) {
			$nav.removeClass('top');
		} else {
			$nav.addClass('top');
		}
	},

	willDestroy: function() {
		$(window).off();
	}


});
