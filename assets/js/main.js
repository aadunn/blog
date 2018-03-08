/*
 * animate home page post links on hover
 */
$('.post-summary').hover(
	function() {
		$(this).animate({opacity: 1}, 100);
	},
	function() {
		$(this).animate({opacity: .7}, 100);
	}
);
