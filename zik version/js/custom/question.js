// JavaScript Document


$(document).ready(function() {
			
		$(function() {
		$('#questionoptions ul li a.link').click(function() {
		$('#questionoptions ul li a.link').removeClass('active');
		$(this).addClass('active');
		});
		});	
		
        $('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		$( ".truefalsebtn" ).click(function() {
			
		$('#truefalse').fadeIn();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".multichoicesinglebtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').fadeIn();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		
		$( ".multichoicemultibtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').fadeIn();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		});
		
		
		
		$( ".orderingchoicebtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').fadeIn();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".fillintheblanksbtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').fadeIn();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".matchthefollowingbtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').fadeIn();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".jumbledsequencebtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').fadeIn();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".mathematicalquestionbtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').fadeIn();
		$('#framethequestion').hide();
		
		});
		
		
		$( ".framethequestionbtn" ).click(function() {
			
		$('#truefalse').hide();
		$('#multichoicesingle').hide();
		$('#multichoicemulti').hide();
		$('#orderingchoices').hide();
		$('#matchthefollowing').hide();
		$('#fillintheblanks').hide();
		$('#jumbledsequence').hide();
		$('#descriptivequestion').hide();
		$('#mathematicalquestion').hide();
		$('#framethequestion').fadeIn();
		
		});
		
		
  
  		});