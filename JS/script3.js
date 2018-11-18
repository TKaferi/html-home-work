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

//counter();

//2. Написать код при котором юзер вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
// -  То есть если пользователь введет число 3. Ваш код  должен посчитать сумму чисел  от 1 до 3, то есть 1+2+3 и выдать ответ 

function sum() {
  var num = prompt('Введите целое положительное число 1');
  var res = 0;
  for (var i = 1; i <= num; i++) {
    res += i;  
  }
  document.write( 'Сумма чисел от 1 до ' + num + ' = ' + res);
  document.write('<br /> <br />');
}

//setTimeout(sum, 1500);

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
//setTimeout(testsTask3, 1500);


//4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
//Если это так  выводим окей или же не окей


function firstChar(str) {
  document.write('<br />');
  if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
    document.write('ok');
  } else {
    document.write('not ok');
  }
  
}

//setTimeout(firstChar, 1600, '3456');

//5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.


function sumChar(str) {
  var res = 0;
  for (var i = 0; i <= 2; i++) {
    res += parseInt(str[i]);
  }
  return res;
  
}
document.write('Cумма чисел = ' + sumChar('789') + '<br />');



//6.  Есть строка из 6-ти цифр. нужно узнать что сумма первых трех цифр равняется сумме вторых трех цифр. выводим да или нет


function compareSumString(str) {
  var a = sumChar(str.substring(0, 3));
  var b = sumChar(str.substring(3));

  if (a == b) {
    document.write ( 'yes' + '<br />');
  } else {
    document.write ('no' + '<br />');
  }
}

compareSumString('458557');

//7.  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 






//8. Напишите функцию которая будет принимать число и возвращать сумму этого числа.  То есть если я передаю в функцию число 123 функция должна вернуть 6. (1+2+3)

function sumNumber(num) {
  var res = 0;
  var digit = 0;
  while(num > 0) {
    digit = num % 10;
    num -= digit;
    num /= 10;
    res += digit;
  }
  return res;
}

document.write('Cумма чисел = ' + sumNumber(24500081) + '<br />');


//Количество дней в году.


function isYearLeap(year) {
  if (year % 400 == 0) return true;
  if (year % 100 == 0) return false;
  if (year % 4 == 0) return true;
  return false;
}

function isYearLeapOne(year) {
  return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}


