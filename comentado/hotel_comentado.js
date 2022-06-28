// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação (Todos as categorias)
// Exercício: Hotel 
// Solução em Javascript 

var d, a, n, x;

scanf("%d%d%d","d","a","n"); // Ler os valores 
x = 1; // Valor a ser subtraído do dia em que a pessoa chega

if(n > 15){ // Caso o dia for maior que 15, o valor não é mais aumentado
  x = n - 14; // Neste caso x será igual ao dia subtraído de 14 (1 dia antes do valor atingir o nível máximo; dia 15)
}

printf("%d\n",(32-n)*(d+(n-x)*a));

/* 

   Explicação da fórmula

   (32 - n) * (d + (n - x) * a)
       

   (32 - n) -> A quantidade de dias a serem pagos (multiplicados) pelo valor da diária
    
   (n - x) -> A quantidade a ser paga (multiplicada) pelo valor de 'a' (o valor que a diária aumenta; com limite de 14)

   (d + (n - x) * a) -> O valor da diária somado a multiplicação da quantidade de dias em que o valor aumenta e o valor do aumento 'a'


   (32 - n) * (d + (n - x) * a) -> Por fim, multiplicamos a quantidade de dias pelo valor das diárias

*/
