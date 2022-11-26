// Variáveis Bolinha
let xBola = 300;
let yBola = 200;
let dimBola = 15;
let raio = dimBola /2;

// Velocidade Bolinha
let velXBola = 6;
let velYBola = 6;

// Variáveis Raquete Aliada
let xMyRaq = 10;
let yMyRaq = 165;

// Variáveis Raquete Adversário
let xEnemyRaq = 583;
let yEnemyRaq = 165;

// Variáveis Raquete Geral
let wRaq = 7;
let hRaq = 70;
let compensaH = hRaq/2;
let velRaq = 5;
let colidiu = false;

// Pontos
let pontoAliado = 0;
let pontoOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBola();
  movBola();
  colisaoBola();
  mostraMyRaq();
  movMyRaq();
  //verifColisaoMyRaq();
  colidMyRaq();
  mostraEnemyRaq();
  colidEnemyRaq();
  movEnemyRaq();
  
  pontosAliado();
  pontosOponente();
}

// Bolinha  
function mostraBola(){
  circle(xBola, yBola, dimBola);

}
function movBola(){
  xBola += velXBola;
  yBola += velYBola;
}
function colisaoBola(){
  if (xBola + raio > width || xBola - raio <0 ){
    velXBola *= -1;
  }
  
  if (yBola + raio > height || yBola - raio <0 ){
    velYBola *= -1;
  }  
}

// Raquete Aliada
function mostraMyRaq(){
  rect(xMyRaq, yMyRaq, wRaq, hRaq);
}
function movMyRaq(){
  if (keyIsDown (UP_ARROW)){
    yMyRaq -= velRaq;
  } 
  else if (keyIsDown (DOWN_ARROW)){
    yMyRaq += velRaq;
  }
}
function verifColisaoMyRaq(){
  if (xBola - raio < xMyRaq + wRaq && yBola - raio < yMyRaq + hRaq && yBola + raio > yMyRaq){
    velXBola *= -1;
  }
}
function colidMyRaq(){
  colidiu = collideRectCircle(xMyRaq, yMyRaq, wRaq, hRaq, xBola, yBola, raio);
  if (colidiu){
    velXBola *= -1;
  }
}

// Raquete Adversário
function mostraEnemyRaq(){
  rect(xEnemyRaq, yEnemyRaq, wRaq, hRaq);
}
function colidEnemyRaq(){
  colidiu = collideRectCircle(xEnemyRaq, yEnemyRaq, wRaq, hRaq, xBola, yBola, raio);
  if (colidiu){
    velXBola *= -1;
  }
}
function movEnemyRaq(){
  yEnemyRaq = yBola - 100;
}

// Pontuação
function pontosAliado(){
  if (xBola > 590){
    print ('Aliado');
    print (pontoAliado += 1);
  }
}
function pontosOponente(){
  if (xBola < 10){
    print ('Oponente');
    print (pontoOponente += 1);
  }
}