/*
  Initialize all of MaterialCSS JavaScript
  If you want M.AutoInit() to ignore a certain element,
  you can add the class .no-autoinit to the element and it will not be initialized by autoinit.
*/
M.AutoInit();

// Begin
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, options);

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

$(document).ready(function(){
  $('ul.tabs').tabs({
    swipeable : true,
    responsiveThreshold : 1920
  });
});
