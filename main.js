(function($) {
	function JSONLoaded(data, err, jqXHR) {
		function BuildRow(index, server) {
			if(index == 0) {
				console.log(server);
			}
			$('table#serverTable').append('<tr id="' + index + '"></tr>');
			var htmlStr = '<td>' + server.name + '</td><td>'
			if(server.cmp_state == 'running')
				htmlStr += '<div class="statButton"></div>'
			htmlStr += '</td><td>' + server.account.name + '</td><td>' + server.location.datacenter.name + '</td><td>';
			if(server.cpu_cores === null)
				htmlStr += 'N/A';
			else
				htmlStr += server.cpu_cores;
			htmlStr += '</td><td>N/A</td><td>';
			if(server.ram_mb === null)
				htmlStr += 'N/A';
			else
				htmlStr += server.ram_mb;
			htmlStr += '</td><td>'
			if(server.volumes_mb === null)
				htmlStr += 'N/A';
			else
				htmlStr += server.volumes_mb;
			htmlStr += '</td>';
			$('tr#' + index).append(htmlStr);
		}

		$.each(data, BuildRow);
	}

	$.getJSON("table.json", JSONLoaded);
})(jQuery);