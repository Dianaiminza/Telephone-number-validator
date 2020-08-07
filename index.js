function telephoneCheck(str) {
  if (str[0] == "-"){
    return false;
  }else
    
  str = str.replace(/-|\s/g, "");
  //Location of first parentheses 
  var firstPar = str.search("\\(");
  //Location of second parentheses
  var secondPar = str.search("\\)");
  //Length of the str
  var strLen = str.length;
  
  //Depending on string length
  switch(strLen){
      
    case 10:
      return true;
      
    case 11:
      if (str[0] == 1){
        return true;
      }else
        return false;
      break;
      
    case 12:
      if (str[0] === "(" && str[4] == ")"){
        return true;
      }else
        return false;
      break;
      
    case 13:
      if (str[0] == 1 && firstPar === 1 && secondPar === 5){
        return true;
      }else
        return false;
      break;
    default:
      return false;
  }
}



telephoneCheck("555-555-5555");
