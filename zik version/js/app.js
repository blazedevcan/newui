$(document).ready(function(e) {

$(function() {
                $('.slidemenuwrapper').stop().animate({'marginLeft':'-50px'},0);
				$('.slidemenuwrapper').hide();

                $('.myhome2').hover(
                    function () {
						//$('.slidemenuwrapper').animate({'opacity','1'},200);
						//$(".slidemenuwrapper").fadeIn();
						//$('.myhome2').animate({'width':'500px'});
                        $('.slidemenuwrapper').stop().animate({'marginLeft':'-12px'},200);
						$('.slidemenuwrapper').show();
                    },
                    function () {
						//$('.slidemenuwrapper').animate({'opacity','0'},200);
						//$(".slidemenuwrapper").fadeOut();
						//$('.myhome2').animate({'width':'100px'});
                        $('.slidemenuwrapper').stop().animate({'marginLeft':'-50px'},200);
						$('.slidemenuwrapper').hide();
                    }
                );
				
				
				$('#myhome3').mouseenter(function () {
						//$('.slidemenuwrapper').animate({'opacity','1'},200);
						//$(".slidemenuwrapper").fadeIn();
						//$('.myhome2').animate({'width':'500px'});
                        $('.slidemenuwrapper').stop().animate({'marginLeft':'-12px'},200);
						$('.slidemenuwrapper').show();
                    });
                  $('.myhome3').mouseleave(function () {
						//$('.slidemenuwrapper').animate({'opacity','0'},200);
						//$(".slidemenuwrapper").fadeOut();
						//$('.myhome2').animate({'width':'100px'});
                        $('.slidemenuwrapper').stop().animate({'marginLeft':'-50px'},200);
						$('.slidemenuwrapper').hide();
                    }
                );
				
            });
        

        


});