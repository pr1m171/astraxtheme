$(window).load(function() {
    $("#username").focus();
});

$(document).ready(function() {
    $("#submit").click(function() {
        $.cookie("airtime_locale", $("#locale").val(), {path: '/'});
    });
    $("#locale").css("display","none");
	$("#locale-label").css("display","none");
});
