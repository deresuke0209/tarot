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
   $card1 = new TarotCard ('The Fool', "正位置", '無責任さで空回り' , "img/tarot1.jpg",2),
   $card2 = new TarotCard ('The Fool', '逆位置', '経験不足が足を引っ張る' , "img/tarot1.png",3),
   $card3 = new TarotCard ('The Magician', "正位置" ,'インスピレーションを抜群に発揮できる' , "img/tarot2.jpg",2),
   $card4 = new TarotCard ('The Magician', '逆位置' ,'謙虚さにかける' , "img/tarot2.png",1),
   $card5 = new TarotCard ('The High Priestess', "正位置" ,'消極的な態度では誤解される' , "img/tarot3.jpg",3),
   $card6 = new TarotCard ('The High Priestess', '逆位置', '稼ぐことに喜びを感じない' , "img/tarot3.png",1),
   $card7 = new TarotCard ('The Empress',        "正位置" ,'安定しているが満足はしていない' , "img/tarot4.jpg",2),
   $card8 = new TarotCard ('The Empress',        '逆位置', '怠慢な姿勢' , "img/tarot4.png",2),
   $card9 = new TarotCard ('The Emperor',        "正位置" ,'出世欲が高まる' , "img/tarot5.jpg",3),
   $card10 = new TarotCard ('The Emperor',        '逆位置', '周囲の嫉妬に脅かされる' , "img/tarot5.png",2),
   $card11 = new TarotCard ('The Hierophant',     "正位置" ,'チームワーク向上' , "img/tarot6.jpg",2),
   $card12 = new TarotCard ('The Hierophant',     '逆位置', '上司の能力に不満' , "img/tarot6.png",2),
   $card13 = new TarotCard ('The Lovers',         "正位置" ,'契約成立' , "img/tarot7.jpg",2),
   $card14 = new TarotCard ('The Lovers',         '逆位置', 'やる気が失せる' , "img/tarot7.png",2),
   $card15 = new TarotCard ('The Chariot',        "正位置" ,'大成功の予感' , "img/tarot8.jpg",3),
   $card16 = new TarotCard ('The Chariot',        '逆位置', '力みすぎては失敗する' , "img/tarot8.png",3),
   $card17 = new TarotCard ('Strength',           "正位置" ,'やりがいが大切' , "img/tarot9.jpg",1),
   $card18 = new TarotCard ('Strength',           '逆位置', '才能不足' , "img/tarot9.png",2),
   $card19 = new TarotCard ('The Hermit',         "正位置" ,'集団になじめず自己中心的になってしまう' , "img/tarot10.jpg",1),
   $card20 = new TarotCard ('The Hermit',         '逆位置', '仕事に興味がない' , "img/tarot10.png",1),
   $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'チャンスが巡ってくる' , "img/tarot11.jpg",3),
   $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '上手くいかない' , "img/tarot11.png",2),
   $card23 = new TarotCard ('Justice',            "正位置" ,'商談がまとまる' , "img/tarot12.jpg",2),
   $card24 = new TarotCard ('Justice',            '逆位置', '意見が食い違う' , "img/tarot12.png",2),
   $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'献身的に仕事をこなせる' , "img/tarot13.jpg",1),
   $card26 = new TarotCard ('The Hanged Man',     '逆位置', 'くたびれもうけ' , "img/tarot13.png",2),
   $card27 = new TarotCard ('Death',              "正位置" ,'成績が下がる' , "img/tarot14.jpg",2),
   $card28 = new TarotCard ('Death',              '逆位置', '新しい流れを待っている' , "img/tarot14.png",3),
   $card29 = new TarotCard ('Temperance',         "正位置" ,'売り上げが伸びる' , "img/tarot15.jpg",2),
   $card30 = new TarotCard ('Temperance',         '逆位置', '低迷している' , "img/tarot15.png",2),
   $card31 = new TarotCard ('The Devil',          "正位置" , 'ずるい考えに足を引っ張られそうで注意' , "img/tarot16.jpg",3),
   $card32 = new TarotCard ('The Devil',          '逆位置', 'ねたむ感情が消えない' , "img/tarot16.png",1),
   $card33 = new TarotCard ('The Tower',          "正位置" ,'大きなトラブルの予感' , "img/tarot17.jpg",3),
   $card34 = new TarotCard ('The Tower',          '逆位置', '信頼が崩れる' , "img/tarot17.png",2),
   $card35 = new TarotCard ('The Star',           "正位置" ,'充実している' , "img/tarot18.jpg",2),
   $card36 = new TarotCard ('The Star',           '逆位置', '理想と現実のギャップに失望' , "img/tarot18.png",1),
   $card37 = new TarotCard ('The Moon',           "正位置",'先行きが見えない' , "img/tarot19.jpg",2),
   $card38 = new TarotCard ('The Moon',           '逆位置', '感情的な行動ではミスをする' , "img/tarot19.png",3),
   $card39 = new TarotCard ('The Sun',            "正位置" ,'自信と充実に満ち溢れる' , "img/tarot20.jpg",2),
   $card40 = new TarotCard ('The Sun',            '逆位置', '評価されていないと落胆' , "img/tarot20.png",1),
   $card41 = new TarotCard ('Judgement',          "正位置" ,'成果が実る' , "img/tarot21.jpg",2),
   $card42 = new TarotCard ('Judgement',          '逆位置', 'どうしようもない' , "img/tarot21.png",2),
   $card43 = new TarotCard ('The World',          "正位置" ,'絶頂期' , "img/tarot22.jpg",2),
   $card44 = new TarotCard ('The World',          '逆位置', 'ストレスがたまる' , "img/tarot22.png",2)
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
