$(function(){
	var count = $(".fadein li").filter(":visible").length;
	var current = 1;
	var next = 2;
	var interval = 3000;
	var duration = 500;
	var timer;

	// 1番目の写真以外は非表示
	$(".fadein:visible li:not(:first-child)").hide();

	// 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
	timer = setInterval(slideTimer, interval);
	
	// slideTimer関数
	function slideTimer(){
		$(".fadein:visible li:nth-child(+" + current + ")").fadeOut(duration);
		$(".fadein:visible li:nth-child(+" + next + ")").fadeIn(duration);
        // console.log($(".fadein:visible li:nth-child(+" + next + ")"));


		current = next;
		next = ++next;

		if(next > count){
			next = 1;
		}

		$(".button li a").removeClass("target");
		$(".button li:nth-child("+ current +") a").addClass("target");
	}

	$(".button li a").click(function(){
		next = $(this).html();

		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
		
		return false;
	});

// ポエム用だよ

    function slideAnime(){
        console.log("aaa");
    //====下に動くアニメーションここから===
        $('.downAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            // 下から上へ表示するクラスを付与
            // テキスト要素を挟む親要素（下）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeDownUp");
            // 要素を下枠外に移動しCSS アニメーションで下から元の位置に移動
            $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
            // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
            // 下から上へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
            }
        });
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
        slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
        slideAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


});




