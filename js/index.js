const init = function (ev){
  document.getElementById('button-reset').addEventListener('Reset', reset);
  document.getElementById('button-send').addEventListener('Submit', send);
}
const reset = function (ev){
  ev.preventDefault();
  document.getElementById('form').reset
}
const send = function (ev){
  ev.preventDefault();
  let ret = validate();
  
  if (ret) { getElementById('form').submit();

  }else{
    fails.forEach(function(obj){
      let field = document.getElementById(obj.input);
      field.parentElement.classList.add('error');
      field.parentElement.setAttribute('data-errormsg', obj.msg);
  })
}


const validate = function(ev){
  let valid = true;

  let failures = [];
  
  let chk = document.getElementById('platform1');

  if(!chk){

      failures.push({input: 'platform1', msg: 'Must select one to submit.'})
  }
  let chk = document.getElementById('platform2');

  if(!chk){

      failures.push({input: 'platform2', msg: 'Must select one to submit.'})
  }
  let chk = document.getElementById('platform3');

  if(!chk){

      failures.push({input: 'platform3', msg: 'Must select one to submit.'})
  }
  


  let select = document.getElementById('input-age');
  
  if( select.value === 1 ){
      failures.push({input:'input-age', })
  }
  

  
  let discord = document.getElementById('Dname');
  let minecraft = document.getElementById('Mname');

  if( Dname === ""){
      failures.push({input:'Dname', msg:'Required Field'})
  } 
  if( Mname.value === ""){
      failures.push({input:'Mname', msg:'Required Field'})
  } 
  
  
  
  return failures;
}
