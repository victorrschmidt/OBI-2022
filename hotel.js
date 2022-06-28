// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação (Todos as categorias)
// Exercício: Hotel 
// Solução em Javascript 

var d, a, n, x;

scanf("%d%d%d","d","a","n"); 
x = 1; 

if(n > 15){ 
  x = n - 14; 
}

printf("%d\n",(32-n)*(d+(n-x)*a));