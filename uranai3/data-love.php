<?php
//パターン1 恋愛観 タイプ
//パターン2 現象
//パターン3 アドバイス
//パターン4
//パターン5
//パターン6
//パターン7
require_once("tarot.php");

 $cardlist = array(
   $card1 = new TarotCard ('The Fool', "正位置", '個性的で自由を重んじる恋愛 ' , "img/tarot1.jpg",1),
   $card2 = new TarotCard ('The Fool', '逆位置', '単調さに飽きてしまう ' , "img/tarot1.png" ,1),
   $card3 = new TarotCard ('The Magician', "正位置" ,'相手の知性に惹かれる' , "img/tarot2.jpg",1),
   $card4 = new TarotCard ('The Magician', '逆位置' ,'真面目すぎては空回りする' , "img/tarot2.png",3),
   $card5 = new TarotCard ('The High Priestess', "正位置" ,'愛情は深いが友達のような関係性' , "img/tarot3.jpg",2),
   $card6 = new TarotCard ('The High Priestess', '逆位置', '拒絶されることを恐れている' , "img/tarot3.png",1),
   $card7 = new TarotCard ('The Empress',        "正位置" ,'あなたの魅力に惹かれている ' , "img/tarot4.jpg",2),
   $card8 = new TarotCard ('The Empress',        '逆位置', '過度な甘えは逆効果' , "img/tarot4.png",3),
   $card9 = new TarotCard ('The Emperor',        "正位置" ,'積極的な交流がはかれる' , "img/tarot5.jpg",2),
   $card10 = new TarotCard ('The Emperor',        '逆位置', '横暴な態度で関係性に亀裂が生じる' , "img/tarot5.png",2),
   $card11 = new TarotCard ('The Hierophant',     "正位置" ,'知的で冷静な人が良い ' , "img/tarot6.jpg",3),
   $card12 = new TarotCard ('The Hierophant',     '逆位置', '我が強すぎては失敗する' , "img/tarot6.png",3),
   $card13 = new TarotCard ('The Lovers',         "正位置" ,'新しい出会いの予感' , "img/tarot7.jpg",2),
   $card14 = new TarotCard ('The Lovers',         '逆位置', 'その場限りの遊びの恋' , "img/tarot7.png",1),
   $card15 = new TarotCard ('The Chariot',        "正位置" ,'強気でも上手くいく' , "img/tarot8.jpg",3),
   $card16 = new TarotCard ('The Chariot',        '逆位置', '虚勢を張っているのがばれる' , "img/tarot8.png",2),
   $card17 = new TarotCard ('Strength',           "正位置" ,'成長できる恋' , "img/tarot9.jpg",1),
   $card18 = new TarotCard ('Strength',           '逆位置', 'タイミングを逃す' , "img/tarot9.png",2),
   $card19 = new TarotCard ('The Hermit',         "正位置" ,'自分が一番かわいい' , "img/tarot10.jpg",1),
   $card20 = new TarotCard ('The Hermit',         '逆位置', 'まず心を開くことが重要' , "img/tarot10.png",3),
   $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'よい出会いに恵まれるタイミング' , "img/tarot11.jpg",3),
   $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '悪いことに目が行きがち' , "img/tarot11.png",1),
   $card23 = new TarotCard ('Justice',            "正位置" ,'出会いの場に赴くと好転する' , "img/tarot12.jpg",3),
   $card24 = new TarotCard ('Justice',            '逆位置', '八方美人でトラブルに' , "img/tarot12.png",1),
   $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'思い込みで恋愛感情を抱いてしまう' , "img/tarot13.jpg",1),
   $card26 = new TarotCard ('The Hanged Man',     '逆位置', '心が過去にとらわれている' , "img/tarot13.png",1),
   $card27 = new TarotCard ('Death',              "正位置" ,'出会いに消極的' , "img/tarot14.jpg",1),
   $card28 = new TarotCard ('Death',              '逆位置', '苦しみが終わる' , "img/tarot14.png",2),
   $card29 = new TarotCard ('Temperance',         "正位置" ,'調和のとれた恋愛' , "img/tarot15.jpg",1),
   $card30 = new TarotCard ('Temperance',         '逆位置', '不安定な気分では誤解される' , "img/tarot15.png",3),
   $card31 = new TarotCard ('The Devil',          "正位置" , '危険信号' , "img/tarot16.jpg",2),
   $card32 = new TarotCard ('The Devil',          '逆位置', '危ない罠に自ら落ちる' , "img/tarot16.png",1),
   $card33 = new TarotCard ('The Tower',          "正位置" ,'衝撃的な出会いの予感' , "img/tarot17.jpg",3),
   $card34 = new TarotCard ('The Tower',          '逆位置', 'トラブルが尽きない' , "img/tarot17.png",2),
   $card35 = new TarotCard ('The Star',           "正位置" ,'直感が当たる' , "img/tarot18.jpg",2),
   $card36 = new TarotCard ('The Star',           '逆位置', '友達止まり' , "img/tarot18.png",1),
   $card37 = new TarotCard ('The Moon',           "正位置",'心変わりが激しい' , "img/tarot19.jpg",1),
   $card38 = new TarotCard ('The Moon',           '逆位置', '現状維持' , "img/tarot19.png",3),
   $card39 = new TarotCard ('The Sun',            "正位置" ,'あなたの明るさが手助けになる' , "img/tarot20.jpg",3),
   $card40 = new TarotCard ('The Sun',            '逆位置', '自己中心的な振る舞いで落胆される' , "img/tarot20.png",2),
   $card41 = new TarotCard ('Judgement',          "正位置" ,'運命的な出会い' , "img/tarot21.jpg",3),
   $card42 = new TarotCard ('Judgement',          '逆位置', 'チャンスを逃しては後悔' , "img/tarot21.png",3),
   $card43 = new TarotCard ('The World',          "正位置" ,'満たされている現状' , "img/tarot22.jpg",2),
   $card44 = new TarotCard ('The World',          '逆位置', '変化がないので焦る' , "img/tarot22.png",2)

  );


    $tarotlist = array();
    $deallist = array();

    for($i=0; $i<=21; $i++){
      $tarotlist[$i] = array($cardlist[$i*2] , $cardlist[$i*2+1]);
      shuffle($tarotlist[$i]);
      $deallist[$i] = $tarotlist[$i][0];
    }

    shuffle($deallist);


 ?>
