<?php
require_once("data-monster.php");
require_once("data-skil.php");

 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta name="twitter:card" content="summary" /> <!--①-->
    <meta name="twitter:site" content="@secre9" /> <!--②-->
    <meta property="og:url" content="記事のURL" /> <!--③-->
    <meta property="og:title" content="ポケモンバトル" /> <!--④-->
    <meta property="twitter:image" content="http://ftp.lolipop.jp/test/killer.jpg" /> <!--⑥-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=1400">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- default（Safariと同じ） / black（黒） / black-translucent（ステータスバーをコンテンツに含める） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- ホーム画面に表示されるアプリ名 -->
    <meta name="apple-mobile-web-app-title" content="pokemon2">
    <!-- ホーム画面に表示されるアプリアイコン -->
    <link rel="apple-touch-icon" href="img/1.png">
    <title>pokemon2</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


  </head>
  <body>

     <main class="top-page">
       <div class="content">
         <h1>ポケモンを3匹選んでください</h1>
         <form class="" action="index2.php" method="post">
           <div class="monster-card-list">
             <?php foreach($monsterList as $i=>$monsters) :?>
             <div class="monster-card">

               <div class="monster-img">
                 <img src="<?php echo $monsters->getImg(); ?>" alt="">
               </div>

               <div class="monster-name">
                <?php echo $monsters->getName(); ?> LV:50
               </div>
               <div class="monster-type">
                 タイプ : <span class="type-color <?php echo $monsters->getColor(); ?>"><?php echo $monsters->getType(); ?></span>
                <span class="type-color <?php echo $monsters->getColor2(); ?>"><?php echo $monsters->getType2(); ?></span>
               </div>
               <ul>
                 わざ
                 <?php for($y=0; $y<=3; $y++): ?>
                 <li>・<?php echo $skilList[4*$i+$y]->getNameSkil();?></li>
               <?php endfor; ?>
               </ul>
             </div><!--monster-card-->
           <?php endforeach; ?>
           </div><!--monster-card-list-->

           <div class="select-zone">
             <p>
               <span>1匹目のポケモン</span>
               <span>
                 <select class="" name="pokemon1">
                   <?php foreach($monsterList as $i=>$monsters) :?>
                   <option value="<?php echo $monsters->getNumber();?>"><?php echo $monsters->getName(); ?></option>
                   <?php endforeach; ?>
                 </select>
               </span>
             </p>
             <p>
               <span>2匹目のポケモン</span>
               <span>
                 <select class="" name="pokemon2">
                   <?php foreach($monsterList as $i=>$monsters) :?>
                   <option value="<?php echo $monsters->getNumber();?>"><?php echo $monsters->getName(); ?></option>
                   <?php endforeach; ?>
                 </select>
               </span>
             </p>
             <p>
               <span>3匹目のポケモン</span>
               <span>
                 <select class="" name="pokemon3">
                   <?php foreach($monsterList as $i=>$monsters) :?>
                   <option value="<?php echo $monsters->getNumber();?>"><?php echo $monsters->getName(); ?></option>
                   <?php endforeach; ?>
                 </select>
               </span>
             </p>
           </div>

           <div class="submit-button">
             <input type="submit" name="" value="この3匹に決める">
           </div><!--submit-button-->
         </form>
       </div><!--content-->
     </main><!--top-page-->

    <script src="js/script.js"></script>
  </body>
</html>
