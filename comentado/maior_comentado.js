// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Níveis 2 e Sênior
// Exercício: Maior valor 
// Solução em Javascript 

var n, m, s, i, c, ct, soma;

scanf("%d%d%d","n","m","s"); // Ler os valores
i = -1; // Definir a variável como (-1) para caso não se encaixar na condição para ser definida como um número dentro do intervalo

  for(c = m; c >= n; c--){ // Verificar cada número dentro do intervalo (do maior ao menor, pois o primeiro valor será necessariamente o maior)

    soma = 0; // Definir a soma como 0 para cada loop
    ct = c; // ct = c temporária; será utilizada para somar os dígitos do número c

    while(ct != 0){ // Loop enquanto ct não for 0
      soma += ct % 10; // A soma acrescenta em seu valor ct % 10 (o valor do último dígito)
      ct = parseInt(ct / 10); // ct é definida como a parte inteira de (ct/10), ou seja, o último dígito é ignorado, assim todos os dígitos serão verificados até ct ser 0
    }

    if(soma == s){ // Caso a soma for igual a variável s
      i = c; // O valor de i será igual ao valor atual de c
      break; // Encerrar o loop, pois o maior valor de c tal que a soma de seus dígitos é igual a s já foi registrado
    }

  }

printf("%d\n",i);