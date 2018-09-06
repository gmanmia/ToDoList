
//to be able to apply listeners to items added later, we need to check for lis w/in ul, can't do click on li alone

$('ul').on("click", "li", function(){
	// You can write in either js or css, but css is simpler 
	//*** JS solution **** 
	// if ($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// 	});
	// }

	// else {
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// 	});
	// }
	
	//**** CSS solution ***
	$(this).toggleClass("completed");
});

//click on X to delete Todo

$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li with text and add to ul
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");

	}
})

$("#icon").click(function(){
	$("input[type='text']").fadeToggle();
});










