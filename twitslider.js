function twitcalc() {
    var c = $('#twitter_update_list').css('marginTop');
    var d = parseInt(c);
    var e = d - 45;
    if (e <= -315) {
        var f = 0 + "px";
        document.getElementById("twitter_update_list").style.marginTop = f;
        twitfader();
    } else {
        var f = e + "px";
        document.getElementById("twitter_update_list").style.marginTop = f;
    }
};

function twitfader() {
    $('#twitter_update_list').fadeOut(5);

    function twitfadein() {
        $('#twitter_update_list').fadeIn(100);
    }
    setTimeout(twitfadein, 300)
}
setInterval(twitcalc, 6000);