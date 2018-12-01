/* 1. Создайте объект в котором будут храниться суммы денег  пользователей;
  Напишите код, который выведет сумму всех денег у пользователей;*/

 var money = {
    "Jon": 100,
    "Sarah": 300,
    "Peter": 150,
 };
 var sum = 0;
 for (var key in money) {
    sum += money[key];
 }
 console.log('Сумма денег пользователей: ' + sum);

 /*2. Вывести самое большое число.*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var maxNum = 0;
for (var key in salaries) {
  maxNum = Math.max(maxNum, salaries[key]);
}
console.log('самое большое число: ' + maxNum);


// 3. Все числа умночить на 2; написать функцию

salaries = {
  "Вася": 100,
  "Петя": 302,
  "Даша": 'jhkjh',
};

function tvice(obj) {
  for (var key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2; 
    }
  }
}
tvice(salaries);
console.log(salaries);

// 4. нужно написать функцию которая возвращает значение ключа. НАПРИМЕР: isResult(arr, 'слово3') - и функция возвращает значение ключа 'слово3'

var arr1 = [ 
  { 
    key: 'слово', 
    value: 'значение1' 
  },
  { 
    key: 'слово2',
    value: 'значение2'
  },
  { 
    key: 'слово3', 
    value: 'значение3'
  }
];
var key1 = 'слово2'

function getValue(arr, key) {
  for ( var i = 0; i < arr.length; i++) { 

    var a = arr[i];
    if (a.key == key){
      return a.value;
    }
  }
}

var val =  getValue(arr1, key1);
console.log('Ключу ' + key1 + ' соответствует значение: ' + val);

// 5. сделать валидацию полей.

var user1 = {
  first_name: 'Петя',
  last_name: 'Петров',
  age: 25,
  settings: [
    {
      settingsName: 'subscription',
      products: ['DIY', 'NEWS'],
    },
  ],
};

var user2 = {
  first_name: 'Вася',
  last_name: '',
  age: 'Вася',
  settings: [
    {
      settingsName: '',
      products: [],
    },
  ],
};

/*function isEmpty(str){
  return !(('' + str).trim());
}*/

function validate(user) {
  if (!user.first_name.length) {
    return 'First Name is empty'
  }
  if (!user.last_name.length){
    return 'Last Name is empty'
  }
  if (!user.age.length){
    return 'Age is empty'
  }
  if (isNaN(user.age)){
    return 'insert the number';
  } 
    user.settings.map(function(item){
      if (!item.settingsName.length) {
        return 'Settings Name is empty';
      }  
       if (item.products.length == 0){
      return 'Settings Name is empty';
    }
    });
  }




