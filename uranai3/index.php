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


     <main class="top-page">
       <form class="top-form" action="index2.php" method="post" onsubmit="return checked()">
       <p class="input-list">あなたの名前を教えてください</p>
       <p class="input-list"><input type="text" class='name' name="name" value=""></p>
       <p class="input-list">あなたの生年月日を教えて下さい</p>
       <p class="input-list">
         <select class="year" name="year">
           <option selected disabled hidden></option>
           <?php for($i=1930; $i<=2020; $i++): ?>
           <option value="<?php echo $i ?>年" name='year'><?php echo $i ?>年</option>
           <?php endfor; ?>
         </select>

         <select class="month" name="month">
           <option selected disabled hidden></option>
           <?php for($i=1; $i<=12; $i++): ?>
           <option value="<?php echo $i ?>月" name='month'><?php echo $i ?>月</option>
           <?php endfor; ?>
         </select>

         <select class="day" name="day">
           <option selected disabled hidden></option>
           <?php for($i=1; $i<=31; $i++): ?>
           <option value="<?php echo $i ?>日" name='day'><?php echo $i ?>日</option>
           <?php endfor; ?>
         </select>

       </p>

       <h1 class="top-message">何について占いますか?</h1>


         <p class="radio-list"><input class="radio" type="radio" name="tarot" value="love" checked="checked">恋愛</p>
         <p class="radio-list"><input class="radio" type="radio" name="tarot" value="marry">結婚</p>
         <p class="radio-list"><input class="radio" type="radio" name="tarot" value="work">仕事</p>
         <p class="radio-list"><input class="radio" type="radio" name="tarot" value="human">対人関係</p>
         <p class="radio-list"><input class="radio" type="radio" name="tarot" value="money">お金</p>
         <input type="submit" name="" value="占う" id="submit">
       </form>
       <div class="err-msg">
         入力漏れがあります。
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


     </main><!--top-page-->


    <script src="js/script.js"></script>

  </body>
</html>
