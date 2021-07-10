$(document).ready(function() {

    $(".profile-photo img").mouseover(function() {
        $(this).css({"width":"300px","height":"300px","cursor":"pointer"});
    });

    $(".profile-photo img").mouseout(function() {
        $(this).css({"width":"200px","height":"200px"});
    });
});