<?php
require_once("data-monster.php");
require_once("data-skil.php");

$myPokemon = $_POST["pokemon1"];
$num = count($monsterList);
$enemy = mt_rand(0, $num-1);

$num = count($monsterList);
$enemy1 = mt_rand(0, $num-1);//相手の一匹めのポケモンを決めるための数字
$enemy2 = mt_rand(0, $num-1);//相手の二匹めのポケモンを決めるための数字
$enemy3 = mt_rand(0, $num-1);//相手の三匹めのポケモンを決めるための数字

$myPokemon1 = $_POST["pokemon1"];
$myPokemon2 = $_POST["pokemon2"];
$myPokemon3 = $_POST["pokemon3"];

$mypokemons = array($myPokemon1,$myPokemon2,$myPokemon3);

$enemys = array($enemy1,$enemy2,$enemy3);



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
    <title>pokemon2</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


  </head>
  <body>

     <main class="second-page">
       <div class="content">
         <div class="monster-list">
           <div class="mymonster-zone">
             <div class="monster monster0">
               <div class="hide hp-shadow">
                 <?php echo $monsterList[$myPokemon]->getBody(); ?>
               </div>
               <div class="pic">
                 <img src="<?php echo $monsterList[$myPokemon]->getImg(); ?>" alt="">
               </div>
               <p class="name-p">
                 <span class="name"><?php echo $monsterList[$myPokemon]->getName(); ?></span>
                 LV:50
                 <span class="type-color1 <?php echo $monsterList[$myPokemon]->getColor(); ?>"><?php echo $monsterList[$myPokemon]->getType(); ?></span>
                 <span class="type-color2 <?php echo $monsterList[$myPokemon]->getColor2(); ?>"><?php echo $monsterList[$myPokemon]->getType2(); ?></span>
               <p class="hp">HP<span class="status"></span></p>
               <div class="hp-box">
                 <div class="hp-point"></div>
               </div>
               <div class="hp-num">
                 <span class="hp-child"></span>/<span class="hp-parent"></span>
               </div>
               <p class="type hide">タイプ　<span class="type-point"><?php echo $monsterList[$myPokemon]->getType(); ?></span></p>
               <p class="type hide">タイプ2　<span class="type-point2"><?php echo $monsterList[$myPokemon]->getType2(); ?></span></p>
               <p class="atack hide">こうげき　 <span class="atack-point"><?php echo $monsterList[$myPokemon]->getAtack(); ?></span></p>
               <p class="atack-special hide">とくこう　 <span class="atack-special-point"><?php echo $monsterList[$myPokemon]->getAtackSpecial(); ?></span></p>
               <p class="defence hide">ぼうぎょ　<span class="defence-point"><?php echo $monsterList[$myPokemon]->getDefence(); ?></span></p>
               <p class="defence-special hide">とくぼう　<span class="defence-special-point"><?php echo $monsterList[$myPokemon]->getDefenceSpecial(); ?></span></p>
               <p class="speed hide">すばやさ　<span class="speed-point"><?php echo $monsterList[$myPokemon]->getSpeed(); ?></span></p>

               <div class="select-buttons">
                 <button type="button" name="button" class="battle-command">たたかう</button>
                 <button type="button" name="button" class="change-command">ポケモン</button>
               </div><!--select-buttons-->
               <ul class="monster0-skils hide">わざ
                 <?php for($i=0; $i<=3; $i++) :?>
                 <li>
                   <button type="button" name="button" class="skil-radio <?php echo $skilList[4*$myPokemon+$i]->getColorSkil();?>">
                     <span class="skil-name">
                       <?php echo $skilList[4*$myPokemon+$i]->getNameSkil();?>
                     </span><!--skil-name-->
                   </button>

                   <span class="skil-type hide"><?php echo $skilList[4*$myPokemon+$i]->getTypeSkil();?></span>
                   <span class="skil-atack hide"><?php echo $skilList[4*$myPokemon+$i]->getAtackSkil();?></span>
                   <span class="skil-hit hide"><?php echo $skilList[4*$myPokemon+$i]->getHitSkil();?></span>
                   <span class="skil-section hide"><?php echo $skilList[4*$myPokemon+$i]->getSectionSkil();?></span>
                   <span class="skil-section-atack hide"><?php echo $skilList[4*$myPokemon+$i]->getSectionAtack();?></span>
                   <span class="skil-add hide"><?php echo $skilList[4*$myPokemon+$i]->getAdd();?></span>
                   <span class="skil-add-hit hide"><?php echo $skilList[4*$myPokemon+$i]->getAddHit();?></span>
                 </li>
               <?php endfor; ?>
             </ul><!--monster0-skils-->

            </div><!--monster0-->



            <ul class="mymonter-list hide">
              手持ち
              <?php for($i=0; $i<=2; $i++) :?>
              <li class="mymonster<?php echo $i; ?>">
                <button type="button" name="button" class="change-button"><span class="mymonster-name mymonster-name<?php echo $i; ?>"><?php echo $monsterList[$mypokemons[$i]]->getName(); ?></span></button>

                <div class="mymonster-num mymonster-num<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getNumber(); ?></div>

                <div class="mymonster-type1 mymonster-type1-<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getType(); ?></div><!--mymonster-type1 mymonster-type1-1"--><span class="mymonster-type-color1 mymonster-type-color1-<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getColor(); ?></span>

                <div class="mymonster-type2 mymonster-type2-<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getType2(); ?></div><!--mymonster-type2 mymonster-type2-1---><span class="mymonster-type-color2 mymonster-type-color2-<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getColor2(); ?></span>

                <div class="mymonster-hp mymonster-hp<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getBody(); ?></div>

                <div class="mymonster-now-hp mymonster-now-hp<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getBody(); ?></div>

                <div class="mymonster-atack mymonster-atack<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getAtack(); ?></div>

                <div class="mymonster-special-atack mymonster-special-atack<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getAtackSpecial(); ?></div>

                <div class="mymonster-defence mymonster-defence<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getDefence(); ?></div>

                <div class="mymonster-special-defence mymonster-special-defence<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getDefenceSpecial(); ?></div>

                <div class="mymonster-speed mymonster-speed<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getSpeed(); ?></div>

                <div class="mymonster-img mymonster-img<?php echo $i; ?> hide"><?php echo $monsterList[$mypokemons[$i]]->getImg(); ?></div>

                <ul class="mymonster-skils">
                  <?php for($y=0; $y<=3; $y++) :?>
                  <li class="mymonster-skil0 mymonster-skil0-<?php echo $y; ?>">
                    <span class="mymonster-skil-name"><?php echo $skilList[4*$mypokemons[$i]+$y]->getNameSkil();?></span><!--skil-name-->
                    <span class="mymonster-skil-type hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getTypeSkil();?></span>
                    <span class="mymonster-skil-type-color hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getColorSkil();?></span>
                    <span class="mymonster-skil-atack hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getAtackSkil();?></span>
                    <span class="mymonster-skil-hit hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getHitSkil();?></span>
                    <span class="mymonster-skil-section hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getSectionSkil();?></span>
                    <span class="mymonster-skil-section-atack hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getSectionAtack();?></span>
                    <span class="mymonster-skil-add hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getAdd();?></span>
                    <span class="mymonster-skil-add-hit hide"><?php echo $skilList[4*$mypokemons[$i]+$y]->getAddHit();?></span>
                  </li>
                <?php endfor; ?>
                </ul>
              </li><!--mymonster1-->
              <?php endfor; ?>
            </ul><!--mymonster-list-->
          </div><!--mymonster-zone-->








          <div class="enemymonster-zone">
             <div class="monster monster1">
               <div class="hide hp-shadow">
                 <?php echo $monsterList[$enemy]->getBody(); ?>
               </div>
               <div class="pic">
                 <img src="<?php echo $monsterList[$enemy]->getImg(); ?>" alt="">
               </div>
               <p class="name-p">
                 <span class="name"><?php echo $monsterList[$enemy]->getName(); ?></span>
                 LV:50
                 <span class="type-color1 <?php echo $monsterList[$enemy]->getColor();?>"><?php echo $monsterList[$enemy]->getType(); ?></span>
                 <span class="type-color2 <?php echo $monsterList[$enemy]->getColor2();?>"><?php echo $monsterList[$enemy]->getType2(); ?></span>
               <p class="hp">HP<span class="status"></span></p>
               <div class="hp-box">
                 <div class="hp-point"></div>
               </div>
               <div class="hp-num">
                 <span class="hp-child"></span>/<span class="hp-parent"></span>
               </div>
               <p class="type hide">タイプ　<span class="type-point"><?php echo $monsterList[$enemy]->getType(); ?></span></p>
               <p class="type hide">タイプ2　<span class="type-point2"><?php echo $monsterList[$enemy]->getType2(); ?></span></p>
               <p class="atack hide">こうげき　 <span class="atack-point"><?php echo $monsterList[$enemy]->getAtack(); ?></span></p>
               <p class="atack-special hide">とくこう　 <span class="atack-special-point"><?php echo $monsterList[$enemy]->getAtackSpecial(); ?></span></p>
               <p class="defence hide">ぼうぎょ　<span class="defence-point"><?php echo $monsterList[$enemy]->getDefence(); ?></span></p>
               <p class="defence-special hide">とくぼう<span class="defence-special-point"><?php echo $monsterList[$enemy]->getDefenceSpecial(); ?></span></p>
               <p class="speed hide">すばやさ　<span class="speed-point"><?php echo $monsterList[$enemy]->getSpeed(); ?></span></p>
               <ul class="monster1-skils">わざ
                 <?php for($i=0; $i<=3; $i++) :?>
                 <li>
                   <button type="button" name="button" class="skil-radio">
                     <span class="skil-name">
                       <?php echo $skilList[4*$enemy+$i]->getNameSkil();?>
                     </span><!--skil-name-->
                   </button>
                   <span class="skil-type hide"><?php echo $skilList[4*$enemy+$i]->getTypeSkil();?></span>
                   <span class="skil-atack hide"><?php echo $skilList[4*$enemy+$i]->getAtackSkil();?></span>
                   <span class="skil-hit hide"><?php echo $skilList[4*$enemy+$i]->getHitSkil();?></span>
                   <span class="skil-section hide"><?php echo $skilList[4*$enemy+$i]->getSectionSkil();?></span>
                   <span class="skil-section-atack hide"><?php echo $skilList[4*$enemy+$i]->getSectionAtack();?></span>
                   <span class="skil-add hide"><?php echo $skilList[4*$enemy+$i]->getAdd();?></span>
                   <span class="skil-add-hit hide"><?php echo $skilList[4*$enemy+$i]->getAddHit();?></span>
                 </li>
               <?php endfor; ?>
             </ul><!--monster1-skils-->

            </div><!--monster1-->

            <ul class="enemymonter-list hide">
              <?php for($i=0; $i<=2; $i++) :?>
              <li class="enemymonster<?php echo $i; ?>">
                <button type="button" name="button" class="change-button"><span class="enemymonster-name enemymonster-name<?php echo $i; ?>"><?php echo $monsterList[$enemys[$i]]->getName(); ?></span></button>

                <div class="enemymonster-num enemymonster-num<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getNumber(); ?></div>

                <div class="enemymonster-type1 enemymonster-type1-<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getType(); ?><span class="enemymonster-type-color1 enemymonster-type-color1-<?php echo $i; ?>"><?php echo $monsterList[$enemys[$i]]->getColor(); ?></span></div><!--enemymonster-type1 enemymonster-type1-1"-->

                <div class="enemymonster-type2 enemymonster-type2-<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getType2(); ?><span class="enemymonster-type-color2 enemymonster-type-color2-<?php echo $i; ?>"><?php echo $monsterList[$enemys[$i]]->getColor2(); ?></span></div><!--enemymonster-type2 enemymonster-type2-1--->

                <div class="enemymonster-hp enemymonster-hp<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getBody(); ?></div>

                <div class="enemymonster-now-hp enemymonster-now-hp<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getBody(); ?></div>

                <div class="enemymonster-atack enemymonster-atack<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getAtack(); ?></div>

                <div class="enemymonster-special-atack enemymonster-special-atack<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getAtackSpecial(); ?></div>

                <div class="enemymonster-defence enemymonster-defence<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getDefence(); ?></div>

                <div class="enemymonster-special-defence enemymonster-special-defence<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getDefenceSpecial(); ?></div>

                <div class="enemymonster-speed enemymonster-speed<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getSpeed(); ?></div>

                <div class="enemymonster-img enemymonster-img<?php echo $i; ?> hide"><?php echo $monsterList[$enemys[$i]]->getImg(); ?></div>

                <ul class="enemymonster-skils">
                  <?php for($y=0; $y<=3; $y++) :?>
                  <li class="enemymonster-skil0 enemymonster-skil0-<?php echo $y; ?>">
                    <span class="enemymonster-skil-name"><?php echo $skilList[4*$enemys[$i]+$y]->getNameSkil();?></span><!--skil-name-->
                    <span class="enemymonster-skil-type hide"><?php echo $skilList[4*$enemys[$i]+$y]->getTypeSkil();?></span>
                    <span class="enemymonster-skil-type-color hide"><?php echo $skilList[4*$enemys[$i]+$y]->getColorSkil();?></span>
                    <span class="enemymonster-skil-atack hide"><?php echo $skilList[4*$enemys[$i]+$y]->getAtackSkil();?></span>
                    <span class="enemymonster-skil-hit hide"><?php echo $skilList[4*$enemys[$i]+$y]->getHitSkil();?></span>
                    <span class="enemymonster-skil-section hide"><?php echo $skilList[4*$enemys[$i]+$y]->getSectionSkil();?></span>
                    <span class="enemymonster-skil-section-atack hide"><?php echo $skilList[4*$enemys[$i]+$y]->getSectionAtack();?></span>
                    <span class="enemymonster-skil-add hide"><?php echo $skilList[4*$enemys[$i]+$y]->getAdd();?></span>
                    <span class="enemymonster-skil-add-hit hide"><?php echo $skilList[4*$enemys[$i]+$y]->getAddHit();?></span>
                  </li>
                <?php endfor; ?>
                </ul>
              </li><!--mymonster1-->
              <?php endfor; ?>
            </ul><!--enemymonster-list-->


          </div><!--enemymonster-zone-->


         </div><!--monster-list-->

         <div class="battle-text">
           <p class="battle-message0"></p>
           <p class="battle-message battle-message1">
             急所に当たった!
           </p><!--battle-message battle-message1-->
           <p class="battle-message battle-message2">
             <!--こうかはばつぐんだ!!-->
           </p><!--battle-message battle-message1-->
           <p class="battle-message battle-message3">
             <!--こうかはいまひとつの様だ-->
           </p><!--battle-message battle-message3-->
           <p class="battle-message battle-message4">
             <!--こうかはないみたいだ-->
           </p><!--battle-message battle-message4-->
           <p class="battle-message battle-message5">
             <!--状態異常を与えた場合のテキストが入る-->
           </p><!--battle-message battle-message5-->
           <p class="battle-message battle-message6">
             <!--いちげきひっさつのテキストが入る-->
           </p><!--battle-message battle-message6-->
           <p class="battle-message battle-message7">
              <!--状態以上の効果が発生した場合のテキストが入る-->
           </p><!--battle-message battle-message7-->
         </div><!--battle-text-->

       </div><!--content-->



     </main><!--top-page-->

    <script src="js/script.js"></script>
  </body>
</html>
