(function($) {
	$(document).ready(function() {
		var $ctx = $(this).find('.mod-layout');
console.log($ctx);

		// BIND

		// create new note
		$ctx.on('click', '.js-new', function(e){
			e.preventDefault();
console.log('create new note');
		});

		// switch style
		$ctx.on('click', '.js-switch-style', function(e){
			e.preventDefault();
console.log('switch style');
		});

		// sort by data-sort
		$ctx.on('click', '.js-sort', function(e){
			e.preventDefault();
console.log('sort by data-sort');

			var $sorter = $(this),
				by = $sorter.data('sort');
console.log('data-sort=',by);
		});

		// filter by data-filter
		$ctx.on('click', '.js-filter', function(e){
			e.preventDefault();
console.log('filter by data-filter');

			var $filter = $(this),
				by = $filter.data('filter');
console.log('data-filter=',by);
		});

		// edit via data-item
		$ctx.on('click', '.js-edit', function(e){
			e.preventDefault();
console.log('edit via data-item');

			var $item = $(this),
				i = $item.data('item');
console.log('data-item=',i);
		});

		// toggle item detail and icon
		$ctx.on('click', '.js-expand', function(e){
console.log('toggle item detail and icon');
			var $this= $(this),
				$p = $this.find('p'),
				$icon = $this.find('i');

			$p.toggleClass('ellipsis');
			$icon.toggleClass('icon-zoom-in').toggleClass('icon-zoom-out');
		});
	});
})($);