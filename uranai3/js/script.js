$(function(){

  let name = "";
  let year = "";
  let month = "";
  let day = "";
  let radio = "";

$('.top-form').submit(function(){//最初のページのフォームチェック
   name = $('.name').val();
   year = $('.year option:selected').val();
   month = $('.month option:selected').val();
   day = $('.day option:selected').val();
   radio = $(".radio:checked").val();

  if(name != "" && year != "" &&month != "" && day != "" && radio != ""){
    return true;
  }else{
    $(".err-msg").show();
    return false;
  }
});

  for(let i=1; i<=22; i++){
    $(`.deck${i}`).css({'top':159+i + 'px', 'left':i + 'px' ,
    'z-index': 23-i});
  }

  for(let i=3; i<=22; i+=3){
    $(`.deck${i} .shadow`).show();
  }

  $(".deck21 .shadow").hide();
  $(".deck20 .shadow").hide();
  $(".deck19 .shadow").hide();



  let r = 330;  //カードの軌道の半径
  let d = 0;  //カードを移動させるために変化させる値
  let kakudo = [];  //各カードの最初の位置を格納する配列
  let timer;  //setInterval用
  let container = $(".container").width();

  for(i=1; i<=22; i++) {
  kakudo.push(Math.round(Math.random () * 360 + 0.5));
}

  function kaiten(){
  for(i=1; i<=22; i++) {
    //円軌道をさせる
    var dd = kakudo[i+1]+d;
    $(`.deck${i}`).css({
      left: (r*Math.cos(dd*Math.PI/180)) + 'px',
      top: (r*Math.sin(dd*Math.PI/180)) + 'px'
    });
    $(`.deck${i}`).rotate(dd*i);
    //カードを回転させる
  }
  d++;
  }

  for(i=1; i<=22; i++) {
    kakudo.push(Math.round(Math.random () * 360 + 0.5));
  }

 $(".start").click(function(){
   let cut = 400;//シャッフルの時のカードの動き幅

   timer = setInterval(function(){
     kaiten();

   },20);

   setTimeout(function(){
     clearInterval(timer)
   },4500);

  for(let i=22; i>=1; i--){
   setTimeout(function(){
     $(`.deck${i}`).animate({
       "top":159+i + 'px',
       "left":i + 'px'
     },1000);
     $(`.deck${i}`).rotate({ animateTo: 0});
   },5000+20*i);
}

  $(".start").fadeOut();
  $(".star").fadeIn(2000);

for(let i=22; i>=18; i--){//シャッフル1回目
  setTimeout(function(){
    $(`.deck${i}`).animate({
    "top":cut + "px"
  },150).animate({
    "top": 142+i+"px",
    "left":-17+i+"px",
    "zIndex":44-i
  },150);
  //$(`.deck${i} .shadow`).show();
  //$(`.deck${i-4} .shadow`).hide();
},7310);
}

 for(let i=1; i<=17; i++){
   setTimeout(function(){
     $(`.deck${i}`).animate({
       "top": 164+i+"px",
       "left":4+i+"px"
   },150);
   },7310);

 }//シャッフル1回目ここまで

for(let i=17; i>=14; i--){//シャッフル2回目
  setTimeout(function(){
    $(`.deck${i}`).animate({
    "top":cut + "px"
  },150).animate({
    "top": 146+i+"px",
    "left":-13+i+"px",
    "zIndex":44-i
  },150);
},7620);
}

for(let i=18; i<=22; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 146+i+"px",
      "left":-13+i+"px"
  },150);
},7620);
}

for(let i=1; i<=13; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 168+i+"px",
      "left":8+i+"px"
  },150);
},7620);
}//シャッフル2回目ここまで

for(let i=13; i>=10; i--){//シャッフル3回目
  setTimeout(function(){
    $(`.deck${i}`).animate({
    "top":cut + "px"
  },150).animate({
    "top": 150+i+"px",
    "left":-9+i+"px",
    "zIndex":44-i
  },150);
},7930);
}

for(let i=14; i<=22; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 151+i+"px",
      "left":-9+i+"px"
  },150);
},7930);
}

for(let i=1; i<=9; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 174+i+"px",
      "left":12+i+"px"
  },150);
},7930);
}//シャッフル3回目ここまで


for(let i=9; i>=6; i--){//シャッフル4回目
  setTimeout(function(){
    $(`.deck${i}`).animate({
    "top":cut + "px"
  },150).animate({
    "top": 154+i+"px",
    "left":-5+i+"px",
    "zIndex":44-i
  },150);
},8240);
}

for(let i=10; i<=22; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 155+i+"px",
      "left":-5+i+"px"
  },150);
},8240);
}

for(let i=1; i<=5; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 177+i+"px",
      "left":16+i+"px"
  },150);
},8240);
}//シャッフル4回目ここまで

for(let i=5; i>=1; i--){//シャッフル5回目
  setTimeout(function(){
    $(`.deck${i}`).animate({
    "top":cut + "px"
  },150).animate({
    "top": 159+i+"px",
    "left":i+"px",
    "zIndex":44-i
  },150);
  $(`.deck${i} .shadow`).show();
},8550);

for(let i=6; i<=22; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 159+i+"px",
      "left":i+"px"
  },150);
},8550);
}

}//シャッフル5回目ここまで

let left1 = 0;
let left2 = 0;

if(container > 480){
  left1 = 370;
  left2 = 500;
} else {
  left1 = 80;
  left2 =300;
}

for(let i=1; i<=11; i++){
  setTimeout(function(){

    $(`.deck${i}`).animate({
        "top": 159+i+"px",
        "left":left1+i+"px",
        "right":710-i+"px"
  },500);
},8700);
}

for(let i=12; i<=22; i++){
  setTimeout(function(){
    $(`.deck${i}`).animate({
      "top": 148+i+"px",
      "left":left2+i+"px",
      "right":200-i+"px"
  },500);
},8850);
}

setTimeout(function(){
  $(".select").fadeIn();
  $('.deck1 , .deck12').removeClass("rock");
},9800);

});//ここまでstartクリックイベント

let text1 = "";
let text2 = "";
let text3 = "";
let text4 = "";
let text5 = "";
let text6 = "";
let text7 = "";

let textList = [text1,text2,text3,text4,text5,text6,text7];
//配った7マイのカードの意味を配列に格納する

let type1 = 0;
let type2 = 0;
let type3 = 0;
let type4 = 0;
let type5 = 0;
let type6 = 0;
let type7 = 0;

let typeList = [type1,type2,type3,type4,type5,type6,type7];
//配った7マイのカードのジャンル分けを配列に格納する


//以下シャッフルした後に束を選んだ後のイベント

if(container > 480){//以下PC様のカード配布処理
$(".deck1").click(function(){//左側の束を選んだ場合の処理
  if($(this).hasClass("rock")){
    return
  } else{
    for(let i=12; i<=22; i++){
     $('.deck1 , .deck12').addClass("rock");
     $(`.deck${i}`).fadeOut();//右側の束を消す
     $(".select").fadeOut();
    }

    for(let i=1; i<=11; i++){
      setTimeout(function(){
        $(`.deck${i}`).animate({
          "top": 359+i+"px",
          "left":-300+i+"px"
      },800);
    },1000);
    }

    setTimeout(function(){
      $(".deck1").addClass("position1 , position");
      $('.deck1').animate({
        "top": -90+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },200);
  },2000);

    setTimeout(function(){
      $('.deck1').css({"transform":"rotateY(180deg)"});
      $(".deck1").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck1").find(".reverse-img").css({"z-index":2});
  },2400);

    setTimeout(function(){
      $(".deck2").addClass("position2 , position");
      $('.deck2').animate({
        "top": 440+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },200);
  },2700);

    setTimeout(function(){
      $('.deck2').css({"transform":"rotateY(180deg)"});
      $(".deck2").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck2").find(".reverse-img").css({"z-index":2});
  },3100);

    setTimeout(function(){
      $(".deck3").addClass("position3 , position");
      $('.deck3').animate({
        "top": 40+"px",
        "right":300 +"px",
        "left":800 +"px",
    },200);
  },3400);

    setTimeout(function(){
      $('.deck3').css({"transform":"rotateY(180deg)"});
      $(".deck3").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck3").find(".reverse-img").css({"z-index":2});
  },3800);

    setTimeout(function(){
      $(".deck4").addClass("position4 , position");
      $('.deck4').animate({
        "top": 300+"px",
        "right":800 +"px",
        "left":300 +"px",
    },200);
  },4100);

    setTimeout(function(){
      $('.deck4').css({"transform":"rotateY(180deg)"});
      $(".deck4").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck4").find(".reverse-img").css({"z-index":2});
  },4500);

    setTimeout(function(){
      $(".deck5").addClass("position5 , position");
      $('.deck5').animate({
        "top": 300+"px",
        "right":300 +"px",
        "left":800 +"px",
    },200);
  },4800);

    setTimeout(function(){
      $('.deck5').css({"transform":"rotateY(180deg)"});
      $(".deck5").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck5").find(".reverse-img").css({"z-index":2});
  },5200);

    setTimeout(function(){
      $(".deck6").addClass("position6 , position");
      $('.deck6').animate({
        "top": 40+"px",
        "right":800 +"px",
        "left":300 +"px",
    },200);
  },5500);

    setTimeout(function(){
      $('.deck6').css({"transform":"rotateY(180deg)"});
      $(".deck6").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck6").find(".reverse-img").css({"z-index":2});
  },5900);

    setTimeout(function(){
      $(".deck7").addClass("position7 , position");
      $('.deck7').animate({
        "top": 160+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },300);
  },6200);

    setTimeout(function(){
      $('.deck7').css({"transform":"rotateY(180deg)"});
      $(".deck7").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck7").find(".reverse-img").css({"z-index":2});
    },6600);

    setTimeout(function(){
      for(let i=0; i<=6; i++){
        textList[i] = $(`.position${i+1}`).find(".card-mean").text();
        typeList[i] = $(`.position${i+1}`).find(".card-type").text();
      }

      for(let i=0; i<=6; i++){

      if(typeList[i] == 1){
        $(".moment").append(`<li>${textList[i]}</li>`);
      } else if(typeList[i] == 2){
        $(".status").append(`<li>${textList[i]}</li>`);
      } else if(typeList[i] == 3){
        $(".advice").append(`<li>${textList[i]}</li>`);
      }
      }
    },7000);

    setTimeout(function(){
      $("html, body").animate({
        "scrollTop":$('#comment').offset().top}
        ,1500);
    },8000);

    setTimeout(function(){
      $("#comment-title").fadeIn();
      $(".fade").fadeIn();
    },10000);

  }//ここまでelse処理
});
//ここまで左側の束を選んだ際の処理


$(".deck12").click(function(){//右側の束を選んだ場合の処理
  if($(this).hasClass("rock")){
    return
  } else{
    for(let i=1; i<=11; i++){
      $('.deck1 , .deck12').addClass("rock");
     $(`.deck${i}`).fadeOut();//左側の束を消す
     $(".select").fadeOut();
    }

    for(let i=12; i<=22; i++){
      setTimeout(function(){
        $(`.deck${i}`).animate({
          "top": 348+i+"px",
          "left":-800+i+"px"
      },800);
    },1000);
    }

    setTimeout(function(){
      $(".deck12").addClass("position1 , position");
      $('.deck12').animate({
        "top": -90+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },200);
  },2000);

    setTimeout(function(){
      $('.deck12').css({"transform":"rotateY(180deg)"});
      $(".deck12").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck12").find(".reverse-img").css({"z-index":2});
  },2400);

    setTimeout(function(){
      $(".deck13").addClass("position2 , position");
      $('.deck13').animate({
        "top": 440+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },200);
  },2700);

    setTimeout(function(){
      $('.deck13').css({"transform":"rotateY(180deg)"});
      $(".deck13").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck13").find(".reverse-img").css({"z-index":2});
  },3100);

    setTimeout(function(){
      $(".deck14").addClass("position3 , position");
      $('.deck14').animate({
        "top": 40+"px",
        "right":300 +"px",
        "left":800 +"px",
    },200);
  },3400);

    setTimeout(function(){
      $('.deck14').css({"transform":"rotateY(180deg)"});
      $(".deck14").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck14").find(".reverse-img").css({"z-index":2});
  },3800);

    setTimeout(function(){
      $(".deck15").addClass("position4 , position");
      $('.deck15').animate({
        "top": 300+"px",
        "right":800 +"px",
        "left":300 +"px",
    },200);
  },4100);

    setTimeout(function(){
      $('.deck15').css({"transform":"rotateY(180deg)"});
      $(".deck15").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck15").find(".reverse-img").css({"z-index":2});
  },4500);

    setTimeout(function(){
      $(".deck16").addClass("position5 , position");
      $('.deck16').animate({
        "top": 300+"px",
        "right":300 +"px",
        "left":800 +"px",
    },200);
  },4800);

    setTimeout(function(){
      $('.deck16').css({"transform":"rotateY(180deg)"});
      $(".deck16").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck16").find(".reverse-img").css({"z-index":2});
  },5200);

    setTimeout(function(){
      $(".deck17").addClass("position6 , position");
      $('.deck17').animate({
        "top": 40+"px",
        "right":800 +"px",
        "left":300 +"px",
    },200);
  },5500);

    setTimeout(function(){
      $('.deck17').css({"transform":"rotateY(180deg)"});
      $(".deck17").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck17").find(".reverse-img").css({"z-index":2});
  },5900);

    setTimeout(function(){
      $(".deck18").addClass("position7 , position");
      $('.deck18').animate({
        "top": 160+"px",
        "left":0 +"px",
        "right":0 +"px",
        "margin":"auto"
    },300);
  },6200);

    setTimeout(function(){
      $('.deck18').css({"transform":"rotateY(180deg)"});
      $(".deck18").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
      $(".deck18").find(".reverse-img").css({"z-index":2});
    },6600);


        setTimeout(function(){
          for(let i=0; i<=6; i++){
            textList[i] = $(`.position${i+1}`).find(".card-mean").text();
            typeList[i] = $(`.position${i+1}`).find(".card-type").text();
          }

          for(let i=0; i<=6; i++){

          if(typeList[i] == 1){
            $(".moment").append(`<li>${textList[i]}</li>`);
          } else if(typeList[i] == 2){
            $(".status").append(`<li>${textList[i]}</li>`);
          } else if(typeList[i] == 3){
            $(".advice").append(`<li>${textList[i]}</li>`);
          }
          }
        },7000);

        setTimeout(function(){
          $("html, body").animate({
            "scrollTop":$('#comment').offset().top}
            ,1500);
        },8000);

        setTimeout(function(){
          $("#comment-title").fadeIn();
          $(".fade").fadeIn();
        },10000);
  }//ここまでelse処理
});
//ここまで右側の束を選んだ際の処理


//ここまでPC様のカード配布し処理


} else { //以下スマホ用のカード配布処理
  $(".deck1").click(function(){//左側の束を選んだ場合の処理
    if($(this).hasClass("rock")){
      return
    } else{
      for(let i=12; i<=22; i++){
       $('.deck1 , .deck12').addClass("rock");
       $(`.deck${i}`).fadeOut();//右側の束を消す
       $(".select").fadeOut();
      }

      for(let i=1; i<=11; i++){
        setTimeout(function(){
          $(`.deck${i}`).animate({
            "top": 359+i+"px",
            "left":-300+i+"px"
        },800);
      },1000);
      }

      setTimeout(function(){
        $(".deck1").addClass("position1 , position");
        $('.deck1').animate({
          "top": -25+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },200);
    },2000);

      setTimeout(function(){
        $('.deck1').css({"transform":"rotateY(180deg)"});
        $(".deck1").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck1").find(".reverse-img").css({"z-index":2});
    },2400);

      setTimeout(function(){
        $(".deck2").addClass("position2 , position");
        $('.deck2').animate({
          "top": 370+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },200);
    },2700);

      setTimeout(function(){
        $('.deck2').css({"transform":"rotateY(180deg)"});
        $(".deck2").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck2").find(".reverse-img").css({"z-index":2});
    },3100);

      setTimeout(function(){
        $(".deck3").addClass("position3 , position");
        $('.deck3').animate({
          "top": 70+"px",
          "right":300 +"px",
          "left":-50 +"px",
      },200);
    },3400);

      setTimeout(function(){
        $('.deck3').css({"transform":"rotateY(180deg)"});
        $(".deck3").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck3").find(".reverse-img").css({"z-index":2});
    },3800);

      setTimeout(function(){
        $(".deck4").addClass("position4 , position");
        $('.deck4').animate({
          "top": 270+"px",
          "right":800 +"px",
          "left":380 +"px",
      },200);
    },4100);

      setTimeout(function(){
        $('.deck4').css({"transform":"rotateY(180deg)"});
        $(".deck4").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck4").find(".reverse-img").css({"z-index":2});
    },4500);

      setTimeout(function(){
        $(".deck5").addClass("position5 , position");
        $('.deck5').animate({
          "top": 270+"px",
          "right":300 +"px",
          "left":-50 +"px",
      },200);
    },4800);

      setTimeout(function(){
        $('.deck5').css({"transform":"rotateY(180deg)"});
        $(".deck5").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck5").find(".reverse-img").css({"z-index":2});
    },5200);

      setTimeout(function(){
        $(".deck6").addClass("position6 , position");
        $('.deck6').animate({
          "top": 70+"px",
          "right":800 +"px",
          "left":380 +"px",
      },200);
    },5500);

      setTimeout(function(){
        $('.deck6').css({"transform":"rotateY(180deg)"});
        $(".deck6").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck6").find(".reverse-img").css({"z-index":2});
    },5900);

      setTimeout(function(){
        $(".deck7").addClass("position7 , position");
        $('.deck7').animate({
          "top": 160+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },300);
    },6200);

      setTimeout(function(){
        $('.deck7').css({"transform":"rotateY(180deg)"});
        $(".deck7").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck7").find(".reverse-img").css({"z-index":2});
      },6600);

      setTimeout(function(){
        for(let i=0; i<=6; i++){
          textList[i] = $(`.position${i+1}`).find(".card-mean").text();
          typeList[i] = $(`.position${i+1}`).find(".card-type").text();
        }

        for(let i=0; i<=6; i++){

        if(typeList[i] == 1){
          $(".moment").append(`<li>${textList[i]}</li>`);
        } else if(typeList[i] == 2){
          $(".status").append(`<li>${textList[i]}</li>`);
        } else if(typeList[i] == 3){
          $(".advice").append(`<li>${textList[i]}</li>`);
        }
        }
      },7000);

      setTimeout(function(){
        $("html, body").animate({
          "scrollTop":$('#comment').offset().top}
          ,1500);
      },8000);

      setTimeout(function(){
        $("#comment-title").fadeIn();
        $(".fade").fadeIn();
      },10000);

    }//ここまでelse処理
  });
  //ここまで左側の束を選んだ際の処理


  $(".deck12").click(function(){//右側の束を選んだ場合の処理
    if($(this).hasClass("rock")){
      return
    } else{
      for(let i=1; i<=11; i++){
        $('.deck1 , .deck12').addClass("rock");
       $(`.deck${i}`).fadeOut();//左側の束を消す
       $(".select").fadeOut();
      }

      for(let i=12; i<=22; i++){
        setTimeout(function(){
          $(`.deck${i}`).animate({
            "top": 348+i+"px",
            "left":-800+i+"px"
        },800);
      },1000);
      }

      setTimeout(function(){
        $(".deck12").addClass("position1 , position");
        $('.deck12').animate({
          "top": -25+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },200);
    },2000);

      setTimeout(function(){
        $('.deck12').css({"transform":"rotateY(180deg)"});
        $(".deck12").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck12").find(".reverse-img").css({"z-index":2});
    },2400);

      setTimeout(function(){
        $(".deck13").addClass("position2 , position");
        $('.deck13').animate({
          "top": 370+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },200);
    },2700);

      setTimeout(function(){
        $('.deck13').css({"transform":"rotateY(180deg)"});
        $(".deck13").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck13").find(".reverse-img").css({"z-index":2});
    },3100);

      setTimeout(function(){
        $(".deck14").addClass("position3 , position");
        $('.deck14').animate({
          "top": 70+"px",
          "right":300 +"px",
          "left":-50 +"px",
      },200);
    },3400);

      setTimeout(function(){
        $('.deck14').css({"transform":"rotateY(180deg)"});
        $(".deck14").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck14").find(".reverse-img").css({"z-index":2});
    },3800);

      setTimeout(function(){
        $(".deck15").addClass("position4 , position");
        $('.deck15').animate({
          "top": 270+"px",
          "right":800 +"px",
          "left":380 +"px",
      },200);
    },4100);

      setTimeout(function(){
        $('.deck15').css({"transform":"rotateY(180deg)"});
        $(".deck15").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck15").find(".reverse-img").css({"z-index":2});
    },4500);

      setTimeout(function(){
        $(".deck16").addClass("position5 , position");
        $('.deck16').animate({
          "top": 270+"px",
          "right":300 +"px",
          "left":-50 +"px",
      },200);
    },4800);

      setTimeout(function(){
        $('.deck16').css({"transform":"rotateY(180deg)"});
        $(".deck16").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck16").find(".reverse-img").css({"z-index":2});
    },5200);

      setTimeout(function(){
        $(".deck17").addClass("position6 , position");
        $('.deck17').animate({
          "top": 70+"px",
          "right":800 +"px",
          "left":380 +"px",
      },200);
    },5500);

      setTimeout(function(){
        $('.deck17').css({"transform":"rotateY(180deg)"});
        $(".deck17").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck17").find(".reverse-img").css({"z-index":2});
    },5900);

      setTimeout(function(){
        $(".deck18").addClass("position7 , position");
        $('.deck18').animate({
          "top": 160+"px",
          "left":0 +"px",
          "right":0 +"px",
          "margin":"auto"
      },300);
    },6200);

      setTimeout(function(){
        $('.deck18').css({"transform":"rotateY(180deg)"});
        $(".deck18").find(".face-img").css({"z-index":3 , "transform":"rotateY(180deg)"});
        $(".deck18").find(".reverse-img").css({"z-index":2});
      },6600);


          setTimeout(function(){
            for(let i=0; i<=6; i++){
              textList[i] = $(`.position${i+1}`).find(".card-mean").text();
              typeList[i] = $(`.position${i+1}`).find(".card-type").text();
            }

            for(let i=0; i<=6; i++){

            if(typeList[i] == 1){
              $(".moment").append(`<li>${textList[i]}</li>`);
            } else if(typeList[i] == 2){
              $(".status").append(`<li>${textList[i]}</li>`);
            } else if(typeList[i] == 3){
              $(".advice").append(`<li>${textList[i]}</li>`);
            }
            }
          },7000);

          setTimeout(function(){
            $("html, body").animate({
              "scrollTop":$('#comment').offset().top}
              ,1500);
          },8000);

          setTimeout(function(){
            $("#comment-title").fadeIn();
            $(".fade").fadeIn();
          },10000);
    }//ここまでelse処理
  });
  //ここまで右側の束を選んだ際の処理

}//ここまでスマホ用のカード配布処理


});
