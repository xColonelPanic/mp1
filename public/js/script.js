function smooth_scroll(){$("#homebutton").addClass("currentsection"),$("#homebutton").click(function(){$("html, body").animate({scrollTop:$("#homesection").offset().top-50},750)}),$("#aboutbutton").click(function(){$("html, body").animate({scrollTop:$("#aboutsection").offset().top-50},750)}),$("#projectsbutton").click(function(){$("html, body").animate({scrollTop:$("#projectssection").offset().top-50},750)}),$("#contactbutton").click(function(){$("html, body").animate({scrollTop:$("#contactsection").offset().top-50},750)})}function scrolls(){var a=25;$(window).scroll(function(){var b=getCurrentScroll();b>=a?$(".header").addClass("shrink"):$(".header").removeClass("shrink"),b>=$("#homesection").offset().top-50&&b<$("#aboutsection").offset().top-50?($("#homebutton").addClass("currentsection"),$("#aboutbutton").removeClass("currentsection"),$("#projectsbutton").removeClass("currentsection"),$("#contactbutton").removeClass("currentsection")):b>=$("#aboutsection").offset().top-50&&b<$("#projectssection").offset().top-50?($("#homebutton").removeClass("currentsection"),$("#aboutbutton").addClass("currentsection"),$("#projectsbutton").removeClass("currentsection"),$("#contactbutton").removeClass("currentsection")):b>=$("#projectssection").offset().top-50&&b<$("#contactsection").offset().top-50?($("#homebutton").removeClass("currentsection"),$("#aboutbutton").removeClass("currentsection"),$("#projectsbutton").addClass("currentsection"),$("#contactbutton").removeClass("currentsection")):b>=$("#contactsection").offset().top-50&&($("#homebutton").removeClass("currentsection"),$("#aboutbutton").removeClass("currentsection"),$("#projectsbutton").removeClass("currentsection"),$("#contactbutton").addClass("currentsection"))})}function carousel(){function a(a){void 0==a&&(a={},a.data={},a.data.direction="r");var f;f=(a.data.direction="r")?(e+1)%d:Math.abs((e-1)%d),$(c[f]).fadeIn({complete:function(){$(c[e]).fadeOut(),e=f}}),a.data.callback&&a.data.callback(),b()}function b(){clearInterval(f),f=setInterval(a,5e3)}var c=$(".carousel").find(".object"),d=c.length,e=1%d,f=setInterval(a,5e3),g=$("#lb"),h=$("#rb");g.click({direction:"l"},a),h.click({direction:"r"},a)}function modal(){$("#modal").click(function(){elem=$("#overlay"),elem.css({visibility:"visible"})}),$("#overlay").click(function(){elem=$("#overlay"),elem.css({visibility:"hidden"})})}function getCurrentScroll(){return window.pageYOffset||document.documentElement.scrollTop}scrolls(),smooth_scroll(),carousel(),modal();