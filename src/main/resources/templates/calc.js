// function add(){
//     var result1;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     result1 = x + y;
//     document.getElementById("result1").innerHTML = result1;
//     return result1;
// }
//
//
// function sub(){
//     var result2;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     result2 = x - y;
//     document.getElementById("result2").innerHTML = result2;
//     return result2;
// }
//
// function mult(){
//     var result3;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     result3 = x * y;
//     document.getElementById("result3").innerHTML = result3;
//     return result3;
// }
//
// function div(){
//     var result4;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     if(y != 0){
//         result4 = x / y;
//     } else {
//         result4 = 'На ноль делить нельзя';
//     }
//     document.getElementById("result4").innerHTML = result4;
//     return result4;
// }
//
// function pow(){
//     var result5;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     result5 = Math.pow(x, y);
//     document.getElementById("result5").innerHTML = result5;
//     return result5;
// }
//
// function sqrt(){
//     var result6;
//     var x = Number(document.getElementById("1st").value);
//     var y = Number(document.getElementById("2nd").value);
//     if(y && !x){
//         result6 = 'квадратный корень можно взять для 1-го числа, введите его'
//     } else {
//         result6 = Math.sqrt(x);
//     }
//     document.getElementById("result6").innerHTML = result6;
//     return result6;
// }
//
// function printResult(){
//     var result7 = "<br/>" + add() + "<br/>" + sub() + "<br/>" + mult()
//         + "<br/>" + div() + "<br/>" + pow() + "<br/>" + sqrt();
//     document.getElementById("result7").innerHTML = result7;
// }