 //点击查看 
 function tc(val){
      var url=$(val).data("url");
      console.log($(val).data("url"));
      location.href="cakan.html";
}






$(function(){
	/*菜单设定为隐藏模式*/
	$(".hidden").each(function(){
		$(this).slideUp();
	})
    $(".jkr_nav>ul>li>p").click(function(){
    	 
    	 if($(this).next("ol").hasClass("hidden")){
            $(this).next("ol").slideDown("1000").removeClass("hidden")
                   .end().find("span").removeClass("fa-angle-left").addClass("fa-angle-down");

    	 }else{
    	 	$(this).next("ol").slideUp("1000").addClass("hidden")
    	 	       .end().find("span").removeClass("fa-angle-down").addClass("fa-angle-left");
    	 }
    })

    
   
})