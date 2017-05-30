function minLink(linkName, fieldName) {
  var linkObjs = field(linkName);
  var linkLen = linkObjs.length;
  var result = Number.MAX_VALUE;

  for(var i=0; i<linkLen; i++) {
    var data = linkObjs[i].field(fieldName);					
    result = Math.min(result, data);
  }		
				
  return result;
}

function sum(arrayObj, fieldName) {
  var arrayObjLen = arrayObj.length;
  
  var result = 0;
  for(var i=0; i<arrayObjLen; i++) {
    result = result + arrayObj[i].field(fieldName);
  }
  
  return result;
}
