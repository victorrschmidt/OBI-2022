// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Nível 2
// Exercício: Maior valor 
// Solução em Javascript 

var n, m, s, i, c, ct, soma;

scanf("%d%d%d","n","m","s"); 
i = -1; 

  for(c = m; c >= n; c--){ 

    soma = 0; 
    ct = c; 

    while(ct != 0){ 
      soma += ct % 10; 
      ct = parseInt(ct / 10); 
    }

    if(soma == s){ 
      i = c; 
      break; 
    }

  }

printf("%d\n",i);