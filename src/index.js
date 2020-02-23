

exports.min = function min (array) {
  let result = 0;
  if(array !=undefined && array.length != 0)
  {result = array.sort((a,b) => {
   return a-b; 
  })[0];
}
return result;
}

exports.max = function max (array) {
  let result = 0;
  if(array !=undefined && array.length != 0)
  {result = array.sort((a,b) => {
   return a-b; 
  })[array.length-1];
}
return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if(array !=undefined && array.length != 0)
  { let resultMas = 0;
    result = array.forEach(element => {
    resultMas+=element;
  });
  result = resultMas/array.length;
}
return result;
}
