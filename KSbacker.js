var i;
var text = "";
for (i = 0; i < document.getElementsByClassName('pledge__amount').length; i++) {
    text += document.getElementsByClassName('pledge__amount')[i].children[0].innerText + ";" + document.getElementsByClassName('pledge__backer-stats')[i].innerText + "\n";
    ;
}
