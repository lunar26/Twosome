 $(function(){

        var naviClon = $('#gnb').contents().clone();
        var navi_list = $('<div id="sm_menu"</div>');
        navi_list.append(naviClon);
        navi_list.appendTo('.mobile_menu');

        
        
        $('.menu_bar').click(function(){
        $('.mobile_menu, .mobile_bg').stop().animate({
            left:'0'
        },500);
         $('.mobile_bg_2').stop().animate({
            left:'50%'

        },500);
/*            $('.#sm_menu ul > li > ul').hide();
        $('body').css('overflow','hidden');*/
    });
    
//});

        /* 닫기 버튼 클릭시 모바일 메뉴 우측화면으로 사라짐*/

       $('.close, #sm_menu > ul > li > ul > li').click(function(){
           $('.mobile_menu, .mobile_bg, .mobile_bg_2').stop().animate({
                left:'-100%'
            },500);
            $('.mobile_bg').stop().animate({
                left:'-50%'
            },300);
            $('#sm_menu > ul > li > ul').hide();
            $('#sm_menu > ul > li > ul > li').removeClass('selected');
           $('body').css('overflow','auto');
        });
//        /* 모바일 각 메뉴 클릭시 서브메뉴 펼침*/
          $('#sm_menu > ul > li').click(function(){
              $(this).toggleClass('selected');
                
                $('#sm_menu > ul > li').not(this).removeClass('selected');
               $(this).find('ul').slideToggle('fast');
                $('#sm_menu > ul > li').not(this).find('ul').slideUp('fast');
            });

//        /* pc 화면 사이즈에서 모바일 메뉴 사라지고 초기화하기*/
//        $(window).resize(function(){
//            if($(this).width() > 800){
//                $('#mb_navi').css('right','-100%');
//                $('#sm_menu > ul > li > .menu_sec').hide();
//                $('#sm_menu > ul > li > span a').removeClass('selected');
//            }
//        });
    });//jQuery 종료
