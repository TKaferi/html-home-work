// 1.Напишите функцию  которая будет последовательно выводить числа от 1 до 10, с интервалом между числами 100 мс.

function counter() {
  var i = 1;
  var timer = setInterval( function (){
    document.write(i);
    if (i == 10) {
      clearInterval (timer);
      document.write('<br /> <br />');
    }
    i++;
  }, 100);
}

counter();

//2. Написать код при котором юзер вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
// -  То есть если пользователь введет число 3. Ваш код  должен посчитать сумму чисел  от 1 до 3, то есть 1+2+3 и выдать ответ 

function sum() {
  var num = prompt('Введите целое положительное число 1');
  var res = 0;
  for (var i = 1; i <= num; i++) {
    res += i;  
  }
  document.write ( 'Сумма чисел от 1 до ' + num + ' = ' + res);
  document.write('<br /> <br />');
}

setTimeout(sum, 1500);

//3. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.

function task3(num) {
  switch (num) {
    case 0: 
    case 2:
      return num + 7;
    break;

    default: 
      return num / 10;
  }
}


function testTask3(num) {
  document.write('Тестируемое число: ' + num +  '; результат: ' + task3(num));
  document.write('<br />');
}

function testsTask3() {
  testTask3(2);
  testTask3(5);
  testTask3(0);
}
setTimeout(testsTask3, 1500);

var str = '~12345';
alert(str[3]);









