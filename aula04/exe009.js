
function contar()
{
  //Resgatar as tags
  let num = document.getElementById('txtn');
  var res = document.getElementById('seltab');
 
  if(!num.value.length)
  {
    alert('Digite um numero');
  }else{
    let n = Number(num.value);
    let c = 1;
    while (c <= 10) {
      let item = document.createElement('option');
      item.text = `${n} x ${c} = ${n*c}`;
      res.appendChild(item);
      c++;
    }
  }
}


