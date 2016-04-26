$(function(){
    /*导航栏动画*/
    var $navBtn=$(".nav-btn");
    var $maxNav=$(".max-nav");
    //console.log($navBtn);
    var $listDown=$(".list-down");
    var $shopImg=$(".shop-img");
    var flag=false;
    $navBtn.click(function(){

        if(!flag){
            $maxNav.fadeToggle();
            $listDown.css({background:"url()",marginLeft:"20px",fontSize:"20px"}).html("X");
            $shopImg.animate({right:"-32px"});
            flag=true;
        }else{
            $maxNav.fadeOut();
            $listDown.css({background:'url(./img/bread.png) no-repeat',marginLeft:"0"}).html("");
            $shopImg.animate({right:"5px"});

            flag=false;
        }

    });

    /*帮助中心*/
    var $contents=$(".contents",".help-inner");
    var $h3=$("h3",".help-inner");
    //console.log($h3);
    //console.log($contents);
    var $jia=$(".jia");

    $h3.each(function(i,obj){
        $(this).click(function(){
            if(document.documentElement.clientWidth>766){
                return false;
            }
            if(!flag){
                $contents.eq(i).slideDown();
                $jia.eq(i).html("x");
                $h3.eq(i).css({borderBottom:"0",fontWeight:"bold"});
                flag=true;

            }else{
                $h3.eq(i).css({borderBottom:"1px solid #ccc",fontWeight:"normal"});
                $contents.eq(i).slideUp();
                $jia.eq(i).html("+");
                flag=false;

            }
        })
    });
    /*banner轮播*/
    /*自动轮播*/
    flag2=true;
    var $bannerBox=$(".banner-box");
    var $banner=$(".banner");
    var $as=$("a",$bannerBox);
    var $right=$(".right");
    var $left=$(".left");
    var $btn=$(".btn");
    var $imgW=$(".banner-box a:first-child").width();
    //console.log($btn);
    var $lis=$(".btn>li");
    console.log($lis);
    $(".banner-box a:first-child").css("left","0");
    var now=0;
    var next=0;
    var t=setInterval(move,2000);
    function move(){
        if(!flag2){
            return
        }
        flag2=false;
        next++;
        if(next==$as.length){
            next=0;
        }
        $as.eq(next).css({left:"100%"})
        // $(".wheel a").stop();
        $as.eq(now).animate({left:-$imgW});
        $as.eq(next).animate({left:0},function(){
            flag2=true;
        });
        $lis.removeClass();
        $lis.eq(next).addClass("hot");
        now=next;

    }
    /*自动轮播*/
    /*鼠标移上停止  离开继续*/
    $banner.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    });
    /*右按钮*/
    $right.click(function(){
        move();
    })
    /*左按钮*/
    $left.click(function(){
        if(!flag2){
            return
        }
        flag2=false;
        next--;
        if(next==-1){
            next=$as.length-1;
        }
        $as.eq(next).css({left:"-100%"})
        // $(".wheel a").stop();
        $as.eq(now).animate({left:$imgW});
        $as.eq(next).animate({left:0},function(){
            flag2=true;
        });
        $lis.removeClass();
        $lis.eq(next).addClass("hot");
        now=next;
    })
    /*点击按钮  切换相应图片*/
    $lis.click(function(){

        var index=$(this).index();
        //console.log(index);
        if(index==now){//当点击的按钮要显示的图片 正好是当前显示的图片时，退出
            return;
        }

        if(index>now){
            $as.eq(index).animate({left:0});
            $as.eq(now).animate({left:-$imgW});

        }else if(index<now){

            $as.eq(index).animate({left:0});
            $as.eq(now).animate({left:$imgW});
        }
        next=now=index;
        $lis.removeClass();
        $lis.eq(next).addClass("hot");


        })
    });

