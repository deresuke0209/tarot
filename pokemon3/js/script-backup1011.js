$(function(){

//自分の手持ちポケモン一匹目のステータス保管
 let mypokemon0_name = $(".mymonster-name0").text();
 let mypokemon0_num = Number($(".mymonster-num0").text());
 let mypokemon0_list_num = Number($(".mymonster-list-num0").text());
 let mypokemon0_type1 = $(".mymonster-type1-0").text();
 let mypokemon0_type2 = $(".mymonster-type2-0").text();
 let mypokemon0_type1_color = $(".mymonster-type-color1-0").text();
 let mypokemon0_type2_color = $(".mymonster-type-color2-0").text();
 let mypokemon0_hp = Number($(".mymonster-hp0").text());
 let mypokemon0_now_hp = Number($(".mymonster-now-hp0").text());
 let mypokemon0_atack = Number($(".mymonster-atack0").text());
 let mypokemon0_special_atack = Number($(".mymonster-special-atack0").text());
 let mypokemon0_defence = Number($(".mymonster-defence0").text());
 let mypokemon0_special_defence = Number($(".mymonster-special-defence0").text());
 let mypokemon0_speed = Number($(".mymonster-speed0").text());
 let mypokemon0_img = $(".mymonster-img0").text();
 let mypokemon0_status =  $("#mymonster-status0").text();

//自分の手持ちポケモン二匹目のステータス保管
 let mypokemon1_name = $(".mymonster-name1").text();
 let mypokemon1_num = Number($(".mymonster-num1").text());
 let mypokemon1_list_num = Number($(".mymonster-list-num1").text());
 let mypokemon1_type1 = $(".mymonster-type1-1").text();
 let mypokemon1_type2 = $(".mymonster-type2-1").text();
 let mypokemon1_type1_color = $(".mymonster-type-color1-1").text();
 let mypokemon1_type2_color = $(".mymonster-type-color2-1").text();
 let mypokemon1_hp = Number($(".mymonster-hp1").text());
 let mypokemon1_now_hp = Number($(".mymonster-now-hp1").text());
 let mypokemon1_atack = Number($(".mymonster-atack1").text());
 let mypokemon1_special_atack = Number($(".mymonster-special-atack1").text());
 let mypokemon1_defence = Number($(".mymonster-defence1").text());
 let mypokemon1_special_defence = Number($(".mymonster-special-defence1").text());
 let mypokemon1_speed = Number($(".mymonster-speed1").text());
 let mypokemon1_img = $(".mymonster-img1").text();
 let mypokemon1_status =  $("#mymonster-status1").text();

//自分の手持ちポケモン三匹目のステータス保管
 let mypokemon2_name = $(".mymonster-name2").text();
 let mypokemon2_num = Number($(".mymonster-num2").text());
 let mypokemon2_list_num = Number($(".mymonster-list-num2").text());
 let mypokemon2_type1 = $(".mymonster-type1-2").text();
 let mypokemon2_type2 = $(".mymonster-type2-2").text();
 let mypokemon2_type1_color = $(".mymonster-type-color1-2").text();
 let mypokemon2_type2_color = $(".mymonster-type-color2-2").text();
 let mypokemon2_hp = Number($(".mymonster-hp2").text());
 let mypokemon2_now_hp = Number($(".mymonster-now-hp2").text());
 let mypokemon2_atack = Number($(".mymonster-atack2").text());
 let mypokemon2_special_atack = Number($(".mymonster-special-atack2").text());
 let mypokemon2_defence = Number($(".mymonster-defence2").text());
 let mypokemon2_special_defence = Number($(".mymonster-special-defence2").text());
 let mypokemon2_speed = Number($(".mymonster-speed2").text());
 let mypokemon2_img = $(".mymonster-img2").text();
 let mypokemon2_status =  $("#mymonster-status2").text();



//自分の手持ちポケモン一匹目の一つ目の技のステータス保管
 let mypokemon0_skil0_name = $(".mymonster-skil-name0-0").text();
 let mypokemon0_skil0_type = $(".mymonster-skil-type0-0").text();
 let mypokemon0_skil0_type_color = $(".mymonster-skil-type-color0-0").text();
 let mypokemon0_skil0_atack = Number($(".mymonster-skil-atack0-0").text());
 let mypokemon0_skil0_hit = Number($(".mymonster-skil-hit0-0").text());
 let mypokemon0_skil0_section = $(".mymonster-skil-section0-0").text();
 let mypokemon0_skil0_section_atack = $(".mymonster-skil-section-atack0-0").text();
 let mypokemon0_skil0_add = $(".mymonster-skil-add0-0").text();
 let mypokemon0_skil0_add_hit = Number($(".mymonster-skil-add-hit0-0").text());

//自分の手持ちポケモン1匹目の2つ目の技のステータス保管
 let mypokemon0_skil1_name = $(".mymonster-skil-name0-1").text();
 let mypokemon0_skil1_type = $(".mymonster-skil-type0-1").text();
 let mypokemon0_skil1_type_color = $(".mymonster-skil-type-color0-1").text();
 let mypokemon0_skil1_atack = Number($(".mymonster-skil-atack0-1").text());
 let mypokemon0_skil1_hit = Number($(".mymonster-skil-hit0-1").text());
 let mypokemon0_skil1_section = $(".mymonster-skil-section0-1").text();
 let mypokemon0_skil1_section_atack = $(".mymonster-skil-section-atack0-1").text();
 let mypokemon0_skil1_add = $(".mymonster-skil-add0-1").text();
 let mypokemon0_skil1_add_hit = Number($(".mymonster-skil-add-hit0-1").text());

//自分の手持ちポケモン1匹目の3つ目の技のステータス保管
 let mypokemon0_skil2_name = $(".mymonster-skil-name0-2").text();
 let mypokemon0_skil2_type = $(".mymonster-skil-type0-2").text();
 let mypokemon0_skil2_type_color = $(".mymonster-skil-type-color0-2").text();
 let mypokemon0_skil2_atack = Number($(".mymonster-skil-atack0-2").text());
 let mypokemon0_skil2_hit = Number($(".mymonster-skil-hit0-2").text());
 let mypokemon0_skil2_section = $(".mymonster-skil-section0-2").text();
 let mypokemon0_skil2_section_atack = $(".mymonster-skil-section-atack0-2").text();
 let mypokemon0_skil2_add = $(".mymonster-skil-add0-2").text();
 let mypokemon0_skil2_add_hit = Number($(".mymonster-skil-add-hit0-2").text());

//自分の手持ちポケモン1匹目の4つ目の技のステータス保管
 let mypokemon0_skil3_name = $(".mymonster-skil-name0-3").text();
 let mypokemon0_skil3_type = $(".mymonster-skil-type0-3").text();
 let mypokemon0_skil3_type_color = $(".mymonster-skil-type-color0-3").text();
 let mypokemon0_skil3_atack = Number($(".mymonster-skil-atack0-3").text());
 let mypokemon0_skil3_hit = Number($(".mymonster-skil-hit0-3").text());
 let mypokemon0_skil3_section = $(".mymonster-skil-section0-3").text();
 let mypokemon0_skil3_section_atack = $(".mymonster-skil-section-atack0-3").text();
 let mypokemon0_skil3_add = $(".mymonster-skil-add0-3").text();
 let mypokemon0_skil3_add_hit = Number($(".mymonster-skil-add-hit0-3").text());


//自分の手持ちポケモン2匹目の1つ目の技のステータス保管
 let mypokemon1_skil0_name = $(".mymonster-skil-name1-0").text();
 let mypokemon1_skil0_type = $(".mymonster-skil-type1-0").text();
 let mypokemon1_skil0_type_color = $(".mymonster-skil-type-color1-0").text();
 let mypokemon1_skil0_atack = Number($(".mymonster-skil-atack1-0").text());
 let mypokemon1_skil0_hit = Number($(".mymonster-skil-hit1-0").text());
 let mypokemon1_skil0_section = $(".mymonster-skil-section1-0").text();
 let mypokemon1_skil0_section_atack = $(".mymonster-skil-section-atack1-0").text();
 let mypokemon1_skil0_add = $(".mymonster-skil-add1-0").text();
 let mypokemon1_skil0_add_hit = Number($(".mymonster-skil-add-hit1-0").text());

//自分の手持ちポケモン2匹目の2つ目の技のステータス保管
 let mypokemon1_skil1_name = $(".mymonster-skil-name1-1").text();
 let mypokemon1_skil1_type = $(".mymonster-skil-type1-1").text();
 let mypokemon1_skil1_type_color = $(".mymonster-skil-type-color1-1").text();
 let mypokemon1_skil1_atack = Number($(".mymonster-skil-atack1-1").text());
 let mypokemon1_skil1_hit = Number($(".mymonster-skil-hit1-1").text());
 let mypokemon1_skil1_section = $(".mymonster-skil-section1-1").text();
 let mypokemon1_skil1_section_atack = $(".mymonster-skil-section-atack1-1").text();
 let mypokemon1_skil1_add = $(".mymonster-skil-add1-1").text();
 let mypokemon1_skil1_add_hit = Number($(".mymonster-skil-add-hit1-1").text());

//自分の手持ちポケモン2匹目の3つ目の技のステータス保管
 let mypokemon1_skil2_name = $(".mymonster-skil-name1-2").text();
 let mypokemon1_skil2_type = $(".mymonster-skil-type1-2").text();
 let mypokemon1_skil2_type_color = $(".mymonster-skil-type-color1-2").text();
 let mypokemon1_skil2_atack = Number($(".mymonster-skil-atack1-2").text());
 let mypokemon1_skil2_hit = Number($(".mymonster-skil-hit1-2").text());
 let mypokemon1_skil2_section = $(".mymonster-skil-section1-2").text();
 let mypokemon1_skil2_section_atack = $(".mymonster-skil-section-atack1-2").text();
 let mypokemon1_skil2_add = $(".mymonster-skil-add1-2").text();
 let mypokemon1_skil2_add_hit = Number($(".mymonster-skil-add-hit1-2").text());

//自分の手持ちポケモン2匹目の4つ目の技のステータス保管
 let mypokemon1_skil3_name = $(".mymonster-skil-name1-3").text();
 let mypokemon1_skil3_type = $(".mymonster-skil-type1-3").text();
 let mypokemon1_skil3_type_color = $(".mymonster-skil-type-color1-3").text();
 let mypokemon1_skil3_atack = Number($(".mymonster-skil-atack1-3").text());
 let mypokemon1_skil3_hit = Number($(".mymonster-skil-hit1-3").text());
 let mypokemon1_skil3_section = $(".mymonster-skil-section1-3").text();
 let mypokemon1_skil3_section_atack = $(".mymonster-skil-section-atack1-3").text();
 let mypokemon1_skil3_add = $(".mymonster-skil-add1-3").text();
 let mypokemon1_skil3_add_hit = Number($(".mymonster-skil-add-hit1-3").text());


//自分の手持ちポケモン3匹目の1つ目の技のステータス保管
 let mypokemon2_skil0_name = $(".mymonster-skil-name2-0").text();
 let mypokemon2_skil0_type = $(".mymonster-skil-type2-0").text();
 let mypokemon2_skil0_type_color = $(".mymonster-skil-type-color2-0").text();
 let mypokemon2_skil0_atack = Number($(".mymonster-skil-atack2-0").text());
 let mypokemon2_skil0_hit = Number($(".mymonster-skil-hit2-0").text());
 let mypokemon2_skil0_section = $(".mymonster-skil-section2-0").text();
 let mypokemon2_skil0_section_atack = $(".mymonster-skil-section-atack2-0").text();
 let mypokemon2_skil0_add = $(".mymonster-skil-add2-0").text();
 let mypokemon2_skil0_add_hit = Number($(".mymonster-skil-add-hit2-0").text());

//自分の手持ちポケモン3匹目の2つ目の技のステータス保管
 let mypokemon2_skil1_name = $(".mymonster-skil-name2-1").text();
 let mypokemon2_skil1_type = $(".mymonster-skil-type2-1").text();
 let mypokemon2_skil1_type_color = $(".mymonster-skil-type-color2-1").text();
 let mypokemon2_skil1_atack = Number($(".mymonster-skil-atack2-1").text());
 let mypokemon2_skil1_hit = Number($(".mymonster-skil-hit2-1").text());
 let mypokemon2_skil1_section = $(".mymonster-skil-section2-1").text();
 let mypokemon2_skil1_section_atack = $(".mymonster-skil-section-atack2-1").text();
 let mypokemon2_skil1_add = $(".mymonster-skil-add2-1").text();
 let mypokemon2_skil1_add_hit = Number($(".mymonster-skil-add-hit2-1").text());

//自分の手持ちポケモン3匹目の3つ目の技のステータス保管
 let mypokemon2_skil2_name = $(".mymonster-skil-name2-2").text();
 let mypokemon2_skil2_type = $(".mymonster-skil-type2-2").text();
 let mypokemon2_skil2_type_color = $(".mymonster-skil-type-color2-2").text();
 let mypokemon2_skil2_atack = Number($(".mymonster-skil-atack2-2").text());
 let mypokemon2_skil2_hit = Number($(".mymonster-skil-hit2-2").text());
 let mypokemon2_skil2_section = $(".mymonster-skil-section2-2").text();
 let mypokemon2_skil2_section_atack = $(".mymonster-skil-section-atack2-2").text();
 let mypokemon2_skil2_add = $(".mymonster-skil-add2-2").text();
 let mypokemon2_skil2_add_hit = Number($(".mymonster-skil-add-hit2-2").text());

//自分の手持ちポケモン3匹目の4つ目の技のステータス保管
 let mypokemon2_skil3_name = $(".mymonster-skil-name2-3").text();
 let mypokemon2_skil3_type = $(".mymonster-skil-type2-3").text();
 let mypokemon2_skil3_type_color = $(".mymonster-skil-type-color2-3").text();
 let mypokemon2_skil3_atack = Number($(".mymonster-skil-atack2-3").text());
 let mypokemon2_skil3_hit = Number($(".mymonster-skil-hit2-3").text());
 let mypokemon2_skil3_section = $(".mymonster-skil-section2-3").text();
 let mypokemon2_skil3_section_atack = $(".mymonster-skil-section-atack2-3").text();
 let mypokemon2_skil3_add = $(".mymonster-skil-add2-3").text();
 let mypokemon2_skil3_add_hit = Number($(".mymonster-skil-add-hit2-3").text());



//相手の手持ちポケモン1匹目のステータス保管
 let enemy0_name = $(".enemymonster-name0").text();
 let enemy0_num = Number($(".enemymonster-num0").text());
 let enemy0_type1 = $(".enemymonster-type1-0").text();
 let enemy0_type2 = $(".enemymonster-type2-0").text();
 let enemy0_type1_color = $(".enemymonster-type-color1-0").text();
 let enemy0_type2_color = $(".enemymonster-type-color2-0").text();
 let enemy0_hp = Number($(".enemymonster-hp0").text());
 let enemy0_now_hp = Number($(".enemymonster-now-hp0").text());
 let enemy0_atack = Number($(".enemymonster-atack0").text());
 let enemy0_special_atack = Number($(".enemymonster-special-atack0").text());
 let enemy0_defence = Number($(".enemymonster-defence0").text());
 let enemy0_special_defence = Number($(".enemymonster-special-defence0").text());
 let enemy0_speed = Number($(".enemymonster-speed0").text());
 let enemy0_img = $(".enemymonster-img0").text();

//相手の手持ちポケモン2匹目のステータス保管
 let enemy1_name = $(".enemymonster-name1").text();
 let enemy1_num = Number($(".enemymonster-num1").text());
 let enemy1_type1 = $(".enemymonster-type1-1").text();
 let enemy1_type2 = $(".enemymonster-type2-1").text();
 let enemy1_type1_color = $(".enemymonster-type-color1-1").text();
 let enemy1_type2_color = $(".enemymonster-type-color2-1").text();
 let enemy1_hp = Number($(".enemymonster-hp1").text());
 let enemy1_now_hp = Number($(".enemymonster-now-hp1").text());
 let enemy1_atack = Number($(".enemymonster-atack1").text());
 let enemy1_special_atack = Number($(".enemymonster-special-atack1").text());
 let enemy1_defence = Number($(".enemymonster-defence1").text());
 let enemy1_special_defence = Number($(".enemymonster-special-defence1").text());
 let enemy1_speed = Number($(".enemymonster-speed1").text());
 let enemy1_img = $(".enemymonster-img1").text();

//相手の手持ちポケモン3匹目のステータス保管
 let enemy2_name = $(".enemymonster-name2").text();
 let enemy2_num = Number($(".enemymonster-num2").text());
 let enemy2_type1 = $(".enemymonster-type1-2").text();
 let enemy2_type2 = $(".enemymonster-type2-2").text();
 let enemy2_type1_color = $(".enemymonster-type-color1-2").text();
 let enemy2_type2_color = $(".enemymonster-type-color2-2").text();
 let enemy2_hp = Number($(".enemymonster-hp2").text());
 let enemy2_now_hp = Number($(".enemymonster-now-hp2").text());
 let enemy2_atack = Number($(".enemymonster-atack2").text());
 let enemy2_special_atack = Number($(".enemymonster-special-atack2").text());
 let enemy2_defence = Number($(".enemymonster-defence2").text());
 let enemy2_special_defence = Number($(".enemymonster-special-defence2").text());
 let enemy2_speed = Number($(".enemymonster-speed2").text());
 let enemy2_img = $(".enemymonster-img2").text();


//相手の手持ちポケモン1匹目の1つ目の技のステータス保管
 let enemypokemon0_skil0_name = $(".enemymonster-skil-name0-0").text();
 let enemypokemon0_skil0_type = $(".enemymonster-skil-type0-0").text();
 let enemypokemon0_skil0_type_color = $(".enemymonster-skil-type-color0-0").text();
 let enemypokemon0_skil0_atack = Number($(".enemymonster-skil-atack0-0").text());
 let enemypokemon0_skil0_hit = Number($(".enemymonster-skil-hit0-0").text());
 let enemypokemon0_skil0_section = $(".enemymonster-skil-section0-0").text();
 let enemypokemon0_skil0_section_atack = $(".enemymonster-skil-section-atack0-0").text();
 let enemypokemon0_skil0_add = $(".enemymonster-skil-add0-0").text();
 let enemypokemon0_skil0_add_hit = Number($(".enemymonster-skil-add-hit0-0").text());

//相手の手持ちポケモン1匹目の2つ目の技のステータス保管
 let enemypokemon0_skil1_name = $(".enemymonster-skil-name0-1").text();
 let enemypokemon0_skil1_type = $(".enemymonster-skil-type0-1").text();
 let enemypokemon0_skil1_type_color = $(".enemymonster-skil-type-color0-1").text();
 let enemypokemon0_skil1_atack = Number($(".enemymonster-skil-atack0-1").text());
 let enemypokemon0_skil1_hit = Number($(".enemymonster-skil-hit0-1").text());
 let enemypokemon0_skil1_section = $(".enemymonster-skil-section0-1").text();
 let enemypokemon0_skil1_section_atack = $(".enemymonster-skil-section-atack0-1").text();
 let enemypokemon0_skil1_add = $(".enemymonster-skil-add0-1").text();
 let enemypokemon0_skil1_add_hit = Number($(".enemymonster-skil-add-hit0-1").text());

//相手の手持ちポケモン1匹目の3つ目の技のステータス保管
 let enemypokemon0_skil2_name = $(".enemymonster-skil-name0-2").text();
 let enemypokemon0_skil2_type = $(".enemymonster-skil-type0-2").text();
 let enemypokemon0_skil2_type_color = $(".enemymonster-skil-type-color0-2").text();
 let enemypokemon0_skil2_atack = Number($(".enemymonster-skil-atack0-2").text());
 let enemypokemon0_skil2_hit = Number($(".enemymonster-skil-hit0-2").text());
 let enemypokemon0_skil2_section = $(".enemymonster-skil-section0-2").text();
 let enemypokemon0_skil2_section_atack = $(".enemymonster-skil-section-atack0-2").text();
 let enemypokemon0_skil2_add = $(".enemymonster-skil-add0-2").text();
 let enemypokemon0_skil2_add_hit = Number($(".enemymonster-skil-add-hit0-2").text());

//相手の手持ちポケモン1匹目の4つ目の技のステータス保管
 let enemypokemon0_skil3_name = $(".enemymonster-skil-name0-3").text();
 let enemypokemon0_skil3_type = $(".enemymonster-skil-type0-3").text();
 let enemypokemon0_skil3_type_color = $(".enemymonster-skil-type-color0-3").text();
 let enemypokemon0_skil3_atack = Number($(".enemymonster-skil-atack0-3").text());
 let enemypokemon0_skil3_hit = Number($(".enemymonster-skil-hit0-3").text());
 let enemypokemon0_skil3_section = $(".enemymonster-skil-section0-3").text();
 let enemypokemon0_skil3_section_atack = $(".enemymonster-skil-section-atack0-3").text();
 let enemypokemon0_skil3_add = $(".enemymonster-skil-add0-3").text();
 let enemypokemon0_skil3_add_hit = Number($(".enemymonster-skil-add-hit0-3").text());


//相手の手持ちポケモン2匹目の1つ目の技のステータス保管
 let enemypokemon1_skil0_name = $(".enemymonster-skil-name1-0").text();
 let enemypokemon1_skil0_type = $(".enemymonster-skil-type1-0").text();
 let enemypokemon1_skil0_type_color = $(".enemymonster-skil-type-color1-0").text();
 let enemypokemon1_skil0_atack = Number($(".enemymonster-skil-atack1-0").text());
 let enemypokemon1_skil0_hit = Number($(".enemymonster-skil-hit1-0").text());
 let enemypokemon1_skil0_section = $(".enemymonster-skil-section1-0").text();
 let enemypokemon1_skil0_section_atack = $(".enemymonster-skil-section-atack1-0").text();
 let enemypokemon1_skil0_add = $(".enemymonster-skil-add1-0").text();
 let enemypokemon1_skil0_add_hit = Number($(".enemymonster-skil-add-hit1-0").text());

//相手の手持ちポケモン2匹目の2つ目の技のステータス保管
 let enemypokemon1_skil1_name = $(".enemymonster-skil-name1-1").text();
 let enemypokemon1_skil1_type = $(".enemymonster-skil-type1-1").text();
 let enemypokemon1_skil1_type_color = $(".enemymonster-skil-type-color1-1").text();
 let enemypokemon1_skil1_atack = Number($(".enemymonster-skil-atack1-1").text());
 let enemypokemon1_skil1_hit = Number($(".enemymonster-skil-hit1-1").text());
 let enemypokemon1_skil1_section = $(".enemymonster-skil-section1-1").text();
 let enemypokemon1_skil1_section_atack = $(".enemymonster-skil-section-atack1-1").text();
 let enemypokemon1_skil1_add = $(".enemymonster-skil-add1-1").text();
 let enemypokemon1_skil1_add_hit = Number($(".enemymonster-skil-add-hit1-1").text());

//相手の手持ちポケモン2匹目の3つ目の技のステータス保管
 let enemypokemon1_skil2_name = $(".enemymonster-skil-name1-2").text();
 let enemypokemon1_skil2_type = $(".enemymonster-skil-type1-2").text();
 let enemypokemon1_skil2_type_color = $(".enemymonster-skil-type-color1-2").text();
 let enemypokemon1_skil2_atack = Number($(".enemymonster-skil-atack1-2").text());
 let enemypokemon1_skil2_hit = Number($(".enemymonster-skil-hit1-2").text());
 let enemypokemon1_skil2_section = $(".enemymonster-skil-section1-2").text();
 let enemypokemon1_skil2_section_atack = $(".enemymonster-skil-section-atack1-2").text();
 let enemypokemon1_skil2_add = $(".enemymonster-skil-add1-2").text();
 let enemypokemon1_skil2_add_hit = Number($(".enemymonster-skil-add-hit1-2").text());

//相手の手持ちポケモン2匹目の4つ目の技のステータス保管
 let enemypokemon1_skil3_name = $(".enemymonster-skil-name1-3").text();
 let enemypokemon1_skil3_type = $(".enemymonster-skil-type1-3").text();
 let enemypokemon1_skil3_type_color = $(".enemymonster-skil-type-color1-3").text();
 let enemypokemon1_skil3_atack = Number($(".enemymonster-skil-atack1-3").text());
 let enemypokemon1_skil3_hit = Number($(".enemymonster-skil-hit1-3").text());
 let enemypokemon1_skil3_section = $(".enemymonster-skil-section1-3").text();
 let enemypokemon1_skil3_section_atack = $(".enemymonster-skil-section-atack1-3").text();
 let enemypokemon1_skil3_add = $(".enemymonster-skil-add1-3").text();
 let enemypokemon1_skil3_add_hit = Number($(".enemymonster-skil-add-hit1-3").text());


//相手の手持ちポケモン3匹目の1つ目の技のステータス保管
 let enemypokemon2_skil0_name = $(".enemymonster-skil-name2-0").text();
 let enemypokemon2_skil0_type = $(".enemymonster-skil-type2-0").text();
 let enemypokemon2_skil0_type_color = $(".enemymonster-skil-type-color2-0").text();
 let enemypokemon2_skil0_atack = Number($(".enemymonster-skil-atack2-0").text());
 let enemypokemon2_skil0_hit = Number($(".enemymonster-skil-hit2-0").text());
 let enemypokemon2_skil0_section = $(".enemymonster-skil-section2-0").text();
 let enemypokemon2_skil0_section_atack = $(".enemymonster-skil-section-atack2-0").text();
 let enemypokemon2_skil0_add = $(".enemymonster-skil-add2-0").text();
 let enemypokemon2_skil0_add_hit = Number($(".enemymonster-skil-add-hit2-0").text());

//相手の手持ちポケモン3匹目の2つ目の技のステータス保管
 let enemypokemon2_skil1_name = $(".enemymonster-skil-name2-1").text();
 let enemypokemon2_skil1_type = $(".enemymonster-skil-type2-1").text();
 let enemypokemon2_skil1_type_color = $(".enemymonster-skil-type-color2-1").text();
 let enemypokemon2_skil1_atack = Number($(".enemymonster-skil-atack2-1").text());
 let enemypokemon2_skil1_hit = Number($(".enemymonster-skil-hit2-1").text());
 let enemypokemon2_skil1_section = $(".enemymonster-skil-section2-1").text();
 let enemypokemon2_skil1_section_atack = $(".enemymonster-skil-section-atack2-1").text();
 let enemypokemon2_skil1_add = $(".enemymonster-skil-add2-1").text();
 let enemypokemon2_skil1_add_hit = Number($(".enemymonster-skil-add-hit2-1").text());

//相手の手持ちポケモン3匹目の3つ目の技のステータス保管
 let enemypokemon2_skil2_name = $(".enemymonster-skil-name2-2").text();
 let enemypokemon2_skil2_type = $(".enemymonster-skil-type2-2").text();
 let enemypokemon2_skil2_type_color = $(".enemymonster-skil-type-color2-2").text();
 let enemypokemon2_skil2_atack = Number($(".enemymonster-skil-atack2-2").text());
 let enemypokemon2_skil2_hit = Number($(".enemymonster-skil-hit2-2").text());
 let enemypokemon2_skil2_section = $(".enemymonster-skil-section2-2").text();
 let enemypokemon2_skil2_section_atack = $(".enemymonster-skil-section-atack2-2").text();
 let enemypokemon2_skil2_add = $(".enemymonster-skil-add2-2").text();
 let enemypokemon2_skil2_add_hit = Number($(".enemymonster-skil-add-hit2-2").text());

//相手の手持ちポケモン3匹目の4つ目の技のステータス保管
 let enemypokemon2_skil3_name = $(".enemymonster-skil-name2-3").text();
 let enemypokemon2_skil3_type = $(".enemymonster-skil-type2-3").text();
 let enemypokemon2_skil3_type_color = $(".enemymonster-skil-type-color2-3").text();
 let enemypokemon2_skil3_atack = Number($(".enemymonster-skil-atack2-3").text());
 let enemypokemon2_skil3_hit = Number($(".enemymonster-skil-hit2-3").text());
 let enemypokemon2_skil3_section = $(".enemymonster-skil-section2-3").text();
 let enemypokemon2_skil3_section_atack = $(".enemymonster-skil-section-atack2-3").text();
 let enemypokemon2_skil3_add = $(".enemymonster-skil-add2-3").text();
 let enemypokemon2_skil3_add_hit = Number($(".enemymonster-skil-add-hit2-3").text());


 let now_my_status = "";//交換の際にステータス異常がある場合に文字を保管
 let now_my_status_class = "";//交換の際にステータス異常がある場合にclass名を保管


 function mymonster0_status_show(){//自分の一体目のモンスターのステータスをバトルゾーンに反映
  $(".monster0").find(".pic").find("img").attr("src",mypokemon0_img);
  $(".monster0").find(".hp-shadow").text(mypokemon0_now_hp);
  $(".monster0").find(".hp-parent").text(mypokemon0_hp);
  $(".monster0").find(".hp-child").text(mypokemon0_now_hp);
  $(".monster0").find(".name").text(mypokemon0_name);
  $(".monster0").find(".list-number").text(mypokemon0_list_num);
  $(".monster0").find(".type-color1").addClass(mypokemon0_type1_color);
  $(".monster0").find(".type-color2").addClass(mypokemon0_type2_color);
  $(".monster0").find(".type-color1").text(mypokemon0_type1);
  $(".monster0").find(".type-color2").text(mypokemon0_type2);
  $(".monster0").find(".type-point").text(mypokemon0_type1);
  $(".monster0").find(".type-point2").text(mypokemon0_type2);
  $(".monster0").find(".atack-point").text(mypokemon0_atack);
  $(".monster0").find(".atack-special-point").text(mypokemon0_special_atack);
  $(".monster0").find(".defence-point").text(mypokemon0_defence);
  $(".monster0").find(".defence-special-point").text(mypokemon0_special_defence);
  $(".monster0").find(".speed-point").text(mypokemon0_speed);
  $(".monster0").find(".status").text(mypokemon0_status);
  $(".monster0").find(".status").addClass($("#mymonster-status0").attr("class"));
  $(".monster0").find(".status").removeClass("hide");
 }

 function mymonster1_status_show(){//自分の二体目のモンスターのステータスをバトルゾーンに反映
  $(".monster0").find(".pic").find("img").attr("src",mypokemon1_img);
  $(".monster0").find(".hp-shadow").text(mypokemon1_now_hp);
  $(".monster0").find(".hp-parent").text(mypokemon1_hp);
  $(".monster0").find(".hp-child").text(mypokemon1_now_hp);
  $(".monster0").find(".name").text(mypokemon1_name);
  $(".monster0").find(".list-number").text(mypokemon1_list_num);
  $(".monster0").find(".type-color1").addClass(mypokemon1_type1_color);
  $(".monster0").find(".type-color2").addClass(mypokemon1_type2_color);
  $(".monster0").find(".type-color1").text(mypokemon1_type1);
  $(".monster0").find(".type-color2").text(mypokemon1_type2);
  $(".monster0").find(".type-point").text(mypokemon1_type1);
  $(".monster0").find(".type-point2").text(mypokemon1_type2);
  $(".monster0").find(".atack-point").text(mypokemon1_atack);
  $(".monster0").find(".atack-special-point").text(mypokemon1_special_atack);
  $(".monster0").find(".defence-point").text(mypokemon1_defence);
  $(".monster0").find(".defence-special-point").text(mypokemon1_special_defence);
  $(".monster0").find(".speed-point").text(mypokemon1_speed);
  $(".monster0").find(".status").text(mypokemon1_status);
  $(".monster0").find(".status").addClass($("#mymonster-status1").attr("class"));
  $(".monster0").find(".status").removeClass("hide");
 }

 function mymonster2_status_show(){//自分の三体目のモンスターのステータスをバトルゾーンに反映
  $(".monster0").find(".pic").find("img").attr("src",mypokemon2_img);
  $(".monster0").find(".hp-shadow").text(mypokemon2_now_hp);
  $(".monster0").find(".hp-parent").text(mypokemon2_hp);
  $(".monster0").find(".hp-child").text(mypokemon2_now_hp);
  $(".monster0").find(".name").text(mypokemon2_name);
  $(".monster0").find(".list-number").text(mypokemon2_list_num);
  $(".monster0").find(".type-color1").addClass(mypokemon2_type1_color);
  $(".monster0").find(".type-color2").addClass(mypokemon2_type2_color);
  $(".monster0").find(".type-color1").text(mypokemon2_type1);
  $(".monster0").find(".type-color2").text(mypokemon2_type2);
  $(".monster0").find(".type-point").text(mypokemon2_type1);
  $(".monster0").find(".type-point2").text(mypokemon2_type2);
  $(".monster0").find(".atack-point").text(mypokemon2_atack);
  $(".monster0").find(".atack-special-point").text(mypokemon2_special_atack);
  $(".monster0").find(".defence-point").text(mypokemon2_defence);
  $(".monster0").find(".defence-special-point").text(mypokemon2_special_defence);
  $(".monster0").find(".speed-point").text(mypokemon2_speed);
  $(".monster0").find(".status").text(mypokemon2_status);
  $(".monster0").find(".status").addClass($("#mymonster-status2").attr("class"));
  $(".monster0").find(".status").removeClass("hide");
 }




 function enemy0_status_show(){//相手の一体目のモンスターのステータスをバトルゾーンに反映
  $(".monster1").find(".pic").find("img").attr("src",enemy0_img);
  $(".monster1").find(".hp-shadow").text(enemy0_now_hp);
  $(".monster1").find(".hp-parent").text(enemy0_hp);
  $(".monster1").find(".hp-child").text(enemy0_now_hp);
  $(".monster1").find(".name").text(enemy0_name);
  $(".monster1").find(".type-color1").addClass(enemy0_type1_color);
  $(".monster1").find(".type-color2").addClass(enemy0_type2_color);
  $(".monster1").find(".type-color1").text(enemy0_type1);
  $(".monster1").find(".type-color2").text(enemy0_type2);
  $(".monster1").find(".type-point").text(enemy0_type1);
  $(".monster1").find(".type-point2").text(enemy0_type2);
  $(".monster1").find(".atack-point").text(enemy0_atack);
  $(".monster1").find(".atack-special-point").text(enemy0_special_atack);
  $(".monster1").find(".defence-point").text(enemy0_defence);
  $(".monster1").find(".defence-special-point").text(enemy0_special_defence);
  $(".monster1").find(".speed-point").text(enemy0_speed);
 }

 function enemy1_status_show(){//相手の二体目のモンスターのステータスをバトルゾーンに反映
  $(".monster1").find(".pic").find("img").attr("src",enemy1_img);
  $(".monster1").find(".hp-shadow").text(enemy1_now_hp);
  $(".monster1").find(".hp-parent").text(enemy1_hp);
  $(".monster1").find(".hp-child").text(enemy1_now_hp);
  $(".monster1").find(".name").text(enemy1_name);
  $(".monster1").find(".type-color1").removeClass().addClass("type-color1").removeClass("hide");
  $(".monster1").find(".type-color2").removeClass().addClass("type-color2").removeClass("hide");
  $(".monster1").find(".type-color1").addClass(enemy1_type1_color);
  $(".monster1").find(".type-color2").addClass(enemy1_type2_color);
  $(".monster1").find(".type-color1").text(enemy1_type1);
  $(".monster1").find(".type-color2").text(enemy1_type2);
  $(".monster1").find(".type-point").text(enemy1_type1);
  $(".monster1").find(".type-point2").text(enemy1_type2);
  $(".monster1").find(".atack-point").text(enemy1_atack);
  $(".monster1").find(".atack-special-point").text(enemy1_special_atack);
  $(".monster1").find(".defence-point").text(enemy1_defence);
  $(".monster1").find(".defence-special-point").text(enemy1_special_defence);
  $(".monster1").find(".speed-point").text(enemy1_speed);
  $(".monster1").find(".hp-point , .hp-box").css({"width":enemy1_hp + "px"});
  $(".monster1").find(".hp-child , .hp-parent").text(enemy1_hp);
 }

 function enemy2_status_show(){//相手の三体目のモンスターのステータスをバトルゾーンに反映
  $(".monster1").find(".pic").find("img").attr("src",enemy2_img);
  $(".monster1").find(".hp-shadow").text(enemy2_now_hp);
  $(".monster1").find(".hp-parent").text(enemy2_hp);
  $(".monster1").find(".hp-child").text(enemy2_now_hp);
  $(".monster1").find(".name").text(enemy2_name);
  $(".monster1").find(".type-color1").removeClass().addClass("type-color1").removeClass("hide");
  $(".monster1").find(".type-color2").removeClass().addClass("type-color2").removeClass("hide");
  $(".monster1").find(".type-color1").addClass(enemy2_type1_color);
  $(".monster1").find(".type-color2").addClass(enemy2_type2_color);
  $(".monster1").find(".type-color1").text(enemy2_type1);
  $(".monster1").find(".type-color2").text(enemy2_type2);
  $(".monster1").find(".type-point").text(enemy2_type1);
  $(".monster1").find(".type-point2").text(enemy2_type2);
  $(".monster1").find(".atack-point").text(enemy2_atack);
  $(".monster1").find(".atack-special-point").text(enemy2_special_atack);
  $(".monster1").find(".defence-point").text(enemy2_defence);
  $(".monster1").find(".defence-special-point").text(enemy2_special_defence);
  $(".monster1").find(".speed-point").text(enemy2_speed);
  $(".monster1").find(".hp-point , .hp-box").css({"width":enemy2_hp + "px"});
  $(".monster1").find(".hp-child , .hp-parent").text(enemy2_hp);
 }


 function mymonster_skil0_0_status_show(){//自分の一体目のモンスターの1個目の技情報をバトルゾーンに反映
   $(".monster0-skil0").find(".skil-name").text(mypokemon0_skil0_name);
   $(".monster0-skil0").find(".skil-radio").addClass(mypokemon0_skil0_type_color);
   $(".monster0-skil0").find(".skil-type").text(mypokemon0_skil0_type);
   $(".monster0-skil0").find(".skil-atack").text(mypokemon0_skil0_atack);
   $(".monster0-skil0").find(".skil-hit").text(mypokemon0_skil0_hit);
   $(".monster0-skil0").find(".skil-section").text(mypokemon0_skil0_section);
   $(".monster0-skil0").find(".skil-section-atack").text(mypokemon0_skil0_section_atack);
   $(".monster0-skil0").find(".skil-add").text(mypokemon0_skil0_add);
   $(".monster0-skil0").find(".skil-add-hit").text(mypokemon0_skil0_add_hit);
 }

 function mymonster_skil0_1_status_show(){//自分の一体目のモンスターの2個目の技情報をバトルゾーンに反映
   $(".monster0-skil1").find(".skil-name").text(mypokemon0_skil1_name);
   $(".monster0-skil1").find(".skil-radio").addClass(mypokemon0_skil1_type_color);
   $(".monster0-skil1").find(".skil-type").text(mypokemon0_skil1_type);
   $(".monster0-skil1").find(".skil-atack").text(mypokemon0_skil1_atack);
   $(".monster0-skil1").find(".skil-hit").text(mypokemon0_skil1_hit);
   $(".monster0-skil1").find(".skil-section").text(mypokemon0_skil1_section);
   $(".monster0-skil1").find(".skil-section-atack").text(mypokemon0_skil1_section_atack);
   $(".monster0-skil1").find(".skil-add").text(mypokemon0_skil1_add);
   $(".monster0-skil1").find(".skil-add-hit").text(mypokemon0_skil1_add_hit);
 }

 function mymonster_skil0_2_status_show(){//自分の一体目のモンスターの3個目の技情報をバトルゾーンに反映
   $(".monster0-skil2").find(".skil-name").text(mypokemon0_skil2_name);
   $(".monster0-skil2").find(".skil-radio").addClass(mypokemon0_skil2_type_color);
   $(".monster0-skil2").find(".skil-type").text(mypokemon0_skil2_type);
   $(".monster0-skil2").find(".skil-atack").text(mypokemon0_skil2_atack);
   $(".monster0-skil2").find(".skil-hit").text(mypokemon0_skil2_hit);
   $(".monster0-skil2").find(".skil-section").text(mypokemon0_skil2_section);
   $(".monster0-skil2").find(".skil-section-atack").text(mypokemon0_skil2_section_atack);
   $(".monster0-skil2").find(".skil-add").text(mypokemon0_skil2_add);
   $(".monster0-skil2").find(".skil-add-hit").text(mypokemon0_skil2_add_hit);
 }

 function mymonster_skil0_3_status_show(){//自分の一体目のモンスターの4個目の技情報をバトルゾーンに反映
   $(".monster0-skil3").find(".skil-name").text(mypokemon0_skil3_name);
   $(".monster0-skil3").find(".skil-radio").addClass(mypokemon0_skil3_type_color);
   $(".monster0-skil3").find(".skil-type").text(mypokemon0_skil3_type);
   $(".monster0-skil3").find(".skil-atack").text(mypokemon0_skil3_atack);
   $(".monster0-skil3").find(".skil-hit").text(mypokemon0_skil3_hit);
   $(".monster0-skil3").find(".skil-section").text(mypokemon0_skil3_section);
   $(".monster0-skil3").find(".skil-section-atack").text(mypokemon0_skil3_section_atack);
   $(".monster0-skil3").find(".skil-add").text(mypokemon0_skil3_add);
   $(".monster0-skil3").find(".skil-add-hit").text(mypokemon0_skil3_add_hit);
 }


 function mymonster_skil1_0_status_show(){//自分の二体目のモンスターの1個目の技情報をバトルゾーンに反映
   $(".monster0-skil0").find(".skil-name").text(mypokemon1_skil0_name);
   $(".monster0-skil0").find(".skil-radio").addClass(mypokemon1_skil0_type_color);
   $(".monster0-skil0").find(".skil-type").text(mypokemon1_skil0_type);
   $(".monster0-skil0").find(".skil-atack").text(mypokemon1_skil0_atack);
   $(".monster0-skil0").find(".skil-hit").text(mypokemon1_skil0_hit);
   $(".monster0-skil0").find(".skil-section").text(mypokemon1_skil0_section);
   $(".monster0-skil0").find(".skil-section-atack").text(mypokemon1_skil0_section_atack);
   $(".monster0-skil0").find(".skil-add").text(mypokemon1_skil0_add);
   $(".monster0-skil0").find(".skil-add-hit").text(mypokemon1_skil0_add_hit);
 }

 function mymonster_skil1_1_status_show(){//自分の二体目のモンスターの2個目の技情報をバトルゾーンに反映
   $(".monster0-skil1").find(".skil-name").text(mypokemon1_skil1_name);
   $(".monster0-skil1").find(".skil-radio").addClass(mypokemon1_skil1_type_color);
   $(".monster0-skil1").find(".skil-type").text(mypokemon1_skil1_type);
   $(".monster0-skil1").find(".skil-atack").text(mypokemon1_skil1_atack);
   $(".monster0-skil1").find(".skil-hit").text(mypokemon1_skil1_hit);
   $(".monster0-skil1").find(".skil-section").text(mypokemon1_skil1_section);
   $(".monster0-skil1").find(".skil-section-atack").text(mypokemon1_skil1_section_atack);
   $(".monster0-skil1").find(".skil-add").text(mypokemon1_skil1_add);
   $(".monster0-skil1").find(".skil-add-hit").text(mypokemon1_skil1_add_hit);
 }

 function mymonster_skil1_2_status_show(){//自分の二体目のモンスターの3個目の技情報をバトルゾーンに反映
   $(".monster0-skil2").find(".skil-name").text(mypokemon1_skil2_name);
   $(".monster0-skil2").find(".skil-radio").addClass(mypokemon1_skil2_type_color);
   $(".monster0-skil2").find(".skil-type").text(mypokemon1_skil2_type);
   $(".monster0-skil2").find(".skil-atack").text(mypokemon1_skil2_atack);
   $(".monster0-skil2").find(".skil-hit").text(mypokemon1_skil2_hit);
   $(".monster0-skil2").find(".skil-section").text(mypokemon1_skil2_section);
   $(".monster0-skil2").find(".skil-section-atack").text(mypokemon1_skil2_section_atack);
   $(".monster0-skil2").find(".skil-add").text(mypokemon1_skil2_add);
   $(".monster0-skil2").find(".skil-add-hit").text(mypokemon1_skil2_add_hit);
 }

 function mymonster_skil1_3_status_show(){//自分の二体目のモンスターの4個目の技情報をバトルゾーンに反映
   $(".monster0-skil3").find(".skil-name").text(mypokemon1_skil3_name);
   $(".monster0-skil3").find(".skil-radio").addClass(mypokemon1_skil3_type_color);
   $(".monster0-skil3").find(".skil-type").text(mypokemon1_skil3_type);
   $(".monster0-skil3").find(".skil-atack").text(mypokemon1_skil3_atack);
   $(".monster0-skil3").find(".skil-hit").text(mypokemon1_skil3_hit);
   $(".monster0-skil3").find(".skil-section").text(mypokemon1_skil3_section);
   $(".monster0-skil3").find(".skil-section-atack").text(mypokemon1_skil3_section_atack);
   $(".monster0-skil3").find(".skil-add").text(mypokemon1_skil3_add);
   $(".monster0-skil3").find(".skil-add-hit").text(mypokemon1_skil3_add_hit);
 }


 function mymonster_skil2_0_status_show(){//自分の三体目のモンスターの1個目の技情報をバトルゾーンに反映
    $(".monster0-skil0").find(".skil-name").text(mypokemon2_skil0_name);
    $(".monster0-skil0").find(".skil-radio").addClass(mypokemon2_skil0_type_color);
    $(".monster0-skil0").find(".skil-type").text(mypokemon2_skil0_type);
    $(".monster0-skil0").find(".skil-atack").text(mypokemon2_skil0_atack);
    $(".monster0-skil0").find(".skil-hit").text(mypokemon2_skil0_hit);
    $(".monster0-skil0").find(".skil-section").text(mypokemon2_skil0_section);
    $(".monster0-skil0").find(".skil-section-atack").text(mypokemon2_skil0_section_atack);
    $(".monster0-skil0").find(".skil-add").text(mypokemon2_skil0_add);
    $(".monster0-skil0").find(".skil-add-hit").text(mypokemon2_skil0_add_hit);
  }

  function mymonster_skil2_1_status_show(){//自分の三体目のモンスターの2個目の技情報をバトルゾーンに反映
    $(".monster0-skil1").find(".skil-name").text(mypokemon2_skil1_name);
    $(".monster0-skil1").find(".skil-radio").addClass(mypokemon2_skil1_type_color);
    $(".monster0-skil1").find(".skil-type").text(mypokemon2_skil1_type);
    $(".monster0-skil1").find(".skil-atack").text(mypokemon2_skil1_atack);
    $(".monster0-skil1").find(".skil-hit").text(mypokemon2_skil1_hit);
    $(".monster0-skil1").find(".skil-section").text(mypokemon2_skil1_section);
    $(".monster0-skil1").find(".skil-section-atack").text(mypokemon2_skil1_section_atack);
    $(".monster0-skil1").find(".skil-add").text(mypokemon2_skil1_add);
    $(".monster0-skil1").find(".skil-add-hit").text(mypokemon2_skil1_add_hit);
  }

  function mymonster_skil2_2_status_show(){//自分の三体目のモンスターの3個目の技情報をバトルゾーンに反映
    $(".monster0-skil2").find(".skil-name").text(mypokemon2_skil2_name);
    $(".monster0-skil2").find(".skil-radio").addClass(mypokemon2_skil2_type_color);
    $(".monster0-skil2").find(".skil-type").text(mypokemon2_skil2_type);
    $(".monster0-skil2").find(".skil-atack").text(mypokemon2_skil2_atack);
    $(".monster0-skil2").find(".skil-hit").text(mypokemon2_skil2_hit);
    $(".monster0-skil2").find(".skil-section").text(mypokemon2_skil2_section);
    $(".monster0-skil2").find(".skil-section-atack").text(mypokemon2_skil2_section_atack);
    $(".monster0-skil2").find(".skil-add").text(mypokemon2_skil2_add);
    $(".monster0-skil2").find(".skil-add-hit").text(mypokemon2_skil2_add_hit);
  }

  function mymonster_skil2_3_status_show(){//自分の三体目のモンスターの4個目の技情報をバトルゾーンに反映
    $(".monster0-skil3").find(".skil-name").text(mypokemon2_skil3_name);
    $(".monster0-skil3").find(".skil-radio").addClass(mypokemon2_skil3_type_color);
    $(".monster0-skil3").find(".skil-type").text(mypokemon2_skil3_type);
    $(".monster0-skil3").find(".skil-atack").text(mypokemon2_skil3_atack);
    $(".monster0-skil3").find(".skil-hit").text(mypokemon2_skil3_hit);
    $(".monster0-skil3").find(".skil-section").text(mypokemon2_skil3_section);
    $(".monster0-skil3").find(".skil-section-atack").text(mypokemon2_skil3_section_atack);
    $(".monster0-skil3").find(".skil-add").text(mypokemon2_skil3_add);
    $(".monster0-skil3").find(".skil-add-hit").text(mypokemon2_skil3_add_hit);
  }




  function enemy_skil0_0_status_show(){//相手の一体目のモンスターの1個目の技情報をバトルゾーンに反映
    $(".monster1-skil0").find(".skil-name").text(enemypokemon0_skil0_name);
    $(".monster1-skil0").find(".skil-type").text(enemypokemon0_skil0_type);
    $(".monster1-skil0").find(".skil-atack").text(enemypokemon0_skil0_atack);
    $(".monster1-skil0").find(".skil-hit").text(enemypokemon0_skil0_hit);
    $(".monster1-skil0").find(".skil-section").text(enemypokemon0_skil0_section);
    $(".monster1-skil0").find(".skil-section-atack").text(enemypokemon0_skil0_section_atack);
    $(".monster1-skil0").find(".skil-add").text(enemypokemon0_skil0_add);
    $(".monster1-skil0").find(".skil-add-hit").text(enemypokemon0_skil0_add_hit);
  }

  function enemy_skil0_1_status_show(){//相手の一体目のモンスターの2個目の技情報をバトルゾーンに反映
    $(".monster1-skil1").find(".skil-name").text(enemypokemon0_skil1_name);
    $(".monster1-skil1").find(".skil-type").text(enemypokemon0_skil1_type);
    $(".monster1-skil1").find(".skil-atack").text(enemypokemon0_skil1_atack);
    $(".monster1-skil1").find(".skil-hit").text(enemypokemon0_skil1_hit);
    $(".monster1-skil1").find(".skil-section").text(enemypokemon0_skil1_section);
    $(".monster1-skil1").find(".skil-section-atack").text(enemypokemon0_skil1_section_atack);
    $(".monster1-skil1").find(".skil-add").text(enemypokemon0_skil1_add);
    $(".monster1-skil1").find(".skil-add-hit").text(enemypokemon0_skil1_add_hit);
  }

  function enemy_skil0_2_status_show(){//相手の一体目のモンスターの3個目の技情報をバトルゾーンに反映
    $(".monster1-skil2").find(".skil-name").text(enemypokemon0_skil2_name);
    $(".monster1-skil2").find(".skil-type").text(enemypokemon0_skil2_type);
    $(".monster1-skil2").find(".skil-atack").text(enemypokemon0_skil2_atack);
    $(".monster1-skil2").find(".skil-hit").text(enemypokemon0_skil2_hit);
    $(".monster1-skil2").find(".skil-section").text(enemypokemon0_skil2_section);
    $(".monster1-skil2").find(".skil-section-atack").text(enemypokemon0_skil2_section_atack);
    $(".monster1-skil2").find(".skil-add").text(enemypokemon0_skil2_add);
    $(".monster1-skil2").find(".skil-add-hit").text(enemypokemon0_skil2_add_hit);
  }

  function enemy_skil0_3_status_show(){//相手の一体目のモンスターの4個目の技情報をバトルゾーンに反映
    $(".monster1-skil3").find(".skil-name").text(enemypokemon0_skil3_name);
    $(".monster1-skil3").find(".skil-type").text(enemypokemon0_skil3_type);
    $(".monster1-skil3").find(".skil-atack").text(enemypokemon0_skil3_atack);
    $(".monster1-skil3").find(".skil-hit").text(enemypokemon0_skil3_hit);
    $(".monster1-skil3").find(".skil-section").text(enemypokemon0_skil3_section);
    $(".monster1-skil3").find(".skil-section-atack").text(enemypokemon0_skil3_section_atack);
    $(".monster1-skil3").find(".skil-add").text(enemypokemon0_skil3_add);
    $(".monster1-skil3").find(".skil-add-hit").text(enemypokemon0_skil3_add_hit);
  }


  function enemy_skil1_0_status_show(){//相手の二体目のモンスターの1個目の技情報をバトルゾーンに反映
    $(".monster1-skil0").find(".skil-name").text(enemypokemon1_skil0_name);
    $(".monster1-skil0").find(".skil-type").text(enemypokemon1_skil0_type);
    $(".monster1-skil0").find(".skil-atack").text(enemypokemon1_skil0_atack);
    $(".monster1-skil0").find(".skil-hit").text(enemypokemon1_skil0_hit);
    $(".monster1-skil0").find(".skil-section").text(enemypokemon1_skil0_section);
    $(".monster1-skil0").find(".skil-section-atack").text(enemypokemon1_skil0_section_atack);
    $(".monster1-skil0").find(".skil-add").text(enemypokemon1_skil0_add);
    $(".monster1-skil0").find(".skil-add-hit").text(enemypokemon1_skil0_add_hit);
  }

  function enemy_skil1_1_status_show(){//相手の二体目のモンスターの2個目の技情報をバトルゾーンに反映
    $(".monster1-skil1").find(".skil-name").text(enemypokemon1_skil1_name);
    $(".monster1-skil1").find(".skil-type").text(enemypokemon1_skil1_type);
    $(".monster1-skil1").find(".skil-atack").text(enemypokemon1_skil1_atack);
    $(".monster1-skil1").find(".skil-hit").text(enemypokemon1_skil1_hit);
    $(".monster1-skil1").find(".skil-section").text(enemypokemon1_skil1_section);
    $(".monster1-skil1").find(".skil-section-atack").text(enemypokemon1_skil1_section_atack);
    $(".monster1-skil1").find(".skil-add").text(enemypokemon1_skil1_add);
    $(".monster1-skil1").find(".skil-add-hit").text(enemypokemon1_skil1_add_hit);
  }

  function enemy_skil1_2_status_show(){//相手の二体目のモンスターの3個目の技情報をバトルゾーンに反映
    $(".monster1-skil2").find(".skil-name").text(enemypokemon1_skil2_name);
    $(".monster1-skil2").find(".skil-type").text(enemypokemon1_skil2_type);
    $(".monster1-skil2").find(".skil-atack").text(enemypokemon1_skil2_atack);
    $(".monster1-skil2").find(".skil-hit").text(enemypokemon1_skil2_hit);
    $(".monster1-skil2").find(".skil-section").text(enemypokemon1_skil2_section);
    $(".monster1-skil2").find(".skil-section-atack").text(enemypokemon1_skil2_section_atack);
    $(".monster1-skil2").find(".skil-add").text(enemypokemon1_skil2_add);
    $(".monster1-skil2").find(".skil-add-hit").text(enemypokemon1_skil2_add_hit);
  }

  function enemy_skil1_3_status_show(){//相手の二体目のモンスターの4個目の技情報をバトルゾーンに反映
    $(".monster1-skil3").find(".skil-name").text(enemypokemon1_skil3_name);
    $(".monster1-skil3").find(".skil-type").text(enemypokemon1_skil3_type);
    $(".monster1-skil3").find(".skil-atack").text(enemypokemon1_skil3_atack);
    $(".monster1-skil3").find(".skil-hit").text(enemypokemon1_skil3_hit);
    $(".monster1-skil3").find(".skil-section").text(enemypokemon1_skil3_section);
    $(".monster1-skil3").find(".skil-section-atack").text(enemypokemon1_skil3_section_atack);
    $(".monster1-skil3").find(".skil-add").text(enemypokemon1_skil3_add);
    $(".monster1-skil3").find(".skil-add-hit").text(enemypokemon1_skil3_add_hit);

  }


  function enemy_skil2_0_status_show(){//相手の三体目のモンスターの1個目の技情報をバトルゾーンに反映
     $(".monster1-skil0").find(".skil-name").text(enemypokemon2_skil0_name);
     $(".monster1-skil0").find(".skil-type").text(enemypokemon2_skil0_type);
     $(".monster1-skil0").find(".skil-atack").text(enemypokemon2_skil0_atack);
     $(".monster1-skil0").find(".skil-hit").text(enemypokemon2_skil0_hit);
     $(".monster1-skil0").find(".skil-section").text(enemypokemon2_skil0_section);
     $(".monster1-skil0").find(".skil-section-atack").text(enemypokemon2_skil0_section_atack);
     $(".monster1-skil0").find(".skil-add").text(enemypokemon2_skil0_add);
     $(".monster1-skil0").find(".skil-add-hit").text(enemypokemon2_skil0_add_hit);
   }

   function enemy_skil2_1_status_show(){//相手の三体目のモンスターの2個目の技情報をバトルゾーンに反映
     $(".monster1-skil1").find(".skil-name").text(enemypokemon2_skil1_name);
     $(".monster1-skil1").find(".skil-type").text(enemypokemon2_skil1_type);
     $(".monster1-skil1").find(".skil-atack").text(enemypokemon2_skil1_atack);
     $(".monster1-skil1").find(".skil-hit").text(enemypokemon2_skil1_hit);
     $(".monster1-skil1").find(".skil-section").text(enemypokemon2_skil1_section);
     $(".monster1-skil1").find(".skil-section-atack").text(enemypokemon2_skil1_section_atack);
     $(".monster1-skil1").find(".skil-add").text(enemypokemon2_skil1_add);
     $(".monster1-skil1").find(".skil-add-hit").text(enemypokemon2_skil1_add_hit);
   }

   function enemy_skil2_2_status_show(){//相手の三体目のモンスターの3個目の技情報をバトルゾーンに反映
     $(".monster1-skil2").find(".skil-name").text(enemypokemon2_skil2_name);
     $(".monster1-skil2").find(".skil-type").text(enemypokemon2_skil2_type);
     $(".monster1-skil2").find(".skil-atack").text(enemypokemon2_skil2_atack);
     $(".monster1-skil2").find(".skil-hit").text(enemypokemon2_skil2_hit);
     $(".monster1-skil2").find(".skil-section").text(enemypokemon2_skil2_section);
     $(".monster1-skil2").find(".skil-section-atack").text(enemypokemon2_skil2_section_atack);
     $(".monster1-skil2").find(".skil-add").text(enemypokemon2_skil2_add);
     $(".monster1-skil2").find(".skil-add-hit").text(enemypokemon2_skil2_add_hit);
   }

   function enemy_skil2_3_status_show(){//相手の三体目のモンスターの4個目の技情報をバトルゾーンに反映
     $(".monster1-skil3").find(".skil-name").text(enemypokemon2_skil3_name);
     $(".monster1-skil3").find(".skil-type").text(enemypokemon2_skil3_type);
     $(".monster1-skil3").find(".skil-atack").text(enemypokemon2_skil3_atack);
     $(".monster1-skil3").find(".skil-hit").text(enemypokemon2_skil3_hit);
     $(".monster1-skil3").find(".skil-section").text(enemypokemon2_skil3_section);
     $(".monster1-skil3").find(".skil-section-atack").text(enemypokemon2_skil3_section_atack);
     $(".monster1-skil3").find(".skil-add").text(enemypokemon2_skil3_add);
     $(".monster1-skil3").find(".skil-add-hit").text(enemypokemon2_skil3_add_hit);
   }

 mymonster0_status_show();
 enemy0_status_show();
 mymonster_skil0_0_status_show();
 mymonster_skil0_1_status_show();
 mymonster_skil0_2_status_show();
 mymonster_skil0_3_status_show();
 enemy_skil0_0_status_show();
 enemy_skil0_1_status_show();
 enemy_skil0_2_status_show();
 enemy_skil0_3_status_show();




 //以下乱数の変数
 let random4 = Math.floor( Math.random()*4 );//相手の技を4つからランダムに選ぶための乱数
 let randomDamege0 = Math.floor( Math.random()*15 )/100;
 let randomDamegePoint0 = 0.85 + randomDamege0;//0.85〜1の範囲でダメージ補正をかける
 let randomDamege1 = Math.floor( Math.random()*15 )/100;
 let randomDamegePoint1 = 0.85 + randomDamege1;//0.85〜1の範囲でダメージ補正をかける
 let randomHit0 = Math.floor( Math.random()*101 );//命中率の計算用に0〜100の乱数を作る
 let randomHit1 = Math.floor( Math.random()*101 );//命中率の計算用に0〜100の乱数を作る
 let critical0 = Math.floor( Math.random()*101 );//急所率の計算用に0〜100の乱数を作る 10%の確率で急所
 let critical1 = Math.floor( Math.random()*101 );//急所率の計算用に0〜100の乱数を作る 10%の確率で急所
 let randomAdd0 = Math.floor( Math.random()*101 );//自分の技が追加効果を与えるか様の乱数
 let randomAdd1 = Math.floor( Math.random()*101 );//相手の技が追加効果を与えるか様の乱数
 let randomStatus0 = Math.floor( Math.random()*101 );//自分に状態異常がある場合にそれが発生するかようの乱数
 let randomStatus1 = Math.floor( Math.random()*101 );//相手に状態異常がある場合にそれが発生するかようの乱数
 let randomSleep0 = Math.ceil( Math.random()*3 );//ねむり状態のカウント数をランダムで決める
 let randomSleep1 = Math.ceil( Math.random()*3 );//ねむり状態のカウント数をランダムで決める
 let sleepCount0 = 0;//眠った際のrandomSleep0の値をあとで入れる
 let sleepCount1 = 0;//眠った際のrandomSleep1の値をあとで入れる
 let randomFreeze0 = Math.floor( Math.random()*101 );//こおり状態の際にそれが溶けるかの乱数
 let randomFreeze1 = Math.floor( Math.random()*101 );//こおり状態の際にそれが溶けるかの乱数
 let randomConfu0 = Math.floor( Math.random()*101 );//こんらん状態の際に自分をこうげきするかの乱数
 let randomConfu1 = Math.floor( Math.random()*101 );//こんらん状態の際に自分をこうげきするかの乱数
 let randomConfuReset0 = Math.floor( Math.random()*101 );//こんらん状態がなおるかの乱数
 let randomConfuReset1 = Math.floor( Math.random()*101 );//こんらん状態がなおるかの乱数
 //以上乱数の変数


 //以下自分のバトルゾーンのポケモンのステータスをダメージ計算用の変数に代入
 let hp0 = Number($(".monster0").find(".hp-child").text());//
 let monsterType0 = $(".monster0").find(".type-point").text();//自分のモンスターのひとつめタイプ取得
 let monsterType0_2 = $(".monster0").find(".type-point2").text();//自分のモンスターのふたつめタイプ取得
 let monsterAtack0 = Number($(".monster0").find(".atack-point").text());;//自分のモンスターのこうげきの値を取得
 let monsterSpecialAtack0 = Number($(".monster0").find(".atack-special-point").text());;//自分のモンスターのとくこうの値を取得
 let defence0 = Number($(".monster0").find(".defence-point").text());;//自分のモンスターのぼうぎょの値を取得
 let specialDefence0 = Number($(".monster0").find(".defence-special-point").text());;//自分のモンスターのぼうぎょの値を取得
 let speed0 = Number($(".monster0").find(".speed-point").text());//自分のモンスターの素早さを取得
 let skilType0 ="";//自分のポケモンの選んだ技のタイプをあとで代入
 let skilAtack0 = 0;//自分のポケモンの選んだ技の威力をあとで代入
 let skilHit0 = 0;//選んだ技の命中率をあとで代入
 let skilSection0 = "";//選んだ技が物理か特殊かをあとで代入
 let skilKind0 = "";//選んだ技が攻撃技か状態異常技か補助技かをあとで代入
 let add0 = ""//選んだ技の追加効果をあとで代入
 let addHit0 = 0//選んだ技の追加効果の発生率をあとで代入
 let maxHp0 = Number($(".monster0").find(".hp-parent").text());//自分のポケモンの最大hp
 let statusDamage0 = Math.floor(maxHp0/8);//やけどや毒によるダメージ、最大HPの1/8を受ける
 let confuDamage0 = Math.floor(Number(22*monsterAtack0*40/defence0/50*randomDamegePoint0));//自分が混乱の際に受けるダメージ
 let messageName0 = $(".monster0").find(".name").text();//メッセージテキストに表示する自分のモンスターの名前
 //以上自分のバトルゾーンのポケモンのステータスをダメージ計算用の変数に代入


 //以下自相手のバトルゾーンのポケモンのステータスをダメージ計算用の変数に代入
 let hp1 = Number($(".monster1").find(".hp-child").text());//
 let monsterType1 = $(".monster1").find(".type-point").text();//相手のモンスターのタイプを取得
 let monsterType1_2 = $(".monster1").find(".type-point2").text();//相手のモンスターのふたつめタイプ取得
 let monsterAtack1 = Number($(".monster1").find(".atack-point").text());;//相手のモンスターのこうげきの値を取得
 let monsterSpecialAtack1 = Number($(".monster1").find(".atack-special-point").text());;//相手のモンスターのとくこうの値を取得
 let defence1 = Number($(".monster1").find(".defence-point").text());;//相手のモンスターのぼうぎょの値を取得
 let specialDefence1 = Number($(".monster1").find(".defence-special-point").text());;//相手のモンスターのぼうぎょの値を取得
 let speed1 = Number($(".monster1").find(".speed-point").text());//相手のモンスターの素早さを取得
 let skilType1 ="";//相手のモンスターの選んだ技のタイプをあとで代入
 let skilAtack1 = 0;//相手のポケモンの選んだ技の威力をあとで代入
 let skilHit1 = 0;//相手のポケモンの選んだ技の命中率をあとで代入
 let skilSection1 = "";//相手の技が物理か特殊かをあとで代入
 let skilKind1 = "";//相手の技が攻撃技か状態異常技か補助技かをあとで代入
 let add1 = ""//相手の技の追加効果をあとで代入
 let addHit1 = 0//相手の技の追加効果の発生率をあとで代入
 let maxHp1 = Number($(".monster1").find(".hp-parent").text());//相手のポケモンの最大hp
 let statusDamage1 = Math.floor(maxHp1/8);//やけどや毒によるダメージ、最大HPの1/8を受ける
 let confuDamage1 = Math.floor(Number(22*monsterAtack1*40/defence1/50*randomDamegePoint1));//相手が混乱の際に受けるダメージ
 let messageName1 = $(".monster1").find(".name").text();//メッセージテキストに表示する相手のモンスターの名前
 //以上自相手のバトルゾーンのポケモンのステータスをダメージ計算用の変数に代入

 let now_my_hp = 0;//交換の際に現在のhpを保管するようの変数,最初は手持ち一匹目のhpを入れる
 let now_my_list = $(".monster0").find(".list-number").text();//交換の際に現在のポケモンが手持ちの番号用の変数
 let my_max_hp = 0;//交換で選んだポケモンの最大hp取得
 let now_my_name = "";//今戦っているポケモンの名前をあとで代入
 let change_my_name = "";//交換で出すポケモンの名前をあとで代入

 let now_enemy_name = "";//今戦っている相手のポケモンの名前をあとで代入
 let change_enemy_name = "";//次に出てくるポケモンの名前をあとで代入


 let my_death_count = 0;//自分のポケモンが何匹戦闘不能になったをカウントしていく
 let enemy_death_count = 0;//相手のポケモンが何匹戦闘不能になったをカウントしていく

 let atack0 = 0;//自分の技のダメージ計算の式をあとで代入
 let atack1 = 0//相手の技のダメージ計算の式をあとで代入

 let messageSkil0 = "";//メッセージテキストに表示する自分の技名
 let messageSkil1 = "";//メッセージテキストに表示する相手の技名

 let recoveryPoint0 = 0;//自分のじこさいせいの回復量をあとで代入
 let recoveryPoint1 = 0;//相手のじこさいせいの回復量をあとで代入



 function getStatus0(){//自分のポケモンチェンジの際にバトル用のステータスを取得
   hp0 = Number($(".monster0").find(".hp-child").text());//
   monsterType0 = $(".monster0").find(".type-point").text();//自分のモンスターのひとつめタイプ取得
   monsterType0_2 = $(".monster0").find(".type-point2").text();//自分のモンスターのふたつめタイプ取得
   monsterAtack0 = Number($(".monster0").find(".atack-point").text());;//自分のモンスターのこうげきの値を取得
   monsterSpecialAtack0 = Number($(".monster0").find(".atack-special-point").text());;//自分のモンスターのとくこうの値を取得
   defence0 = Number($(".monster0").find(".defence-point").text());;//自分のモンスターのぼうぎょの値を取得
   specialDefence0 = Number($(".monster0").find(".defence-special-point").text());;//自分のモンスターのぼうぎょの値を取得
   speed0 = Number($(".monster0").find(".speed-point").text());//自分のモンスターの素早さを取得
   skilType0 ="";//自分のポケモンの選んだ技のタイプをあとで代入
   skilAtack0 = 0;//自分のポケモンの選んだ技の威力をあとで代入
   skilHit0 = 0;//選んだ技の命中率をあとで代入
   skilSection0 = "";//選んだ技が物理か特殊かをあとで代入
   skilKind0 = "";//選んだ技が攻撃技か状態異常技か補助技かをあとで代入
   add0 = ""//選んだ技の追加効果をあとで代入
   addHit0 = 0//選んだ技の追加効果の発生率をあとで代入
   maxHp0 = Number($(".monster0").find(".hp-parent").text());//自分のポケモンの最大hp
   statusDamage0 = Math.floor(maxHp0/8);//やけどや毒によるダメージ、最大HPの1/8を受ける
   confuDamage0 = Math.floor(Number(22*monsterAtack0*40/defence0/50*randomDamegePoint0));//自分が混乱の際に受けるダメージ
   messageName0 = $(".monster0").find(".name").text();//メッセージテキストに表示する自分のモンスターの名前
   $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
   $(".monster0").find(".hp-box").css({"width":my_max_hp + "px"});
 }



 function getStatus1(){//相手のポケモンチェンジの際にステータスを取得
   hp1 = Number($(".monster1").find(".hp-child").text());//
   monsterType1 = $(".monster1").find(".type-point").text();//相手のモンスターのタイプを取得
   monsterType1_2 = $(".monster1").find(".type-point2").text();//相手のモンスターのふたつめタイプ取得
   monsterAtack1 = Number($(".monster1").find(".atack-point").text());;//相手のモンスターのこうげきの値を取得
   monsterSpecialAtack1 = Number($(".monster1").find(".atack-special-point").text());;//相手のモンスターのとくこうの値を取得
   defence1 = Number($(".monster1").find(".defence-point").text());;//相手のモンスターのぼうぎょの値を取得
   specialDefence1 = Number($(".monster1").find(".defence-special-point").text());;//相手のモンスターのぼうぎょの値を取得
   speed1 = Number($(".monster1").find(".speed-point").text());//相手のモンスターの素早さを取得
   skilType1 ="";//相手のモンスターの選んだ技のタイプをあとで代入
   skilAtack1 = 0;//相手のポケモンの選んだ技の威力をあとで代入
   skilHit1 = 0;//相手のポケモンの選んだ技の命中率をあとで代入
   skilSection1 = "";//相手の技が物理か特殊かをあとで代入
   skilKind1 = "";//相手の技が攻撃技か状態異常技か補助技かをあとで代入
   add1 = ""//相手の技の追加効果をあとで代入
   addHit1 = 0//相手の技の追加効果の発生率をあとで代入
   maxHp1 = Number($(".monster1").find(".hp-parent").text());//相手のポケモンの最大hp
   statusDamage1 = Math.floor(maxHp1/8);//やけどや毒によるダメージ、最大HPの1/8を受ける
   confuDamage1 = Math.floor(Number(22*monsterAtack1*40/defence1/50*randomDamegePoint1));//相手が混乱の際に受けるダメージ
   messageName1 = $(".monster1").find(".name").text();//メッセージテキストに表示する相手のモンスターの名前
 }

 //最初は手持ち一匹目のポケモンのhpをバトルゾーンのhpゾーンに反映させる
  $(".monster0").find(".hp-point").css({"width":mypokemon0_hp + "px"});
  $(".monster0").find(".hp-box").css({"width":mypokemon0_hp + "px"});
 //最初は手持ち一匹目のポケモンのhpをバトルゾーンのhpゾーンに反映させる

  $(".monster1").find(".hp-point , .hp-box").css({"width":hp1 + "px"});
  $(".monster1").find(".hp-child , .hp-parent").text(hp1);

 function randomStart(){//乱数の数字を変える
   random4 = Math.floor( Math.random()*4 );//相手の技を4つからランダムに選ぶための乱数
   randomDamege0 = Math.floor( Math.random()*15 )/100;
   randomDamegePoint0 = 0.85 + randomDamege0;//0.85〜1の範囲でダメージ補正をかける
   randomDamege1 = Math.floor( Math.random()*15 )/100;
   randomDamegePoint1 = 0.85 + randomDamege1;//0.85〜1の範囲でダメージ補正をかける
   randomHit0 = Math.floor( Math.random()*101 );//命中率の計算用に0〜100の乱数を作る 10%の確率で急所
   randomHit1 = Math.floor( Math.random()*101 );//命中率の計算用に0〜100の乱数を作る 10%の確率で急所
   critical0 = Math.floor( Math.random()*101 );//急所率の計算用に0〜100の乱数を作る 10%の確率で急所
   critical1 = Math.floor( Math.random()*101 );//急所率の計算用に0〜100の乱数を作る 10%の確率で急所
   randomAdd0 = Math.floor( Math.random()*101 );//追加効果を与えるか様の乱数
   randomAdd1 = Math.floor( Math.random()*101 );//追加効果を与えるか様の乱数
   randomStatus0 = Math.floor( Math.random()*101 );//状態異常がある場合にそれが発生するかようの乱数
   randomStatus1 = Math.floor( Math.random()*101 );//状態異常がある場合にそれが発生するかようの乱数
   randomSleep0 = Math.ceil( Math.random()*3 );//ねむり状態のカウント数をランダムで決める
   randomSleep1 = Math.ceil( Math.random()*3 );//ねむり状態のカウント数をランダムで決める
   randomFreeze0 = Math.floor( Math.random()*101 );//こおり状態の際にそれが溶けるかの乱数
   randomFreeze1 = Math.floor( Math.random()*101 );//こおり状態の際にそれが溶けるかの乱数
   randomConfu0 = Math.floor( Math.random()*101 );//こんらん状態の際に自分をこうげきするかの乱数
   randomConfu1 = Math.floor( Math.random()*101 );//こんらん状態の際に自分をこうげきするかの乱数
   randomConfuReset0 = Math.floor( Math.random()*101 );//こんらん状態がなおるかの乱数
   randomConfuReset1 = Math.floor( Math.random()*101 );//こんらん状態がなおるかの乱数
 }

 function effect0(){//自分が相手からの攻撃を受けた際の点滅処理
   if(skilKind1 == "help" || skilKind1 == "pain"){//補助技か状態異常技の際はエフェクト処理を行わない
     return;
   } else if(skilKind1 == "atack"){//攻撃技の際のみエフェクト処理を行う
     let frash0 = setInterval(function() {
        $('.monster0 .pic img').fadeOut(80, function() {
          $(this).fadeIn(80);
        });
    }, 160);

    setTimeout(function(){
       clearInterval(frash0);
    },480);
   }//else if(skilKind1 == "atack")

  }//effect0

 function effect1(){//相手が自分の攻撃を受けた際の点滅処理
   if(skilKind0 == "help" || skilKind0 == "pain"){//補助技か状態異常技の際はエフェクト処理を行わない
     return;
   } else if(skilKind0 == "atack"){//攻撃技の際のみエフェクト処理を行う
   let frash1 = setInterval(function() {
      $('.monster1 .pic img').fadeOut(80, function() {
        $(this).fadeIn(80);
      });
  }, 160);

  setTimeout(function(){
     clearInterval(frash1);
  },480);
 }//else if(skilKind0 == "atack")
}//effect1


 function returnEffect0(){//自分が攻撃の反動を受けた際の点滅処理
   let returnFrash0 = setInterval(function() {
      $('.monster0 .pic img').fadeOut(80, function() {
        $(this).fadeIn(80);
      });
  }, 160);

  setTimeout(function(){
     clearInterval(returnFrash0);
  },480);

  }//returnEffect0

 function returnEffect1(){//相手が攻撃を受けた際の点滅処理
   let returnFrash1 = setInterval(function() {
      $('.monster1 .pic img').fadeOut(80, function() {
        $(this).fadeIn(80);
      });
  }, 160);

  setTimeout(function(){
     clearInterval(returnFrash1);
  },480);
}//returnEffect1


function skilSelectCheck(){//選んだ技が物理か特殊化によってダメージ計算の式に入れる値を帰る
  if(skilSection0 == "psychobreak"){//サイコブレイクを選んだ場合
     atack0 = Math.floor(Number(22*monsterSpecialAtack0*skilAtack0/defence1/50*randomDamegePoint0));//サイコブレイク専用のダメージ計算式
  } else if(skilSection0 == "physics"){//自分の技が物理の場合
     atack0 = Math.floor(Number(22*monsterAtack0*skilAtack0/defence1/50*randomDamegePoint0));//自分の技が物理の場合のダメージ計算式
  } else if(skilSection0 == "special"){//自分の技が特殊の場合
     atack0 = Math.floor(Number(22*monsterSpecialAtack0*skilAtack0/specialDefence1/50*randomDamegePoint0));//自分の技が特殊の場合のダメージ計算式
  }

  if(skilSection1 == "psychobreak"){//相手がサイコブレイクを選んだ場合
     atack1 = Math.floor(Number(22*monsterSpecialAtack1*skilAtack1/defence0/50*randomDamegePoint1));//サイコブレイク専用のダメージ計算式
  } else if(skilSection1 == "physics"){//相手の技が物理の場合
    atack1 = Math.floor(Number(22*monsterAtack1*skilAtack1/defence0/50*randomDamegePoint1));//相手の技が物理の場合のダメージ計算式
  }else if(skilSection1 == "special"){//相手の技が特殊の場合
    atack1 = Math.floor(Number(22*monsterSpecialAtack1*skilAtack1/specialDefence0/50*randomDamegePoint1));//相手の技が特殊の場合のダメージ計算式
  }
}//skilSelectCheck()


 function typeResult0_0(){//自分の技効果4倍の処理
   atack0 *=4;
   $('.battle-message2').text("こうかはばつぐんだ!!");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

 function typeResult0_1(){//自分の技効果2倍の処理
   atack0 *=2;
   $('.battle-message2').text("こうかはばつぐんだ!!");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

 function typeResult0_2(){//自分の技効果無しの処理
   atack0 = 0;
   $('.battle-message4').text("こうかはないみたいだ");
   $('.battle-message2').text("");
   $('.battle-message3').text("");
 }

 function typeResult0_3(){//自分の技効果半分の処理
   atack0 = Math.floor(atack0 / 2);
   $('.battle-message3').text("こうかはいまひとつのようだ");
   $('.battle-message2').text("");
   $('.battle-message4').text("");
 }

 function typeResult0_4(){//自分の技効果通常の処理
   atack0 *=1;
   $('.battle-message2').text("");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

  function typeResult0_5(){//自分の技効果1/4の処理
    atack0 = Math.floor(atack0 / 4);
    $('.battle-message3').text("こうかはいまひとつのようだ");
    $('.battle-message2').text("");
    $('.battle-message4').text("");
  }

 function typeCheck0(){//自分の技の相手に対するタイプチェック

   if(skilKind0 == "help"){//状態異常技か補助技の際はタイプチェックしない
     return;
   }else if( skilKind0 == "pain"){
     return;
   }else if(skilKind0 == "atack"){//攻撃技を選んだときのみタイプチェックをする

     if(skilType0 =="普"){
       if(monsterType1 == '霊' || monsterType1_2 == '霊'){
         typeResult0_2();
       } else if(monsterType1 == '岩' || monsterType1_2 == '岩'){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//普のタイプチェック

     if(skilType0 =="火"){
       if(monsterType1 == '草'|| monsterType1 == '氷'|| monsterType1 == '虫'|| monsterType1_2 == '草'|| monsterType1_2 == '氷'|| monsterType1_2 == '虫'){
         typeResult0_1();
       } else if(monsterType1 == '水' || monsterType1 == "火" || monsterType1 == '岩' || monsterType1 == '竜' || monsterType1_2 == '水'|| monsterType1_2 == "火" || monsterType1_2 == '岩' || monsterType1_2 == '竜'){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//火のタイプチェック

     if(skilType0 =="水"){
       if(monsterType1 == '火' || monsterType1 == "地" || monsterType1 == '岩' ||monsterType1_2 == '火' || monsterType1_2 == "地" || monsterType1_2 == '岩'){
         typeResult0_1();
       } else if(monsterType1 == '水' || monsterType1 == "草" || monsterType1 == "竜" ||monsterType1_2 == '水' || monsterType1_2 == "草" || monsterType1_2 == "竜"){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//水のタイプチェック

     if(skilType0 =="電"){
       if(monsterType1 == '地'){
         typeResult0_2();
       }  else if(monsterType1 == '水' || monsterType1 == "飛" || monsterType1_2 == '水' || monsterType1_2 == "飛"){
         typeResult0_1();
       }  else if(monsterType1 == "草" || monsterType1 == "電" || monsterType1 == "竜" || monsterType1_2 == "草" || monsterType1_2 == "電" || monsterType1_2 == "竜"){
         typeResult0_3();
       }else{
         typeResult0_4();
       }
     }//電のタイプチェック

     if(skilType0 =="草"){
       if(monsterType1 == '水' || monsterType1 == "地" || monsterType1 == '岩' || monsterType1_2 == '水' || monsterType1_2 == "地" || monsterType1_2 == '岩'){
         typeResult0_1();
       } else if(monsterType1 == '火' || monsterType1 == "飛" || monsterType1 == '草' || monsterType1 == '毒' || monsterType1 == '虫' || monsterType1_2 == '火' || monsterType1_2 == "飛" || monsterType1_2 == '草' || monsterType1_2 == '毒' || monsterType1_2 == '虫' ){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//草のタイプチェック

     if(skilType0 =="氷"){
       if(monsterType1 == '草' || monsterType1 == "地" || monsterType1 == '飛'|| monsterType1 == '竜' || monsterType1_2 == '草' || monsterType1_2 == "地" || monsterType1_2 == '飛'|| monsterType1_2 == '竜'){
         typeResult0_1();
       } else if(monsterType1 == '水' || monsterType1 == "氷" || monsterType1_2 == '水' || monsterType1_2 == "氷"){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//氷のタイプチェック

      if(skilType0 =="闘"){
        if(monsterType1 == '霊' || monsterType1_2 == '霊'){
          typeResult0_2();
        } else if(monsterType1 == '普' || monsterType1 == "氷" || monsterType1 == "岩" || monsterType1_2 == '普' || monsterType1_2 == "氷" || monsterType1_2 == "岩"){
          typeResult0_1();
        }  else if(monsterType1 == "毒" || monsterType1 == "飛" || monsterType1 == "念" || monsterType1 == "虫" || monsterType1_2 == "毒" || monsterType1_2 == "飛" || monsterType1_2 == "念" || monsterType1_2 == "虫"){
          typeResult0_3();
        }else{
          typeResult0_4();
        }
      }//闘のタイプチェック

      if(skilType0 =="毒"){
        if(monsterType1 == '草'|| monsterType1 == "虫" || monsterType1_2 == '草'|| monsterType1_2 == "虫"){
          typeResult0_1();
        } else if(monsterType1 == '毒'|| monsterType1 == "地"|| monsterType1 == "岩"|| monsterType1 == "霊" || monsterType1_2 == '毒'|| monsterType1_2 == "地"|| monsterType1_2 == "岩"|| monsterType1_2 == "霊"){
          typeResult0_3();
        } else{
          typeResult0_4();
        }
      }//毒のタイプチェック

     if(skilType0 =="地"){
       if(monsterType1 == '飛' || monsterType1_2 == '飛'){
         typeResult0_2();
       } else if(monsterType1 == '火' || monsterType1 == "電" || monsterType1 == "岩" || monsterType1 == "毒" || monsterType1_2 == '火' || monsterType1_2 == "電" || monsterType1_2 == "岩" || monsterType1_2 == "毒"){
         typeResult0_1();
       } else if(monsterType1 == "草" || monsterType1 == "虫" || monsterType1_2 == "草" || monsterType1_2 == "虫"){
         typeResult0_3();
       }else{
         typeResult0_4();
       }
     }//地のタイプチェック

     if(skilType0 == "飛"){
       if(monsterType1 == '草'|| monsterType1 == "虫"|| monsterType1 == "闘" || monsterType1_2 == '草'|| monsterType1_2 == "虫"|| monsterType1_2 == "闘"){
         typeResult0_1();
       } else if(monsterType1 == '電'|| monsterType1 == "岩" || monsterType1_2 == '電'|| monsterType1_2 == "岩"){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//飛のタイプチェック

     if(skilType0 =="念"){
       if(monsterType1 == "闘" || monsterType1 == "毒" || monsterType1_2 == "闘" || monsterType1_2 == "毒"){
         typeResult0_1();
       } else if(monsterType1 == '念' || monsterType1_2 == '念'){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//念のタイプチェック

     if(skilType0 =="虫"){
       if(monsterType1 == "闘" || monsterType1 == "草" || monsterType1 == "念" || monsterType1_2 == "闘" || monsterType1_2 == "草" || monsterType1_2 == "念"){
         typeResult0_1();
       } else if(monsterType1 == '火'|| monsterType1 == "闘"|| monsterType1 == "飛" || monsterType1_2 == '火'|| monsterType1_2 == "闘"|| monsterType1_2 == "飛"){
         typeResult0_3();
       } else{
         typeResult0_4();
       }
     }//虫のタイプチェック

      if(skilType0 =="岩"){
        if(monsterType1 == '火' || monsterType1 == "飛" || monsterType1 == "虫" || monsterType1 == "氷" || monsterType1_2 == '火' || monsterType1_2 == "飛" || monsterType1_2 == "虫" || monsterType1_2 == "氷"){
          typeResult0_1();
        } else if(monsterType1 == '地'|| monsterType1 == "闘" || monsterType1_2 == '地'|| monsterType1_2 == "闘"){
          typeResult0_3();
        } else{
          typeResult0_4();
        }
      }//岩のタイプチェック

      if(skilType0 =="霊"){
        if(monsterType1 == '普' || monsterType1_2 == '普'){
          typeResult0_2();
        } else if(monsterType1 == '念' || monsterType1_2 == '念'){
          typeResult0_1();
        }  else{
          typeResult0_4();
        }
      }//霊のタイプチェック

      if(skilType0 =="竜"){
        if(monsterType1 == '竜' || monsterType1_2 == '竜'){
          typeResult0_1();
        }  else{
          typeResult0_4();
        }
      }//竜のタイプチェック

    }//if(skilKind0 == "atack")

 }//typecheck0()

 function typeResult1_0(){//相手の技効果4倍の処理
   atack1 *=4;
   $('.battle-message2').text("こうかはばつぐんだ!!");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

 function typeResult1_1(){//相手の技効果2倍の処理
   atack1 *=2;
   $('.battle-message2').text("こうかはばつぐんだ!!");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

 function typeResult1_2(){//相手の技効果無しの処理
   atack1 = 0;
   $('.battle-message4').text("こうかはないみたいだ");
   $('.battle-message2').text("");
   $('.battle-message3').text("");
 }

 function typeResult1_3(){//相手の技効果半分の処理
   atack1 = Math.floor(atack1 / 2);
   $('.battle-message3').text("こうかはいまひとつのようだ");
   $('.battle-message2').text("");
   $('.battle-message4').text("");
 }

 function typeResult1_4(){//相手の技効果通常の処理
   atack1 *=1;
   $('.battle-message2').text("");
   $('.battle-message3').text("");
   $('.battle-message4').text("");
 }

  function typeResult1_5(){//相手の技効果半分の処理
    atack1 = Math.floor(atack1 / 4);
    $('.battle-message3').text("こうかはいまひとつのようだ");
    $('.battle-message2').text("");
    $('.battle-message4').text("");
  }


 function typeCheck1(){//相手の技の自分に対するタイプチェック
   if(skilKind1 == "help" || skilKind1 == "pain"){//状態異常技か補助技の際はタイプチェックしない
     return;
   }
   else if(skilKind1 == "atack"){//攻撃技を選んだときのみタイプチェックをする
     if(skilType1 =="普"){
       if(monsterType0 == '霊' || monsterType0_2 == '霊'){
         typeResult1_2();
       } else if(monsterType0 == '岩' || monsterType0_2 == '岩'){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//普のタイプチェック

     if(skilType1 =="火"){
       if(monsterType0 == '草'|| monsterType0 == '氷'|| monsterType0 == '虫' || monsterType0_2 == '草'|| monsterType0_2 == '氷'|| monsterType0_2 == '虫'){
         typeResult1_1();
       } else if(monsterType0 == '水' || monsterType0 == "火" || monsterType0 == '岩' || monsterType0 == '竜' || monsterType0_2 == '水' || monsterType0_2 == "火" || monsterType0_2 == '岩' || monsterType0_2 == '竜'){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//火のタイプチェック

     if(skilType1 =="水"){
       if(monsterType0 == '火' || monsterType0 == "地" || monsterType0 == '岩' || monsterType0_2 == '火' || monsterType0_2 == "地" || monsterType0_2 == '岩'){
         typeResult1_1();
       } else if(monsterType0 == '水' || monsterType0 == "草" || monsterType0 == "竜" || monsterType0_2 == '水' || monsterType0_2 == "草" || monsterType0_2 == "竜"){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//水のタイプチェック

     if(skilType1 =="電"){
       if(monsterType0 == '地' || monsterType0_2 == '地'){
         typeResult1_2();
       }  else if(monsterType0 == '水' || monsterType0 == "飛" || monsterType0_2 == '水' || monsterType0_2 == "飛"){
         typeResult1_1();
       }  else if(monsterType0 == "草" || monsterType0 == "電" || monsterType0 == "竜" || monsterType0_2 == "草" || monsterType0_2 == "電" || monsterType0_2 == "竜"){
         typeResult1_3();
       }else{
         typeResult1_4();
       }
     }//電のタイプチェック

     if(skilType1 =="草"){
       if(monsterType0 == '水' || monsterType0 == "地" || monsterType0 == '岩' || monsterType0_2 == '水' || monsterType0_2 == "地" || monsterType0_2 == '岩'){
         typeResult1_1();
       } else if(monsterType0 == '火' || monsterType0 == "飛" || monsterType0 == '草' || monsterType0 == '毒' || monsterType0 == '虫' || monsterType0_2 == '火' || monsterType0_2 == "飛" || monsterType0_2 == '草' || monsterType0_2 == '毒' || monsterType0_2 == '虫'){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//草のタイプチェック

     if(skilType1 =="氷"){
       if(monsterType0 == '草' || monsterType0 == "地" || monsterType0 == '飛'|| monsterType0 == '竜' || monsterType0_2 == '草' || monsterType0_2 == "地" || monsterType0_2 == '飛'|| monsterType0_2 == '竜'){
         typeResult1_1();
       } else if(monsterType0 == '水' || monsterType0 == "氷" || monsterType0_2 == '水' || monsterType0_2 == "氷"){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//氷のタイプチェック

      if(skilType1 =="闘"){
        if(monsterType0 == '霊' || monsterType0_2 == '霊'){
          typeResult1_2();
        }  else if(monsterType0 == '普' || monsterType0 == "氷" || monsterType0 == "岩" || monsterType0_2 == '普' || monsterType0_2 == "氷" || monsterType0_2 == "岩"){
          typeResult1_1();
        }  else if(monsterType0 == "毒" || monsterType0 == "飛" || monsterType0 == "念" || monsterType0 == "虫" || monsterType0_2 == "毒" || monsterType0_2 == "飛" || monsterType0_2 == "念" || monsterType0_2 == "虫"){
          typeResult1_3();
        }else{
          typeResult1_4();
        }
      }//闘のタイプチェック

      if(skilType1 =="毒"){
        if(monsterType0 == '草'|| monsterType0 == "虫" || monsterType0_2 == '草'|| monsterType0_2 == "虫"){
          typeResult1_1();
        } else if(monsterType0 == '毒'|| monsterType0 == "地"|| monsterType0 == "岩"|| monsterType0 == "霊" || monsterType0_2 == '毒'|| monsterType0_2 == "地"|| monsterType0_2 == "岩"|| monsterType0_2 == "霊"){
          typeResult1_3();
        } else{
          typeResult1_4();
        }
      }//毒のタイプチェック

     if(skilType1 =="地"){
       if(monsterType0 == '飛' || monsterType0_2 == '飛'){
         typeResult1_2();
       } else if(monsterType0 == '火' || monsterType0 == "電" || monsterType0 == "岩" || monsterType0 == "毒" || monsterType0_2 == '火' || monsterType0_2 == "電" || monsterType0_2 == "岩" || monsterType0_2 == "毒"){
         typeResult1_1();
       }  else if(monsterType0 == "草" || monsterType0 == "虫" || monsterType0_2 == "草" || monsterType0_2 == "虫"){
         typeResult1_3();
       }else{
         typeResult1_4();
       }
     }//地のタイプチェック

     if(skilType1 =="飛"){
       if(monsterType0 == '草'|| monsterType0 == "虫"|| monsterType0 == "闘" || monsterType0_2 == '草'|| monsterType0_2 == "虫"|| monsterType0_2 == "闘"){
         typeResult1_1();
       } else if(monsterType0 == '電'|| monsterType0 == "岩" || monsterType0_2 == '電'|| monsterType0_2 == "岩"){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//飛のタイプチェック

     if(skilType1 =="念"){
       if(monsterType0 == "闘" || monsterType0 == "毒" || monsterType0_2 == "闘" || monsterType0_2 == "毒"){
         typeResult1_1();
       } else if(monsterType0 == '念' || monsterType0_2 == '念'){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//念のタイプチェック

     if(skilType1 =="虫"){
       if(monsterType0 == "闘" || monsterType0 == "草" || monsterType0 == "念" || monsterType0_2 == "闘" || monsterType0_2 == "草" || monsterType0_2 == "念"){
         typeResult1_1();
       } else if(monsterType0 == '火'|| monsterType0 == "闘"|| monsterType0 == "飛" || monsterType0_2 == '火'|| monsterType0_2 == "闘"|| monsterType0_2 == "飛"){
         typeResult1_3();
       } else{
         typeResult1_4();
       }
     }//虫のタイプチェック

      if(skilType1 =="岩"){
        if(monsterType0 == '火' || monsterType0 == "飛" || monsterType0 == "虫" || monsterType0 == "氷" || monsterType0_2 == '火' || monsterType0_2 == "飛" || monsterType0_2 == "虫" || monsterType0_2 == "氷"){
          typeResult1_1();
        } else if(monsterType0 == '地'|| monsterType0 == "闘" || monsterType0_2 == '地'|| monsterType0_2 == "闘"){
          typeResult1_3();
        } else{
          typeResult1_4();
        }
      }//岩のタイプチェック

      if(skilType1 =="霊"){
        if(monsterType0 == '普' || monsterType0_2 == '普'){
          typeResult1_2();
        }  else if(monsterType0 == '念' || monsterType0_2 == '念'){
          typeResult1_1();
        }  else{
          typeResult1_4();
        }
      }//霊のタイプチェック

      if(skilType1 =="竜"){
        if(monsterType0 == '竜' || monsterType0_2 == '竜'){
          typeResult1_1();
        }  else{
          typeResult1_4();
        }
      }//竜のタイプチェック

    }//if(skilKind1 == "atack")

  }//typecheck1()

 function addCheck0_0(){//自分の技の追加効果が発生した場合の処理 わざとを押した瞬間に決まる場合
   if(randomHit0<=skilHit0 && randomAdd0<=addHit0){
     if(add0 == "speed"){//先制技の処理
      speed0 = speed0 * 10;
      $(".monster0").find(".status").addClass("speed-up");
     }
     if(add0 == "charge"){//1ターンためる技
      $(".monster0").find(".status").addClass("charge");
      $(".battle-message5").text(messageName0+"は力をためている");
     }
     if(add0 == "critical"){//急所に当たりやすい技 急所率を3倍に
       critical0 = critical0/3;
     }
   }
 }//addCheck0_0

 function addCheck0_1(){//自分の技の追加効果が発生した場合の処理 わざと同時に
   if(add0 == "kill"){//いちげきひっさつの処理
     hp1 = 0;
     $(".battle-message6").text("いちげきひっさつ!!");
     $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
     $(".monster1").find(".hp-child").text(hp1);
     effect1();
   }
 }//addCheck0_1


 function addCheck0_2(){//自分の技のこうげき技で追加効果が発生した場合の処理 わざの少し後に発生する場青
   if(skilKind0 == "help"){//状態異常技か補助技の際は別の関数で
     return;
   } else if(skilKind0 == "pain"){
     return;
   } else if(skilKind0 == "atack"){//この関数では攻撃技に付属する状態異常のみ扱う

       if($(".monster1").find(".status").hasClass("sick")){//すでに相手が状態異常の場合は追加効果を与えないように
         return
       }else if(randomHit0<=skilHit0 && randomAdd0<=addHit0  && hp1>0){
         if(add0 == "spark"){//麻痺の処理
           $(".monster1").find(".status").addClass("sick spark");
           $(".monster1").find(".status").text("まひ");
           $(".battle-message5").text("相手の"+ messageName1+"は麻痺して技が出にくくなった");
           speed1 = speed1/2;
         }

         if(add0 == "fire"){//火傷の処理
           $(".monster1").find(".status").addClass("sick fire");
           $(".monster1").find(".status").text("やけど");
           monsterAtack1 = monsterAtack1/2;
           $(".battle-message5").text("相手の"+messageName1+"はやけどを負った");
         }
         if(add0 == "stop"){//怯んだ場合の処理
           $(".monster1").find(".status").addClass("sick stop");
           $(".battle-message5").text("相手の"+messageName1+"はひるんだ");
         }

         if(add0 == "freeze"){//こおりの処理
           $(".monster1").find(".status").addClass("sick freeze");
           $(".monster1").find(".status").text("こおり");
           $(".battle-message5").text("相手の"+messageName1+"は凍ってしまった");
         }

         if(add0 == "confu"){//混乱の処理
           $(".monster1").find(".status").addClass("sick confu");
           $(".monster1").find(".status").text("こんらん");
           $(".battle-message5").text("相手の"+messageName1+"はこんらんした");
         }
       }
     }//else if(skilKind0 == "atack")

   }//addCheck0_2

 function addCheck0_3(){//自分の技の追加効果が発生した場合の処理 わざの少し後に自分に発生する場青
   if(randomHit0<=skilHit0 && randomAdd0<=addHit0  && hp1>0){
     if(add0 == "nomove"){//次のターン攻撃の反動で動けない処理
       $(".monster0").find(".status").addClass("sick nomove");
     }

     if(add0 == "return"){//こうげきの反動を受ける処理
       let returnPoint0 = Math.floor(atack0/2);
       hp0 -= returnPoint0;
       $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
       $(".monster0").find(".hp-child").text(hp0);
       returnEffect0();
       $(".battle-message5").text(messageName0+"はこうげきの反動を受けた");
     }
   }
 }//addCheck0_3

 function addCheck0_4(){//自分が補助技を使った場合の処理
   if(randomHit0<=skilHit0 && randomAdd0<=addHit0  && hp1>0){
     $(".battle-message2 , .battle-message3 ,.battle-message4").text("");
     if(add0 == "sword"){//つるぎの舞の処理
       monsterAtack0 *=2;
       $(".battle-message5").text(messageName0+"のこうげきりょくがぐーんと上がった");
     }//(add0 == "sword")//つるぎの舞の処理

     if(add0 == "recovery"){//じこさいせいの処理
       if(hp0 == maxHp0){//体力が満タンの時
         recoveryPoint0 = 0;
         $(".battle-message5").text(messageName0+"のHPはすでに満タンだ");
       }else if(hp0 > maxHp0/2){//体力が最大hpの半分以上の時、最大hp以上に回復しないように
         recoveryPoint0 = Math.floor(maxHp0-hp0);
         hp0 += recoveryPoint0;
         $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
         $(".monster0").find(".hp-child").text(hp0);
         $(".battle-message5").text(messageName0+"のHPが回復した");
       }else if(hp0 < maxHp0/2){//体力が最大hpの半分以下の時、最大hpの半分を回復する
         recoveryPoint0 = Math.floor(maxHp0/2);
         hp0 += recoveryPoint0;
         $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
         $(".monster0").find(".hp-child").text(hp0);
         $(".battle-message5").text(messageName0+"のHPが回復した");
       }
     }//(add0 == "recovery"){//じこさいせいの処理

    if(add0 == "meditation"){//めいそうの場合
      monsterSpecialAtack0 = Math.floor(monsterSpecialAtack0*1.5);
      specialDefence0 = Math.floor(specialDefence0*1.5);
      $(".battle-message5").text(messageName0+"のとくこう、とくぼうが上がった");
    }

    if(add0 == "speedUp"){//こうそくいどうの場合
      speed0 *=2;
      $(".battle-message5").text(messageName0+"のすばやさがぐーんと上がった");
    }

    if(add0 == "build"){//ビルドアップの場合
      monsterAtack0 = Math.floor(monsterAtack0*1.5);//こうげき1.5倍
      defence0 = Math.floor(defence0*1.5);//ぼうぎょ1.5倍
      $(".battle-message5").text(messageName0+"のこうげきとぼうぎょが上がった");
    }

    if(add0 == "rockcut"){//ロックカットの場合
      speed0 *=2;
      console.log(speed0);
      $(".battle-message5").text(messageName0+"のすばやさがぐーんと上がった");
    }

    if(add0 == "melt"){//とけるの場合
      defence0 *=2;
      $(".battle-message5").text(messageName0+"のぼうぎょがぐーんと上がった");
    }

    if(add0 == "dance"){//りゅうのまいの場合
      monsterAtack0 = Math.floor(monsterAtack0*1.5);//こうげき1.5倍
      speed0 = Math.floor(speed0*1.5);//すばやさ1.5倍
      $(".battle-message5").text(messageName0+"のこうげきとすばやさが上がった");
    }




   }//if(randomHit0<=skilHit0 && randomAdd0<=addHit0  && hp1>0)
 }//addCheck0_4


 function addCheck0_5(){//自分の技で状態異常のみの効果を与える場合の処理
   if(skilKind0 == "atack"){//攻撃技の際は別の関数で
     return;
   } else if(skilKind0 == "pain"){//この関数では攻撃技に付属する状態異常のみ扱う
     $(".battle-message2 , .battle-message3 ,.battle-message4").text("");
       if($(".monster1").find(".status").hasClass("sick")){//すでに相手が状態異常の場合は追加効果を与えないように
         $(".battle-message5").text("相手の"+ messageName1+"には効かなかった");
         return
       }else if(randomHit0<=skilHit0 && randomAdd0<=addHit0  && hp1>0){
         if(add0 == "spark"){//麻痺の処理
           $(".monster1").find(".status").addClass("sick spark");
           $(".monster1").find(".status").text("まひ");
           $(".battle-message5").text("相手の"+ messageName1+"は麻痺して技が出にくくなった");
           speed1 = speed1/2;
         }

         if(add0 == "fire"){//火傷の処理
           $(".monster1").find(".status").addClass("sick fire");
           $(".monster1").find(".status").text("やけど");
           monsterAtack1 = monsterAtack1/2;
           $(".battle-message5").text("相手の"+messageName1+"はやけどを負った");
         }
         if(add0 == "stop"){//怯んだ場合の処理
           $(".monster1").find(".status").addClass("sick stop");
           $(".battle-message5").text("相手の"+messageName1+"はひるんだ");
         }

         if(add0 == "freeze"){//こおりの処理
           $(".monster1").find(".status").addClass("sick freeze");
           $(".monster1").find(".status").text("こおり");
           $(".battle-message5").text("相手の"+messageName1+"は凍ってしまった");
         }

         if(add0 == "sleep"){//ねむりの処理
           $(".monster1").find(".status").addClass("sick sleep");
           $(".monster1").find(".status").text("ねむり");
           $(".battle-message5").text("相手の"+messageName1+"はねむってしまった");
           sleepCount1 = randomSleep1;//何ターン眠るかここで決まる
           console.log(sleepCount1);
         }

         if(add0 == "confu"){//混乱の処理
           $(".monster1").find(".status").addClass("sick confu");
           $(".monster1").find(".status").text("こんらん");
           $(".battle-message5").text("相手の"+messageName1+"はこんらんした");
         }
       }
     }//else if(skilKind0 == "pain")

   }//addCheck0_5



 function addCheck1_0(){//相手の技の追加効果が発生した場合の処理 わざを押した瞬間に決まる場合
   if(randomHit1<=skilHit1 && randomAdd1<=addHit1){
     if(add1 == "speed"){//先制技の処理
      speed1 = speed1 * 10;
      $(".monster1").find(".status").addClass("speed-up");
     }
     if(add1 == "charge"){//1ターンためる技
      $(".monster1").find(".status").addClass("charge");
      $(".battle-message5").text("相手の"+messageName1+"は力をためている");
     }
     if(add1 == "critical"){//急所に当たりやすい技 急所率を3倍に
       critical1 = critical1/3;
     }
   }
 }//addCheck1_0

 function addCheck1_1(){//相手の技の追加効果が発生した場合の処理 わざと同時に
   if(add1 == "kill"){//いちげきひっさつの処理
     hp0 = 0;
     $(".battle-message6").text("いちげきひっさつ!!");
     $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
     $(".monster0").find(".hp-child").text(hp0);
     effect0();
   }
 }//addCheck1_1


 function addCheck1_2(){//相手の技の攻撃技で追加効果が発生した場合の処理 わざの少し後に発生する場青
   if(skilKind1 == "help" || skilKind1 == "pain"){//状態異常技か補助技の際は別の関数で
     return;
   } else if(skilKind1 == "atack"){//この関数では攻撃技に付属する状態異常のみ扱う

     if($(".monster0").find(".status").hasClass("sick")){//すでに自分が状態異常の場合は追加効果を与えないように
       return
     } else if(randomHit1<=skilHit1 && randomAdd1<=addHit1 && hp0>0){
       if(add1 == "spark"){//麻痺の処理
         $(".monster0").find(".status").addClass("sick spark");
         $(".monster0").find(".status").text("まひ");
         $(".battle-message5").text(messageName0+"は麻痺して技が出にくくなった");
         speed0 = speed0/2;
       }

       if(add1 == "fire"){//火傷の処理
         $(".monster0").find(".status").addClass("sick fire");
         $(".monster0").find(".status").text("やけど");
         monsterAtack0 = monsterAtack0/2;
         $(".battle-message5").text(messageName0+"はやけどを負った");

       }
       if(add1 == "stop"){//怯んだ場合の処理
         $(".monster0").find(".status").addClass("sick stop");
         $(".battle-message5").text(messageName0+"はひるんだ");
       }

       if(add1 == "freeze"){//こおりの処理
         $(".monster0").find(".status").addClass("sick freeze");
         $(".monster0").find(".status").text("こおり");
         $(".battle-message5").text(messageName0+"は凍ってしまった");
       }

       if(add1 == "confu"){//混乱の処理
         $(".monster0").find(".status").addClass("sick confu");
         $(".monster0").find(".status").text("こんらん");
         $(".battle-message5").text(messageName0+"はこんらんした");
       }

     }
   }//else if(skilKind1 == "atack")

 }//addCheck1_2

 function addCheck1_3(){
   if(randomHit1<=skilHit1 && randomAdd1<=addHit1 && hp0>0){
     if(add1 == "nomove"){//次のターン攻撃の反動で動けない処理
       $(".monster1").find(".status").addClass("sick nomove");
     }

     if(add1 == "return"){//こうげきの反動を受ける処理
       let returnPoint1 = Math.floor(atack1/2);
       hp1 -= returnPoint1;
       $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
       $(".monster1").find(".hp-child").text(hp1);
       returnEffect1();
       $(".battle-message5").text("相手の"+messageName1+"はこうげきの反動を受けた");
     }
   }
 }//addCheck1_3

 function addCheck1_4(){//自分が補助技を使った場合の処理
   if(randomHit1<=skilHit1 && randomAdd1<=addHit1  && hp0>0){
     $(".battle-message2 , .battle-message3 ,.battle-message4").text("");
     if(add1 == "sword"){//つるぎの舞の処理
       monsterAtack1 *=2;
       $(".battle-message5").text("相手の"+messageName1+"のこうげきりょくがぐーんと上がった");
     }//(add0 == "sword")//つるぎの舞の処理

     if(add1 == "recovery"){//じこさいせいの処理
       if(hp1 == maxHp1){//体力が満タンの時
         recoveryPoint1 = 0;
         $(".battle-message5").text("相手の"+messageName1+"のHPはすでに満タンだ");
       }else if(hp1 > maxHp1/2){//体力が最大hpの半分以上の時、最大hp以上に回復しないように
         recoveryPoint1 = Math.floor(maxHp1-hp1);
         hp1 += recoveryPoint1;
         $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
         $(".monster1").find(".hp-child").text(hp1);
         $(".battle-message5").text("相手の"+messageName1+"のHPが回復した");
       }else if(hp1 < maxHp1/2){//体力が最大hpの半分以下の時、最大hpの半分を回復する
         recoveryPoint1 = Math.floor(maxHp1/2);
         hp1 += recoveryPoint1;
         $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
         $(".monster1").find(".hp-child").text(hp1);
         $(".battle-message5").text("相手の"+messageName1+"のHPが回復した");
       }
     }//(add1 == "recovery"){//じこさいせいの処理

    if(add1 == "meditation"){//めいそうの場合
      monsterSpecialAtack1 = Math.floor(monsterSpecialAtack1*1.5);
      specialDefence1 = Math.floor(specialDefence1*1.5);
      $(".battle-message5").text("相手の"+messageName1+"のとくこう、とくぼうが上がった");
    }

    if(add1 == "speedUp"){//こうそくいどうの場合
      speed1 *=2;
      $(".battle-message5").text("相手の"+messageName1+"のすばやさがぐーんと上がった");
    }

    if(add1 == "build"){//ビルドアップの場合
      monsterAtack1 = Math.floor(monsterAtack1*1.5);//こうげき1.5倍
      defence1 = Math.floor(defence1*1.5);//ぼうぎょ1.5倍
      $(".battle-message5").text("相手の"+messageName1+"のこうげきとぼうぎょが上がった");
    }

    if(add1 == "rockcut"){//ロックカットの場合
      speed1 *=2;
      $(".battle-message5").text("相手の"+messageName1+"のすばやさがぐーんと上がった");
    }

    if(add1 == "melt"){//とけるの場合
      defence1 *=2;
      $(".battle-message5").text("相手の"+messageName1+"のぼうぎょがぐーんと上がった");
    }

    if(add1 == "dance"){//りゅうのまいの場合
      monsterAtack1 = Math.floor(monsterAtack1*1.5);//こうげき1.5倍
      speed1 = Math.floor(speed1*1.5);//すばやさ1.5倍
      $(".battle-message5").text("相手の"+messageName1+"のこうげきとすばやさが上がった");
    }

  }//if(randomHit1<=skilHit1 && randomAdd1<=addHit1  && hp0>0)
 }//addCheck1_4

 function addCheck1_5(){//相手の技で状態異常のみの効果を与える場合の処理
   if(skilKind1 == "atack"){//攻撃技の際は別の関数で
     return;
   } else if(skilKind1 == "pain"){//この関数では状態異常のみの効果を扱う
     $(".battle-message2 , .battle-message3 ,.battle-message4").text("");
     if($(".monster0").find(".status").hasClass("sick")){//すでに自分が状態異常の場合は追加効果を与えないように
       $(".battle-message5").text(messageName0+"には効かなかった");
       return
     } else if(randomHit1<=skilHit1 && randomAdd1<=addHit1 && hp0>0){
       if(add1 == "spark"){//麻痺の処理
         $(".monster0").find(".status").addClass("sick spark");
         $(".monster0").find(".status").text("まひ");
         $(".battle-message5").text(messageName0+"は麻痺して技が出にくくなった");
         speed0 = speed0/2;
       }

       if(add1 == "fire"){//火傷の処理
         $(".monster0").find(".status").addClass("sick fire");
         $(".monster0").find(".status").text("やけど");
         monsterAtack0 = monsterAtack0/2;
         $(".battle-message5").text(messageName0+"はやけどを負った");

       }
       if(add1 == "stop"){//怯んだ場合の処理
         $(".monster0").find(".status").addClass("sick stop");
         $(".battle-message5").text(messageName0+"はひるんだ");
       }

       if(add1 == "freeze"){//こおりの処理
         $(".monster0").find(".status").addClass("sick freeze");
         $(".monster0").find(".status").text("こおり");
         $(".battle-message5").text(messageName0+"は凍ってしまった");
       }

       if(add1 == "sleep"){//こおりの処理
         $(".monster0").find(".status").addClass("sick sleep");
         $(".monster0").find(".status").text("ねむり");
         $(".battle-message5").text(messageName0+"はねむってしまった");
         sleepCount0 = randomSleep0;//何ターン眠るかここで決まる
       }


        if(add1 == "confu"){//混乱の処理
          $(".monster0").find(".status").addClass("sick confu");
          $(".monster0").find(".status").text("こんらん");
          $(".battle-message5").text(messageName0+"はこんらんした");
        }

     }
   }//else if(skilKind1 == "pain")

 }//addCheck1_5

 function statusCheck0(){//自分のポケモンが状態異常をもっている場合にその効果が出るかの判定、出る場合はoutクラスをstatusにつける
   if($(".monster0").find(".status").hasClass('sick')){
     if($(".monster0").find(".status").hasClass("spark") && randomStatus0 <=40){
       $(".monster0").find(".status").addClass("out");
     }
     if($(".monster0").find(".status").hasClass("confu") && randomConfu0 <=40){
       $(".monster0").find(".status").addClass("out");
     }
     if($(".monster0").find(".status").hasClass("freeze")){
       $(".monster0").find(".status").addClass("out");
     }
     if($(".monster0").find(".status").hasClass("charge")){
       $(".monster0").find(".status").addClass("out");
     }
     if($(".monster0").find(".status").hasClass("sleep")){
       $(".monster0").find(".status").addClass("out");
     }
     if($(".monster0").find(".status").hasClass("fire")){
       $(".monster0").find(".status").addClass("returnDamage");
     }
     if($(".monster0").find(".status").hasClass("poison")){
       $(".monster0").find(".status").addClass("returnDamage");
     }
     if($(".monster0").find(".status").hasClass("nomove")){
       $(".monster0").find(".status").addClass("out");
     }
   }//if($(".monster0").find(".status").hasClass('.sick')
 }//statusCheck0()

 function statusCheck1(){//相手のポケモンが状態異常をもっている場合にその効果が出るかの判定、出る場合はoutクラスをstatusにつける
   if($(".monster1").find(".status").hasClass('sick')){
     if($(".monster1").find(".status").hasClass("spark") && randomStatus1 <=40){
       $(".monster1").find(".status").addClass("out");
     }
     if($(".monster1").find(".status").hasClass("confu") && randomConfu1 <=40){
       $(".monster1").find(".status").addClass("out");
     }
     if($(".monster1").find(".status").hasClass("freeze")){
       $(".monster1").find(".status").addClass("out");
     }
     if($(".monster1").find(".status").hasClass("charge")){
       $(".monster1").find(".status").addClass("out");
     }
     if($(".monster1").find(".status").hasClass("sleep")){
       $(".monster1").find(".status").addClass("out");
     }
     if($(".monster1").find(".status").hasClass("fire")){
       $(".monster1").find(".status").addClass("returnDamage");
     }
     if($(".monster1").find(".status").hasClass("poison")){
       $(".monster1").find(".status").addClass("returnDamage");
     }
     if($(".monster1").find(".status").hasClass("nomove")){
       $(".monster1").find(".status").addClass("out");
     }
   }//if($(".monster1").find(".status").hasClass('.sick')
 }//statusCheck1()

 function statusEffect0_0(){//自分の状態異常の効果、技が出せない場合
   if($(".monster0").find(".status").hasClass("spark")){
     $(".battle-message7").text(messageName0+"はからだが痺れて動けない");
   }
   if($(".monster0").find(".status").hasClass("sleep")){
     $(".battle-message7").text(messageName0+"は眠っている");
   }
   if($(".monster0").find(".status").hasClass("freeze")){
     $(".battle-message7").text(messageName0+"は凍ってしまって動けない");
   }
   if($(".monster0").find(".status").hasClass("confu")){
     $(".battle-message7").text(messageName0+"はこんらんして自分をこうげきした");
     hp0 -= confuDamage0;
     $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
     $(".monster0").find(".hp-child").text(hp0);
     returnEffect0();
   }
   if($(".monster0").find(".status").hasClass("nomove")){
     $(".monster0").find(".status").addClass("out");
     $(".battle-message7").text("こうげきの反動で"+messageName0+"は動けない");
   }
 }//statusEffect0()

 function statusEffect0_1(){//自分の状態異常の効果、技の後に効果が出る場合
   if($(".monster0").find(".status").hasClass("fire")){
     $(".battle-message7").text(messageName0+"はやけどのダメージを受けた");
     hp0 -= statusDamage0;
     $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
     $(".monster0").find(".hp-child").text(hp0);
     effect0();
   }
   if($(".monster0").find(".status").hasClass("poison")){
     $(".battle-message7").text(messageName0+"は毒のダメージを受けた");
     hp0 -= statusDamage0;
     $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
     $(".monster0").find(".hp-child").text(hp0);
     effect0();
   }
 }//statusEffect0_1()

 function statusEffect1_0(){//相手の状態異常の効果、技が出せない場合
   if($(".monster1").find(".status").hasClass("spark")){
     $(".battle-message7").text('相手の'+messageName1+"はからだが痺れて動けない");
   }
   if($(".monster1").find(".status").hasClass("sleep")){
     $(".battle-message7").text('相手の'+messageName1+"は眠っている");
   }
   if($(".monster1").find(".status").hasClass("freeze")){
     $(".battle-message7").text('相手の'+messageName1+"は凍ってしまって動けない");
   }
   if($(".monster1").find(".status").hasClass("confu")){
     $(".battle-message7").text('相手の'+messageName1+"はこんらんして自分をこうげきした");
     hp1 -= confuDamage1;
     $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
     $(".monster1").find(".hp-child").text(hp1);
     returnEffect1();
   }
   if($(".monster1").find(".status").hasClass("nomove")){
     $(".monster1").find(".status").addClass("out");
     $(".battle-message7").text("こうげきの反動で"+messageName1+"は動けない");
   }
 }//statusEffect1_0()

 function statusEffect1_1(){//相手の状態異常の効果、技の後に効果が出る場合
   if($(".monster1").find(".status").hasClass("fire")){
     $(".battle-message7").text('相手の'+messageName1+"はやけどのダメージを受けた");
     hp1 -= statusDamage1;
     $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
     $(".monster1").find(".hp-child").text(hp1);
     effect1();
   }
   if($(".monster1").find(".status").hasClass("poison")){
     $(".battle-message7").text('相手の'+messageName1+"は毒のダメージを受けた");
     hp1 -= statusDamage1;
     $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
     $(".monster1").find(".hp-child").text(hp1);
     effect1();
   }
 }//statusEffect1_1()

 function resetSpark(){//麻痺の効果が毎ターン継続しないようの処理
   if($('.monster0').find(".status").hasClass("spark")){
     $('.monster0').find(".status").removeClass("out");
   }
   if($('.monster1').find(".status").hasClass("spark")){
     $('.monster1').find(".status").removeClass("out");
   }
 }//resetSpark


  function resetNomove(){//攻撃の反動で動けないが毎ターンでない様に
    if($('.monster0').find(".status").hasClass("nomove out")){
      $('.monster0').find(".status").removeClass("out nomove sick");
    }
    if($('.monster1').find(".status").hasClass("nomove out")){
      $('.monster1').find(".status").removeClass("out nomove sick");
    }
  }//resetNomove

  function battleMessageReset(){//テキスト欄を初期状態に
    $(".battle-message2").text("");
    $(".battle-message3").text("");
    $(".battle-message4").text("");
    $(".battle-message5").text("");
    $(".battle-message6").text("");
    $(".battle-message7").text("");
  }

  function resetSpeed(){//先制技で上がったすばやさを元に戻す
    if($(".monster0").find(".status").hasClass("speed-up")){
      speed0 /=10;
      $(".monster0").find(".status").removeClass("speed-up");
    }
    if($(".monster1").find(".status").hasClass("speed-up")){
      speed1 /=10;
      $(".monster1").find(".status").removeClass("speed-up");
    }
  }

  function resetConfu(){//こんらんの効果が毎ターン継続しないようの処理
    if($('.monster0').find(".status").hasClass("confu")){
      $('.monster0').find(".status").removeClass("out");
    }
    if($('.monster1').find(".status").hasClass("confu")){
      $('.monster1').find(".status").removeClass("out");
    }
  }//resetSpark

  function resetSleep(){//眠りから目が覚めた場合の処理


    if($(".monster0").find(".status").hasClass("sleep")){
      sleepCount0 --;
      if(sleepCount0 == 0){
        $(".monster0").find(".status").removeClass("sleep sick out");
        $(".monster0").find(".status").text("");
        $(".battle-message7").text(messageName0+"は目を覚ました");
        $(".battle-message7").show();
      }
    }

    if($(".monster1").find(".status").hasClass("sleep")){
    sleepCount1 --;
    if(sleepCount1 == 0){
      $(".monster1").find(".status").removeClass("sleep sick out");
      $(".monster1").find(".status").text("");
      $(".battle-message7").text("相手の"+messageName1+"は目を覚ました");
      $(".battle-message7").show();
    }
   }
 }//resetSleep()


  function resetFreeze(){//氷が解けた場合の処理

    if($(".monster0").find(".status").hasClass("freeze")){
      if(randomFreeze0 <=40){//毎ターン40%の確率で氷が溶ける
        $(".monster0").find(".status").removeClass("freeze sick out");
        $(".monster0").find(".status").text("");
        $(".battle-message7").text(messageName0+"のこおりがとけた");
        $(".battle-message7").show();
      }//if(randomFreeze0 <=40)
    }//if($(".monster0").find(".status").hasClass("freeze sick out"))

    if($(".monster1").find(".status").hasClass("freeze")){
      if(randomFreeze1 <=40){//毎ターン40%の確率で氷が溶ける
        $(".monster1").find(".status").removeClass("freeze sick out");
        $(".monster1").find(".status").text("");
        $(".battle-message7").text("相手の"+messageName1+"のこおりがとけた");
        $(".battle-message7").show();
      }//if(randomFreeze1 <=40)
    }//if($(".monster1").find(".status").hasClass("freeze sick out"))

  }//resetFreeze(){氷が解けた場合の処理


  function resetConfuHeal(){//こんらんが解けた場合の処理

    if($(".monster0").find(".status").hasClass("confu")){
      if(randomConfuReset0 <=33){//毎ターン33%の確率でこんらんが溶ける
        $(".monster0").find(".status").removeClass("confu sick out");
        $(".monster0").find(".status").text("");
        $(".battle-message7").text(messageName0+"のこんらんがとけた");
        $(".battle-message7").show();
      }//if(randomConfuReset0 <=33)
    }//if($(".monster0").find(".status").hasClass("confu")

    if($(".monster1").find(".status").hasClass("confu")){
      if(randomConfuReset1 <=33){//毎ターン33%の確率でこんらんが溶ける
        $(".monster1").find(".status").removeClass("confu sick out");
        $(".monster1").find(".status").text("");
        $(".battle-message7").text("相手の"+messageName1+"のこんらんがとけた");
        $(".battle-message7").show();
      }//if(randomConfuReset1 <=33)
    }//if($(".monster1").find(".status").hasClass("confu"))

  }//resetConfuHeal()


  function change_mypokemon_enemy_atack(){//自分がポケモンを交換した後に敵から攻撃される処理
    setTimeout(function(){//交換処理が終わり相手のこうげきにうつる
      $(".change-message").text("");
      randomStart();//各乱数の値を変える
      messageSkil1 = $(".monster1").find("li").eq(random4).find(".skil-name").text();//相手の技名の取得
      skilAtack1 = Number($(".monster1").find("li").eq(random4).find(".skil-atack").text());//相手の技の威力の取得
      skilType1 = $(".monster1").find("li").eq(random4).find(".skil-type").text();//相手の技のタイプの取得
      skilHit1 = Number($(".monster1").find("li").eq(random4).find(".skil-hit").text());//相手の技の命中率
      skilSection1 = $(".monster1").find("li").eq(random4).find(".skil-section").text();//相手の技のタイプが物理か特殊かを取得
      skilKind1 = $(".monster1").find("li").eq(random4).find(".skil-section-atack").text();//相手の技の技が攻撃か状態異常技か補助技かを取得
      add1 = $(".monster1").find("li").eq(random4).find(".skil-add").text();//相手の技の追加効果の取得
      addHit1 = Number($(".monster1").find("li").eq(random4).find(".skil-add-hit").text());//相手の技の追加効果発生率を取得
      skilSelectCheck();//選んだ技が物理か特殊化によってダメージ計算の式に入れる値を帰る
      statusCheck1();//相手が状態異常を持っている場合にそれが発動するかを乱数により決める

      if(skilKind1 == "help" || skilKind1 == "pain"){//状態異常技か補助技を選んだ際に急所に当たらないように
        critical1 = 100;
      }

      if(critical1<=10 && randomHit1<=skilHit1){//10%の確率で急所にあたりダメージ2倍率
        atack1 *=2;
      }
      if(monsterType1 == skilType1 || monsterType1_2 == skilType1){//自分と同じ属性の技を選んだらダメージ1.5倍
        atack1 = Math.floor(atack1 * 1.5);
      }

    },3300);//交換処理が終わり相手のこうげき準備にうつる


    setTimeout(function(){//相手の攻撃の実行
      if($('.monster1').find(".status").hasClass("out")){//相手が状態異常により攻撃できないとき
        statusEffect1_0();//状態異常により相手がこうげきできない
        $(".battle-message7").show();

        setTimeout(function(){
          $(".battle-message7").hide();
          $(".battle-message7").text("");
        },800);

        setTimeout(function(){
          if(hp1<=0){
            hp1 = 0;
          $(".monster1").find(".hp-child").text(hp1);
          $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
          $(".monster1 .pic img").hide();
          enemy_death();//相手ポケモンを倒した際の処理
          } else if(hp0>0 && hp1>0){
            resetSleep();
            resetFreeze();
            resetConfuHeal()
          }
        },1800);

        setTimeout(function(){
          if(hp0>0 && hp1>0){
          battleMessageReset();
          resetNomove();
          resetSpark();
          resetSpeed();
          $(".monster0").removeClass("turn-rock");
          $(".battle-message0").text("コマンドを選んでください");
         }
       },2800);

      }//if($('.monster1').find(".status").hasClass("out")){相手が状態異常により攻撃できないとき

        else{//相手が状態異常なく攻撃ができる
          battleMessageReset();
          $(".battle-message0").text("相手の"+ messageName1 + "の" + messageSkil1 + "!");
          typeCheck1();

          setTimeout(function(){//バトルステップ1
            if(skilType1 =="電" && monsterType0 == '地' || skilType1 =="電" && monsterType0_2 == '地' || skilType1 =="地" && monsterType0 == '飛' || skilType1 =="地" && monsterType0_2 == '飛'
              || skilType1 =="普" && monsterType0 == '霊' || skilType1 =="普" && monsterType0_2 == '霊' || skilType1 =="闘" && monsterType0 == '霊' || skilType1 =="闘" && monsterType0_2 == '霊'
              || skilType1 =="霊" && monsterType0 == '普' || skilType1 =="霊" && monsterType0_2 == '普'
            ){//効果がない場合
              setTimeout(function(){
                $(".battle-message0").text("");
                $('.battle-message4').text("こうかはないみたいだ");
                $(".battle-message4").show();
              },800);//効果がない場合
            }else if(hp1>0){//効果がある場合
              if(randomHit1>skilHit1){//攻撃が外れた場合
                $(".battle-message0").text('');
                atack1 = 0;
                setTimeout(function(){
                  $(".battle-message0").text("しかし"+messageName1+"の"+messageSkil1+"は外れた");
                },800);//攻撃が外れた場合

              } else if(randomHit1<=skilHit1 && add1 == "kill"){//いちげきひっさつが当たった場合
                addCheck1_1();
                setTimeout(function(){
                  $(".battle-message0").text('');
                },800);
                setTimeout(function(){
                  $(".battle-message6").show();
                },1600);//いちげきひっさつが当たった場合

              } else if(critical1<=10 && randomHit1<=skilHit1){//急所に当たった場合
                $(".battle-message0").text("");
                setTimeout(function(){
                $(".battle-message0").text("急所に当たった");
                },800);

                setTimeout(function(){
                  $(".battle-message0").text('');
                  $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                  hp0 -= atack1;
                  $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                  $(".monster0").find(".hp-child").text(hp0);
                  effect0();
                  addCheck1_2();
                  addCheck1_3();
                },1600);
              }//急所に当たった場合

              else{//普通に当たった場合
                $(".battle-message0").text('');
                setTimeout(function(){
                  hp0 -= atack1;
                  $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                  $(".monster0").find(".hp-child").text(hp0);
                  effect0();
                  $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                  addCheck1_2();
                  addCheck1_3();
                  addCheck1_4();
                  addCheck1_5();
                },800);
              }//普通に当たった場合
            }//効果がある場合
          },800);//バトルステップ1

          setTimeout(function(){
            $(".battle-message0 , .battle-message6").text('');
            $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
          },3200);


           setTimeout(function(){
             $(".battle-message5").show();
           },3700);


           setTimeout(function(){
             $(".battle-message5").hide();
             $(".battle-message5").text('');
           },4500);

           setTimeout(function(){
             if(hp0<=0){
               hp0 = 0;
               $(".monster0").find(".hp-child").text(hp0);
             $(".battle-message0").text(messageName0 + "はたおれた");
             $(".monster0 .pic img").hide();
           } else{
             resetSleep();
             resetFreeze();
             resetConfuHeal();
           }
         },5500);

         setTimeout(function(){
           if(hp0>0 && hp1>0){
           $(".monster0").removeClass("turn-rock");
           resetNomove();
           battleMessageReset();
           resetSpark();
           resetConfu();
           resetSpeed();
           $(".battle-message0").text("コマンドを選んでください");
          }
        },6500);
        }//else{//相手が状態異常なく攻撃ができる

    },4300);//相手の攻撃の実行

  }//change_mypokemon_enemy_atack()



  function enemy_death(){//相手を倒した際の処理
    setTimeout(function(){
      $(".battle-message0").text('');
    },1000)

    setTimeout(function(){
      enemy_death_count ++;
      if(enemy_death_count == 3){//3匹全滅させた場合
        alert("あなたの勝ちです");
        return;
      }//if(enemy_death_count == 3)3匹全滅させた場合

      else{//まだ相手にポケモンが残っている場合
        if(enemy_death_count == 1){//一匹目を倒した後の処理
          enemy1_status_show();
          enemy_skil1_0_status_show();
          enemy_skil1_1_status_show();
          enemy_skil1_2_status_show();
          enemy_skil1_3_status_show();
          getStatus1();
          $(".monster1").find(".status").removeClass().addClass("status");
          $(".monster1").find(".status").text("");
          $(".monster1 .pic img").fadeIn();
          change_enemy_name = enemy1_name;
          $(".change-message").text("相手は"+change_enemy_name+"をくり出してきた!");
        }//(enemy_death_count == 1){//一匹目を倒した後の処理
          else if(enemy_death_count == 2){//二匹目を倒した後の処理
            enemy2_status_show();
            enemy_skil2_0_status_show();
            enemy_skil2_1_status_show();
            enemy_skil2_2_status_show();
            enemy_skil2_3_status_show();
            getStatus1();
            $(".monster1").find(".status").removeClass().addClass("status");
            $(".monster1").find(".status").text("");
            $(".monster1 .pic img").fadeIn();
            change_enemy_name = enemy2_name;
            $(".change-message").text("相手は"+change_enemy_name+"をくり出してきた!");
          }//else if(enemy_death_count == 2){//二匹目を倒した後の処理

            setTimeout(function(){
              $(".change-message").text('');
            },3000);

            setTimeout(function(){
              $(".monster0").removeClass("turn-rock");
              resetNomove();
              battleMessageReset();
              resetSpark();
              resetConfu();
              resetSpeed();
              $(".battle-message0").text("コマンドを選んでください");
            },4000);

      }//else{//まだ相手にポケモンが残っている場合

    },2000);
  }//enemy_death(){//相手を倒した際の処理








  //以下コマンドクリックによるイベント//


 //以下たたかうとポケモンのコマンドクリックによるウインドウの変化
  $(".battle-command").click(function(){
    if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
      return;
    }else{
      $(".monster0-skils").show();
      $(".mymonter-list").hide();
    }
  });

  $(".change-command").click(function(){
    if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
      return;
    }else{
    $(".monster0-skils").hide();
    $(".mymonter-list").show();
  }
  });
 //以上たたかうとポケモンのコマンドクリックによるウインドウの変化


 $('.mymonster0').find(".change-button").click(function(){//手持ち一匹目のポケモンに変える場合の処理
   if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
     return;
   }else if(mypokemon0_now_hp <= 0){
     alert("このポケモンは力つきている");
     return;
   }else if(now_my_list == 0){
      alert("このポケモンは今戦っている");
      return;
   }else{//ポケモン交換をとその後の相手からの攻撃を受ける処理
     $(".battle-message0").text("");
     $(".monster0").addClass("turn-rock");
     now_my_hp = Number($(".monster0").find(".hp-child").text());
     now_my_name = $(".monster0").find(".name").text();
     now_my_status = $(".monster0").find(".status").text();//バトルフィールドの状態異常のテキストを取得
     now_my_status_class = $(".monster0").find(".status").attr("class");//バトルフィールドの状態異常のクラス名を取得

     if($(".monster0").find(".list-number").text() == 1){
       mypokemon1_now_hp = now_my_hp;
       $("#mymonster-status1").removeClass();
       $("#mymonster-status1").addClass("hide");
       $("#mymonster-status1").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status1").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon1_status = now_my_status;
       $(".mymonster-now-hp1").text(now_my_hp);
     } else if($(".monster0").find(".list-number").text() == 2){
       mypokemon2_now_hp = now_my_hp;
       $("#mymonster-status2").removeClass();
       $("#mymonster-status2").addClass("hide");
       $("#mymonster-status2").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status2").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon2_status = now_my_status;
       $(".mymonster-now-hp2").text(now_my_hp);
     }

     setTimeout(function(){
       $(".change-message").text("もどれ!"+now_my_name);
       $(".monster0").find(".pic").find("img").fadeOut();
       $(".monster0").find(".status").text("");//取得したあとで状態異常のテキストをなくす
       $(".monster0").find(".status").removeClass().addClass("status");;//取得したあとで状態異常のテキストをクラスをなくす
       $(".monster0").find(".skil-radio").removeClass().addClass("skil-radio");;//
     },300);

     setTimeout(function(){
       $(".change-message").text("");
     },1300);

     setTimeout(function(){
       $(".change-message").text("いけ!"+mypokemon0_name);
       my_max_hp = mypokemon0_hp;
       $(".monster0").find(".type-color1").removeClass().addClass("type-color1");
       $(".monster0").find(".type-color2").removeClass().addClass("type-color2");
       mymonster0_status_show();
       mymonster_skil0_0_status_show();
       mymonster_skil0_1_status_show();
       mymonster_skil0_2_status_show();
       mymonster_skil0_3_status_show();
       getStatus0();
       $(".monster0").find(".pic").find("img").fadeIn();
       now_my_list = 0;
     },2300);

      change_mypokemon_enemy_atack();

  }//else{ポケモン交換をとその後の相手からの攻撃を受ける処理
 });//$('.mymonster0').find(".change-button").click(function()




 $('.mymonster1').find(".change-button").click(function(){//手持ち二匹目のポケモンに変える場合の処理
   if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
     return;
   }else if(mypokemon1_now_hp <= 0){
     alert("このポケモンは力つきている");
     return;
   }else if(now_my_list == 1){
      alert("このポケモンは今戦っている");
      return;
   }else{//else{ポケモン交換をとその後の相手からの攻撃を受ける処理
     $(".battle-message0").text("");
     $(".monster0").addClass("turn-rock");
     now_my_hp = Number($(".monster0").find(".hp-child").text());
     now_my_name = $(".monster0").find(".name").text();
     now_my_status = $(".monster0").find(".status").text();//バトルフィールドの状態異常のテキストを取得
     now_my_status_class = $(".monster0").find(".status").attr("class");//バトルフィールドの状態異常のクラス名を取得

     if($(".monster0").find(".list-number").text() == 0){
       mypokemon0_now_hp = now_my_hp;
       $("#mymonster-status0").removeClass();
       $("#mymonster-status0").addClass("hide");
       $("#mymonster-status0").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status0").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon0_status = now_my_status;
       $(".mymonster-now-hp0").text(now_my_hp);
     } else if($(".monster0").find(".list-number").text() == 2){
       mypokemon2_now_hp = now_my_hp;
       $("#mymonster-status2").removeClass();
       $("#mymonster-status2").addClass("hide");
       $("#mymonster-status2").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status2").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon2_status = now_my_status;
       $(".mymonster-now-hp2").text(now_my_hp);
     }

     setTimeout(function(){
       $(".change-message").text("もどれ!"+now_my_name);
       $(".monster0").find(".pic").find("img").fadeOut();
       $(".monster0").find(".pic").find("img").fadeOut();
       $(".monster0").find(".status").text("");//取得したあとで状態異常のテキストをなくす
       $(".monster0").find(".status").removeClass().addClass("status");;//取得したあとで状態異常のテキストをクラスをなくす
       $(".monster0").find(".skil-radio").removeClass().addClass("skil-radio");;//
     },300);

     setTimeout(function(){
       $(".change-message").text("");
     },1300);

     setTimeout(function(){
     $(".change-message").text("いけ!"+mypokemon1_name);
     my_max_hp = mypokemon1_hp;
     $(".monster0").find(".type-color1").removeClass().addClass("type-color1");
     $(".monster0").find(".type-color2").removeClass().addClass("type-color2");
     mymonster1_status_show();
     mymonster_skil1_0_status_show();
     mymonster_skil1_1_status_show();
     mymonster_skil1_2_status_show();
     mymonster_skil1_3_status_show();
     getStatus0();
     $(".monster0").find(".pic").find("img").fadeIn();
     now_my_list = 1;
    },2300);

    change_mypokemon_enemy_atack();

  }//else{ポケモン交換をとその後の相手からの攻撃を受ける処理
});//$('.mymonster1').find(".change-button").click(function()

 $('.mymonster2').find(".change-button").click(function(){//手持ち三匹目のポケモンに変える場合の処理
   if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
     return;
   }else if(mypokemon2_now_hp <= 0){
     alert("このポケモンは力つきている");
     return;
   }else if(now_my_list == 2){
      alert("このポケモンは今戦っている");
      return;
   }else{//ポケモン交換をとその後の相手からの攻撃を受ける処理
     $(".battle-message0").text("");
     $(".monster0").addClass("turn-rock");
     now_my_hp = Number($(".monster0").find(".hp-child").text());
     now_my_name = $(".monster0").find(".name").text();
     now_my_status = $(".monster0").find(".status").text();//バトルフィールドの状態異常のテキストを取得
     now_my_status_class = $(".monster0").find(".status").attr("class");//バトルフィールドの状態異常のクラス名を取得

     if($(".monster0").find(".list-number").text() == 0){
       mypokemon0_now_hp = now_my_hp;
       $("#mymonster-status0").removeClass();
       $("#mymonster-status0").addClass("hide");
       $("#mymonster-status0").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status0").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon0_status = now_my_status;
       $(".mymonster-now-hp0").text(now_my_hp);
     } else if($(".monster0").find(".list-number").text() == 1){
       mypokemon1_now_hp = now_my_hp;
       $("#mymonster-status1").removeClass();
       $("#mymonster-status1").addClass("hide");
       $("#mymonster-status1").addClass(now_my_status_class);//バトルフィールで保管した状態異常クラスを手持ちに戻っても保管する
       $("#mymonster-status1").text(now_my_status);//バトルフィールで保管した状態異常テキストを手持ちに戻っても保管する
       mypokemon1_status = now_my_status;
       $(".mymonster-now-hp1").text(now_my_hp);
     }

     setTimeout(function(){
       $(".change-message").text("もどれ!"+now_my_name);
       $(".monster0").find(".pic").find("img").fadeOut();
       $(".monster0").find(".status").text("");//取得したあとで状態異常のテキストをなくす
       $(".monster0").find(".status").removeClass().addClass("status");;//取得したあとで状態異常のテキストをクラスをなくす
       $(".monster0").find(".skil-radio").removeClass().addClass("skil-radio");;//
     },300);

     setTimeout(function(){
       $(".change-message").text("");
     },1300);

     setTimeout(function(){
       $(".change-message").text("いけ!"+mypokemon2_name);
       my_max_hp = mypokemon2_hp;
       $(".monster0").find(".type-color1").removeClass().addClass("type-color1");
       $(".monster0").find(".type-color2").removeClass().addClass("type-color2");
       mymonster2_status_show();
       mymonster_skil2_0_status_show();
       mymonster_skil2_1_status_show();
       mymonster_skil2_2_status_show();
       mymonster_skil2_3_status_show();
       getStatus0();
       $(".monster0").find(".pic").find("img").fadeIn();
       now_my_list = 2;
     },2300);

     change_mypokemon_enemy_atack();

   }//else{ポケモン交換をとその後の相手からの攻撃を受ける処理
 });//$('.mymonster2').find(".change-button").click(function()




//以下自分のわざクリックの一連の流れ
$(".monster0").find(".skil-radio").click(function(){

  if($(".monster0").hasClass("turn-rock")){//クリック重複処理を防ぐ
    return;

  }else{//以下きちんとクリック時にturn-rockクラスが外れている場合の処理
    resetSpark();//麻痺のこうかが毎ターン出ないための処理
    resetConfu();
    randomStart();//各乱数の値を変える

    messageSkil0 = $(this).find(".skil-name").text();//選んだ技の名前を取得
    messageSkil1 = $(".monster1").find("li").eq(random4).find(".skil-name").text();//相手の技名の取得
    skilAtack0 = Number($(this).siblings(".skil-atack").text());//選んだ技の威力を取得
    skilAtack1 = Number($(".monster1").find("li").eq(random4).find(".skil-atack").text());//相手の技の威力の取得
    skilType0 = $(this).siblings(".skil-type").text();//選んだ技のタイプの取得
    skilType1 = $(".monster1").find("li").eq(random4).find(".skil-type").text();//相手の技のタイプの取得
    skilHit0 = Number($(this).siblings(".skil-hit").text());//自分の選んだ技の命中率
    skilHit1 = Number($(".monster1").find("li").eq(random4).find(".skil-hit").text());//相手の技の命中率
    skilSection0 = $(this).siblings(".skil-section").text();//選んだ技のタイプが物理か特殊かを取得
    skilSection1 = $(".monster1").find("li").eq(random4).find(".skil-section").text();//相手の技のタイプが物理か特殊かを取得
    skilKind0 = $(this).siblings(".skil-section-atack").text();//選んだ技が攻撃か状態異常技か補助技かを取得
    skilKind1 = $(".monster1").find("li").eq(random4).find(".skil-section-atack").text();//相手の技の技が攻撃か状態異常技か補助技かを取得
    add0 = $(this).siblings(".skil-add").text();//選んだ技の追加効果の取得
    add1 = $(".monster1").find("li").eq(random4).find(".skil-add").text();//相手の技の追加効果の取得
    addHit0 = Number($(this).siblings(".skil-add-hit").text());//選んだ技の追加効果発生率を取得
    addHit1 = Number($(".monster1").find("li").eq(random4).find(".skil-add-hit").text());//相手の技の追加効果発生率を取得
    skilSelectCheck();//選んだ技が物理か特殊化によってダメージ計算の式に入れる値を帰る

    addCheck0_0();//自分が先制技を選んだ場合の処理
    addCheck1_0();//相手が先制技を選んだ場合の処理
    statusCheck0();//自分が状態異常を持っている場合にそれが発動するかを乱数により決める
    statusCheck1();//相手が状態異常を持っている場合にそれが発動するかを乱数により決める


    if(skilKind0 == "help" || skilKind0 == "pain"){//状態異常技か補助技を選んだ際に急所に当たらないように
      critical0 = 100;
    }
    if(skilKind1 == "help" || skilKind1 == "pain"){//状態異常技か補助技を選んだ際に急所に当たらないように
      critical1 = 100;
    }
    if(critical0<=10 && randomHit0<=skilHit0){//10%の確率で急所にあたりダメージ2倍率
      atack0 *=2;
    }
    if(monsterType0 == skilType0 || monsterType0_2 == skilType0){//自分と同じ属性の技を選んだらダメージ1.5倍
      atack0 = Math.floor(atack0 * 1.5);
    }
    if(critical1<=10 && randomHit1<=skilHit1){//10%の確率で急所にあたりダメージ2倍率
      atack1 *=2;
    }
    if(monsterType1 == skilType1 || monsterType1_2 == skilType1){//自分と同じ属性の技を選んだらダメージ1.5倍
      atack1 = Math.floor(atack1 * 1.5);
    }


        $(".monster0").addClass("turn-rock");//turn-rockクラスがついている時はクリック処理を行わない
        $(".battle-message0").text("");
        if(speed0 >= speed1){//自分のモンスターの素早さが高い場合、先に自分のmonster0から処理を行う
          if(hp0>0 && hp1>0 && $('.monster0').find(".status").hasClass("out") && $('.monster1').find(".status").hasClass("out")
        ){//状態異常により自分も相手もこうげきできない場合
            statusEffect0_0();//状態異常により自分がこうげきできない
            $(".battle-message7").show();

            setTimeout(function(){
              $(".battle-message7").hide();
              $(".battle-message7").text("");
            },800);

            setTimeout(function(){
              if(hp0<=0){
                hp0 = 0;
                $(".monster0").find(".hp-child").text(hp0);
              $(".battle-message0").text(messageName0 + "はたおれた");
              $(".monster0 .pic img").hide();
            } else{
              statusEffect1_0();//状態異常により相手がこうげきできない
              $(".battle-message7").show();
              }
            },1600);

            setTimeout(function(){
              $(".battle-message7").hide();
              $(".battle-message7").text("");
            },2400);

            setTimeout(function(){
              if(hp1<=0){
                hp1 = 0;
              $(".monster1").find(".hp-child").text(hp1);
              $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
              $(".monster1 .pic img").hide();
              enemy_death();//相手ポケモンを倒した際の処理
              } else if(hp0>0 && hp1>0){
                resetSleep();
                resetFreeze();
                resetConfuHeal()
              }
            },3400);


            setTimeout(function(){
              if(hp0>0 && hp1>0){
              battleMessageReset();
              resetNomove();
              resetSpark();
              resetSpeed();
              $(".monster0").removeClass("turn-rock");
              $(".battle-message0").text("コマンドを選んでください");
             }
           },4400);

         }//状態異常により自分も相手もこうげきできない場合

         else if(hp0>0 && hp1>0 && $('.monster0').find(".status").hasClass("out") && $('.monster1').find(".status").not(".out")
       ){//状態異常により自分は攻撃できず相手は攻撃できる
           $(".battle-message0").text("");
           statusEffect0_0();//状態異常により自分がこうげきできない
           $(".battle-message7").show();

           setTimeout(function(){
             $(".battle-message7").hide();
             $(".battle-message7").text("");
           },800);

           setTimeout(function(){
             if(hp0<=0){
               hp0 = 0;
               $(".monster0").find(".hp-child").text(hp0);
             $(".battle-message0").text(messageName0 + "はたおれた");
             $(".monster0 .pic img").hide();
           } else if(hp0>0 && hp1>0){
               battleMessageReset();
               $(".battle-message0").text("相手の"+ messageName1 + "の" + messageSkil1 + "!");
                 typeCheck1();
             }
           },1600);

           setTimeout(function(){
               if(skilType1 =="電" && monsterType0 == '地' || skilType1 =="電" && monsterType0_2 == '地' || skilType1 =="地" && monsterType0 == '飛' || skilType1 =="地" && monsterType0_2 == '飛'
                 || skilType1 =="普" && monsterType0 == '霊' || skilType1 =="普" && monsterType0_2 == '霊' || skilType1 =="闘" && monsterType0 == '霊' || skilType1 =="闘" && monsterType0_2 == '霊'
                 || skilType1 =="霊" && monsterType0 == '普' || skilType1 =="霊" && monsterType0_2 == '普'
               ){//効果がない場合
                 setTimeout(function(){
                   $(".battle-message0").text("");
                   $('.battle-message4').text("こうかはないみたいだ");
                   $(".battle-message4").show();
                 },800);//効果がない場合
             } else if(hp1>0){//効果がある場合

               if(randomHit1>skilHit1){//攻撃が外れた場合
                 $(".battle-message0").text('');
                 atack1 = 0;
                 setTimeout(function(){
                   $(".battle-message0").text("しかし"+messageName1+"の"+messageSkil1+"は外れた");
                 },800);//攻撃が外れた場合

               } else if(randomHit1<=skilHit1 && add1 == "kill"){//いちげきひっさつが当たった場合
                 addCheck1_1();
                 setTimeout(function(){
                   $(".battle-message0").text('');
                 },800);
                 setTimeout(function(){
                   $(".battle-message6").show();
                 },1600);//いちげきひっさつが当たった場合

               } else if(critical1<=10 && randomHit1<=skilHit1){//急所に当たった場合
                 $(".battle-message0").text("");
                 setTimeout(function(){
                 $(".battle-message0").text("急所に当たった");
                 },800);

                 setTimeout(function(){
                   $(".battle-message0").text('');
                   $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                   hp0 -= atack1;
                   $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                   $(".monster0").find(".hp-child").text(hp0);
                   effect0();
                   addCheck1_2();
                   addCheck1_3();
                 },1600);
               }//急所に当たった場合

               else{//普通に当たった場合
                 $(".battle-message0").text('');
                 setTimeout(function(){
                   hp0 -= atack1;
                   $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                   $(".monster0").find(".hp-child").text(hp0);
                   effect0();
                   $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                   addCheck1_2();
                   addCheck1_3();
                   addCheck1_4();
                   addCheck1_5();
                 },800);
               }//普通に当たった場合
             }//効果がある場合
           },2400);

           setTimeout(function(){
             $(".battle-message0 , .battle-message6").text('');
             $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
           },4800);

           setTimeout(function(){
             $(".battle-message5").show();
           },5300);

          setTimeout(function(){
            $(".battle-message5").hide();
            $(".battle-message5").text('');
          },6100);

          setTimeout(function(){
            if(hp0<=0){
              hp0 = 0;
              $(".monster0").find(".hp-child").text(hp0);
            $(".battle-message0").text(messageName0 + "はたおれた");
            $(".monster0 .pic img").hide();
          } else{
            resetSleep();
            resetFreeze();
            resetConfuHeal();
          }
          },7100);

          setTimeout(function(){
            if(hp0>0 && hp1>0){
            $(".monster0").removeClass("turn-rock");
            resetNomove();
            battleMessageReset();
            resetSpark();
            resetConfu();
            resetSpeed();
            $(".battle-message0").text("コマンドを選んでください");
           }
         },8100);
       }//状態異常により自分は攻撃できず相手は攻撃できる

       else if(hp0>0 && hp1>0 && $('.monster0').find(".status").not(".out") && $('.monster1').find(".status").hasClass("out")
     ){//自分は攻撃できるが相手は状態異常で攻撃できず

       if(hp0>0 && hp1>0){
       battleMessageReset();
       $(".battle-message0").text(messageName0 + "の" + messageSkil0 + "!");
       typeCheck0();
      }

      setTimeout(function(){
          if(skilType0 =="電" && monsterType1 == '地' || skilType0 =="電" && monsterType1_2 == '地' || skilType0 =="地" && monsterType1 == '飛' || skilType0 =="地" && monsterType1_2 == '飛'
            || skilType0 =="普" && monsterType1 == '霊' || skilType0 =="普" && monsterType1_2 == '霊' || skilType0 =="闘" && monsterType1 == '霊' || skilType0 =="闘" && monsterType1_2 == '霊'
            || skilType0 =="霊" && monsterType1 == '普' || skilType0 =="霊" && monsterType1_2 == '普'
          ){//選んだ技が相手に効果がない場合の処理
            setTimeout(function(){
              $(".battle-message0").text("");
              $('.battle-message4').text("こうかはないみたいだ");
              $(".battle-message4").show();//効果がないみたいだのメッセージ
            },800);

            setTimeout(function(){
              if($('.monster0').find(".status").hasClass("returnDamage")){
                $(".battle-message4").hide();//効果がないみたいだのメッセージ
                $('.battle-message4').text("");
                statusEffect0_1();//状態異常によりダメージを受ける
                $(".battle-message7").show();
              }
            },1600);
            //ここまで選んだ技が相手に効果がない場合の処理

        } else if(hp0>0){//選んだ技が相手に効果がある場合
            if(randomHit0>skilHit0){//攻撃が外れた場合
              $(".battle-message0").text('');
              atack0 = 0;
              setTimeout(function(){
                $(".battle-message0").text("しかし"+messageName0+"の"+messageSkil0+"は外れた");
              },800);
              setTimeout(function(){
                if($('.monster0').find(".status").hasClass("returnDamage")){
                  $(".battle-message0").text('');
                  statusEffect0_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },1600);//ここまで攻撃が外れた場合

            } else if(randomHit0<=skilHit0 && add0 == "kill"){//一撃必殺を当てた場合
              addCheck0_1();
              setTimeout(function(){
                $(".battle-message0").text('');
              },800);
              setTimeout(function(){
                $(".battle-message6").show();
              },1600);
              setTimeout(function(){
                if($('.monster0').find(".status").hasClass("returnDamage")){
                  $(".battle-message6").hide();
                  statusEffect0_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },2400);
              //ここまで一撃必殺を当てた場合
            } else if(critical0<=10 && randomHit0<=skilHit0){//急所に当てた場合
              $(".battle-message0").text("");
              setTimeout(function(){
              $(".battle-message0").text("急所に当たった");
              },800);

              setTimeout(function(){
                $(".battle-message0").text('');
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                hp1 -= atack0;
                $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                $(".monster1").find(".hp-child").text(hp1);
                effect1();
                addCheck0_2();
                addCheck0_3();
              },1600);

              setTimeout(function(){
                if($('.monster0').find(".status").hasClass("returnDamage")){
                  $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                  statusEffect0_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },2400);//急所に当てた場合
            }else{//攻撃が外れたわけでも急所に当たったわけでもない場合
              $(".battle-message0").text('');
              setTimeout(function(){
                hp1 -= atack0;
                $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                $(".monster1").find(".hp-child").text(hp1);
                effect1();
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                addCheck0_2();
                addCheck0_3();
                addCheck0_4();
                addCheck0_5();
              },800);
              setTimeout(function(){
                if($('.monster0').find(".status").hasClass("returnDamage")){
                  $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                  statusEffect0_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },1600);
            }//攻撃が外れたわけでも急所に当たったわけでもない場合
        }//選んだ技が相手に効果がある場合
      },800);

      setTimeout(function(){
        $(".battle-message0 , .battle-message6").text('');
        $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
      },3200);

      setTimeout(function(){
        $(".battle-message5").show();
      },3700);

     setTimeout(function(){
       $(".battle-message5").hide();
       $(".battle-message5").text('');
       statusCheck1();
     },4500);

     setTimeout(function(){
       if(hp1<=0){
         hp1 = 0;
       $(".monster1").find(".hp-child").text(hp1);
       $(".battle-message0").text('相手の' + messageName1 + "はたおれた");
       $(".monster1 .pic img").hide();
       enemy_death();//相手ポケモンを倒した際の処理
     }
     },5500);

     setTimeout(function(){
       if(hp0>0 && hp1>0 && $('.monster1').find(".status").hasClass("out")){
         statusEffect1_0();//状態異常により相手がこうげきできない
         $(".battle-message7").show();

         setTimeout(function(){
           $(".battle-message7").hide();
           $(".battle-message7").text("");
         },800);

         setTimeout(function(){
           if(hp1<=0){
             hp1 = 0;
             $(".monster1").find(".hp-child").text(hp1);
           $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
           $(".monster1 .pic img").hide();
           enemy_death();//相手ポケモンを倒した際の処理
         }else{
             resetSleep();
             resetFreeze();
             resetConfuHeal();
           }
         },1800);

         setTimeout(function(){
           if(hp0>0 && hp1>0){
           $(".monster0").removeClass("turn-rock");
           resetNomove();
           battleMessageReset();
           resetSpark();
           resetConfu();
           resetSpeed();
           $(".battle-message0").text("コマンドを選んでください");
          }
        },2800);
       }
     },6500);

     }//自分は攻撃できるが相手は状態異常で攻撃できず

     else{//自分も相手も状態異常なく攻撃できる
       battleMessageReset();
       $(".battle-message0").text(messageName0 + "の" + messageSkil0 + "!");
       typeCheck0();

       setTimeout(function(){
           if(skilType0 =="電" && monsterType1 == '地' || skilType0 =="電" && monsterType1_2 == '地' || skilType0 =="地" && monsterType1 == '飛' || skilType0 =="地" && monsterType1_2 == '飛'
             || skilType0 =="普" && monsterType1 == '霊' || skilType0 =="普" && monsterType1_2 == '霊' || skilType0 =="闘" && monsterType1 == '霊' || skilType0 =="闘" && monsterType1_2 == '霊'
             || skilType0 =="霊" && monsterType1 == '普' || skilType0 =="霊" && monsterType1_2 == '普'
           ){//選んだ技が相手に効果がない場合の処理
             setTimeout(function(){
               $(".battle-message0").text("");
               $('.battle-message4').text("こうかはないみたいだ");
               $(".battle-message4").show();//効果がないみたいだのメッセージ
             },800);

             setTimeout(function(){
               if($('.monster0').find(".status").hasClass("returnDamage")){
                 $(".battle-message4").hide();//効果がないみたいだのメッセージ
                 $('.battle-message4').text("");
                 statusEffect0_1();//状態異常によりダメージを受ける
                 $(".battle-message7").show();
               }
             },1600);
             //ここまで選んだ技が相手に効果がない場合の処理

         } else if(hp0>0){//選んだ技が相手に効果がある場合
             if(randomHit0>skilHit0){//攻撃が外れた場合
               $(".battle-message0").text('');
               atack0 = 0;
               setTimeout(function(){
                 $(".battle-message0").text("しかし"+messageName0+"の"+messageSkil0+"は外れた");
               },800);
               setTimeout(function(){
                 if($('.monster0').find(".status").hasClass("returnDamage")){
                   $(".battle-message0").text('');
                   statusEffect0_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },1600);//ここまで攻撃が外れた場合

             } else if(randomHit0<=skilHit0 && add0 == "kill"){//一撃必殺を当てた場合
               addCheck0_1();
               setTimeout(function(){
                 $(".battle-message0").text('');
               },800);
               setTimeout(function(){
                 $(".battle-message6").show();
               },1600);
               setTimeout(function(){
                 if($('.monster0').find(".status").hasClass("returnDamage")){
                   $(".battle-message6").hide();
                   statusEffect0_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },2400);
               //ここまで一撃必殺を当てた場合
             } else if(critical0<=10 && randomHit0<=skilHit0){//急所に当てた場合
               $(".battle-message0").text("");
               setTimeout(function(){
               $(".battle-message0").text("急所に当たった");
               },800);

               setTimeout(function(){
                 $(".battle-message0").text('');
                 $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                 hp1 -= atack0;
                 $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                 $(".monster1").find(".hp-child").text(hp1);
                 effect1();
                 addCheck0_2();
                 addCheck0_3();
               },1600);

               setTimeout(function(){
                 if($('.monster0').find(".status").hasClass("returnDamage")){
                   $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                   statusEffect0_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },2400);//急所に当てた場合
             }else{//攻撃が外れたわけでも急所に当たったわけでもない場合
               $(".battle-message0").text('');
               setTimeout(function(){
                 hp1 -= atack0;
                 $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                 $(".monster1").find(".hp-child").text(hp1);
                 effect1();
                 $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                 addCheck0_2();
                 addCheck0_3();
                 addCheck0_4();
                 addCheck0_5();
               },800);
               setTimeout(function(){
                 if($('.monster0').find(".status").hasClass("returnDamage")){
                   $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                   statusEffect0_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },1600);
             }//攻撃が外れたわけでも急所に当たったわけでもない場合
         }//選んだ技が相手に効果がある場合
       },800);

       setTimeout(function(){
         $(".battle-message0 , .battle-message6").text('');
         $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
       },3200);

       setTimeout(function(){
         $(".battle-message5").show();
       },3700);

      setTimeout(function(){
        $(".battle-message5").hide();
        $(".battle-message5").text('');
        statusCheck1();
      },4500);

      setTimeout(function(){
        if(hp1<=0){
          hp1 = 0;
          $(".monster1").find(".hp-child").text(hp1);
        $(".battle-message0").text('相手の' + messageName1 + "はたおれた");
        $(".monster1 .pic img").hide();

        enemy_death();//相手ポケモンを倒した際の処理


      }//(hp1<=0){
      },5500);

      setTimeout(function(){//以下条件分岐相手の先制技による状態異常で行動できるかできないか
        if($('.monster1').find(".status").hasClass("out")){//自分の先制攻撃で状態異常をおい、尚且つ行動できない場合
          statusEffect1_0();//状態異常により相手がこうげきできない
          $(".battle-message7").show();

          setTimeout(function(){
            $(".battle-message7").hide();
            $(".battle-message7").text("");
          },800);

          setTimeout(function(){
            if(hp1<=0){
              hp1 = 0;
              $(".monster1").find(".hp-child").text(hp1);
            $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
            $(".monster1 .pic img").hide();
            enemy_death();//相手ポケモンを倒した際の処理
          } else{
              resetSleep();
              resetFreeze();
              resetConfuHeal();
            }
          },1800);

          setTimeout(function(){
            if(hp0>0 && hp1>0){
            $(".monster0").removeClass("turn-rock");
            resetNomove();
            resetSpark();
            resetConfu();
            resetSpeed();
            battleMessageReset();
            $(".battle-message0").text("コマンドを選んでください");
           }
         },2800);
        }//自分の先制攻撃で状態異常をおい、尚且つ行動できない場合

        else if(hp0>0 && hp1>0){//自分の先制技で相手が状態異常を負ったが行動はできる場合
        battleMessageReset();
        $(".battle-message0").text("相手の"+ messageName1 + "の" + messageSkil1 + "!");
        typeCheck1();

        setTimeout(function(){
            if(skilType1 =="電" && monsterType0 == '地' || skilType1 =="電" && monsterType0_2 == '地' || skilType1 =="地" && monsterType0 == '飛' || skilType1 =="地" && monsterType0_2 == '飛'
              || skilType1 =="普" && monsterType0 == '霊' || skilType1 =="普" && monsterType0_2 == '霊' || skilType1 =="闘" && monsterType0 == '霊' || skilType1 =="闘" && monsterType0_2 == '霊'
              || skilType1 =="霊" && monsterType0 == '普' || skilType1 =="霊" && monsterType0_2 == '普'){
              setTimeout(function(){
                $(".battle-message0").text("");
                $('.battle-message4').text("こうかはないみたいだ");
                $(".battle-message4").show();
              },800);
          } else if(hp1>0){
            if(randomHit1>skilHit1){
              $(".battle-message0").text('');
              atack1 = 0;
              setTimeout(function(){
                $(".battle-message0").text("しかし"+messageName1+"の"+messageSkil1+"は外れた");
              },800);
            } else if(randomHit1<=skilHit1 && add1 == "kill"){
              addCheck1_1();
              setTimeout(function(){
                $(".battle-message0").text('');
              },800);
              setTimeout(function(){
                $(".battle-message6").show();
              },1600);
            } else if(critical1<=10 && randomHit1<=skilHit1){
              $(".battle-message0").text("");
              setTimeout(function(){
              $(".battle-message0").text("急所に当たった");
              },800);

              setTimeout(function(){
                $(".battle-message0").text('');
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                hp0 -= atack1;
                $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                $(".monster0").find(".hp-child").text(hp0);
                effect0();
                addCheck1_2();
                addCheck1_3();
              },1600);
            }else{
              $(".battle-message0").text('');
              setTimeout(function(){
                hp0 -= atack1;
                $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                $(".monster0").find(".hp-child").text(hp0);
                effect0();
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                addCheck1_2();
                addCheck1_3();
                addCheck1_4();
                addCheck1_5();
              },800);
            }
          }
        },800);

          setTimeout(function(){
            $(".battle-message0 , .battle-message6").text('');
            $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
          },3200);


          setTimeout(function(){
            $(".battle-message5").show();
          },3700);

         setTimeout(function(){
           $(".battle-message5").hide();
           $(".battle-message5").text('');
         },4500);

        setTimeout(function(){
          if(hp0<=0){
            hp0 = 0;
            $(".monster0").find(".hp-child").text(hp0);
          $(".battle-message0").text(messageName0 + "はたおれた");
          $(".monster0 .pic img").hide();
        }else{
          resetSleep();
          resetFreeze();
          resetConfuHeal();
        }
        },5500);

        setTimeout(function(){
          if(hp0>0 && hp1>0){
          $(".monster0").removeClass("turn-rock");
          resetNomove();
          battleMessageReset();
          resetSpark();
          resetConfu();
          resetSpeed();
          $(".battle-message0").text("コマンドを選んでください");
         }
       },6500);

      }
    },6500);

   }//自分も相手も状態異常なく攻撃できる


        }//ここまで自分のモンスターの素早さの方が高い場合の処理




        else{//以下自分のモンスターの素早さの方が低い場合の処理
          if(hp0>0 && hp1>0 && $('.monster0').find(".status").hasClass("out") && $('.monster1').find(".status").hasClass("out")
          ){//状態異常により自分も相手もこうげきできない場合
            statusEffect1_0();//状態異常により相手がこうげきできない
            $(".battle-message7").show();

            setTimeout(function(){
              $(".battle-message7").hide();
              $(".battle-message7").text("");
            },800);

            setTimeout(function(){
              if(hp1<=0){
                hp1 = 0;
              $(".monster1").find(".hp-child").text(hp1);
              $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
              $(".monster1 .pic img").hide();
              enemy_death();//相手ポケモンを倒した際の処理
            }else{
                statusEffect0_0();//状態異常により自分がこうげきできない
                $(".battle-message7").show();
              }
            },1600);

            setTimeout(function(){
              $(".battle-message7").hide();
              $(".battle-message7").text("");
            },2400);

            setTimeout(function(){
              if(hp0<=0){
                hp0 = 0;
                $(".monster0").find(".hp-child").text(hp0);
              $(".battle-message0").text(messageName0 + "はたおれた");
              $(".monster0 .pic img").hide();
            }else{
                resetSleep();
                resetFreeze();
                resetConfuHeal();
              }
            },3400);

            setTimeout(function(){
              if(hp0>0 && hp1>0){
              battleMessageReset();
              resetNomove();
              resetSpark();
              resetConfu();
              resetSpeed();
              $(".monster0").removeClass("turn-rock");
              $(".battle-message0").text("コマンドを選んでください");
             }
           },4400);

          }//状態異常により自分も相手もこうげきできない場合

          else if(hp0>0 && hp1>0 && $('.monster1').find(".status").hasClass("out") && $('.monster0').find(".status").not(".out")
        ){//状態異常により相手は攻撃できず自分は攻撃できる
           $(".battle-message0").text("");
           statusEffect1_0();//状態異常によ相手がこうげきできない
           $(".battle-message7").show();

           setTimeout(function(){
             $(".battle-message7").hide();
             $(".battle-message7").text("");
           },800);

           setTimeout(function(){
             if(hp1<=0){
               hp1 = 0;
             $(".monster1").find(".hp-child").text(hp1);
             $(".battle-message0").text("相手の"+messageName1 + "はたおれた");
             $(".monster1 .pic img").hide();
             enemy_death();//相手ポケモンを倒した際の処理
             } else if(hp0>0 && hp1>0){
               battleMessageReset();
               $(".battle-message0").text(messageName0 + "の" + messageSkil0 + "!");
                 typeCheck0();
             }
           },1600);

           setTimeout(function(){
               if(skilType0 =="電" && monsterType1 == '地' || skilType0 =="電" && monsterType1_2 == '地' || skilType0 =="地" && monsterType1 == '飛' || skilType0 =="地" && monsterType1_2 == '飛'
                 || skilType0 =="普" && monsterType1 == '霊' || skilType0 =="普" && monsterType1_2 == '霊' || skilType0 =="闘" && monsterType1 == '霊' || skilType0 =="闘" && monsterType1_2 == '霊'
                 || skilType0 =="霊" && monsterType1 == '普' || skilType0 =="霊" && monsterType1_2 == '普'
               ){//効果がない場合
                 setTimeout(function(){
                   $(".battle-message0").text("");
                   $('.battle-message4').text("こうかはないみたいだ");
                   $(".battle-message4").show();
                 },800);//効果がない場合
             } else if(hp0>0){//効果がある場合

               if(randomHit0>skilHit0){//攻撃が外れた場合
                 $(".battle-message0").text('');
                 atack0 = 0;
                 setTimeout(function(){
                   $(".battle-message0").text("しかし"+messageName0+"の"+messageSkil0+"は外れた");
                 },800);//攻撃が外れた場合

               } else if(randomHit0<=skilHit0 && add0 == "kill"){//いちげきひっさつが当たった場合
                 addCheck0_1();
                 setTimeout(function(){
                   $(".battle-message0").text('');
                 },800);
                 setTimeout(function(){
                   $(".battle-message6").show();
                 },1600);//いちげきひっさつが当たった場合

               } else if(critical0<=10 && randomHit0<=skilHit0){//急所に当たった場合
                 $(".battle-message0").text("");
                 setTimeout(function(){
                 $(".battle-message0").text("急所に当たった");
                 },800);

                 setTimeout(function(){
                   $(".battle-message0").text('');
                   $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                   hp1 -= atack0;
                   $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                   $(".monster1").find(".hp-child").text(hp1);
                   effect1();
                   addCheck0_2();
                   addCheck0_3();
                 },1600);
               }//急所に当たった場合

               else{//普通に当たった場合
                 $(".battle-message0").text('');
                 setTimeout(function(){
                   hp1 -= atack0;
                   $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                   $(".monster1").find(".hp-child").text(hp1);
                   effect1();
                   $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                   addCheck0_2();
                   addCheck0_3();
                   addCheck0_4();
                   addCheck0_5();
                 },800);
               }//普通に当たった場合
             }//効果がある場合
           },2400);

           setTimeout(function(){
             $(".battle-message0 , .battle-message6").text('');
             $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
           },4800);

           setTimeout(function(){
             $(".battle-message5").show();
           },5300);

          setTimeout(function(){
            $(".battle-message5").hide();
            $(".battle-message5").text('');
          },6100);

          setTimeout(function(){
            if(hp1<=0){
              hp1 = 0;
              $(".monster1").find(".hp-child").text(hp1);
            $(".battle-message0").text("相手の" + messageName0 + "はたおれた");
            $(".monster1 .pic img").hide();
            enemy_death();//相手ポケモンを倒した際の処理
            } else{
              resetSleep();
              resetFreeze();
              resetConfuHeal();
            }
          },7100);

          setTimeout(function(){
            if(hp0>0 && hp1>0){
            $(".monster0").removeClass("turn-rock");
            resetNomove();
            battleMessageReset();
            resetSpark();
            resetConfu();
            resetSpeed();
            $(".battle-message0").text("コマンドを選んでください");
           }
          },8100);
          }//状態異常により自分は攻撃できず相手は攻撃できる

          else if(hp0>0 && hp1>0 && $('.monster1').find(".status").not(".out") && $('.monster0').find(".status").hasClass("out")
        ){//相手は攻撃できるが自分は状態異常で攻撃できず

          if(hp0>0 && hp1>0){
          battleMessageReset();
          $(".battle-message0").text("相手の" + messageName1 + "の" + messageSkil1 + "!");
          typeCheck1();
          }

          setTimeout(function(){
          if(skilType1 =="電" && monsterType0 == '地' || skilType1 =="電" && monsterType0_2 == '地' || skilType1 =="地" && monsterType0 == '飛' || skilType1 =="地" && monsterType0_2 == '飛'
            || skilType1 =="普" && monsterType0 == '霊' || skilType1 =="普" && monsterType0_2 == '霊' || skilType1 =="闘" && monsterType0 == '霊' || skilType1 =="闘" && monsterType0_2 == '霊'
            || skilType1 =="霊" && monsterType0 == '普' || skilType1 =="霊" && monsterType0_2 == '普'
          ){//選んだ技が自分に効果がない場合の処理
            setTimeout(function(){
              $(".battle-message0").text("");
              $('.battle-message4').text("こうかはないみたいだ");
              $(".battle-message4").show();//効果がないみたいだのメッセージ
            },800);

            setTimeout(function(){
              if($('.monster1').find(".status").hasClass("returnDamage")){
                $(".battle-message4").hide();//効果がないみたいだのメッセージ
                $('.battle-message4').text("");
                statusEffect1_1();//状態異常によりダメージを受ける
                $(".battle-message7").show();
              }
            },1600);
            //ここまで相手の技が自分に効果がない場合の処理

          } else if(hp1>0){//選んだ技が自分に効果がある場合
            if(randomHit1>skilHit1){//攻撃が外れた場合
              $(".battle-message0").text('');
              atack1 = 0;
              setTimeout(function(){
                $(".battle-message0").text("しかし相手の"+messageName1+"の"+messageSkil1+"は外れた");
              },800);
              setTimeout(function(){
                if($('.monster1').find(".status").hasClass("returnDamage")){
                  $(".battle-message0").text('');
                  statusEffect1_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },1600);//ここまで攻撃が外れた場合

            } else if(randomHit1<=skilHit1 && add1 == "kill"){//一撃必殺を当てた場合
              addCheck1_1();
              setTimeout(function(){
                $(".battle-message0").text('');
              },800);
              setTimeout(function(){
                $(".battle-message6").show();
              },1600);
              setTimeout(function(){
                if($('.monster1').find(".status").hasClass("returnDamage")){
                  $(".battle-message6").hide();
                  statusEffect1_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },2400);
              //ここまで一撃必殺を当てた場合
            } else if(critical1<=10 && randomHit1<=skilHit1){//急所に当てた場合
              $(".battle-message0").text("");
              setTimeout(function(){
              $(".battle-message0").text("急所に当たった");
              },800);

              setTimeout(function(){
                $(".battle-message0").text('');
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                hp0 -= atack1;
                $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                $(".monster0").find(".hp-child").text(hp0);
                effect0();
                addCheck1_2();
                addCheck1_3();
              },1600);

              setTimeout(function(){
                if($('.monster1').find(".status").hasClass("returnDamage")){
                  $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                  statusEffect1_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },2400);//急所に当てた場合

            }else{//攻撃が外れたわけでも急所に当たったわけでもない場合
              $(".battle-message0").text('');
              setTimeout(function(){
                hp0 -= atack1;
                $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                $(".monster0").find(".hp-child").text(hp0);
                effect0();
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                addCheck1_2();
                addCheck1_3();
                addCheck1_4();
                addCheck1_5();
              },800);
              setTimeout(function(){
                if($('.monster1').find(".status").hasClass("returnDamage")){
                  $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                  statusEffect1_1();//状態異常によりダメージを受ける
                  $(".battle-message7").show();
                }
              },1600);
            }//攻撃が外れたわけでも急所に当たったわけでもない場合
          }//選んだ技が自分に効果がある場合
          },800);

          setTimeout(function(){
          $(".battle-message0 , .battle-message6").text('');
          $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
          },3200);

          setTimeout(function(){
          $(".battle-message5").show();
          },3700);

          setTimeout(function(){
          $(".battle-message5").hide();
          $(".battle-message5").text('');
          statusCheck0();
          },4500);

          setTimeout(function(){
          if(hp0<=0){
          hp0 = 0;
          $(".monster0").find(".hp-child").text(hp0);
          $(".battle-message0").text(messageName0 + "はたおれた");
          $(".monster0 .pic img").hide();
          }
          },5500);

          setTimeout(function(){
          if(hp0>0 && hp1>0 && $('.monster0').find(".status").hasClass("out")){
          statusEffect0_0();//状態異常により自分がこうげきできない
          $(".battle-message7").show();

          setTimeout(function(){
           $(".battle-message7").hide();
           $(".battle-message7").text("");
          },800);

           setTimeout(function(){
             if(hp0<=0){
               hp0 = 0;
               $(".monster0").find(".hp-child").text(hp0);
             $(".battle-message0").text(messageName0 + "はたおれた");
             $(".monster0 .pic img").hide();
             }else{
               resetSleep();
               resetFreeze();
               resetConfuHeal();
             }
           },1800);

          setTimeout(function(){
           if(hp0>0 && hp1>0){
           $(".monster0").removeClass("turn-rock");
           resetNomove();
           battleMessageReset();
           resetSpark();
           resetConfu();
           resetSpeed();
           $(".battle-message0").text("コマンドを選んでください");
          }
        },2800);
          }
          },6500);

        }//相手は攻撃できるが自分は状態異常で攻撃できず

          else{//自分も相手も状態異常なく攻撃できる
          battleMessageReset();
          $(".battle-message0").text("相手の" + messageName1 + "の" + messageSkil1 + "!");
          typeCheck1();

          setTimeout(function(){
           if(skilType1 =="電" && monsterType0 == '地' || skilType1 =="電" && monsterType0_2 == '地' || skilType1 =="地" && monsterType0 == '飛' || skilType1 =="地" && monsterType0_2 == '飛'
             || skilType1 =="普" && monsterType0 == '霊' || skilType1 =="普" && monsterType0_2 == '霊' || skilType1 =="闘" && monsterType0 == '霊' || skilType1 =="闘" && monsterType0_2 == '霊'
             || skilType1 =="霊" && monsterType0 == '普' || skilType1 =="霊" && monsterType0_2 == '普'
           ){//相手の技が自分に効果がない場合の処理
             setTimeout(function(){
               $(".battle-message0").text("");
               $('.battle-message4').text("こうかはないみたいだ");
               $(".battle-message4").show();//効果がないみたいだのメッセージ
             },800);

             setTimeout(function(){
               if($('.monster1').find(".status").hasClass("returnDamage")){
                 $(".battle-message4").hide();//効果がないみたいだのメッセージ
                 $('.battle-message4').text("");
                 statusEffect1_1();//状態異常によりダメージを受ける
                 $(".battle-message7").show();
               }
             },1600);
             //ここまで相手の技が自分に効果がない場合の処理

          } else if(hp1>0){//選んだ技が自分に効果がある場合
             if(randomHit1>skilHit1){//攻撃が外れた場合
               $(".battle-message0").text('');
               atack1 = 0;
               setTimeout(function(){
                 $(".battle-message0").text("しかし相手の"+messageName1+"の"+messageSkil1+"は外れた");
               },800);
               setTimeout(function(){
                 if($('.monster1').find(".status").hasClass("returnDamage")){
                   $(".battle-message0").text('');
                   statusEffect1_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },1600);//ここまで攻撃が外れた場合

             } else if(randomHit1<=skilHit1 && add1 == "kill"){//一撃必殺を当てた場合
               addCheck1_1();
               setTimeout(function(){
                 $(".battle-message0").text('');
               },800);
               setTimeout(function(){
                 $(".battle-message6").show();
               },1600);
               setTimeout(function(){
                 if($('.monster1').find(".status").hasClass("returnDamage")){
                   $(".battle-message6").hide();
                   statusEffect1_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },2400);
               //ここまで一撃必殺を当てた場合
             } else if(critical1<=10 && randomHit1<=skilHit1){//急所に当てた場合
               $(".battle-message0").text("");
               setTimeout(function(){
               $(".battle-message0").text("急所に当たった");
               },800);

               setTimeout(function(){
                 $(".battle-message0").text('');
                 $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                 hp0 -= atack1;
                 $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                 $(".monster0").find(".hp-child").text(hp0);
                 effect0();
                 addCheck1_2();
                 addCheck1_3();
               },1600);

               setTimeout(function(){
                 if($('.monster1').find(".status").hasClass("returnDamage")){
                   $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                   statusEffect1_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },2400);//急所に当てた場合
             }else{//攻撃が外れたわけでも急所に当たったわけでもない場合
               $(".battle-message0").text('');
               setTimeout(function(){
                 hp0 -= atack1;
                 $(".monster0").find(".hp-point").css({"width":hp0 + "px"});
                 $(".monster0").find(".hp-child").text(hp0);
                 effect0();
                 $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                 addCheck1_2();
                 addCheck1_3();
                 addCheck1_4();
                 addCheck1_5();
               },800);
               setTimeout(function(){
                 if($('.monster1').find(".status").hasClass("returnDamage")){
                   $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
                   statusEffect1_1();//状態異常によりダメージを受ける
                   $(".battle-message7").show();
                 }
               },1600);
             }//攻撃が外れたわけでも急所に当たったわけでもない場合
          }//相手の技がに効果がある場合
          },800);

          setTimeout(function(){
          $(".battle-message0 , .battle-message6").text('');
          $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
          },3200);

          setTimeout(function(){
          $(".battle-message5").show();
          },3700);

          setTimeout(function(){
          $(".battle-message5").hide();
          $(".battle-message5").text('');
          statusCheck0();
          },4500);

          setTimeout(function(){
          if(hp0<=0){
          hp0 = 0;
          $(".monster0").find(".hp-child").text(hp0);
          $(".battle-message0").text(messageName0 + "はたおれた");
          $(".monster0 .pic img").hide();
          }
          },5500);

          setTimeout(function(){//以下条件分岐相手の先制技による状態異常で行動できるかできないか
          if($('.monster0').find(".status").hasClass("out")){//相手の先制攻撃で状態異常をおい、尚且つ行動できない場合
          statusEffect0_0();//状態異常により自分がこうげきできない
          $(".battle-message7").show();

          setTimeout(function(){
            $(".battle-message7").hide();
            $(".battle-message7").text("");
          },800);

          setTimeout(function(){
            if(hp0<=0){
              hp0 = 0;
              $(".monster0").find(".hp-child").text(hp0);
            $(".battle-message0").text(messageName0 + "はたおれた");
            $(".monster0 .pic img").hide();
            }else{
              resetSleep();
              resetFreeze();
              resetConfuHeal();
            }
          },1800);

          setTimeout(function(){
            if(hp0>0 && hp1>0){
            $(".monster0").removeClass("turn-rock");
            resetNomove();
            resetSpark();
            resetConfu();
            resetSpeed();
            battleMessageReset();
            $(".battle-message0").text("コマンドを選んでください");
           }
         },2800);
        }//相手の先制攻撃で自分が状態異常をおい、尚且つ行動できない場合

          else if(hp0>0 && hp1>0){//相手の先制技で自分が状態異常を負ったが行動はできる場合
          battleMessageReset();
          $(".battle-message0").text(messageName0 + "の" + messageSkil0 + "!");
          typeCheck0();

          setTimeout(function(){
            if(skilType0 =="電" && monsterType1 == '地' || skilType0 =="電" && monsterType1_2 == '地' || skilType0 =="地" && monsterType1 == '飛' || skilType0 =="地" && monsterType1_2 == '飛'
              || skilType0 =="普" && monsterType1 == '霊' || skilType0 =="普" && monsterType1_2 == '霊' || skilType0 =="闘" && monsterType1 == '霊' || skilType0 =="闘" && monsterType1_2 == '霊'
              || skilType0 =="霊" && monsterType1 == '普' || skilType0 =="霊" && monsterType1_2 == '普'){
              setTimeout(function(){
                $(".battle-message0").text("");
                $('.battle-message4').text("こうかはないみたいだ");
                $(".battle-message4").show();
              },800);
          } else if(hp0>0){
            if(randomHit0>skilHit0){
              $(".battle-message0").text('');
              atack0 = 0;
              setTimeout(function(){
                $(".battle-message0").text("しかし" + messageName0+"の"+messageSkil0+"は外れた");
              },800);
            } else if(randomHit0<=skilHit0 && add0 == "kill"){
              addCheck0_1();
              setTimeout(function(){
                $(".battle-message0").text('');
              },800);
              setTimeout(function(){
                $(".battle-message6").show();
              },1600);
            } else if(critical0<=10 && randomHit0<=skilHit0){
              $(".battle-message0").text("");
              setTimeout(function(){
              $(".battle-message0").text("急所に当たった");
              },800);

              setTimeout(function(){
                $(".battle-message0").text('');
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                hp1 -= atack0;
                $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                $(".monster1").find(".hp-child").text(hp1);
                effect1();
                addCheck0_2();
                addCheck0_3();
              },1600);
            }else{
              $(".battle-message0").text('');
              setTimeout(function(){
                hp1 -= atack0;
                $(".monster1").find(".hp-point").css({"width":hp1 + "px"});
                $(".monster1").find(".hp-child").text(hp1);
                effect1();
                $(".battle-message2 , .battle-message3 ,.battle-message4").show();
                addCheck0_2();
                addCheck0_3();
                addCheck0_4();
                addCheck0_5();
              },800);
            }
          }
          },800);

          setTimeout(function(){
            $(".battle-message0 , .battle-message6").text('');
            $(".battle-message2 , .battle-message3 ,.battle-message4").hide();
          },3200);


          setTimeout(function(){
            $(".battle-message5").show();
          },3700);

          setTimeout(function(){
           $(".battle-message5").hide();
           $(".battle-message5").text('');
          },4500);

          setTimeout(function(){
          if(hp1<=0){
            hp1 = 0;
            $(".monster1").find(".hp-child").text(hp1);
          $(".battle-message0").text("相手の" + messageName1 + "はたおれた");
          $(".monster1 .pic img").hide();
          enemy_death();//相手ポケモンを倒した際の処理
          }else{
            resetSleep();
            resetFreeze();
            resetConfuHeal();
          }
          },5500);

          setTimeout(function(){
          if(hp0>0 && hp1>0){
          $(".monster0").removeClass("turn-rock");
          resetNomove();
          battleMessageReset();
          resetSpark();
          resetConfu();
          resetSpeed();
          $(".battle-message0").text("コマンドを選んでください");
          }
          },6500);

          }
          },6500);

          }//自分も相手も状態異常なく攻撃できる

            }//ここまで自分のモンスターの素早さの方が低い場合の処理

      }//ここまできちんとクリック時にturn-rockクラスが外れている場合の処理



});//ここまでわざクリックからの一連の流れ

});
