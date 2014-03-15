window.onload = function (){
    var txt = $('#my_info').text();
    var timeOut;
    var txtLen = txt.length;
    var char = 0;
    $('#my_info').text('|');
    (function typeIt() {   
        var humanize = Math.round(Math.random() * (150 - 30)) + 30;
        timeOut = setTimeout(function() {
            char++;
            var type = txt.substring(0, char);
            $('#my_info').text(type + '|');
            typeIt();

            if (char == txtLen) {
                $('#my_info').text($('#my_info').text().slice(0, -1)); // remove the '|'
                clearTimeout(timeOut);
            }

        }, humanize);
    }());
}
    