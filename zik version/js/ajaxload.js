

		

$(function(){

				$.ajax(

					{

						method: "get",
						
						cache: 'false',

						url: "header.html",

						dataType: "html",

						success: function( strHTML ){

							$( "#ajaxheader" ).html( strHTML );
							
					
						}

					}
					
					

					);

			});
			
	
	
	
	 



	
	$(function(){

				$.ajax(

					{

						method: "get",
						
						cache: 'false',

						url: "footer.html",

						dataType: "html",

						success: function( strHTML ){

							$( "#ajaxfooter" ).html( strHTML );

					
						}

					}
					
					

					);

			});		
	
	
	
	
		
	
	
	
	

 
 
 $(function(){

				$.ajax(

					{

						method: 'get',
						
						cache: 'false',

						url: 'menu.html',

						dataType: 'html',

						success: function( strHTML ){

							$( '#ajaxmenu' ).html( strHTML );
                          
						   $(".vertical-nav").verticalnav({speed: 400,align: "left"});
						   
						   (function($){
			$(window).load(function(){
				/* custom scrollbar fn call */
				
				$(".content_3").mCustomScrollbar({
					scrollInertia:600,
					autoDraggerLength:false
				});
				
				
			});
			
		})(jQuery);
					
						}

					}
					
					

					);

			});			
							

	


	
	
	

			
	
 
// JavaScript Document