//1.Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

var num = prompt ('Введите число');
if (num == 10) {
  alert('Верно!');
} else {
  alert ('Неверно!');
}  

/*2. Вводим в окно число от 0 до 100; есть 4 интервала; Первый это 0 - 25 Второй 25-50 Третий 50-75 Четвертый 75-100;
 Нужно определить в какой интервал попадает введенное вами чило и вывести название этого интервала.*/

 var num1 = prompt ('Введите число от 0 до 100');
 if (num1 >= 0 && num1 <= 25) {
   alert ('Первый');
 } 
 else if (num1 >= 26 && num1 <= 50) {
   alert ('Второй');
 } 
 else if (num1 >= 51 && num1 <= 75) {
  alert ('Третий');
}
else if (num1 >= 76 && num1 <= 100) {
    alert ('Четвертый');
}

/*3. Переменная number может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима',
 если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case*/

var seasonNum = prompt ('Введите номер времени года');
switch (seasonNum) {
  case "1":
    alert ('Зима');
  break;

  case "2":
    alert ('Весна');
  break;
  
  case "3":
    alert ('Лето');
  break;
  
  case "4":
    alert ('Осень');
  break;
  
  default:
    alert ('Подумайте еще...');
}

/*4. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц
 (зима, лето, весна, осень).
 Решите задачу через switch-case*/

var month = prompt ('Введите номер месяца');
switch (month) {
  case "1":
  case "2":
  case "12":
    alert ('Зима');
  break;

  case "3":
  case "4":
  case "5":
    alert ('Весна');
  break;

  case "6":
  case "7":
  case "8":
    alert ('Лето');
  break;

  case "9":
  case "10":
  case "11":
    alert ('Осень');
  break;

  default:
    alert ('Подумайте еще...');
}

/*5. Напишите код который будет  спрашивать логин (prompt). Если юзер введет «admin», то дальше нужно будет спрашивать пароль,
 если нажал отмена – выводить «Вход отменён», когда вводит неправильный пароль то выводить  – «Я вас не знаю». Проверка пароля: 
 Если введён пароль «JavaScript», то выводить «Welcome», иначе – «Пароль неверен», при отмене – «Вход отменён».*/


var login = prompt ('Введите логин');
 if (login == 'admin') {
  var pass = prompt ('Введите пароль');
  if (pass =='JavaScript') {
    alert ('Welcome');
  } else {
    alert ('Я вас не знаю');
  }
 } 
 else {
   alert ('Вход отменён');
 } 


 /*6.Нужно  переписать  условие (if) на условие с использованием оператора «?».

if (w + g < 10) {
  result = 'Мало’; 
} else { 
  result = 'Много’; 
}*/

var w = 6;
var g = 6;
w + g < 10 ? document.write ('Мало'): document.write ('Много');

