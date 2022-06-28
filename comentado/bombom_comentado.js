// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Nível 2
// Exercício: Bombom 
// Solução em Javascript 

var n, edu, lua, c, p, result;

n = 'AJQK'; // Naipes 
edu = 0; // Pontuação Edu
lua = 0; // Pontuação Luana
c = []; // Cartas 

  for(i = 0; i < 7; i++){ // Verificar as cartas

    scanf("%s","c[i]"); // Ler as cartas

    if(i == 0){ // A primeira carta será usada apenas para verificar o naipe dominante
      continue; // Logo o registro de pontuação (p) será ignorado para para a primeira carta (célula 0 do array de cartas c), e o loop continua
    }

    p = 10 + n.indexOf(c[i][0]); // Definir o valor inicial do ponto como: 10 + valor do index do naipe na variável n

    if(c[i].indexOf(c[0][1]) != -1){ // Verificar se a carta possui o naipe dominante (verificando o index da primeira carta)
      p += 4; // Somar pontos extras 
    }
         
    if(i < 4){
      lua += p; // Adicionar pontos para Luana quando é a vez dela.
    }
    else{
      edu += p; // Adicionar pontos para Edu quando é a vez dele.
    }

  }

  if(lua > edu){
    result = 'Luana';
  }
  else if(edu > lua){
    result = 'Edu';
  }
  else{
    result = 'empate';
  }

printf("%s\n",result);
