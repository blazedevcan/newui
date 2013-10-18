// JavaScript Document


// JavaScript Document
function fnCheckExt(fileName)
{
	var file = $("#imgultype").val();
     var strExtn = file.substr(fileName.value.lastIndexOf(".")+1,file.length);
	 strExtn.toLowerCase();
     extimg = strExtn;
}


var counter =0;
//var id = "Root";
	function onButtonClick(menuitemId, type) {
		
	//alert(treeselid);

	treeselid = tree.getSelectedItemId();
	var id = tree.getSelectedItemId();
	var Program = id.indexOf("Program");
	var Participants = id.indexOf("Participants");
	var Participant = id.indexOf("Participant");
	var Terms = id.indexOf("Terms");
	var Term = id.indexOf("Term");
	var Course = id.indexOf("Course");
	var Details = id.indexOf("Details");
	var Readable = id.indexOf("Readable");
//	menumanipulation(itemId);
	var menuaction = menuitemId;
	
	//menumanipulation(itemId);
	if(menuaction == "Add" && Program >= 0)
	{
		$(".Program_information").hide();
		$(".Participant_infomration").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Program_information").show();
	}
	
	else if(menuaction == "Edit" && Program >= 0)
	{
		$(".Program_information").hide();
		$(".Participant_infomration").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Program_information").show();
	}
	else if(menuaction == "Add_participant" && Participants >= 0)
	{
		$(".Participant_infomration").hide();
		$(".Program_information").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Participant_infomration").show();
	}
	else if(menuaction == "Edit" && Participant >= 0)
	{
		$(".Participant_infomration").hide();
		$(".Program_information").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Participant_infomration").show();
	}
	else if(menuaction == "Delete" && Participant >= 0)
	{
		alert("Delete Participant");
	}
	else if(menuaction == "Add" && Terms >= 0)
	{
		$(".Participant_infomration").hide();
		$(".Program_information").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Programterm_infomration").show();
	}
	else if(menuaction == "Delete" && Terms >= 0)
	{
		alert("Delete Terms");
	}
	else if(menuaction == "Associate_Course" && Term >= 0)
	{
		alert("Associatecourse term");
	}
	else if(menuaction == "Edit" && Term >= 0)
	{
		$(".Participant_infomration").hide();
		$(".Program_information").hide();
		$(".Programterm_infomration").hide();
		
		
		$(".Programterm_infomration").show();
	}
	else if(menuaction == "Delete" && Term >= 0)
	{
		alert("deleteterm div");
	}
	else if(menuaction == "Edit" && Course >= 0)
	{
		alert('editcourse div');
	}
	else if(menuaction == "Delete" && Course >= 0)
	{
		alert('deletecourse div');
	}
	else if(menuaction == "Edit" && Details >= 0)
	{
		var id = tree.getSelectedItemId();
		var text = tree.getSelectedItemText();
		if(text = "Faculty")
		{
		}
		else if(text = "Additional Details")
		{
			alert('Additional Detailsdiv');
		}
		
	}
	else if(menuaction == "View" && Readable >= 0)
	{
		var id = tree.getSelectedItemId();
		var text = tree.getSelectedItemText();
		var Planner = id.indexOf("Planner");
		var Playbook = id.indexOf("Playbook");
		if(Planner > 0)
		{
			alert('Show Planner for the Individual');
		}
		else if(Playbook > 0)
		{
			alert('Show Plybook for the individual');
		}
		
	}
			
}

function setFancyboxHeight(height) {
	
	setTimeout("$('#fancybox-content').css('height', '"+height+"');", 800);
}

//setFancyboxDimensions('200px', '300px', 'hidden')
function setFancyboxDimensions(width, height, overflow) {
	
	setTimeout("$('#fancybox-content').css({height: '"+height+"', width: '"+width+"'}); $('#fancybox-frame').css('overflow', '"+overflow+"');", 800);
}			
			
	
	function fixImage(id) {
		switch (tree.getLevel(id)) {
    case 1:
        ;
        tree.setItemImage2(id, 'folderClosed.gif', 'folderOpen.gif', 'folderClosed.gif');
        break;
    default:
        ;
        tree.setItemImage2(id, "notesIcon.png", "notesIcon.png", "notesIcon.png");
        break;
    }
}

			function createtree()	
			{
				
				menu = new dhtmlXMenuObject();
				menu.setIconsPath("../../js/tree/treeimages/images/");
				menu.renderAsContextMenu();
				menu.attachEvent("onClick", onButtonClick);
				menu.loadXML("../../js/tree/xml/_contextlearningprogramadmin.xml");
	
			
				
			tree = new dhtmlXTreeObject("treeboxbox_tree", "100%", "100%", 0);
			tree.setSkin('dhx_skyblue');
			tree.setImagePath("../../js/tree/treeimages/csh_bluebooks/");
			tree._getOpenState(true);
			tree.enableDragAndDrop(true);
			tree.enableTreeLines(true);
			
			tree.enableContextMenu(menu);
			tree.attachEvent("onAfterContextMenu", getMenu);
			function getMenu(id, treeselid) {
				menu.clearAll();
				menu.loadXML("xml/menu_" + id.split(":")[0] + ".xml");
				//alert(menu.loadXML("xml/menu_" + id.split(":")[0] + ".xml"));
				return true;
			}
			
			tree.attachEvent("onBeforeContextMenu", function (itemId){
						
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
							
							//tree._selected();
							
							tree.selectItem(itemId,false);
							treeselid = tree.getSelectedItemId();
							var id = tree.getSelectedItemId();
							//alert(id);
							var Program = id.indexOf("Program");
							var Participants = id.indexOf("Participants");
							var Participant = id.indexOf("Participant");
							var Terms = id.indexOf("Terms");
							var Term = id.indexOf("Term");
							var Course = id.indexOf("Course");
							var Details = id.indexOf("Details");
							var Readable = id.indexOf("Readable");
							var txt = tree.getItemText(tree.getSelectedItemId());

					if (Program >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Add');
						menu.showItem('Edit');
						
					}else if (Participants >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Add_participant');
						
					}else if (Participant >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Edit');
						menu.showItem('Delete');
						
					}else if (Terms >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Add');
						menu.showItem('Delete');
						
					}else if (Term >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Edit');
						menu.showItem('Delete');
						menu.showItem('Associate_Course');
						
					}else if (Course >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Edit');
						menu.showItem('Delete');
						
					}else if (Details >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('Edit');
						
					}else if (Readable >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Add_participant');
						menu.hideItem('Associate_Course');
						menu.hideItem('Add');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Delete');
						
						menu.showItem('View');
					}
					
					return true;
				});

			
			tree.setImageArrays("plus", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png");
			tree.setImageArrays("minus", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png");
			tree.loadXML("../../js/tree/xml/learningprogramadmin.xml");
			
			}
			
			
			
			
$(document).ready(function(e) {
	var id = null;
	var extimg = null;
	var treeselid = null

				createtree();
			
				
		$(".Program_information").hide();
		$(".Participant_infomration").hide();
		$(".Programterm_infomration").hide();
			
		
});

	
	