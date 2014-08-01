$(document).ready(function(){
	//select2
	// $('select.select2').select2();

	// footable
	$('.footable').footable();

		$('#filter-account').on('propertychange change keyup paste input', function(e) {
			e.preventDefault();
			$('.table').trigger('footable_filter', {filter: $('#filter-account').val()});
		});
		$('#filter-status').change(function(e) {
			e.preventDefault();
			if ($('#filter-status').val() == "Любой") {
				$('.table').trigger('footable_clear_filter');
			}
			else {
				$('.table').trigger('footable_filter', {filter: $('#filter-status').val()});
				return $('#filter-status').val();
			}
		});
});