console.log("(•_•)");
console.log("Get out of my console!");
console.log("This website was made by Peter Braunstein");
console.log("peter.braunstein@uconn.edu");
console.log("860.841.2652");
console.log("Connect with me on LinkedIn ---> https://www.linkedin.com/in/peterbraunstein");


setTimeout(doSomething, 100);
setTimeout(doSomethingTwo, 100);

function doSomething() {
   $('.titleContainer').removeClass('hidden');
};

function doSomethingTwo() {
   $('.rightNav').removeClass('hidden');
   $('.goDown').removeClass('hidden');
   $('.bubbleContainer').removeClass('hidden');
};


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





// toggle hamburger menu








$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});





$('body').on('click','#carouselID .carousel-control',function() {
   $(this).closest('.carousel').carousel( $(this).data('slide') );
});



$('#showMore').click(function() {
  $('#moreProjects').toggleClass("hidden");
  console.log("helloa");
});






$(document).ready(function(){

  $(".hamburger").click(function(){
    $(".fullScreenMenu").toggleClass("hidden")
    $(".barTop").toggleClass("closeTop");
    $(".barBottom").toggleClass("closeBottom");
  });
  $(".closer").click( function () {
    $(".fullScreenMenu").toggleClass("hidden")
    $(".barTop").toggleClass("closeTop");
    $(".barBottom").toggleClass("closeBottom");
  });
  $(".menuItemFull").click( function () {
    $(".fullScreenMenu").toggleClass("hidden")
    $(".barTop").toggleClass("closeTop");
    $(".barBottom").toggleClass("closeBottom");
  });

});





// jumper down arrow taking away claser

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll != 0) {
        $(".glyphicon-triangle-bottom").removeClass("bounce");
    } else {
        $(".glyphicon-triangle-bottom").addClass("bounce");
    }
});




// nav bar maybe



/** ===========================================
    Hide / show the master navigation menu
============================================ */

  // console.log('Window Height is: ' + $(window).height());
  // console.log('Document Height is: ' + $(document).height());

//   var previousScroll = 0;
//
//   $(window).scroll(function(){
//
//     var currentScroll = $(this).scrollTop();
//
//     /*
//       If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
//     */
//     if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
//       /*
//         If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
//       */
//       if (currentScroll > previousScroll){
//         window.setTimeout(hideNav, 100);
//       /*
//         Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
//       */
//       } else {
//         window.setTimeout(showNav, 100);
//       }
//       /*
//         Set the previous scroll value equal to the current scroll.
//       */
//       previousScroll = currentScroll;
//     }
//
//   });
//
//   function hideNav() {
//     $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
//   }
//   function showNav() {
//     $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
//   }
//
// });
