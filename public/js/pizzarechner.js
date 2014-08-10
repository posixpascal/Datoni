'use strict';

define('pizzaRechner', function () {
	function PizzaRechner() {
		this.pizzas = [];

		$('body').on('click', '.pizza-calculator', function () {
			$('.pizza-rechner').removeClass('hide').fadeIn();
			$('body').animate({
				scrollTop: 0
			}, 1000);
		});
	}

	PizzaRechner.prototype.render = function ($jqel) {
		if (this.isActive === 1) { 
			this.jqEl.remove(); 
		}
		// stupid little jslint :)
		var $ = window.$ || function () {};

		this.jqEl = $($jqel);
		var jqEl = this.jqEl;
		this.jqEl.find('.close').on('click', function () {
			jqEl.fadeOut('fast');
		});
	};

	return PizzaRechner;	
}); // 