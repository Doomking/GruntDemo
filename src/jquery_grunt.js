/*
 * jquery_grunt
 * https://github.com/doomking/gruntDemo
 *
 * Copyright (c) 2013 doomking
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jquery_grunt = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jquery_grunt = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jquery_grunt.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jquery_grunt.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jquery_grunt = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
