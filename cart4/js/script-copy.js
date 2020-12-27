$(function(){

  let mario = $('#mario');
  let leftRandom1 = Math.floor( Math.random()*420 );
  let leftRandom2 = Math.floor( Math.random()*420 );
  let leftRandom3 = Math.floor( Math.random()*420 );
  let leftRandom4 = Math.floor( Math.random()*420 );
  let leftRandom5 = Math.floor( Math.random()*420 );
  let leftItemRandom = Math.floor( Math.random()*420 );

  let enemyLeftDifference1_2 = Math.abs(leftRandom1 - leftRandom2);
  let enemyLeftDifference1_3 = Math.abs(leftRandom1 - leftRandom3);
  let enemyLeftDifference1_4 = Math.abs(leftRandom1 - leftRandom4);
  let enemyLeftDifference1_5 = Math.abs(leftRandom1 - leftRandom5);

  let enemyLeftDifference2_1 = Math.abs(leftRandom2 - leftRandom1);
  let enemyLeftDifference2_3 = Math.abs(leftRandom2 - leftRandom3);
  let enemyLeftDifference2_4 = Math.abs(leftRandom2 - leftRandom4);
  let enemyLeftDifference2_5 = Math.abs(leftRandom2 - leftRandom5);

  let enemyLeftDifference3_1 = Math.abs(leftRandom3 - leftRandom1);
  let enemyLeftDifference3_2 = Math.abs(leftRandom3 - leftRandom2);
  let enemyLeftDifference3_4 = Math.abs(leftRandom3 - leftRandom4);
  let enemyLeftDifference3_5 = Math.abs(leftRandom3 - leftRandom5);

  let enemyLeftDifference4_1 = Math.abs(leftRandom4 - leftRandom1);
  let enemyLeftDifference4_2 = Math.abs(leftRandom4 - leftRandom2);
  let enemyLeftDifference4_3 = Math.abs(leftRandom4 - leftRandom3);
  let enemyLeftDifference4_5 = Math.abs(leftRandom4 - leftRandom5);

  let enemyLeftDifference5_1 = Math.abs(leftRandom5 - leftRandom1);
  let enemyLeftDifference5_2 = Math.abs(leftRandom5 - leftRandom2);
  let enemyLeftDifference5_3 = Math.abs(leftRandom5 - leftRandom3);
  let enemyLeftDifference5_4 = Math.abs(leftRandom5 - leftRandom4);

  function enemyLeftDifference1(){
     enemyLeftDifference1_2 = Math.abs(leftRandom1 - leftRandom2);
     enemyLeftDifference1_3 = Math.abs(leftRandom1 - leftRandom3);
     enemyLeftDifference1_4 = Math.abs(leftRandom1 - leftRandom4);
     enemyLeftDifference1_5 = Math.abs(leftRandom1 - leftRandom5);
  }//enemyLeftDifference1()

  function enemyLeftDifference2(){
    enemyLeftDifference2_1 = Math.abs(leftRandom2 - leftRandom1);
    enemyLeftDifference2_3 = Math.abs(leftRandom2 - leftRandom3);
    enemyLeftDifference2_4 = Math.abs(leftRandom2 - leftRandom4);
    enemyLeftDifference2_5 = Math.abs(leftRandom2 - leftRandom5);
  }//enemyLeftDifference2()

  function enemyLeftDifference3(){
    enemyLeftDifference3_1 = Math.abs(leftRandom3 - leftRandom1);
    enemyLeftDifference3_2 = Math.abs(leftRandom3 - leftRandom2);
    enemyLeftDifference3_4 = Math.abs(leftRandom3 - leftRandom4);
    enemyLeftDifference3_5 = Math.abs(leftRandom3 - leftRandom5);
  }//enemyLeftDifference3()

  function enemyLeftDifference4(){
    enemyLeftDifference4_1 = Math.abs(leftRandom4 - leftRandom1);
    enemyLeftDifference4_2 = Math.abs(leftRandom4 - leftRandom2);
    enemyLeftDifference4_3 = Math.abs(leftRandom4 - leftRandom3);
    enemyLeftDifference4_5 = Math.abs(leftRandom4 - leftRandom5);
  }//enemyLeftDifference4()

  function enemyLeftDifference5(){
    enemyLeftDifference5_1 = Math.abs(leftRandom5 - leftRandom1);
    enemyLeftDifference5_2 = Math.abs(leftRandom5 - leftRandom2);
    enemyLeftDifference5_3 = Math.abs(leftRandom5 - leftRandom3);
    enemyLeftDifference5_4 = Math.abs(leftRandom5 - leftRandom4);
  }//enemyLeftDifference5()



  $('.container').append($('<li class="enemy enemy1"></li>'));
  $(`.enemy1`).css({"left":leftRandom1+"px"});
  $('.container').append($('<li class="enemy enemy2"></li>'));
  $(`.enemy2`).css({"left":leftRandom2+"px"});
  $('.container').append($('<li class="enemy enemy3"></li>'));
  $(`.enemy3`).css({"left":leftRandom3+"px"});
  $('.container').append($('<li class="enemy enemy4"></li>'));
  $(`.enemy4`).css({"left":leftRandom4+"px"});
  $('.container').append($('<li class="enemy enemy5"></li>'));
  $(`.enemy5`).css({"left":leftRandom5+"px"});

  $(`#item-block`).css({"left":leftItemRandom+"px"});

  mario.css({"bottom":210+"px"});

  setTimeout(function(){
    mario.removeClass("out");
    mario.css({"transition-duration" : 0.1+'s'});
    $("#right-button").show();
    $("#left-button").show();
  },6000);

  setTimeout(function(){
    $("#ready").show();
  },2900);

  setTimeout(function(){
    $("#ready").css({"transform" : 'scale(' + 1.3  + ')'});
  },3000);

  setTimeout(function(){
    $("#ready").hide();
  },4000);

  setTimeout(function(){
    $("#go").show();
  },4500);

  setTimeout(function(){
    $("#go").css({"transform" : 'scale(' + 1.3  + ')'});
  },4600);

  setTimeout(function(){
    $("#go").hide();
  },5600);


  let movePoint = 210;// marioの移動の変数  右なら+ 左なら-
  let marioTop = $('#mario').position().top;
  let marioLeft = $('#mario').position().left;
  let count=0;

  let enemyDown1 = 0;//敵が上から落ちてくる速度の変数
  let enemyDown2 = 0;//敵が上から落ちてくる速度の変数
  let enemyDown3 = 0;//敵が上から落ちてくる速度の変数
  let enemyDown4 = 0;//敵が上から落ちてくる速度の変数
  let enemyDown5 = 0;//敵が上から落ちてくる速度の変数
  let enemyBreakSpeed1 = 0;//敵が甲羅にあたり、横に吹っ飛ぶ速度の変数
  let enemyBreakSpeed2 = 0;//敵が甲羅にあたり、横に吹っ飛ぶ速度の変数
  let enemyBreakSpeed3 = 0;//敵が甲羅にあたり、横に吹っ飛ぶ速度の変数
  let enemyBreakSpeed4 = 0;//敵が甲羅にあたり、横に吹っ飛ぶ速度の変数
  let enemyBreakSpeed5 = 0;//敵が甲羅にあたり、横に吹っ飛ぶ速度の変数
  let enemydeg1 = 0;//敵が甲羅にあたり、回転するための変数
  let enemydeg2 = 0;//敵が甲羅にあたり、回転するための変数
  let enemydeg3 = 0;//敵が甲羅にあたり、回転するための変数
  let enemydeg4 = 0;//敵が甲羅にあたり、回転するための変数
  let enemydeg5 = 0;//敵が甲羅にあたり、回転するための変数

  let itemDownSpeed =3;
  let greenKouraSpeed =3;
  let redKouraSpeed =3;
  let speedRandom1 = Math.floor( Math.random()*5 +1 );
  let speedRandom2 = Math.floor( Math.random()*5 +1 );
  let speedRandom3 = Math.floor( Math.random()*5 +1 );
  let speedRandom4 = Math.floor( Math.random()*5 +1 );
  let speedRandom5 = Math.floor( Math.random()*5 +1 );

  let itemRandom = Math.floor( Math.random()*100 +1 );

  let enemyTop1 = Number($('.enemy1').position().top);
  let enemyLeft1 = Number($('.enemy1').position().left);

  let enemyTop2 = Number($('.enemy2').position().top);
  let enemyLeft2 = Number($('.enemy2').position().left);

  let enemyTop3 = Number($('.enemy3').position().top);
  let enemyLeft3 = Number($('.enemy3').position().left);

  let enemyTop4 = Number($('.enemy4').position().top);
  let enemyLeft4 = Number($('.enemy4').position().left);

  let enemyTop5 = Number($('.enemy5').position().top);
  let enemyLeft5 = Number($('.enemy5').position().left);

  let itemTop = Number($('#item-block').position().top);
  let itemLeft = Number($('#item-block').position().left);

  let greenTop = Number($('#greenkoura').position().top);
  let greenLeft = Number($('#greenkoura').position().left);

  let redTop = Number($('#redkoura').position().top);
  let redLeft = Number($('#redkoura').position().left);

  //以下マリオと敵の距離を図るための変数
  let differenceTop1 = Math.abs(enemyTop1 - marioTop);
  let differenceLeft1 = Math.abs(enemyLeft1 - marioLeft);
  let differenceTop2 = Math.abs(enemyTop2 - marioTop);
  let differenceLeft2 = Math.abs(enemyLeft2 - marioLeft);
  let differenceTop3 = Math.abs(enemyTop3 - marioTop);
  let differenceLeft3 = Math.abs(enemyLeft3 - marioLeft);
  let differenceTop4 = Math.abs(enemyTop4 - marioTop);
  let differenceLeft4 = Math.abs(enemyLeft4 - marioLeft);
  let differenceTop5 = Math.abs(enemyTop5 - marioTop);
  let differenceLeft5 = Math.abs(enemyLeft5 - marioLeft);
  //以上マリオと敵の距離を図るための変数


  //以下マリオとアイテムブロックの距離を測るための変数
  let differenceItemTop = Math.abs(itemTop - marioTop);
  let differenceItemLeft = Math.abs(itemLeft - marioLeft);
  //以上マリオとアイテムブロックの距離を測るための変数


  //以下甲羅アイテムと相手の距離を測るための変数
  let differenceRedTop1 = Math.abs(enemyTop1 - redTop);
  let differenceRedLeft1 = Math.abs(enemyLeft1 - redLeft);
  let differenceRedTop2 = Math.abs(enemyTop2 - redTop);
  let differenceRedLeft2 = Math.abs(enemyLeft2 - redLeft);
  let differenceRedTop3 = Math.abs(enemyTop3 - redTop);
  let differenceRedLeft3 = Math.abs(enemyLeft3 - redLeft);
  let differenceRedTop4 = Math.abs(enemyTop4 - redTop);
  let differenceRedLeft4 = Math.abs(enemyLeft4 - redLeft);
  let differenceRedTop5 = Math.abs(enemyTop5 - redTop);
  let differenceRedLeft5 = Math.abs(enemyLeft5 - redLeft);

  let differenceGreenTop1 = Math.abs(enemyTop1 - greenTop);
  let differenceGreenLeft1 = Math.abs(enemyLeft1 - greenLeft);
  let differenceGreenTop2 = Math.abs(enemyTop2 - greenTop);
  let differenceGreenLeft2 = Math.abs(enemyLeft2 - greenLeft);
  let differenceGreenTop3 = Math.abs(enemyTop3 - greenTop);
  let differenceGreenLeft3 = Math.abs(enemyLeft3 - greenLeft);
  let differenceGreenTop4 = Math.abs(enemyTop4 - greenTop);
  let differenceGreenLeft4 = Math.abs(enemyLeft4 - greenLeft);
  let differenceGreenTop5 = Math.abs(enemyTop5 - greenTop);
  let differenceGreenLeft5 = Math.abs(enemyLeft5 - greenLeft);

  //以上甲羅アイテムと相手の距離を測るための変数


//以下、setTimeoutやsetInterval用の仮変数
  let down1;//敵が落ちてくる時のsetinterval変数
  let down2;//敵が落ちてくる時のsetinterval変数
  let down3;//敵が落ちてくる時のsetinterval変数
  let down4;//敵が落ちてくる時のsetinterval変数
  let down5;//敵が落ちてくる時のsetinterval変数
  let enemySpin1;//敵がアイテムにあたりスピンするときのsetinterval変数
  let enemySpin2;//敵がアイテムにあたりスピンするときのsetinterval変数
  let enemySpin3;//敵がアイテムにあたりスピンするときのsetinterval変数
  let enemySpin4;//敵がアイテムにあたりスピンするときのsetinterval変数
  let enemySpin5;//敵がアイテムにあたりスピンするときのsetinterval変数
  let itemDown;//アイテムが落ちてくる時のsetinterval変数

  let bgRoop0;//背景ループ用のsetinterval変数 スタート時
  let bgRoop1;//背景ループ用のsetinterval変数 通常時
  let bgRoop2;//背景ループ用のsetinterval変数 キノコダッシュ時
  let bgRoop3_1;//背景ループ用のsetinterval変数 スター時
  let bgRoop3_2;//背景ループ用のsetinterval変数 スター時

  let recordCount;
  let mCountUp;//走行中のメーターカウント用のsetinterval変数 通常時
  let mCountUp2;//走行中のメーターカウント用のsetinterval変数 キノコダッシュ時
  let mCountUp3_1;//走行中のメーターカウント用のsetinterval変数 スター時
  let mCountUp3_2;//走行中のメーターカウント用のsetinterval変数 スター時

  let itemSlot;//アイテムをスロット表示するsetinterval変数
  let itemFlash;//アイテム決定時の点滅処理setinterval変数

  let starFlash1;//スター中の点滅処理
  let starFlash2;//スター中の点滅処理
  let starResetFlash1;//スターが切れる前のの点滅処理
  let starResetFlash2;//スターが切れる前のの点滅処理
  let starStep1_1;//スターが切れる前のの点滅処理
  let starStep1_2;//スターが切れる前のの点滅処理
  let starStep2_1;//スターが切れる前のの点滅処理
  let starStep2_2;//スターが切れる前のの点滅処理

  let teresaFlash1;//テレサの効果が切れるときの点滅処理setinterval変数
  let teresaFlash2;//テレサの効果が切れるときの点滅処理setinterval変数
  let teresaStep1_1;
  let teresaStep1_2;
  let teresaStep1_3;
  let teresaStep2_1;
  let teresaStep2_2;
  let teresaStep2_3;

  let redKouraUp;
  let greenKouraUp;
//以上、setTimeoutやsetInterval用の仮変数


  let mCount=0;//何m進んだかを代入
  let rCount=0;//結果発表のカウント用
  let nowCount=0;



//以下背景のループ
  let bpX = 0;
  let bpY = 0;

  bgRoop0 = setInterval(function(){
      bpX += 0;
      bpY += 1.5;
      $('.container').css('background-position', bpX+'px '+bpY+'px')
  },1);

setTimeout(function(){
  clearInterval(bgRoop0)
  bgRoop1 = setInterval(function(){
      bpX += 0;
      bpY += 3.5;
      $('.container').css('background-position', bpX+'px '+bpY+'px')
  },1);
},6000)

//以上背景のループ


//以下 mのカウントアップ
setTimeout(function(){
  mCountUp = setInterval(function(){
    mCount++;
    $('#count-up').text(mCount);
  },35);
},6000);
//以上 mのカウントアップ


function kinokoDash(){
  clearInterval(bgRoop1);
  clearInterval(bgRoop3_1);
  clearInterval(bgRoop3_2);
  clearInterval(mCountUp);
  clearInterval(mCountUp3_1);
  clearInterval(mCountUp3_2);
  bgRoop2 = setInterval(function(){
      bpX += 0;
      bpY += 7;
      $('.container').css('background-position', bpX+'px '+bpY+'px')
  },1);
  mCountUp2 = setInterval(function(){
    mCount++;
    $('#count-up').text(mCount);
  },10);

  setTimeout(function(){
    clearInterval(bgRoop2);
    clearInterval(mCountUp2);
    if(mario.hasClass("out")){
      return;
    }else{
      mCountUp = setInterval(function(){
        mCount++;
        $('#count-up').text(mCount);
      },35);
      bgRoop1 = setInterval(function(){
          bpX += 0;
          bpY += 3.5;
          $('.container').css('background-position', bpX+'px '+bpY+'px')
      },1);
    }
  },2000)
}//function kinokoDash(){


  function greenShot(){
    $("#greenkoura").css({"left":movePoint});
    greenKouraUp = setInterval(function(){
        greenKouraSpeed +=3;
     $("#greenkoura").css({"bottom": 210+greenKouraSpeed+"px"});
   },10);
  }//function greenShot()


  function redShot(){
    $("#redkoura").css({"left":movePoint});
    redKouraUp = setInterval(function(){
        redKouraSpeed +=3;
     $("#redkoura").css({"bottom": 210+redKouraSpeed+"px"});
   },10);
 }//function greenShot()


function teresaEscape(){
  if(mario.hasClass("teresa1")){
    mario.removeClass("teresa1");
    clearInterval(teresaFlash1);
    clearTimeout(teresaStep1_1);
    clearTimeout(teresaStep1_2);
    clearTimeout(teresaStep1_3);
    mario.addClass("teresa2");
    mario.css({"opacity":0.3});
    teresaStep2_1 = setTimeout(function(){
      teresaFlash2 = setInterval(function(){
        setTimeout(function(){
          mario.css({"opacity":1});
        },150)
        setTimeout(function(){
          mario.css({"opacity":0.3});
        },300)
      },450);
    },6000);

    teresaStep2_2 = setTimeout(function(){
      clearInterval(teresaFlash2);
      mario.css({"opacity":1});
    },10000);

    teresaStep2_3 = setTimeout(function(){
      mario.removeClass("teresa2");
    },10500);
  }//if(mario.hasClass("teresa1")){
  else{
    mario.removeClass("teresa2");
    clearInterval(teresaFlash2);
    clearTimeout(teresaStep2_1);
    clearTimeout(teresaStep2_2);
    clearTimeout(teresaStep2_3);
    mario.addClass("teresa1");
    mario.css({"opacity":0.3});
    teresaStep1_1 = setTimeout(function(){
      teresaFlash1 = setInterval(function(){
        setTimeout(function(){
          mario.css({"opacity":1});
        },150)
        setTimeout(function(){
          mario.css({"opacity":0.3});
        },300)
      },450);
    },6000);

    teresaStep1_2 = setTimeout(function(){
      clearInterval(teresaFlash1);
      mario.css({"opacity":1});
    },10000);

    teresaStep1_3 = setTimeout(function(){
      mario.removeClass("teresa1");
    },10500);
  }//else

}//function teresaEscape(){

  function starAtack(){
    if(mario.hasClass("star1")){
      mario.removeClass("star1");
      mario.css({"opacity":1});
      clearInterval(mCountUp3_1);
      clearInterval(bgRoop3_1);
      clearInterval(starFlash1);
      clearInterval(starResetFlash1);
      clearTimeout(starStep1_1);
      clearTimeout(starStep1_2);
      mario.addClass("star2");
      clearInterval(mCountUp);
      clearInterval(bgRoop1);
      mCountUp3_2 = setInterval(function(){
        mCount++;
        $('#count-up').text(mCount);
      },25);
      bgRoop3_2 = setInterval(function(){
          bpX += 0;
          bpY += 5;
          $('.container').css('background-position', bpX+'px '+bpY+'px')
      },1);
      starFlash2 = setInterval(function(){
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario1.png")'})
        },25)
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario2.png")'})
        },50)
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario3.png")'})
        },75)
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario4.png")'})
        },100)
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario5.png")'})
        },125)
        setTimeout(function(){
          mario.css({"background-image":'url("img/starmario6.png")'})
        },150)
      },150);

      starStep2_1 = setTimeout(function(){
        starResetFlash2 = setInterval(function(){
          setTimeout(function(){
            mario.css({"opacity":1});
          },150)
          setTimeout(function(){
            mario.css({"opacity":0.3});
          },300)
        },300);
      },7000);

      starStep2_2 = setTimeout(function(){
        clearInterval(starFlash2);
        clearInterval(starResetFlash2);
        clearInterval(mCountUp3_2);
        clearInterval(bgRoop3_2);
        bgRoop1 = setInterval(function(){
            bpX += 0;
            bpY += 3.5;
            $('.container').css('background-position', bpX+'px '+bpY+'px')
        },1);
        mCountUp = setInterval(function(){
          mCount++;
          $('#count-up').text(mCount);
        },35);
        setTimeout(function(){
          mario.css({"opacity":1});
          mario.css({"background-image":'url("img/mario.png")'});
          mario.removeClass("star1");
        },200);
      },9900);
    }//if(mario.hasClass("star1")){

      else{
        mario.removeClass("star2");
        clearInterval(mCountUp3_2);
        clearInterval(bgRoop3_2);
        clearInterval(starFlash2);
        clearInterval(starResetFlash2);
        clearTimeout(starStep2_1);
        clearTimeout(starStep2_2);
        clearInterval(mCountUp);
        clearInterval(bgRoop1);
        mario.addClass("star1");
        mCountUp3_1 = setInterval(function(){
          mCount++;
          $('#count-up').text(mCount);
        },25);
        bgRoop3_1 = setInterval(function(){
            bpX += 0;
            bpY += 5;
            $('.container').css('background-position', bpX+'px '+bpY+'px')
        },1);
        starFlash1 = setInterval(function(){
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario1.png")'})
          },25)
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario2.png")'})
          },50)
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario3.png")'})
          },75)
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario4.png")'})
          },100)
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario5.png")'})
          },125)
          setTimeout(function(){
            mario.css({"background-image":'url("img/starmario6.png")'})
          },150)
        },150);

        starStep1_1 = setTimeout(function(){
          starResetFlash1 = setInterval(function(){
            setTimeout(function(){
              mario.css({"opacity":1});
            },150)
            setTimeout(function(){
              mario.css({"opacity":0.3});
            },300)
          },300);
        },7000);

        starStep1_2 = setTimeout(function(){
          clearInterval(starFlash1);
          clearInterval(starResetFlash1);
          clearInterval(mCountUp3_1);
          clearInterval(bgRoop3_1);
          bgRoop1 = setInterval(function(){
              bpX += 0;
              bpY += 3.5;
              $('.container').css('background-position', bpX+'px '+bpY+'px')
          },1);
          mCountUp = setInterval(function(){
            mCount++;
            $('#count-up').text(mCount);
          },35);
          setTimeout(function(){
            mario.css({"opacity":1});
            mario.css({"background-image":'url("img/mario.png")'});
            mario.removeClass("star1");
          },200);
        },9900);
      }//else
  }//function starAtack(){




function judgeItem(){
  itemRandom = Math.floor( Math.random()*100 +1 );
  console.log(itemRandom);
  $("#item-effect").text();
  if(itemRandom <= 30){
    $('#item-img').attr("src","img/kinoko.png");
    $("#item-effect").text("kinoko");
  }else if(itemRandom >= 31 && itemRandom <= 65){
    $('#item-img').attr("src","img/redkoura.png");
    $("#item-effect").text("redkoura");
  }else if(itemRandom >= 66 && itemRandom <= 85){
    $('#item-img').attr("src","img/greenkoura.png");
    $("#item-effect").text("greenkoura");
  }else if(itemRandom >= 86 && itemRandom <= 95){
    $('#item-img').attr("src","img/teresa.png");
    $("#item-effect").text("teresa");
  }else if(itemRandom >= 96){
    $('#item-img').attr("src","img/star.png");
    $("#item-effect").text("star");
  }
}//function judgeItem()


function getItem(){
  $("#mario").addClass("item-have");
  $("#item-block").css({"visibility":"hidden"});
//以下、アイテムゲット時のスロット
itemSlot = setInterval(function(){
  setTimeout(function(){
    $('#item-img').show();
    $('#item-img').attr("src","img/kinoko.png");
  },1)
  setTimeout(function(){
    $('#item-img').attr("src","img/star.png");
  },100)
  setTimeout(function(){
    $('#item-img').attr("src","img/redkoura.png");
  },200)
  setTimeout(function(){
    $('#item-img').attr("src","img/greenkoura.png");
  },300)
  setTimeout(function(){
    $('#item-img').attr("src","img/teresa.png");
  },400)
},450);

setTimeout(function(){
  clearInterval(itemSlot);
  $('#item-img').hide();
},3000);

setTimeout(function(){
  judgeItem();
  $('#item-img').show();
},3200);

setTimeout(function(){
  itemFlash = setInterval(function() {
     $('#item-img').fadeOut(120, function() {
       $(this).fadeIn(120);
     });
  }, 240);
},3200);

setTimeout(function(){
  clearInterval(itemFlash);
    $("#item-box").removeClass("rock");
},4160);

//以下、アイテムゲット時のスロット
}//function getItem(){




//以下マリオの操縦//
  $('#right-button').click(function(){

    if(mario.hasClass("out")){
      return;
    }else if(movePoint >=420){
      return;
    }else{
      movePoint +=30;
      $('#mario').css({"left": movePoint+"px"});
      setTimeout(function(){
        marioLeft = $('#mario').position().left;
        console.log(marioLeft);
      },110)
    }
  });//  $('#right-button').click(function(){

  $('#left-button').click(function(){

    if(mario.hasClass("out")){
      return;
    }else if(movePoint <=0){
      return;
    }else{
      movePoint -=30;
      $('#mario').css({"left": movePoint+"px"});
      setTimeout(function(){
        marioLeft = $('#mario').position().left;
        console.log(marioLeft);
      },110)
    }
  });//$('#left-button').click(function(){

  //以上マリオの操縦//


  function marioDeath(){//マリオが死んだときの処理
    clearInterval(mCountUp);
    clearInterval(bgRoop1);
    clearInterval(bgRoop2);
    clearInterval(mCountUp2);
    nowCount = Number($('#count-up').text());
    mario.addClass("out");
    $(".enemy1").addClass("death");
    $(".enemy2").addClass("death");
    $(".enemy3").addClass("death");
    $(".enemy4").addClass("death");
    $(".enemy5").addClass("death");
    $("#item-block").addClass("death");
    mario.css({"transition-duration" : 0.15+'s'});
    mario.css({"transform" : 'rotateZ(180deg)'});
    mario.css({"bottom" : 300+'px'});
    setTimeout(function(){
      mario.css({"bottom" : 210+'px'});
      mario.css({"transform" : 'rotateZ(360deg)'});
    },130);
    setTimeout(function(){
      mario.css({"bottom" : 270+'px'});
      mario.css({"transform" : 'rotateZ(540deg)'});
    },300);
    setTimeout(function(){
      mario.css({"bottom" : 210+'px'});
      mario.css({"transform" : 'rotateZ(720deg)'});
    },450);
    setTimeout(function(){
      mario.css({"bottom" : 240+'px'});
      mario.css({"transform" : 'rotateZ(900deg)'});
    },600);
    setTimeout(function(){
      mario.css({"bottom" : 210+'px'});
      mario.css({"transform" : 'rotateZ(1080deg)'});
    },750);

    setTimeout(function(){
      $("#gameover").fadeIn(2000);
    },3000);

    setTimeout(function(){
      $("#result").show();
    },6000);
  }//function marioDeath()



  function enemyDeath1(){//敵が攻撃に当たったときの一連の流れ
    if($(".enemy1").hasClass("break")){
      return;
    }else {
      $(".enemy1").addClass("break");
      enemyBreakSpeed1 = leftRandom1;
      enemySpin1 = setInterval(function(){
        enemyBreakSpeed1 -=4;
        enemydeg1 +=5;
        $(".enemy1").css({"left":enemyBreakSpeed1 +"px"});
        $(".enemy1").css({"transform":'rotateZ(' + enemydeg1  + 'deg)'});
      },10);
    }
  };//function enemyDeath1(){//敵が攻撃に当たったときの一連の流れ

  function enemyDeath2(){//敵が攻撃に当たったときの一連の流れ
    if($(".enemy2").hasClass("break")){
      return;
    }else {
      $(".enemy2").addClass("break");
      enemyBreakSpeed2 = leftRandom2;
      enemySpin2 = setInterval(function(){
        enemyBreakSpeed2 -=4;
        enemydeg2 +=5;
        $(".enemy2").css({"left":enemyBreakSpeed2 +"px"});
        $(".enemy2").css({"transform":'rotateZ(' + enemydeg2  + 'deg)'});
      },10);
    }
  };//function enemyDeath2(){//敵が攻撃に当たったときの一連の流れ

  function enemyDeath3(){//敵が攻撃に当たったときの一連の流れ
    if($(".enemy3").hasClass("break")){
      return;
    }else {
      $(".enemy3").addClass("break");
      enemyBreakSpeed3 = leftRandom3;
      enemySpin3 = setInterval(function(){
        enemyBreakSpeed3 -=4;
        enemydeg3 +=5;
        $(".enemy3").css({"left":enemyBreakSpeed3 +"px"});
        $(".enemy3").css({"transform":'rotateZ(' + enemydeg3  + 'deg)'});
      },10);
    }
  };//function enemyDeath3(){//敵が攻撃に当たったときの一連の流れ

  function enemyDeath4(){//敵が攻撃に当たったときの一連の流れ
    if($(".enemy4").hasClass("break")){
      return;
    }else {
      $(".enemy4").addClass("break");
      enemyBreakSpeed4 = leftRandom4;
      enemySpin4 = setInterval(function(){
        enemyBreakSpeed4 -=4;
        enemydeg4 +=5;
        $(".enemy4").css({"left":enemyBreakSpeed4 +"px"});
        $(".enemy4").css({"transform":'rotateZ(' + enemydeg4  + 'deg)'});
      },10);
    }
  };//function enemyDeath4(){//敵が攻撃に当たったときの一連の流れ

  function enemyDeath5(){//敵が攻撃に当たったときの一連の流れ
    if($(".enemy5").hasClass("break")){
      return;
    }else {
      $(".enemy5").addClass("break");
      enemyBreakSpeed5 = leftRandom5;
      enemySpin5 = setInterval(function(){
        enemyBreakSpeed5 -=4;
        enemydeg5 +=5;
        $(".enemy5").css({"left":enemyBreakSpeed5 +"px"});
        $(".enemy5").css({"transform":'rotateZ(' + enemydeg5  + 'deg)'});
      },10);
    }
  };//function enemyDeath5(){//敵が攻撃に当たったときの一連の流れ



  setInterval(function() {//マリオが敵やかべにぶつかった際の処理
    marioLeft = $('#mario').position().left;
    marioTop = $('#mario').position().top;

    enemyTop1 = $('.enemy1').position().top;
    enemyLeft1 = $('.enemy1').position().left;
    differenceTop1 = Math.abs(enemyTop1 - marioTop);
    differenceLeft1 = Math.abs(enemyLeft1 - marioLeft);

    enemyTop2 = $('.enemy2').position().top;
    enemyLeft2 = $('.enemy2').position().left;
    differenceTop2 = Math.abs(enemyTop2 - marioTop);
    differenceLeft2 = Math.abs(enemyLeft2 - marioLeft);

    enemyTop3 = $('.enemy3').position().top;
    enemyLeft3 = $('.enemy3').position().left;
    differenceTop3 = Math.abs(enemyTop3 - marioTop);
    differenceLeft3 = Math.abs(enemyLeft3 - marioLeft);

    enemyTop4 = $('.enemy4').position().top;
    enemyLeft4 = $('.enemy4').position().left;
    differenceTop4 = Math.abs(enemyTop4 - marioTop);
    differenceLeft4 = Math.abs(enemyLeft4 - marioLeft);

    enemyTop5 = $('.enemy5').position().top;
    enemyLeft5 = $('.enemy5').position().left;
    differenceTop5 = Math.abs(enemyTop5 - marioTop);
    differenceLeft5 = Math.abs(enemyLeft5 - marioLeft);

    itemTop = Number($('#item-block').position().top);
    itemLeft = Number($('#item-block').position().left);
    differenceItemTop = Math.abs(itemTop - marioTop);
    differenceItemLeft = Math.abs(itemLeft - marioLeft);

    greenTop = Number($('#greenkoura').position().top);
    greenLeft = Number($('#greenkoura').position().left);

    redTop = Number($('#redkoura').position().top);
    redLeft = Number($('#redkoura').position().left);

    differenceRedTop1 = Math.abs(enemyTop1 - redTop);
    differenceRedLeft1 = Math.abs(enemyLeft1 - redLeft);
    differenceRedTop2 = Math.abs(enemyTop2 - redTop);
    differenceRedLeft2 = Math.abs(enemyLeft2 - redLeft);
    differenceRedTop3 = Math.abs(enemyTop3 - redTop);
    differenceRedLeft3 = Math.abs(enemyLeft3 - redLeft);
    differenceRedTop4 = Math.abs(enemyTop4 - redTop);
    differenceRedLeft4 = Math.abs(enemyLeft4 - redLeft);
    differenceRedTop5 = Math.abs(enemyTop5 - redTop);
    differenceRedLeft5 = Math.abs(enemyLeft5 - redLeft);

    differenceGreenTop1 = Math.abs(enemyTop1 - greenTop);
    differenceGreenLeft1 = Math.abs(enemyLeft1 - greenLeft);
    differenceGreenTop2 = Math.abs(enemyTop2 - greenTop);
    differenceGreenLeft2 = Math.abs(enemyLeft2 - greenLeft);
    differenceGreenTop3 = Math.abs(enemyTop3 - greenTop);
    differenceGreenLeft3 = Math.abs(enemyLeft3 - greenLeft);
    differenceGreenTop4 = Math.abs(enemyTop4 - greenTop);
    differenceGreenLeft4 = Math.abs(enemyLeft4 - greenLeft);
    differenceGreenTop5 = Math.abs(enemyTop5 - greenTop);
    differenceGreenLeft5 = Math.abs(enemyLeft5 - greenLeft);


    if(differenceTop1 <58 && differenceLeft1<58){
      if(mario.hasClass("out")){
        return;
      }else if(mario.hasClass("teresa1")){
        return;
      }else if(mario.hasClass("teresa2")){
        return;
      }else if($(".enemy1").hasClass("break")){
        return;
      }else if(mario.hasClass("star1")){
        enemyDeath1();
      }else if(mario.hasClass("star2")){
        enemyDeath1();
      }else{
        marioDeath();
      }
    }
    if(differenceTop2 <58 && differenceLeft2<58){
      if(mario.hasClass("out")){
        return;
      }else if(mario.hasClass("teresa1")){
        return;
      }else if(mario.hasClass("teresa2")){
        return;
      }else if($(".enemy2").hasClass("break")){
        return;
      }else if(mario.hasClass("star1")){
        enemyDeath2();
      }else if(mario.hasClass("star2")){
        enemyDeath2();
      }else{
        marioDeath();
      }
    }
    if(differenceTop3 <58 && differenceLeft3<58){
      if(mario.hasClass("out")){
        return;
      }else if(mario.hasClass("teresa1")){
        return;
      }else if(mario.hasClass("teresa2")){
        return;
      }else if($(".enemy3").hasClass("break")){
        return;
      }else if(mario.hasClass("star1")){
        enemyDeath3();
      }else if(mario.hasClass("star2")){
        enemyDeath3();
      }else{
        marioDeath();
      }
    }
    if(differenceTop4 <58 && differenceLeft4<58){
      if(mario.hasClass("out")){
        return;
      }else if(mario.hasClass("teresa1")){
        return;
      }else if(mario.hasClass("teresa2")){
        return;
      }else if($(".enemy4").hasClass("break")){
        return;
      }else if(mario.hasClass("star1")){
        enemyDeath4();
      }else if(mario.hasClass("star2")){
        enemyDeath4();
      }else{
        marioDeath();
      }
    }
    if(differenceTop5 <58 && differenceLeft5<58){
      if(mario.hasClass("out")){
        return;
      }else if(mario.hasClass("teresa1")){
        return;
      }else if(mario.hasClass("teresa2")){
        return;
      }else if($(".enemy5").hasClass("break")){
        return;
      }else if(mario.hasClass("star1")){
        enemyDeath5();
      }else if(mario.hasClass("star2")){
        enemyDeath5();
      }else{
        marioDeath();
      }
    }

    if(differenceItemTop <58 && differenceItemLeft<58){
      if(mario.hasClass("item-have")){
        return;
      }else{
        getItem();
      }
    }

    if(differenceRedTop1 <58 && differenceRedLeft1<58){
      enemyDeath1();
      clearInterval(redKouraUp);
      $("#redkoura").css({"bottom":3000+"px"});
    }
    if(differenceRedTop2 <58 && differenceRedLeft2<58){
      enemyDeath2();
      clearInterval(redKouraUp);
      $("#redkoura").css({"bottom":3000+"px"});
    }
    if(differenceRedTop3 <58 && differenceRedLeft3<58){
      enemyDeath3();
      clearInterval(redKouraUp);
      $("#redkoura").css({"bottom":3000+"px"});
    }
    if(differenceRedTop4 <58 && differenceRedLeft4<58){
      enemyDeath4();
      clearInterval(redKouraUp);
      $("#redkoura").css({"bottom":3000+"px"});
    }
    if(differenceRedTop5 <58 && differenceRedLeft5<58){
      enemyDeath5();
      clearInterval(redKouraUp);
      $("#redkoura").css({"bottom":3000+"px"});
    }

    if(differenceGreenTop1 <58 && differenceGreenLeft1<58){
      enemyDeath1();
    }
    if(differenceGreenTop2 <58 && differenceGreenLeft2<58){
      enemyDeath2();
    }
    if(differenceGreenTop3 <58 && differenceGreenLeft3<58){
      enemyDeath3();
    }
    if(differenceGreenTop4 <58 && differenceGreenLeft4<58){
      enemyDeath4();
    }
    if(differenceGreenTop5 <58 && differenceGreenLeft5<58){
      enemyDeath5();
    }

  },1);

  $("#result").click(function(){
    setTimeout(function(){
      $(".black-box").fadeIn();
    },1000);

    setTimeout(function(){
      $(".text1").show();
    },2000);

    setTimeout(function(){
      $(".record-text").show();
    },3000);

    setTimeout(function(){
     recordCount = setInterval(function(){
       rCount++;
       $(".record").text(rCount);
       $('.black-box').bind("dblTap",function(){
         rCount = nowCount;
         clearInterval(recordCount);
         $(".record").text(rCount);
         setTimeout(function(){
           $('.restart').show();
         },2000)
       });
       if(rCount >= nowCount){
         clearInterval(recordCount);
         rCount = nowCount;
         $(".record").text(rCount);
         setTimeout(function(){
           $('.restart').show();
         },2000)
       }
     },7);
    },4000);

  });//$("#result").click(function(){


 setTimeout(function(){
  speedRandom1 = Math.floor( Math.random()*5 +1 );
   down1 = setInterval(function(){
     if($('.enemy1').hasClass("death")){
       enemyDown1 -= speedRandom1;
     }else{
       enemyDown1 += speedRandom1;
     }
    $(`.enemy1`).css({"top": enemyDown1+"px"});
    enemyTop1 = Number($('.enemy1').position().top);
  },10);
},8000);

 setTimeout(function(){
  speedRandom2 = Math.floor( Math.random()*5 +1 );
   down2 = setInterval(function(){
     if($('.enemy2').hasClass("death")){
       enemyDown2 -= speedRandom2;
     }else{
       enemyDown2 += speedRandom2;
     }
    $(`.enemy2`).css({"top": enemyDown2+"px"});
    enemyTop2 = Number($('.enemy2').position().top);
  },10);
},9000);

 setTimeout(function(){
  speedRandom3 = Math.floor( Math.random()*5 +1 );
   down3 = setInterval(function(){
     if($('.enemy3').hasClass("death")){
       enemyDown3 -= speedRandom3;
     }else{
       enemyDown3 += speedRandom3;
     }
    $(`.enemy3`).css({"top": enemyDown3+"px"});
    enemyTop3 = Number($('.enemy3').position().top);
  },10);
},10000);

 setTimeout(function(){
  speedRandom4 = Math.floor( Math.random()*5 +1 );
   down4 = setInterval(function(){
     if($('.enemy4').hasClass("death")){
       enemyDown4 -= speedRandom4;
     }else{
       enemyDown4 += speedRandom4;
     }
    $(`.enemy4`).css({"top": enemyDown4+"px"});
    enemyTop4 = Number($('.enemy4').position().top);
  },10);
},11000);

 setTimeout(function(){
  speedRandom5 = Math.floor( Math.random()*5 +1 );
   down5 = setInterval(function(){
     if($('.enemy5').hasClass("death")){
       enemyDown5 -= speedRandom5;
     }else{
       enemyDown5 += speedRandom5;
     }
    $(`.enemy5`).css({"top": enemyDown5+"px"});
    enemyTop5 = Number($('.enemy5').position().top);
  },10);
},12000);

 setTimeout(function(){
   itemDown = setInterval(function(){
     if($('#item-block').hasClass("death")){
       itemDownSpeed = itemDownSpeed;
     } else{
       itemDownSpeed += 2;
     }
    $('#item-block').css({"top": itemDownSpeed+"px"});
    itemTop = Number($('#item-block').position().top);
  },10);
},7000);



setInterval(function(){
  if(enemyTop1 > 1000){
    clearInterval(down1);
    clearInterval(enemySpin1);
    enemyBreakSpeed1 = 0;
    enemydeg1 = 0;
    enemyDown1 = -100;
    speedRandom1 = Math.floor( Math.random()*4 +1 );
    leftRandom1 = Math.floor( Math.random()*420 );
    $(`.enemy1`).css({"left": leftRandom1+"px"});
    $(".enemy1").css({"transform":'rotateZ(' + 0  + 'deg)'});
    $(".enemy1").removeClass("break");
    setTimeout(function(){
      down1 = setInterval(function(){
        if($('.enemy1').hasClass("death")){
          enemyDown1 -= speedRandom1;
        }else{
          enemyDown1 += speedRandom1;
        }
        $(`.enemy1`).css({"top": enemyDown1+"px"});
        enemyTop1 = $('.enemy1').position().top;
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(enemyTop2 > 1000){
    clearInterval(down2);
    clearInterval(enemySpin2);
    enemyBreakSpeed2 = 0;
    enemydeg2 = 0;
    enemyDown2 = -100;
    speedRandom2 = Math.floor( Math.random()*4 +1 );
    leftRandom2 = Math.floor( Math.random()*420 );
    $(`.enemy2`).css({"left": leftRandom2+"px"});
    $(".enemy2").css({"transform":'rotateZ(' + 0  + 'deg)'});
    $(".enemy2").removeClass("break");
    setTimeout(function(){
      down2 = setInterval(function(){
        if($('.enemy2').hasClass("death")){
          enemyDown2 -= speedRandom2;
        }else{
          enemyDown2 += speedRandom2;
        }
        $(`.enemy2`).css({"top": enemyDown2+"px"});
        enemyTop2 = $('.enemy2').position().top;
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(enemyTop3 > 1000){
    clearInterval(down3);
    clearInterval(enemySpin3);
    enemyBreakSpeed3 = 0;
    enemydeg3 = 0;
    enemyDown3 = -100;
    speedRandom3 = Math.floor( Math.random()*4 +1 );
    leftRandom3 = Math.floor( Math.random()*420 );
    $(`.enemy3`).css({"left": leftRandom3+"px"});
    $(".enemy3").css({"transform":'rotateZ(' + 0  + 'deg)'});
    $(".enemy3").removeClass("break");
    setTimeout(function(){
      down3 = setInterval(function(){
        if($('.enemy3').hasClass("death")){
          enemyDown3 -= speedRandom3;
        }else{
          enemyDown3 += speedRandom3;
        }
        $(`.enemy3`).css({"top": enemyDown3+"px"});
        enemyTop3 = $('.enemy3').position().top;
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(enemyTop4 > 1000){
    clearInterval(down4);
    clearInterval(enemySpin4);
    enemyBreakSpeed4 = 0;
    enemydeg4 = 0;
    enemyDown4 = -100;
    speedRandom4 = Math.floor( Math.random()*4 +1 );
    leftRandom4 = Math.floor( Math.random()*420 );
    $(`.enemy4`).css({"left": leftRandom4+"px"});
    $(".enemy4").css({"transform":'rotateZ(' + 0  + 'deg)'});
    $(".enemy4").removeClass("break");
    setTimeout(function(){
      down4 = setInterval(function(){
        if($('.enemy4').hasClass("death")){
          enemyDown4 -= speedRandom4;
        }else{
          enemyDown4 += speedRandom4;
        }
        $(`.enemy4`).css({"top": enemyDown4+"px"});
        enemyTop4 = $('.enemy4').position().top;
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(enemyTop5 > 1000){
    clearInterval(down5);
    clearInterval(enemySpin5);
    enemyBreakSpeed5 = 0;
    enemydeg5 = 0;
    enemyDown5 = -100;
    speedRandom5 = Math.floor( Math.random()*4 +1 );
    leftRandom5 = Math.floor( Math.random()*420 );
    $(`.enemy5`).css({"left": leftRandom5+"px"});
    $(".enemy5").css({"transform":'rotateZ(' + 0  + 'deg)'});
    $(".enemy5").removeClass("break");
    setTimeout(function(){
      down5 = setInterval(function(){
        if($('.enemy5').hasClass("death")){
          enemyDown5 -= speedRandom5;
        }else{
          enemyDown5 += speedRandom5;
        }
        $(`.enemy5`).css({"top": enemyDown5+"px"});
        enemyTop5 = $('.enemy5').position().top;
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(itemTop > 1000){
    $("#item-block").css({"visibility":"visible"});
    clearInterval(itemDown);
    itemDownSpeed = -100;
    leftItemRandom = Math.floor( Math.random()*420 );
    $(`#item-block`).css({"left":leftItemRandom+"px"});
    setTimeout(function(){
      itemDown = setInterval(function(){
        if($('#item-block').hasClass("death")){
          itemDownSpeed = itemDownSpeed;
        } else{
          itemDownSpeed += 2;
        }
       $('#item-block').css({"top": itemDownSpeed+"px"});
       itemTop = Number($('#item-block').position().top);
      },10);
    },1000);
  }
},500);


setInterval(function(){
  if(redTop < -100){
    clearInterval(redKouraUp);
    redKouraSpeed = 3;
    $("#redkoura").css({"bottom":210+"px"});
    $("#redkoura").css({"left":-1000+"px"});
  }
},500);

setInterval(function(){
  if(greenTop < -100){
    clearInterval(greenKouraUp);
    greenKouraSpeed = 3;
    $("#greenkoura").css({"bottom":210+"px"});
    $("#greenkoura").css({"left":-1000+"px"});
  }
},500);



$("#item-box").click(function(){
  if($(this).hasClass("rock")){
    return;
  }else if(mario.hasClass("out")){
    return;
  }else{
    $(this).addClass("rock");
    $("#item-img").hide();
    $("#mario").removeClass("item-have");
    if($("#item-effect").text() == "kinoko"){
      kinokoDash();
    }
    if($("#item-effect").text() == "star"){
      starAtack();
    }
    if($("#item-effect").text() == "redkoura"){
      redShot();
    }
    if($("#item-effect").text() == "greenkoura"){
      greenShot();
    }
    if($("#item-effect").text() == "teresa"){
      teresaEscape();
    }
  }
});//$("item-box").click(function(){





});//$(function(){
