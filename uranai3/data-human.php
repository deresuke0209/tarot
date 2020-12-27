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
   $card1 = new TarotCard ('The Fool', "正位置", '自由奔放すぎる。思いやりの心を忘れずに' , "img/tarot1.jpg",3),
   $card2 = new TarotCard ('The Fool', '逆位置', '相手に興味を失う' , "img/tarot1.png",2),
   $card3 = new TarotCard ('The Magician', "正位置" ,'信頼関係を築ける' , "img/tarot2.jpg",2),
   $card4 = new TarotCard ('The Magician', '逆位置' ,'コミュニケーション不足' , "img/tarot2.png",3),
   $card5 = new TarotCard ('The High Priestess', "正位置" ,'おとなしい印象' , "img/tarot3.jpg",1),
   $card6 = new TarotCard ('The High Priestess', '逆位置', '神経質' , "img/tarot3.png",1),
   $card7 = new TarotCard ('The Empress',        "正位置" ,'リーダーシップを発揮' , "img/tarot4.jpg",3),
   $card8 = new TarotCard ('The Empress',        '逆位置', '浅はかである' , "img/tarot4.png",1),
   $card9 = new TarotCard ('The Emperor',        "正位置" ,'カリスマ性を発揮' , "img/tarot5.jpg",3),
   $card10 = new TarotCard ('The Emperor',        '逆位置', 'マウンティングを取りがち' , "img/tarot5.png",1),
   $card11 = new TarotCard ('The Hierophant',     "正位置" ,'安定した関係性' , "img/tarot6.jpg",1),
   $card12 = new TarotCard ('The Hierophant',     '逆位置', '独りよがりな言動はＮＧ' , "img/tarot6.png",3),
   $card13 = new TarotCard ('The Lovers',         "正位置" ,'友好的な関係' , "img/tarot7.jpg",2),
   $card14 = new TarotCard ('The Lovers',         '逆位置', '共通点を見いだせない' , "img/tarot7.png",2),
   $card15 = new TarotCard ('The Chariot',        "正位置" ,'積極的な自己主張' , "img/tarot8.jpg",3),
   $card16 = new TarotCard ('The Chariot',        '逆位置', '上から目線で失敗' , "img/tarot8.png",3),
   $card17 = new TarotCard ('Strength',           "正位置" ,'円満' , "img/tarot9.jpg",2),
   $card18 = new TarotCard ('Strength',           '逆位置', '不適切な関係性' , "img/tarot9.png",2),
   $card19 = new TarotCard ('The Hermit',         "正位置" ,'一人を好む' , "img/tarot10.jpg",1),
   $card20 = new TarotCard ('The Hermit',         '逆位置', '周囲の理解を期待していない' , "img/tarot10.png",1),
   $card21 = new TarotCard ('Wheel of Fortune',   "正位置" ,'運命的なものを感じる' , "img/tarot11.jpg",2),
   $card22 = new TarotCard ('Wheel of Fortune',   '逆位置', '交流を避けられる' , "img/tarot11.png",2),
   $card23 = new TarotCard ('Justice',            "正位置" ,'フェアな関係を築ける' , "img/tarot12.jpg",2),
   $card24 = new TarotCard ('Justice',            '逆位置', '相手との距離感に注意' , "img/tarot12.png",3),
   $card25 = new TarotCard ('The Hanged Man',     "正位置" ,'相手の気持ちを優先' , "img/tarot13.jpg",1),
   $card26 = new TarotCard ('The Hanged Man',     '逆位置', '自己犠牲に耐えられない' , "img/tarot13.png",1),
   $card27 = new TarotCard ('Death',              "正位置" ,'別れの予感' , "img/tarot14.jpg",2),
   $card28 = new TarotCard ('Death',              '逆位置', 'それぞれの人生を歩む時期' , "img/tarot14.png",3),
   $card29 = new TarotCard ('Temperance',         "正位置" ,'相手から信頼を得る' , "img/tarot15.jpg",2),
   $card30 = new TarotCard ('Temperance',         '逆位置', '価値観が合わない' , "img/tarot15.png",2),
   $card31 = new TarotCard ('The Devil',          "正位置" , '危険な関係' , "img/tarot16.jpg",2),
   $card32 = new TarotCard ('The Devil',          '逆位置', 'トラブルの予感' , "img/tarot16.png",2),
   $card33 = new TarotCard ('The Tower',          "正位置" ,'上から目線が災いを呼ぶ' , "img/tarot17.jpg",3),
   $card34 = new TarotCard ('The Tower',          '逆位置', '時間が解決' , "img/tarot17.png",3),
   $card35 = new TarotCard ('The Star',           "正位置" ,'信頼関係が深まる' , "img/tarot18.jpg",2),
   $card36 = new TarotCard ('The Star',           '逆位置', '勝手に理想を押し付け失望する' , "img/tarot18.png",2),
   $card37 = new TarotCard ('The Moon',           "正位置",'不信感' , "img/tarot19.jpg",2),
   $card38 = new TarotCard ('The Moon',           '逆位置', '距離を置くと好転' , "img/tarot19.png",3),
   $card39 = new TarotCard ('The Sun',            "正位置" ,'幼少期の楽しい思い出のように円満' , "img/tarot20.jpg",2),
   $card40 = new TarotCard ('The Sun',            '逆位置', '自己中心的' , "img/tarot20.png",1),
   $card41 = new TarotCard ('Judgement',          "正位置" ,'お互いに歩み寄る時期' , "img/tarot21.jpg",3),
   $card42 = new TarotCard ('Judgement',          '逆位置', '仲違い' , "img/tarot21.png",2),
   $card43 = new TarotCard ('The World',          "正位置" ,'比較的円満' , "img/tarot22.jpg",2),
   $card44 = new TarotCard ('The World',          '逆位置', '進展はなし' , "img/tarot22.png",2)

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
