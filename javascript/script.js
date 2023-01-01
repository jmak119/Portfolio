$(document).ready(function() {
    $ ("p").hide();

    $("click-text").click(function() {
        $("#hidden").toggle();
    });
});
