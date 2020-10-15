module.exports = function toReadable (number) {

  var a = '';
  var b = '';
  var c = '';
  var len = number.toString().length;
  var a_read, b_read, c_read;
  var space1=' ', space2=' ';
  var result='';

  switch(len) {
    case 1:
      a = number.toString()[0];
      break;
    case 2: 
      a = number.toString()[1];
      b = number.toString()[0];
      break;
    case 3: 
      a = number.toString()[2];
      b = number.toString()[1];
      c = number.toString()[0];
      break;
  }
  //console.log(a,b,c);

  switch(a) {
    case '1': 
      a_read = 'one';
      break;
    case '2': 
      a_read = 'two';
      break;
    case '3': 
      a_read = 'three';
      break;
    case '4': 
      a_read = 'four';
      break;
    case '5': 
      a_read = 'five';
      break;
    case '6': 
      a_read = 'six';
      break;
    case '7': 
      a_read = 'seven';
      break;
    case '8': 
      a_read = 'eight';
      break;
    case '9': 
      a_read = 'nine';
      break;
    default:
      a_read = '';
      space2 = '';
   
  }
  //console.log(a_read);
  if (len===1 && a==='0') {
    a_read = 'zero';

  }

  switch(b) {
    case '1': 
      b_read = 'one';
      break;
    case '2': 
      b_read = 'twenty';
      break;
    case '3': 
      b_read = 'thirty';
      break;
    case '4': 
      b_read = 'forty';
      break;
    case '5': 
      b_read = 'fifty';
      break;
    case '6': 
      b_read = 'sixty';
      break;
    case '7': 
      b_read = 'seventy';
      break;
    case '8': 
      b_read = 'eighty';
      break;
    case '9': 
      b_read = 'ninety';
      break;
    default:
      b_read = '';
      space1 = '';
  }
  //console.log(b_read);
  if (b === '1') {
    switch(a) {
      case '1': 
        b_read = 'eleven';
        break;
      case '2': 
        b_read = 'twelve';
        break;
      case '3': 
        b_read = 'thirteen';
        break;
      case '4': 
        b_read = 'fourteen';
        break;
      case '5': 
        b_read = 'fifteen';
        break;
      case '6': 
        b_read = 'sixteen';
        break;
      case '7': 
        b_read = 'seventeen';
        break;
      case '8': 
        b_read = 'eighteen';
        break;
      case '9': 
        b_read = 'nineteen';
        break;
      case '0': 
        b_read = 'ten';
        break;
    }
    space2 = '';
    a_read = '';
  }

  switch(c) {
    case '1': 
      c_read = 'one hundred';
      break;
    case '2': 
      c_read = 'two hundred';
      break;
    case '3': 
      c_read = 'three hundred';
      break;
    case '4': 
      c_read = 'four hundred';
      break;
    case '5': 
      c_read = 'five hundred';
      break;
    case '6': 
      c_read = 'six hundred';
      break;
    case '7': 
      c_read = 'seven hundred';
      break;
    case '8': 
      c_read = 'eight hundred';
      break;
    case '9': 
      c_read = 'nine hundred';
      break;
    default:
      c_read = '';
  }
//console.log(c_read);
//console.log(c_read + b_read + a_read);
switch(len) {
  case 1:
    result = a_read;
    break;
  case 2: 
    result = b_read + space2 + a_read;
    break;
  case 3: 
    result = c_read + space1 + b_read + space2 + a_read;
    break;
}
  return result;
}
