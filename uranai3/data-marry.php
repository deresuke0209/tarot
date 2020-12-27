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
   $card1 = new TarotCard ('The Fool', "正位置", '建設的な行動が吉' , "img/tarot1.jpg",3),
   $card2 = new TarotCard ('The Fool', '逆位置', '幼稚な理由で不仲に' , "img/tarot1.png",2),
   $card3 = new TarotCard ('The Magician', "正位置" ,'共通の話題で円満に' , "img/tarot2.jpg",3),
   $card4 = new TarotCard ('The Magician', '逆位置' ,'新鮮さが足らず相手に飽きる' , "img/tarot2.png",2),
   $card5 = new TarotCard ('The High Priestess', "正位置" ,'一緒にいると精神的に安心できる' , "img/tarot3.jpg",1),
   $card6 = new TarotCard ('The High Priestess', '逆位置', '距離感がつかめなくなる' , "img/tarot3.png",2),
   $card7 = new TarotCard ('The Empress',        "正位置" ,'性的に盛んになる予感' , "img/tarot4.jpg",3),
   $card8 = new TarotCard ('The Empress',        '逆位置', '愛情表現に不満' , "img/tarot4.png",2),
   $card9 = new TarotCard ('The Emperor',        "正位置" ,'責任をもって相手に接する' , "img/tarot5.jpg",3),
   $card10 = new TarotCard ('The Emperor',        '逆位置', '上から目線で不快' , "img/tarot5.png",3),
   $card11 = new TarotCard ('The Hierophant',     "正位置" ,'価値観が合うのが望ましい関係性' , "img/tarot6.jpg",1),
   $card12 = new TarotCard ('The Hierophant',     '逆位置', '束縛を嫌う' , "img/tarot6.png",1),
   $card13 = new TarotCard ('The Lovers',         "正位置" ,'相思相愛' , "img/tarot7.jpg",2),
   $card14 = new TarotCard ('The Lovers',         '逆位置', '隣の芝生が青く見える' , "img/tarot7.png",1),
   $card15 = new TarotCard ('The Chariot',        "正位置" ,'直球勝負でＯＫ' , "img/tarot8.jpg",3),
   $card16 = new TarotCard ('The Chariot',        '逆位置', '強引さに嫌気がさす' , "img/tarot8.png",2),
   $card17 = new TarotCard ('Strength',           "正位置" ,'プロポーズに良い時期' , "img/tarot9.jpg",3),
   $card18 = new TarotCard ('Strength',           '逆位置', 'ここぞという時に勇気が出ない' , "img/tarot9.png",1),
   $card19 = new TarotCard ('The Hermit',         "正位置" ,'好きでも嫌いでもない' , "img/tarot10.jpg",2),
   $card20 = new TarotCard ('The Hermit',         '逆位置', '空気のような存在で孤独' , "img/tarot10.png",1),
   $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'良いチャンスが巡るターニングポイント' , "img/tarot11.jpg",3),
   $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '自然消滅' , "img/tarot11.png",2),
   $card23 = new TarotCard ('Justice',            "正位置" ,'理想の相手' , "img/tarot12.jpg",1),
   $card24 = new TarotCard ('Justice',            '逆位置', '意見の相違が多い' , "img/tarot12.png",2),
   $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'努力も忍耐も相手のため' , "img/tarot13.jpg",1),
   $card26 = new TarotCard ('The Hanged Man',     '逆位置', '共依存で共倒れの可能性' , "img/tarot13.png",2),
   $card27 = new TarotCard ('Death',              "正位置" ,'大きな障害で距離を感じる' , "img/tarot14.jpg",2),
   $card28 = new TarotCard ('Death',              '逆位置', '時間の流れに身を任せると開けてくる' , "img/tarot14.png",3),
   $card29 = new TarotCard ('Temperance',         "正位置" ,'程よい関係性で安定' , "img/tarot15.jpg",1),
   $card30 = new TarotCard ('Temperance',         '逆位置', '一緒にいるだけで落ち着かない' , "img/tarot15.png",2),
   $card31 = new TarotCard ('The Devil',          "正位置" , '執着の危険信号' , "img/tarot16.jpg",3),
   $card32 = new TarotCard ('The Devil',          '逆位置', '失うことへの恐れにとらわれる' , "img/tarot16.png",1),
   $card33 = new TarotCard ('The Tower',          "正位置" ,'衝撃的な出来事で修復が難しくなる' , "img/tarot17.jpg",2),
   $card34 = new TarotCard ('The Tower',          '逆位置', '行動が裏目に出て悪化' , "img/tarot17.png",2),
   $card35 = new TarotCard ('The Star',           "正位置" ,'無償の愛と情熱' , "img/tarot18.jpg",1),
   $card36 = new TarotCard ('The Star',           '逆位置', '理想が高すぎる' , "img/tarot18.png",1),
   $card37 = new TarotCard ('The Moon',           "正位置",'将来性が不透明' , "img/tarot19.jpg",2),
   $card38 = new TarotCard ('The Moon',           '逆位置', '不信感が徐々に薄れる' , "img/tarot19.png",3),
   $card39 = new TarotCard ('The Sun',            "正位置" ,'相思相愛' , "img/tarot20.jpg",1),
   $card40 = new TarotCard ('The Sun',            '逆位置', 'エネルギーが尽きる' , "img/tarot20.png",2),
   $card41 = new TarotCard ('Judgement',          "正位置" ,'プロポーズの時期' , "img/tarot21.jpg",3),
   $card42 = new TarotCard ('Judgement',          '逆位置', 'こだわりが強すぎては行き詰まる' , "img/tarot21.png",3),
   $card43 = new TarotCard ('The World',          "正位置" ,'安定した深い絆' , "img/tarot22.jpg",1),
   $card44 = new TarotCard ('The World',          '逆位置', '可もなく不可もなく斬新さが足りない' , "img/tarot22.png",2)

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
