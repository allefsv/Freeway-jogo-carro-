//codigo do carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40,96,150, 210, 270, 318]//na lista[] começa na numeração 0
let velocidadeCarros = [2, 4, 3.5, 5, 3.3, 2.3 ]
let comprimentoCarro = 50
let alturaCarro = 40

    
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1)//função para ler toda a lista de um codigo, assim tornando o codigo mais limpo, menor.
  {
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
 }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
 }

 function voltaPosicaoInicialDoCarro(){
   for(let i = 0; i< imagemCarros.length; i++){
   if (passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
     }
   }
 }

function passouTodaATela(xCarro){
  return xCarro < -50;
}