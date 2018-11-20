//1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
var res = a.concat(b);
console.log('array ' + res); 

//2.Дан массив ['admin’, 'admin’, 'admin’]. Добавьте ему в конец элементы 1, 2, 3.

var d = ['admin', 'admin', 'admin'];
d.push(1, 2, 3);
console.log('array ' + d);

//3.Напишите код который  запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//- Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт ''Отмена».
//- 0 не должен заканчивать ввод, это разрешённое число.
//- Выводит сумму всех значений массива;

var numbers = [];
var num;
while ((num = parseFloat(prompt('Введите число'))) || num == 0) {
  numbers.push (num);
}
var sum = 0;
numbers.forEach(function(item, i, arr){
  sum += item;
});
console.log('Сумма = ' + sum);

/*4. Cоздать массив с данными;  Написать функцию которая ищет значение Value в массиве и возвращает его index, если он есть, если нету то -1;
 Например arr = [«user», 3, 4, «b»];
 find(arr, «user»); Должен вернуть 0*/

 var list = ['user', 3, 4, 'b'];
 function find (list, value) {
  return list.indexOf(value);   
 } 
 console.log(find (list, 5));