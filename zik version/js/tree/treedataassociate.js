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
		
		//alert("Right click menu action");
		//alert();
    //var id2 = tree.contextID;
	//alert(id2);
	//alert(id);
	//alert(menuitemId);
//	tree.focusItem(tree.contextID);
//	tree.selectItem(tree.contextID,true);
//	menumanipulation(itemId);
	var menuaction = menuitemId;
	
	//menumanipulation(itemId);
	if(menuaction == "Associate_Content")
	{
		//alert("open the menu for add module.");
		//$("#ContentPanel2").empty();
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$('#instruction').hide();
		$('#Associatecontentsearch').hide();
		$("#associatewrapper").show();
		$(".paginationbutton").show();
	}
	else if(menuaction == "Search_Associate_Content")
	{
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$("#associatewrapper").hide();
		$(".paginationbutton").hide();
		$("#instruction").show();
		//alert("open the menu for Search_Add_Module module.");
//		$('#instruction').hide();
//		$('#associatedefinecontainer').hide();
//		$('#Associatecontentsearch').show();
	}
	else if(menuaction == "View")
	{
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$("#associatewrapper").hide();
		$(".paginationbutton").hide();
		$("#instruction").show();
	}
	else if(menuaction == "Edit")
	{
		//alert("this should open the form in a editable mode.");
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$("#associatewrapper").hide();
		$(".paginationbutton").hide();
		$("#instruction").show();
	}
	else if(menuaction == "Delete")
	{
		//alert("this should delete the form.");
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$("#associatewrapper").hide();
		$(".paginationbutton").hide();
		$("#instruction").show();
			var chkstr = confirm('Are you sure to Do this?');
		if(chkstr == true)
		{
		tree.deleteItem(tree.getSelectedItemId(),true);
		}
	}
	else if(menuaction == "Enhance")
	{
		$("#createcontentwrapper").hide();
		$("#uploadwrapper").hide();
		$("#addweblink").hide();
		$("#uploadcontentwrapper").hide();
		$("#uploadstep2wrapper").hide();
		$("#associatewrapper").hide();
		$(".paginationbutton").hide();
		$("#instruction").show();

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
				menu.loadXML("../../js/tree/xml/_contextassociate.xml");
	
			
				
			tree = new dhtmlXTreeObject("treeboxbox_tree", "100%", "100%", 0);
			tree.setSkin('dhx_skyblue');
			tree.setImagePath("../../js/tree/treeimages/csh_bluebooks/");
			tree._getOpenState(true);
			tree.enableDragAndDrop(true);
			tree.enableTreeLines(true);
			
			tree.enableContextMenu(menu);
			tree.attachEvent("onAfterContextMenu", getMenu);
			function getMenu(id) {
				menu.clearAll();
				menu.loadXML("xml/menu_" + id.split(":")[0] + ".xml");
				//alert(menu.loadXML("xml/menu_" + id.split(":")[0] + ".xml"));
				return true;
			}
			
			tree.attachEvent("onBeforeContextMenu", function (itemId){
						menu.hideItem('Delete');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Enhance');
						menu.hideItem('Associate_Content');
						menu.hideItem('Search_Associate_Content');
							//alert(id);
							//tree._selected();
							tree.selectItem(itemId,false);
							var id = tree.getSelectedItemId();
							//alert(id);
							var instr = id.indexOf("Child");
							//alert(instr);
							var txt = tree.getItemText(tree.getSelectedItemId());
							//alert(txt);
							//alert(id);
							//alert(id);
							
							//tree.selectItem(id,true);


					if (tree.getSelectedItemId() == "Root" || tree.getSelectedItemId() == txt || instr >= 0 ) {
						//alert(tree.contextID);
						menu.hideItem('Delete');
						menu.hideItem('View');
						menu.hideItem('Edit');
						menu.hideItem('Enhance');
						menu.showItem('Associate_Content');
						menu.showItem('Search_Associate_Content');
						
					}else{
						//alert(tree.contextID);
						menu.hideItem('Associate_Content');
						menu.hideItem('Search_Associate_Content');
						menu.showItem('Delete');
						menu.showItem('View');
						menu.showItem('Edit');
						menu.showItem('Enhance');
					}
					return true;
				});

			
			tree.setImageArrays("plus", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png", "plus_ar.png");
			tree.setImageArrays("minus", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png", "minus_ar.png");
			tree.loadXML("../../js/tree/xml/treemodeltree2.xml");
			
			}
			
			
			
			
$(document).ready(function(e) {
	var id = null;
	var extimg = null;

				createtree();
			
				
		function createnode()
		{
			
			 var im0 = "tree.png"; // the icon for a leaf node
        	 var im1 = "tree.png"; // the icon for an expanded parent node
       		 var im2 = "tree.png"; 
			//tree.insertNewChild(tree.getSelectedItemId()||0,(new Date()).valueOf(),'New item')
			
			tree.insertNewItem('0','Root',document.getElementById('defaultvalue').value,0,im0,im1,im2,'SELECT,TOP');
				
	
			
			//tree.deleteItem("dummy",true);
			//tree.smartRefreshItem(0);
		}
		
			
			
		
});

	
	