$(document).ready(function(){   
  //select
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
  
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

  
  });


	$("#header_container .btn_menu").click(function(){
        $(".hamMenu_wrap,.dimmed").show();
        return false;
    });
    $(".hamMenu_wrap .btn_close").click(function(){
        $(".hamMenu_wrap,.dimmed").hide();
        return false;
    });
    $(".dimmed").click(function(){
        $(".hamMenu_wrap,.dimmed").hide();
        return false;
    });
    $(".nav_list > li > a").click(function(){
        $(".nav_list > li > a").removeClass("on");
        $(this).addClass("on");
         $(".nav_list > li > ul").hide();
         $(this).next().show();
         $(this).next().scrollTop(0);
         return false;        
    })
    $(".location_area .now").click(function(){
      const tg = $(".openLocation_wrap")
      if(tg.css("display") == "none"){
        tg.show();
        $(this).find("a").addClass("on");
      }else{
        $(this).find("a").removeClass("on");
        tg.hide();
      }
      return false;
    });
    $(".openLocation_wrap").click(function(){
        $(this).hide();  
    });
    $(".openLocation_wrap .location_inner").click(function(e){
        e.preventDefault();
        e.stopPropagation();
    });

    $(".autoComplete_wrap").click(function(){
        $(this).hide();  
    });
    $(".autoComplete_wrap .autoComplete_inner").click(function(e){
        e.preventDefault();
        e.stopPropagation();
    });


  //gnb
  var gnb = $('.gnb > ul > li');  
  var content = $('.subgnb_box');
  
  /*gnb.on('click', function(e){  
    e.preventDefault();  
    var tg = $(this);  
    var tc = tg.find('> a');  
    gnb.find('> a').removeClass('on').not().children().remove("span"); 
    tc.addClass('on'); 
    i = tg.index();
    content.css('display', 'none');   
    content.eq(i).css('display', 'block'); 
  });*/

  // subgnb01
  $(".subgnb01 > ul > li > a").click(function(e){
 //   e.preventDefault();
    $(".subgnb01 > ul > li > a").each(function(){
      if($(this).hasClass("on")){
        $(this).removeClass("on");
      }
    });
    $(this).addClass("on");
  }); 

  // subgnb02
  $(".subgnb02 > ul > li > a").click(function(e){
  //  e.preventDefault();
    $(".subgnb02 > ul > li > a").each(function(){
      if($(this).hasClass("on")){
        $(this).removeClass("on");
      }
    });
    $(this).addClass("on");
  });  

  //tab01
  $(".tab01 li").click(function() {
      $(".tab01 li").removeClass('on');
      $(this).addClass("on");
      $(".tab_cont").hide();
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).show();
      return false;
  });



});

function shortItemToggle(trg, list, closeMent, openMent){
  $(trg).find(list).addClass("shortItem");
    $(trg).find(".btn_more").click(function(){
        var tg = $(this).parent().find(list);
        if(!tg.hasClass("shortItem")){
            tg.addClass("shortItem");
            $(this).html(openMent+'<em class="icon_arrow01_down">▼</em>');
        }else{
            tg.removeClass("shortItem");  
            $(this).html(closeMent+'<em class="icon_arrow01_up">▲</em>');                        
        }
    });
}
//modal
function openModal(modalname, alertObj){
  document.get
  $("#modal").fadeIn(300);
  $("."+modalname).fadeIn(300);
	
	if(typeof alertObj === "object"){		
		$("."+modalname+" .modal_content .alert_box").html(alertObj.message);
	}
}
$(document).ready(function(){  
  $("#modal, .close").on('click',function(){
    $("#modal").fadeOut(300);
    $(".modal_wrap").fadeOut(300);
  });
});


