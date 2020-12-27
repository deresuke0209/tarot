<?php

class Monster{
  private $number;//No
  private $name;//名前
  private $type;//タイプ
  private $type2;//タイプ2
  private $color;//タイプの色
  private $color2;//タイプの色
  private $atack;//攻撃
  private $atackSpecial;//特攻
  private $defense;//防御
  private $defenseSpecial;//特防
  private $speed;//素早さ
  private $body;//HP
  private $img;//画像
  private $skil;//技



public function __construct($number,$name,$type,$type2,$color,$color2,$atack,$atackSpecial,$defence,$defenceSpecial,$speed,$body,$img,$skil){
  $this->number = $number;
  $this->name = $name;
  $this->type = $type;
  $this->type2 = $type2;
  $this->color = $color;
  $this->color2 = $color2;
  $this->atack = $atack;
  $this->atackSpecial = $atackSpecial;
  $this->defence = $defence;
  $this->defenceSpecial = $defenceSpecial;
  $this->speed = $speed;
  $this->body = $body;
  $this->img = $img;
  $this->skil = $skil;
}

public function getNumber(){
  return $this->number;
}

public function getName(){
  return $this->name;
}

public function getType(){
  return $this->type;
}

public function getType2(){
  return $this->type2;
}

public function getColor(){
  return $this->color;
}

public function getColor2(){
  return $this->color2;
}

public function getAtack(){
  return $this->atack;
}

public function getAtackSpecial(){
  return $this->atackSpecial;
}

public function getDefence(){
  return $this->defence;
}

public function getDefenceSpecial(){
  return $this->defenceSpecial;
}

public function getSpeed(){
  return $this->speed;
}

public function getBody(){
  return $this->body;
}

public function getImg(){
  return $this->img;
}

public function getSkil(){
  return $this->skil;
}


}
?>
