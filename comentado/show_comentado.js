// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Nível 1
// Exercício: Show
// Solução em Javascript

var a, n, m, i, ii, f, c, resp;

scanf("%d%d%d","a","n","m"); // Ler os valores principais
resp = -1; // Definir a resposta (fileira) como (-1) para caso a variável não entrar na condição para ser definida como um valor de fileira

  for(i = 0; i < n; i++){ // Verificar as fileiras

    c = 0; // Variável que conta a quantidade de assentos vazios consecutivos. Para cada fileira ela é redefinida para 0 para reiniciar a contagem

    for(ii = 0; ii < m; ii++){ // Verificar as poltronas

      scanf("%d","f"); // Ler o valor numérico do assento

      if(f == 0){ // Caso o assento esteja vazio
        c++; // Mais um assento vazio é contabilizado

        if(c == a){ // Caso a quantidade de assentos vazios consecutivos seja igual a quantidade de amigos
          resp = n - i; // A resposta é a fileira atual
        }

      }
      else{ // Caso o assento esteja ocupado
        c = 0; // A variável é redefinida para 0, pois devem ser assentos vazios consecutivos
      }

    }

  }

printf("%d\n",resp);