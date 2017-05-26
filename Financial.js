function sayHello() {
  alert(1);
}

function sum(arrayObj, fieldName) {
  var arrayObjLen = arrayObj.length;
  
  var result = 0;
  for(var i=0; i<arrayObjLen; i++) {
    result = result + arrayObj[i].field(fieldName);
  }
  
  return result;
}
