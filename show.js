// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Nível 1
// Exercício: Show
// Solução em Javascript

var a, n, m, i, ii, f, c, resp;

scanf("%d%d%d","a","n","m"); 
resp = -1;

  for(i = 0; i < n; i++){

    c = 0;

    for(ii = 0; ii < m; ii++){

      scanf("%d","f");

      if(f == 0){
        c++;

        if(c == a){
          resp = n - i;
        }

      }
      else{
        c = 0;
      }

    }

  }

printf("%d\n",resp);