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

function CAGRLink(linkName, fieldName) {
  var linkObjs = field(linkName);
  var linkLen = linkObjs.length;

  var numOfPeriods = linkLen-1;
  var beginningValue = linkObjs[numOfPeriods].field(fieldName);
  var endingValue = linkObjs[0].field(fieldName);

  var CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
  return Math.round(CAGR * 10000) / 100;
}

function sum(arrayObj, fieldName) {
  var arrayObjLen = arrayObj.length;
  
  var result = 0;
  for(var i=0; i<arrayObjLen; i++) {
    result = result + arrayObj[i].field(fieldName);
  }
  
  return result;
}
