// JavaScript Document by Sundip editable
	 			function createtree()	
			{
			
	    tree = new dhtmlXTreeObject("treeboxbox_tree", "100%", "100%", 0);
		tree.setSkin('dhx_skyblue');
		
		tree.setImagePath("../js/tree/treeimages/csh_bluebooks/");
		tree.enableDragAndDrop(true);
		tree.enableMercyDrag(true); 
		tree.attachEvent("onClick",function(id){
			$("#mydoc").css('border','1px solid rgba(0,0,0,0.1)');
			$("#myvot").css('border','1px solid rgba(0,0,0,0.1)');
			$("#mybadg").css('border','1px solid rgba(0,0,0,0.1)');
			$("#myrwrd").css('border','1px solid rgba(0,0,0,0.1)');
			$("#myvid").css('border','1px solid rgba(0,0,0,0.1)');
			$("#mycert").css('border','1px solid rgba(0,0,0,0.1)');
			$(".arrow-down").hide();
			
			var container = id;
			//alert(container);
			if(container == "Root_My_stuff")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
			}
			
			
			else if(container == "Child_My_Creations")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
			}
			else if(container == "Child_For_My_Reference")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg1").css('background-color','#2993dd');
				$('#page1').fadeIn(400);
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page6').hide();
				$('#page7').hide();
				$("#doc1").hide();
				$("#doc2").hide();
				
				$("#btnpg1").show();
				$("#btnpg2").show();
				$(".Child_For_My_Reference").show();
			}
			else if(container == "Child_Shared_Content")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg2").css('background-color','#2993dd');
					
				$('#page2').fadeIn(400);
				$('#page1').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page6').hide();
				$('#page7').hide();
				
				//$("#btnpg2").show();
				//$("#btnpg3").show();
				$(".Child_Shared_Content").show();
			}
			
			
			else if(container == "Child_University_Content")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
			}
			else if(container == "Child_Library_Materials")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg3").css('background-color','#2993dd');
				$('#page3').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page6').hide();
				$('#page7').hide();
				
				//$("#btnpg3").show();
				//$("#btnpg4").show();
				$(".Child_Library_Materials").show();
			}
			else if(container == "Child_My_Contributions")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg4").css('background-color','#2993dd');
				$('#page4').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page5').hide();
				$('#page6').hide();
				$('#page7').hide();
				
				//$("#btnpg4").show();
				$(".Child_My_Contributions").show();
			}
			
			
			else if(container == "Child_My_Accomplishments")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
			}
			else if(container == "Child_University_Certificates")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg5").css('background-color','#2993dd');
				$('#page5').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page6').hide();
				$('#page7').hide();
				
				//$("#btnpg5").show();
				$(".Child_University_Certificates").show();
			}
			else if(container == "Child_External_Acknowledgements")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg5").css('background-color','#2993dd');
				$('#page5').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page6').hide();
				$('#page7').hide();
				
				//$("#btnpg5").show();
				$(".Child_External_Acknowledgements").show();
			}
			else if(container == "Child_Ziksana_Rewards")
			{	$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg6").css('background-color','#2993dd');
				$('#page6').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page7').hide();
				
				//$("#btnpg6").show();
				$(".Child_Ziksana_Rewards").show();
			}
			
			
			else if(container == "Child_External_Content")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
			}
			else if(container == "Child_YouTube")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg6").css('background-color','#2993dd');
				$('#page6').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page7').hide();
				
				//$("#btnpg6").show();
				$(".Child_YouTube").show();
			}
			else if(container == "Child_McGraw-Hill")
			{
				$(".swShowPage").hide();
				$(".lockercontainer").hide();
				
				$(".swShowPage").css('background-color','#444444');
				$("#btnpg7").css('background-color','#2993dd');
				$('#page7').fadeIn(400);
				$('#page1').hide();
				$('#page2').hide();
				$('#page3').hide();
				$('#page4').hide();
				$('#page5').hide();
				$('#page6').hide();
				
				//$("#btnpg7").show();
				$(".Child_McGraw-Hill").show();
			}
			return true;
			});
		tree.enableTreeLines(true);
		tree.attachEvent("onRightClick", function (itemId){
				tree.selectItem(itemId,false);
			});
		tree.setImageArrays("plus", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png");
		tree.setImageArrays("minus", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png");
		tree.loadXML("../js/tree/xml/treelocker.xml");

			}
			
			
			
			
$(document).ready(function(e) {
	var id = null;
	var extimg = null;
	var countercnt = 1;
	var val = new Array();
	var sharcnt1 = '  <div class="lockercontainer doc Child_Shared_Content">      <div class="lockerimgcontainer f-l">    <img src="../images/locker/notesi.png" class="lockerimg"/>    </div>   <!--end of lockerimgcontainer-->    <div class="lockercontent f-l"> <div class="lockerul"> <p> <a href="#linkurl" style="margin-left:0;"> Theme of Lecture </a> |  <a href="#linkurl"> Type </a> |  <a href="#linkurl"> Date Created </a> |  <a href="#linkurl"> Author </a> |  <a href="#linkurl">Version </a> |  <a href="#linkurl">Usage</a> </p></div>  <!--end of locker ul--> <hr>	<div class="lockerlr"><p class="f-l"> Description </p><p class="f-r"> <a href="#linkurl"> Tag1 </a> | <a href="#linkurl"> Tag2 </a> |  <a href="#linkurl"> Tag3 </a>  </p>	</div> <!--end of lockerlr--> </div> <!--end of lockercontent-->  <div class="ClearFix"> </div>      </div> <!--end of locker container-->           <div class="lockercontainer doc Child_Shared_Content">      <div class="lockerimgcontainer f-l">    <img src="../images/locker/My Creations/Shared Content/Documents-Whats the Puzzel.jpg" class="lockerimg"/>    </div>   <!--end of lockerimgcontainer-->    <div class="lockercontent f-l"> <div class="lockerul"> <p> <a href="#linkurl" style="margin-left:0;">Whats the Puzzle</a> |  <a href="#linkurl"> Type </a> |  <a href="#linkurl"> Date Created </a> |  <a href="#linkurl"> Author </a> |  <a href="#linkurl">Version </a> |  <a href="#linkurl">Usage</a> </p></div>  <!--end of locker ul--> <hr>	<div class="lockerlr"><p class="f-l"> Description </p><p class="f-r"> <a href="#linkurl"> Tag1 </a> | <a href="#linkurl"> Tag2 </a> |  <a href="#linkurl"> Tag3 </a>  </p>	</div> <!--end of lockerlr--> </div> <!--end of lockercontent-->  <div class="ClearFix"> </div>      </div> <!--end of locker container-->';
								 	  
   
	
	
	createtree();
	
});
