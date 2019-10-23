// 头部导航
$(function(){
	console.log("xxxxxxxxxxxxxxxxx")
	var allbool=true;
	$(".all_small").click(function(event) {
		/* Act on the event */
		if(allbool){
			$(".all_big").stop().show(400);
			allbool=!allbool
		}else{
			$(".all_big").stop().hide(400);
			allbool=!allbool
		}
	});
})
$(".nav_right ul li a").click(function(event) {
	/* Act on the event */
	for(var i=0;i<$(".nav_right ul li a").length;i++){
		$(".nav_right ul li a").removeClass('active')
	}
	$(this).addClass('active')
});
// all_big
$(".all_big ul li a").click(function(event) {
	/* Act on the event */
	for(var i=0;i<$(".all_big ul li a").length;i++){
		$(".all_big ul li a").removeClass('active')
	}
	$(this).addClass('active')
});


//------------------------------------------------------------------------
// 首页
// banner
var bannerimg=$(".banners img").height()
			$(".banners").css({
			height: bannerimg+'px'});
$(window).resize(function () {          //当浏览器大小变化时
	var bannerimgH=$(".banners img").height()
	console.log(bannerimgH)
		        	if( $(window).width() > 768 ) {
					$(".banners img").css({
							width:'120%',
							marginLeft:'-60%'
						});
					$(".banners").css({
					height: bannerimgH+'px'
				});
					}else{
						$(".banners img").css({
							width:'200%',
							marginLeft:'-100%'
						});
						$(".banners").css({
							height: bannerimgH+'px'
						});
					}
		});

//-----------------------------------------------------------
//exhibitioncheck.html

// 年份点击
$("#exh_check .check1_btm ul li").click(function(event) {
	/* Act on the event */
	$("#exh_check .check1_btm ul li .year_l").removeClass('active')
	$("#exh_check .check1_btm ul li .year_l").eq($(this).index()).addClass('active')
	
});
// 类型点击
$("#exh_check .check2_btm ul li").click(function(event) {
	/* Act on the event */
	$("#exh_check .check2_btm ul li .year_l").removeClass('active')
	$("#exh_check .check2_btm ul li .year_l").eq($(this).index()).addClass('active')

});

//触摸弹出图片
$("#exh_check .exh_check_right ul li").mouseover(function(event) {
	/* Act on the event */
	console.log($(this).index())
	for(i=0;i<$("#exh_check .wkdiv .tobigimg").length;i++){
		$("#exh_check .wkdiv .tobigimg").css({
			display: 'none'
		});
	}
	$("#exh_check .wkdiv .tobigimg").eq($(this).index()).css({
			display: 'block'
		});
});

// var lis=$("#exh_check .exh_check_right ul li");
//                         for(var i=0;i<lis.length;i++){
//                             (function(j){
//                                 var bool=false;
//                                 $(".nowclick").eq(j).click(function(event) {
//                                     if(bool){
//                                         $(this).next().stop().hide(400);
//                                         bool=!bool
//                                     }else{
//                                         $(this).next().stop().show(400);
//                                         bool=!bool
//                                     }
//                                 });
//                             })(i);
//                         }



// $("#exh_check .wkdiv").mouseleave(function(event) {
// 	 Act on the event 
	
// 	$("#exh_check .wkdiv .tobigimg").hide(200)
// });
//------------------------------------------------------------------

// gsjs06_02zz     #gsjs_zz
$("#gsjs_zz .exh_numbers li").click(function(event) {
	/* Act on the event */
	$(this).addClass('active').siblings().removeClass('active')
});


/*有问题1开始*/

// // 得到exh_numbers中的每个li的长度
// var exh_numbersli=$("#gsjs_zz .exh_numbers ul li").width();
// // 设置ul的宽度
// var exh_numberswidth=exh_numbersli*$("#gsjs_zz .exh_numbers ul li").length
// $("#gsjs_zz .exh_numbers ul").css({
// 	width: exh_numbersli*7+'px'
// });
// console.log("ff"+exh_numbersli)
// // 点击一次移动的长度
// var onelength=exh_numbersli*7;
// // 初始点
// var toleft=0
// // 得到总长度
// var current=exh_numberswidth;
// console.log("current"+current)
// if(current<exh_numbersli*7){
// 	current=exh_numbersli*7
// 	console.log(current)
// 	$("#gsjs_zz .exh_numbers ul").css({
// 		width: exh_numbersli*7+'px'
// 	});
// }else{
// 	if((current%exh_numbersli*7)!=0){
// 		current=exh_numbersli*7*(parseInt(current/(exh_numbersli*7))+1)
		
// 	}else{
		
// 	}
// }

// // 右点击按钮
// $("#gsjs_zz .toleft1").click(function(event) {
// 	/* Act on the event */
// 	// var current=$("#gsjs_zz .toleft1").width();
// 	toleft-=onelength
// 	console.log(current)
// 	if(toleft>-current){
		
// 	// console.log(current)
// 		$("#gsjs_zz .exh_numbers ul").css({
// 			left: toleft
// 		});
// 	}else{
// 		toleft=-current+onelength
// 	}
	
// });

// // 左点击按钮
// $("#gsjs_zz .toright1").click(function(event) {
// 	/* Act on the event */
// 	// var current=$("#gsjs_zz .toleft1").width();
// 	toleft+=onelength
// 	// console.log(toleft)
// 	if(toleft<=0){
// 	// console.log(current)
// 	console.log(toleft)
// 		$("#gsjs_zz .exh_numbers ul").css({
// 			left: toleft
// 		});
// 	}else{
// 		toleft=0
// 	}
	
// });


/*有问题1结束*/