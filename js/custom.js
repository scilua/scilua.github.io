
jQuery(function($) {
    $('a[github-release]').each(function() {
        var $a = $(this);
        var $repo = $a.attr('github-release');

        $.getJSON($repo).done(function (json) {
            var release = json[0];
            var download_url = release.zipball_url;
            $a.attr("href", download_url);
        });
    });   
});
