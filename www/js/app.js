
/*
 * Loading Spinner Animation
 */
function addLodingSpinner(uniqueDivId) {
	return function() {
		$("#" + uniqueDivId).append("<div class=\"up-loadingSpinner\"> \
										<img src=\"img/loadingspinner.gif\"></img> \
									</div>");
	};
}

function removeLoadingSpinner(uniqueDivId) {
	return function() {
		$("#" + uniqueDivId).children().first().remove();
	}
}

/*
 * Template Loading Functions
 */
function render(tmpl_name) {
    if ( !render.tmpl_cache ) { 
        render.tmpl_cache = {};
    }

    if ( ! render.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = 'js/templates';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.tmpl';

        var tmpl_string;
        $.ajax({
            url: tmpl_url,
            method: 'GET',
            dataType: 'html',
            async: false,
            success: function(data) {
                tmpl_string = data;
            }
        });

		tmpl_string = removeTabs(tmpl_string);
        render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
                
    }

    return render.tmpl_cache[tmpl_name];
}

function removeTabs(tmpl) {
	return tmpl.replace(/\t/g, '');
}
