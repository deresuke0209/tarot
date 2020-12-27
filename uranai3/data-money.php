<?php

require_once("tarot.php");

 $cardlist = array(
   $card1 = new TarotCard ('The Fool', "正位置", 'お金に無頓着' , "img/tarot1.jpg",1),
   $card2 = new TarotCard ('The Fool', '逆位置', '計画性のなさが裏目に出る' , "img/tarot1.png",3),
   $card3 = new TarotCard ('The Magician', "正位置" ,'困ることはない' , "img/tarot2.jpg",3),
   $card4 = new TarotCard ('The Magician', '逆位置' ,'知識不足' , "img/tarot2.png",2),
   $card5 = new TarotCard ('The High Priestess', "正位置" ,'あまり使わない' , "img/tarot3.jpg",1),
   $card6 = new TarotCard ('The High Priestess', '逆位置', '興味がない' , "img/tarot3.png",1),
   $card7 = new TarotCard ('The Empress',        "正位置" ,'繁盛する' , "img/tarot4.jpg",2),
   $card8 = new TarotCard ('The Empress',        '逆位置', '楽をして稼ごうとする' , "img/tarot4.png",1),
   $card9 = new TarotCard ('The Emperor',        "正位置" ,'安定している' , "img/tarot5.jpg",2),
   $card10 = new TarotCard ('The Emperor',        '逆位置', '脅かされる' , "img/tarot5.png",2),
   $card11 = new TarotCard ('The Hierophant',     "正位置" ,'利益が上がる' , "img/tarot6.jpg",2),
   $card12 = new TarotCard ('The Hierophant',     '逆位置', '執着心が強くなる' , "img/tarot6.png",2),
   $card13 = new TarotCard ('The Lovers',         "正位置" ,'金運が上がる' , "img/tarot7.jpg",3),
   $card14 = new TarotCard ('The Lovers',         '逆位置', 'ケアレスミスで損をする' , "img/tarot7.png",3),
   $card15 = new TarotCard ('The Chariot',        "正位置" ,'成功する' , "img/tarot8.jpg",2),
   $card16 = new TarotCard ('The Chariot',        '逆位置', '知識不足で失敗' , "img/tarot8.png",2),
   $card17 = new TarotCard ('Strength',           "正位置" ,'良い話が進展する' , "img/tarot9.jpg",2),
   $card18 = new TarotCard ('Strength',           '逆位置', '契約不成立' , "img/tarot9.png",2),
   $card19 = new TarotCard ('The Hermit',         "正位置" ,'現状維持' , "img/tarot10.jpg",1),
   $card20 = new TarotCard ('The Hermit',         '逆位置', 'お金に興味がない' , "img/tarot10.png",1),
   $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'良い出資ができる' , "img/tarot11.jpg",1),
   $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '不安材料が増える' , "img/tarot11.png",2),
   $card23 = new TarotCard ('Justice',            "正位置" ,'双方が得をする' , "img/tarot12.jpg",2),
   $card24 = new TarotCard ('Justice',            '逆位置', '不信感を覚える' , "img/tarot12.png",2),
   $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'やりがいを重視する' , "img/tarot13.jpg",1),
   $card26 = new TarotCard ('The Hanged Man',     '逆位置', '自分以外にお金を使いたくない' , "img/tarot13.png",1),
   $card27 = new TarotCard ('Death',              "正位置" ,'徐々に失う' , "img/tarot14.jpg",2),
   $card28 = new TarotCard ('Death',              '逆位置', '新しいことを始めるとよい兆しが見えてくる' , "img/tarot14.png",3),
   $card29 = new TarotCard ('Temperance',         "正位置" ,'節約思考' , "img/tarot15.jpg",1),
   $card30 = new TarotCard ('Temperance',         '逆位置', '支出が増える' , "img/tarot15.png",2),
   $card31 = new TarotCard ('The Devil',          "正位置" , '金の亡者' , "img/tarot16.jpg",1),
   $card32 = new TarotCard ('The Devil',          '逆位置', '借金に注意' , "img/tarot16.png",3),
   $card33 = new TarotCard ('The Tower',          "正位置" ,'トラブルに注意' , "img/tarot17.jpg",3),
   $card34 = new TarotCard ('The Tower',          '逆位置', '出費が増える' , "img/tarot17.png",2),
   $card35 = new TarotCard ('The Star',           "正位置" ,'苦労しない' , "img/tarot18.jpg",2),
   $card36 = new TarotCard ('The Star',           '逆位置', '現実が理想が追い付かず失望する' , "img/tarot18.png",2),
   $card37 = new TarotCard ('The Moon',           "正位置",'安定しない' , "img/tarot19.jpg",2),
   $card38 = new TarotCard ('The Moon',           '逆位置', '衝動的な判断はＮＧ' , "img/tarot19.png",3),
   $card39 = new TarotCard ('The Sun',            "正位置" ,'充実している' , "img/tarot20.jpg",2),
   $card40 = new TarotCard ('The Sun',            '逆位置', '支出が増える' , "img/tarot20.png",2),
   $card41 = new TarotCard ('Judgement',          "正位置" ,'成果が実る' , "img/tarot21.jpg",2),
   $card42 = new TarotCard ('Judgement',          '逆位置', '賭け事は失敗する' , "img/tarot21.png",3),
   $card43 = new TarotCard ('The World',          "正位置" ,'絶頂期' , "img/tarot22.jpg",2),
   $card44 = new TarotCard ('The World',          '逆位置', '現状に不満' , "img/tarot22.png",2)

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
