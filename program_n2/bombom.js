// OBI 2022 (Olimpíada Brasileira de Informática)
// Fase 1
// Modalidade Programação Nível 2
// Exercício: Bombom 
// Solução em Javascript 

var n, edu, lua, c, p, result;

n = 'AJQK'; 
edu = 0; 
lua = 0; 
c = []; 

  for(i = 0; i < 7; i++){ 

    scanf("%s","c[i]"); 

    if(i == 0){ 
      continue; 
    }

    p = 10 + n.indexOf(c[i][0]); 

    if(c[i].indexOf(c[0][1]) != -1){ 
      p += 4; 
    }
         
    if(i < 4){
      lua += p; 
    }
    else{
      edu += p; 
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