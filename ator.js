//codigo do Ator

let xAtor = 90
let yAtor = 370
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;    
  } 
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3; 
    }
  }
  if(keyIsDown(37)){
    xAtor -= 3;    
  } 
  if(keyIsDown(39)){
    xAtor += 3;
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
       if (colisao){
      voltaAtorParaPosicaoInicial();
         somColidiu.play();
         if (pontosMaiorQueZero()){
           meusPontos -= 1   
            somColidiu.play();
       }    
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);//tamanho
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 0){
    meusPontos += 1;
    somPontos.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 370;  
}



