// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Níveis Júnior e Sênior
// Exercício: Quadrado Mágico
// Solução em Javascript

var n, c, x, y, v, soma, SOMA, lin, col;

scanf("%d","n");
c = [];

  for(x = 0; x < n; x++){

    c[x] = [];
    soma = 0;

    for(y = 0; y < n; y++){
     
      scanf("%d","v");
      soma += v;
      
      if(v == 0){
        lin = x + 1;
        col = y + 1;
      }
      else if(c[x].indexOf(0) == -1 && y == n-1){
        SOMA = soma;        
      }

      c[x].push(v);

    }

  }

soma = 0;
  
  for(y = 0; y < n; y++){ 
    soma += c[lin-1][y];
  }

printf("%d\n", SOMA-soma);
printf("%d\n", lin);
printf("%d\n", col);