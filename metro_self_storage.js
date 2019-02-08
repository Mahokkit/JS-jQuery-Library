// for the termination notice page - toggle to set display to none or to list-item (default)
jQuery(document).ready(function ($) {
    $("#new_mailing_address0").click(function(){
        $("#hid1").toggle();
        $("#hid2").toggle();
        $("#hid3").toggle();
    });
})

// for the storage guide page - add and remove class base on value of the select menu
jQuery(function($) {
    $('select#sizeselector').on('change', function() {
        var e = document.getElementById("sizeselector");
        
        var newValue = e.options[e.selectedIndex].value;

        // $('#' + strUser ).addClass( "uk-active" );
        switch(newValue) {
            case '55': 
                $('li#55').addClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '510':
                $('li#55').removeClass( "uk-active");
                $('li#510').addClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '515':
                $('li#55').removeClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').addClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '1010': 
                $('li#55').removeClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').addClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '1015': 
                $('li#55').removeClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').addClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '1020': 
                $('li#55').removeClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').addClass( "uk-active");
                $('li#1025').removeClass( "uk-active");
                break;
            case '1025':
                $('li#55').removeClass( "uk-active");
                $('li#510').removeClass( "uk-active");
                $('li#515').removeClass( "uk-active");
                $('li#1010').removeClass( "uk-active");
                $('li#1015').removeClass( "uk-active");
                $('li#1020').removeClass( "uk-active");
                $('li#1025').addClass( "uk-active");
                break;
            default:
                console.log('No id');
        }
    });
});


// for news and event that will hide the dynamic banner (dBanner) at the URL, else hide the dynamic banner from ZOO
if (/item/.test(window.location.href)) {
    document.getElementById('dBanner').style.display = 'none';
} else {
    document.getElementById('dZoo').style.display = 'none';
}