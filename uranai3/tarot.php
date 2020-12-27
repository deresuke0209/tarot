<?php

class TarotCard{
  private $cardName;
  private $position;
  private $mean;
  private $img;
  private $type;

  public function __construct($cardName,$position,$mean,$img,$type){
    $this->cardName = $cardName;
    $this->position = $position;
    $this->mean = $mean;
    $this->img = $img;
    $this->type = $type;

  }


  public function getCardName(){
    return $this->cardName;
  }

  public function getPosition(){
    return $this->position;
  }

  public function getMean(){
    return $this->mean;
  }

  public function getImg(){
    return $this->img;
  }

  public function getType(){
    return $this->type;
  }


}


 ?>
