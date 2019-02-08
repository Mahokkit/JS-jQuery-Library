window.onscroll = function() {
    /* product side nav */
    // for desktop product page side nav
    if($(window).scrollTop() > $("#headeranchor").height()) {
       $('#anchor').css('position','fixed');
       $('#anchor').css('top','0'); 
    } else if ($(window).scrollTop() <= $("#headeranchor").height()) {
      $('#anchor').css('position','');
      $('#anchor').css('top','');
    }  
    
    if ($('#anchor').offset().top + $("#anchor").height() > $("#footer").offset().top) {
      $('#anchor').css('top',-($("#anchor").offset().top + $("#anchor").height() - $("#footer").offset().top));
    }
    /* end product side nav */

    // display category and sorting filter on product category page
    /* begin category page */
    var headerAn = document.getElementsByClassName("mobile-top-header");
    var filterHead = document.getElementById("filterMenu");
    var filterHeadSort = document.getElementById("filterSort");
    var headSticky = headerAn.offsetTop;
    if (window.pageYOffset > headSticky) {
      filterHead.classList.add("filterMenu-anchor");
      filterHeadSort.classList.add("filterMenu-anchor");
    } else {
      filterHead.classList.remove("filterMenu-anchor");
      filterHeadSort.classList.remove("filterMenu-anchor");
    }
    /* end category page  */
}
  

/* display search bar on mobile */
function searchMe() {
    var x = document.getElementById("searchBar");

    if (x.style.display != 'block') {
    console.log('display block')
        x.style.display = 'block';
        if (document.getElementById("mobileMenu").style.display == 'block')
        {
        document.getElementById("mobileMenu").style.display = 'none';
        }
        if (document.getElementById("filterSort").style.display == 'block') {
    document.getElementById("filterSort").style.display = 'none';
    }
    if (document.getElementById("filterMenu").style.display == 'block') {
    document.getElementById("filterMenu").style.display = 'none';
    }
    } else {
    console.log('display none')
        x.style.display = 'none';
    }
}
/* end display search bar on mobile */

/* display menu bar on mobile */
function mainMenu() {
    var x = document.getElementById("mobileMenu");

    if (x.style.display != 'block') {
    console.log('display block')
        x.style.display = 'block';
        document.getElementById("closeMobileMenu").style.display = 'inline-block';
        document.getElementById("openMobileMenu").style.display = 'none';
        if (document.getElementById("searchBar").style.display == 'block')
        {
        document.getElementById("searchBar").style.display = 'none';
        }
        if (document.getElementById("filterSort").style.display == 'block') {
    document.getElementById("filterSort").style.display = 'none';
    }
    if (document.getElementById("filterMenu").style.display == 'block') {
    document.getElementById("filterMenu").style.display = 'none';
    }
    } else {
    console.log('display none')
        x.style.display = 'none';
        document.getElementById("closeMobileMenu").style.display = 'none';
        document.getElementById("openMobileMenu").style.display = 'inline-block';
    }
}
/* end display menu bar on mobile */

function moblieCategoryFilter(){
    var x = document.getElementById("filterMenu");

    if (x.style.display != 'block') {
    x.style.display = 'block';

    if (document.getElementById("mobileMenu").style.display == 'block')
    {
    document.getElementById("mobileMenu").style.display = 'none';
    }

    if (document.getElementById("searchBar").style.display == 'block')
    {
    document.getElementById("searchBar").style.display = 'none';
    }
    if (document.getElementById("filterSort").style.display == 'block') {
    document.getElementById("filterSort").style.display = 'none';
    }
    } else {
    x.style.display = 'none';
    }
}

function moblieCategorySortFilter(){
    var x = document.getElementById("filterSort");

    if (x.style.display != 'block') {
    x.style.display = 'block';
    if (document.getElementById("mobileMenu").style.display == 'block')
    {
    document.getElementById("mobileMenu").style.display = 'none';
    }
    
    if (document.getElementById("searchBar").style.display == 'block')
    {
    document.getElementById("searchBar").style.display = 'none';
    }
    if (document.getElementById("filterMenu").style.display == 'block') {
    document.getElementById("filterMenu").style.display = 'none';
    }
    } else {
    x.style.display = 'none';
    }
}

function hideSearchAndMenu(x) {
    if (x.matches) { // If media query matches
    console.log('hide stuff if');
        document.getElementById('mobileMenu').style.display = 'none';
        document.getElementById('searchBar').style.display = 'none';
    } else {
    console.log('hide stuff else');
    document.getElementById('mobileMenu').style.display = 'none';
        document.getElementById('searchBar').style.display = 'none';
    }
}

function removeMarginX(x){
    var id = document.getElementById("mobileBG");
    console.log(id);
    if (x.matches){
    id.classList.remove("grid-margin-x");
    } else {
    id.classList.add("grid-margin-x");
    }
}

// hide and remove class base on width size
var widthCheck = window.matchMedia("(max-width: 769px)");
hideSearchAndMenu(widthCheck); // Call listener function at run time
widthCheck.addListener(hideSearchAndMenu); // Attach listener function on state changes

var width767 = window.matchMedia("(max-width: 767px)");
removeMarginX(width767);
width767.addListener(removeMarginX);

// close announcment 
close = document.getElementById("close");
close.addEventListener('click', function() {
    note = document.getElementById("note");
    note.style.display = 'none';
}, false);