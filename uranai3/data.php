<?php

require_once("tarot.php");

 $cardlist = array(
    $card1 = new TarotCard ('The Fool', "正位置", '自由・無邪気' , "img/tarot1.jpg"),
    $card2 = new TarotCard ('The Fool', '逆位置', '軽率・愚行' , "img/tarot1.png"),
    $card3 = new TarotCard ('The Magician', "正位置" ,'始まり・才能' , "img/tarot2.jpg"),
    $card4 = new TarotCard ('The Magician', '逆位置' ,'無気力・空回り' , "img/tarot2.png"),
    $card5 = new TarotCard ('The High Priestess', "正位置" ,'知性・平常心' , "img/tarot3.jpg"),
    $card6 = new TarotCard ('The High Priestess', '逆位置', 'わがまま・不安定' , "img/tarot3.png"),
    $card7 = new TarotCard ('The Empress',        "正位置" ,'豊穣・繁栄' , "img/tarot4.jpg"),
    $card8 = new TarotCard ('The Empress',        '逆位置', '挫折・嫉妬' , "img/tarot4.png"),
    $card9 = new TarotCard ('The Emperor',        "正位置" ,'支配・強い責任感' , "img/tarot5.jpg"),
    $card10 = new TarotCard ('The Emperor',        '逆位置', '傲慢・勝手' , "img/tarot5.png"),
    $card11 = new TarotCard ('The Hierophant',     "正位置" ,'慈悲・協調性' , "img/tarot6.jpg"),
    $card12 = new TarotCard ('The Hierophant',     '逆位置', '束縛・独りよがり' , "img/tarot6.png"),
    $card13 = new TarotCard ('The Lovers',         "正位置" ,'絆・情熱' , "img/tarot7.jpg"),
    $card14 = new TarotCard ('The Lovers',         '逆位置', '失恋・不道徳' , "img/tarot7.png"),
    $card15 = new TarotCard ('The Chariot',        "正位置" ,'勝利・成功' , "img/tarot8.jpg"),
    $card16 = new TarotCard ('The Chariot',        '逆位置', '暴走・失敗' , "img/tarot8.png"),
    $card17 = new TarotCard ('Strength',           "正位置" ,'意思・勇気' , "img/tarot9.jpg"),
    $card18 = new TarotCard ('Strength',           '逆位置', '甘え・優柔不断' , "img/tarot9.png"),
    $card19 = new TarotCard ('The Hermit',         "正位置" ,'深慮・単独行動' , "img/tarot10.jpg"),
    $card20 = new TarotCard ('The Hermit',         '逆位置', '無計画・閉鎖的' , "img/tarot10.png"),
    $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'チャンス・幸運' , "img/tarot11.jpg"),
    $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '不運・悪化' , "img/tarot11.png"),
    $card23 = new TarotCard ('Justice',            "正位置" ,'公平・善行' , "img/tarot12.jpg"),
    $card24 = new TarotCard ('Justice',            '逆位置', '不正・偏向' , "img/tarot12.png"),
    $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'忍耐・努力' , "img/tarot13.jpg"),
    $card26 = new TarotCard ('The Hanged Man',     '逆位置', 'やせ我慢・徒労' , "img/tarot13.png"),
    $card27 = new TarotCard ('Death',              "正位置" ,'破滅・死' , "img/tarot14.jpg"),
    $card28 = new TarotCard ('Death',              '逆位置', '再生・再出発' , "img/tarot14.png"),
    $card29 = new TarotCard ('Temperance',         "正位置" ,'調和・自制' , "img/tarot15.jpg"),
    $card30 = new TarotCard ('Temperance',         '逆位置', '浪費・生活の乱れ' , "img/tarot15.png"),
    $card31 = new TarotCard ('The Devil',          "正位置" , '欲望・堕落' , "img/tarot16.jpg"),
    $card32 = new TarotCard ('The Devil',          '逆位置', '意地・悪循環' , "img/tarot16.png"),
    $card33 = new TarotCard ('The Tower',          "正位置" ,'崩壊・悲劇' , "img/tarot17.jpg"),
    $card34 = new TarotCard ('The Tower',          '逆位置', '緊迫・不慮の災い' , "img/tarot17.png"),
    $card35 = new TarotCard ('The Star',           "正位置" ,'希望・ひらめき' , "img/tarot18.jpg"),
    $card36 = new TarotCard ('The Star',           '逆位置', '失望・高望み' , "img/tarot18.png"),
    $card37 = new TarotCard ('The Moon',           "正位置",'不安定・潜在的な危険' , "img/tarot19.jpg"),
    $card38 = new TarotCard ('The Moon',           '逆位置', '徐々に好転・漠然とした希望' , "img/tarot19.png"),
    $card39 = new TarotCard ('The Sun',            "正位置" ,'祝福・誕生' , "img/tarot20.jpg"),
    $card40 = new TarotCard ('The Sun',            '逆位置', '衰退・落胆' , "img/tarot20.png"),
    $card41 = new TarotCard ('Judgement',          "正位置" ,'復活・発展' , "img/tarot21.jpg"),
    $card42 = new TarotCard ('Judgement',          '逆位置', '悔恨・行き詰まり' , "img/tarot21.png"),
    $card43 = new TarotCard ('The World',          "正位置" ,'完全・成就' , "img/tarot22.jpg"),
    $card44 = new TarotCard ('The World',          '逆位置', '未完成・臨界点' , "img/tarot22.png")
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
