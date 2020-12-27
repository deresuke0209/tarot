<?php

$name = $_POST["name"];
$title = '';

$catch = $_POST["tarot"];

switch ($catch){
    case 'love':
        require_once("data-love.php");
        $title = "恋愛";
        break;
    case 'marry':
        require_once("data-marry.php");
        $title = "結婚";
        break;
    case 'work':
        require_once("data-work.php");
        $title = "仕事";
        break;
    case 'human':
        require_once("data-human.php");
        $title = "対人関係";
        break;
    case 'money':
        require_once("data-money.php");
        $title = "お金";
        break;
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta name="twitter:card" content="summary" /> <!--①-->
    <meta name="twitter:site" content="@secre9" /> <!--②-->
    <meta property="og:url" content="記事のURL" /> <!--③-->
    <meta property="og:title" content="タロットカード占い" /> <!--④-->
    <meta property="twitter:image" content="http://ftp.lolipop.jp/test/killer.jpg" /> <!--⑥-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=480">
    <title>タロットカード占い</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style-sp.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/jquery.rotate.js"></script>

  </head>
  <body>


     <main>

       <div class="container">
         <img src="img/star.png" alt="" class="star">
        <?php foreach($deallist as $i=>$deals) :?>

         <div class="deck deck<?php echo $i+1 ;?> rock no-check">
           <div class="time"></div>
           <div class="deck-frame">
             <div class="shadow"></div>
             <img src="img/tarot0.png" alt="" class="reverse-img">
             <img src="<?php echo $deals->getImg(); ?>" alt="" class="face-img">
           </div>
           <div class="card-text">
             <p class="card-name">
               <?php echo $deals->getCardName(); ?>
             </p><!--card-name-->

             <p class="card-position">
               <?php echo $deals->getPosition(); ?>
             </p><!--card-position-->

             <p class="card-mean">
               <?php echo $deals->getMean(); ?>
             </p><!--card-mean-->

             <p class="card-type">
               <?php echo $deals->getType(); ?>
             </p><!--card-type-->
           </div><!--card-text-->


         </div><!--deck-->
      <?php endforeach; ?>


           <div class="start">
             START!!<br>
           </div>

           <div class="select">
             どちらかの束を選んでください
           </div>

       </div><!--container-->


       <div id="comment-title">
         <?php echo $name; ?>さんの<?php echo $title; ?>においての
       </div>
       <div id="comment">
         <ul class="moment fade"><!--価値感に関するテキストが入る-->
           <li class="big">価値観</li>
         </ul><!--moment-->
         <ul class="status fade"><!--現状に関するテキストが入る-->
           <li class="big">現状</li>
         </ul><!--status-->
         <ul class="advice fade"><!--アドバイスに関するテキストが入る-->
          <li class="big">今後取るべき行動、注意点</li>
         </ul><!--advice-->

       </div><!--comment-->





     </main>


    <script src="js/script.js"></script>

  </body>
</html>
