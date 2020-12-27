<?php
class Skil{
  private $nameSkil;//技名
  private $typeSkil;//技のタイプ
  private $colorSkil;//技のタイプの色
  private $atackSkil;//威力
  private $hitSkil;//命中率
  private $sectionSkil;//物理か特殊技か
  private $sectionAtack;//攻撃か補助技か
  private $add;//追加効果
  private $addHit;//追加効果発生率

public function __construct($nameSkil,$typeSkil,$colorSkil,$atackSkil,$hitSkil,$sectionSkil,$sectionAtack,$add,$addHit){
  $this->nameSkil = $nameSkil;
  $this->typeSkil = $typeSkil;
  $this->colorSkil = $colorSkil;
  $this->atackSkil = $atackSkil;
  $this->hitSkil = $hitSkil;
  $this->sectionSkil = $sectionSkil;
  $this->sectionAtack = $sectionAtack;
  $this->add = $add;
  $this->addHit = $addHit;
}

public function getNameSkil(){
  return $this->nameSkil;
}

public function getTypeSkil(){
  return $this->typeSkil;
}

public function getColorSkil(){
  return $this->colorSkil;
}

public function getAtackSkil(){
  return $this->atackSkil;
}

public function getHitSkil(){
  return $this->hitSkil;
}

public function getSectionSkil(){
  return $this->sectionSkil;
}

public function getSectionAtack(){
  return $this->sectionAtack;
}

public function getAdd(){
  return $this->add;
}

public function getAddHit(){
  return $this->addHit;
}



}
?>
