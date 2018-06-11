var floatLabels = function(){
	var showClass = 'show';
  	var input = $(':input, select','.form');
	// IE9 doesn't fully support the 'input' event
	var inputEvent = 'input';
	if ($('html').hasClass('ie9')) {
		inputEvent = 'selectionchange propertychange keyup keydown';
	}
	input.on('checkval', function(){
		var label = $(this).next('label');
		if (this.value !== '') {
			$(this).addClass(showClass);
			label.removeClass('show-init');
	  		label.addClass(showClass);
		} 
		else {
			if (!label.parents().hasClass('error')) {
				label.removeClass('show-init');
				label.removeClass(showClass);
				$(this).removeClass(showClass);
			}
		}
	}).on(inputEvent, function(){ // check when input is populated
		$(this).trigger('checkval');
	}).on('blur', function(){ // check when moving out of focus for instances where the field is prepopulated (prepopulation doesn't trigger the input event it seems)
		$(this).trigger('checkval');
		$(this).parent().siblings().children(':text').trigger('checkval');
	}).on('focus',function(){ // removes initial state
		var label = $(this).next('label');
		label.removeClass('show-init');
	});
	$(window).on('pageshow', function(){ // check when input is populated if loaded from cache
		input.trigger('checkval');
	});
}

/*
* Set up and initialisation
*/
$(function () {
	floatLabels();

	// add class to INPUT parent when focussed in order to style it like a normal focussed toggle-controls
	$(document).on('focusin', ':input', function(){
		$(this).parent().addClass('focus');
	});
	$(document).on('focusout', ':input', function(){
		$(this).parent().removeClass('focus');
	});
	$(window).load(function () {
	  $('html').removeClass('js-temp-hide');
	});
});