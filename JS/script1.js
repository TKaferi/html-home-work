//1. Выведите столбец чисел от 1 до 100. Через while и for
document.write('<h4>task 1.1</h4>');
var counter = 0;
while (counter <= 100) {
  document.write (counter++ + '<br />');
}

document.write('<h4>task 1.2</h4>');
for (var counter1 = 0; counter1 <= 100; counter1++) {
  document.write(counter1 + '<br />');
}

//2. Выведите столбец чисел от 15 до 35. Через while и for 

document.write('<h4>task 2.1</h4>');
var counter2 = 15;
while (counter2 <= 35) {
  document.write(counter2++ + '<br />');
}

document.write('<h4>task 2.2</h4>');
for (var counter3 = 15; counter3 <= 35; counter3++) {
  document.write (counter3 + '<br />');
}

// 3. циклом найдите сумму чисел от 1 до 50.

document.write('<h4>task 3</h4>');
var summ = 0;
for ( var i = 1; i <= 50; i++) {
  summ += i;
}
document.write('summ = ' + summ);
