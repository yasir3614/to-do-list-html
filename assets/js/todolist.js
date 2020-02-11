//Check of specific todo by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click On X To Delete Todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(250,function(){
		$(this).remove();
	});	
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//extract value
		var newTodoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodoText + "</li>");
	}
});

$(".fa-eye-slash").on("click",function(){
	$("input[type='text'").fadeToggle();
});