<!DOCTYPE html>
<html>
  <head>
    <meta name="twitter:card" content="summary" /> <!--①-->
    <meta name="twitter:site" content="@secre9" /> <!--②-->
    <meta property="og:url" content="記事のURL" /> <!--③-->
    <meta property="og:title" content="マリオカート" /> <!--④-->
    <meta property="twitter:image" content="http://ftp.lolipop.jp/test/killer.jpg" /> <!--⑥-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=480">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- default（Safariと同じ） / black（黒） / black-translucent（ステータスバーをコンテンツに含める） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <!-- ホーム画面に表示されるアプリ名 -->
    <meta name="apple-mobile-web-app-title" content="mario-cart">
    <!-- ホーム画面に表示されるアプリアイコン -->
    <link rel="apple-touch-icon" href="img/mario.png">
    <title>マリオカート</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div id="redkoura" class=""></div>
      <div id="greenkoura" class=""></div>
      <div id="mario" class="out">
        <div id="mario-container">
        </div>
      </div>
      <a href="index.php" id="return"><img src="img/return.png" alt=""></a>
      <div id="ready" class="hide">READY</div>
      <div id="go" class="hide">GO!!</div>
      <div id="gameover" class="hide">GAME OVER</div>
      <div id="result" class="hide">Result</div>
      <div id="item-block"></div>
      <div id="right-button" class="hide"><i class="fas fa-arrow-circle-right fa-6x"></i></div>
      <div id="left-button" class="hide"><i class="fas fa-arrow-circle-left fa-6x"></i></div>
      <div id="use-button">item</div>
      <div id="count"><span id="count-up">0</span>m</div>
      <div id="item-box" class="rock">
        <div id="item-box-container">
          <div id="item-effect" class="hide"></div>
          <img src="" alt="" id="item-img" class="hide">
        </div><!--item-box-container-->
      </div><!--item-box-->


      <div class="black-box hide">
        <div class="black-box-container">
          <div class="new-record hide"></div>
          <div class="text1 hide">今回の記録</div>
          <div class="record-text hide"><span class="record">0</span>m</div>
          <p class="score-title hide">ベストスコア</p>
          <img src="img/gold.png" alt="" class="medal gold hide">
          <img src="img/silver.png" alt="" class="medal silver hide">
          <img src="img/blonze.png" alt="" class="medal blonze hide">
          <ul class="hide">
            <li id="record1"><span id="recordTime1">0</span>m</li>
            <li id="record2"><span id="recordTime2">0</span>m</li>
            <li id="record3"><span id="recordTime3">0</span>m</li>
          </ul>
          <a class="restart hide" href="index.php">もう一度遊ぶ</a>
        </div><!--black-box-container-->
      </div><!--black-box-->
    </div><!--container-->
    <script src="js/script.js"></script>
  </body>
</html>
