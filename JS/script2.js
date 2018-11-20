//факториал числа n.

var n = 5;
var res = 1;
if (n < 0) {
  console.log('ошибка: ' + n + ' отрицательное число');
} else {
  for (var i = 1; i <= n; i++) {
    res *= i;  
  }
  console.log(n + '! = ' + res);
}


//Кооличество дней в году.

