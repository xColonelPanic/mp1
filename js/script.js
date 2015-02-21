// implements smooth scrolling. Finds the top of the corresponding section and scrolls to it.

function smooth_scroll()
{
  $('#homebutton').addClass('currentsection');

  $('#homebutton').click(function(){
    $('html, body').animate({
      scrollTop: $("#homesection").offset().top - 50
    }, 750);
  });
  $('#aboutbutton').click(function(){
    $('html, body').animate({
      scrollTop: $("#aboutsection").offset().top - 50
    }, 750);
  });
  $('#projectsbutton').click(function(){
    $('html, body').animate({
      scrollTop: $("#projectssection").offset().top - 50
    }, 750);
  });
  $('#contactbutton').click(function(){
    $('html, body').animate({
      scrollTop: $("#contactsection").offset().top - 50
    }, 750);
  });
}

// implements shrinking navbar and position indicator. Gets the current y offset and shrinks the navbar if below 25px and highlights a navbar button in orange if within the bounds of a particular section.

function scrolls()
{
  var shrinkHeader = 25;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.header').addClass('shrink');
    }
    else {
     $('.header').removeClass('shrink');
    }
    if(scroll >= $("#homesection").offset().top - 50 &&  scroll < $("#aboutsection").offset().top - 50)
    {
      $('#homebutton').addClass('currentsection');
      $('#aboutbutton').removeClass('currentsection');
      $('#projectsbutton').removeClass('currentsection');
      $('#contactbutton').removeClass('currentsection');

    }
    else if(scroll >= $("#aboutsection").offset().top - 50 &&  scroll < $("#projectssection").offset().top - 50)
    {
      $('#homebutton').removeClass('currentsection');
      $('#aboutbutton').addClass('currentsection');
      $('#projectsbutton').removeClass('currentsection');
      $('#contactbutton').removeClass('currentsection');
    }
    else if(scroll >= $("#projectssection").offset().top - 50 &&  scroll < $("#contactsection").offset().top - 50)
    {
      $('#homebutton').removeClass('currentsection');
      $('#aboutbutton').removeClass('currentsection');
      $('#projectsbutton').addClass('currentsection');
      $('#contactbutton').removeClass('currentsection');
    }
    else if(scroll >= $("#contactsection").offset().top - 50)
    {
      $('#homebutton').removeClass('currentsection');
      $('#aboutbutton').removeClass('currentsection');
      $('#projectsbutton').removeClass('currentsection');
      $('#contactbutton').addClass('currentsection');
    }
  });
}

// implements carousel

function carousel()
{
  // get elements
  // fade top one in
  // fade others out
  var list = $(".carousel").find(".object");
  var number_elems = list.length;
  var i = 1 % number_elems;

  function trans(elem)
  {
    if(elem == undefined)
    {
      elem = {};
      elem.data = {};
      elem.data.direction = "r";
    }
    var nextelem;
    if(elem.data.direction = "r")
    {
      nextelem = (i+1)%number_elems;
    }
    else
    {
      nextelem = Math.abs((i-1)%number_elems);
    }

    $(list[nextelem]).fadeIn({complete: function(){
      $(list[i]).fadeOut();
      i = nextelem;
    }});

    if(elem.data.callback)
    {
      elem.data.callback();
    }
    reset();
  }
  var interval = setInterval(trans, 5000);

  function reset()
  {
    clearInterval(interval);
    interval = setInterval(trans, 5000);
  }

  var lb = $('#lb');
  var rb = $('#rb');

  lb.click({direction: "l"},trans);
  rb.click({direction: "r"},trans);
}

// implements modal

function modal()
{
  $('#modal').click(function(){
    elem = $('#overlay');
    elem.css({visibility: "visible"});
  });
  $('#overlay').click(function(){
    elem = $('#overlay');
    elem.css({visibility: "hidden"});
  });
}

function getCurrentScroll()
{
  return window.pageYOffset || document.documentElement.scrollTop;
}

scrolls();
smooth_scroll();
carousel();
modal();