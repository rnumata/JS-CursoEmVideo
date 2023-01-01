
function contar()
{
  //Resgatar as tags
  let ini = document.getElementById('txti');
  let fim = document.getElementById('txtf');
  let passo = document.getElementById('txtp');
  let res = document.getElementById('res');
 
  if(!ini.value.length || !fim.value.length || !passo.value.length)
  {
    res.innerHTML = 'Impossível contar';
    alert('Faltam dados');
  }else{
    res.innerHTML = 'Contando...';
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if(!p){
      alert('Passo inválido!... setando como passo 1');
      p = 1;
    }

    if(i < f){
      for (let index = i; index <= f; index += p){
        res.innerHTML += `${index} \u{1F449}`;
      }
    }else{
      for (let index = i; index >= f; index -= p){
        res.innerHTML += `${index} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`; 
  }
}


