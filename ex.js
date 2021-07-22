//  1 Переменные (variables)

// var - variable
// ctrl + alt + N - запустить JS код (через плагин Code runner)
// f1 + ввести Run code - запустить JS код (через плагин Code runner)
// var name = 'Nikita' // устаревшая конструкция;
// camelCase - название без нижнего подчеркивания, второе слово с большой буквы

// const firstName = 'Nikita'
// const lastName = 'Usov' // константа (не поменять значение); string
// let age = 24 // числовое занчение без ковычек; number
// const isProgrammer = true // boolean

// const _ = 'private' // - можно прописывать код valid
// const $ = 'some val' // - valid
// const withNum5 = '5' // - valid
// const if = 'ner' - err 
// const 5withNum = 5 - err
// console.log(isProgrammer);

// end variables

// 2 Мутирование (mutation)

 // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age) - мутируем несколько объектов
 // console.log(age.toString()) - переводим число в строку 
 // alert('Имя человека: ' + firstName + ', а возраст человека: ' + age) - выод строки не в консоли, а на всплывающем окне при обновлении страницы
 // prompt('Введите фамилию') - место под запись во всплывающем окне

 // const lastName = prompt('Введите фамилию')
 // alert(firstName + ' ' + lastName) - введениие новых данных в во всплывающее окно

 // end mutation

 // 3 Операторы (operators)

// let currentYear = 2021
// const birthYear = 1996

// const age = currentYear - birthYear
// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)

// end operators

// 4 Типы данных (data types)

//const isProgrammer = true
//const name = 'Nikita'
// const age = 24
// let x
// const x - err; надо в любом случае внести в const по умолчанию что нибудь
//console.log(typeof isProgrammer)
//console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// end data types

// 5 Приоритет операторов (operator priority)

//const fullAge = 24
//const birthYear = 1996
//const currentYear = 2021

// < > <= >= - операторы сравнения
//const isFullAge = currentYear - birthYear >= fullAge  // 24 >= 25 => true
//console.log(isFullAge);

//end operator priority

// 6 Условные операторы (conditional Operators)

// const courseStatus = 'fail' // ready, fail, pending - статусы

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов');
// } else if (courseStatus === 'pending') {
//     console.log('Курс разрабатывается');
// } else {
//     console.log('Не вышло!');
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово!');
// } else {
//     console.log('Все не готов!');
// }

// isReady ? console.log('Все готово!') : console.log('Все не готово!'); // тернарное выражение

// const num1 = 42 // число
// const num2 = '42' // строка

// console.log(num1 === num2); // забываем ==, пользуемся только ===

// end conditional Operators

// 7 Булевая логика (boolean logic)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

// end boolean logic

// 8 Функции (function)

// function calculateAge(year) {
//     return 2021 - year
// } 

// const myAge = calculateAge(1996)

// console.log(myAge);
// console.log(calculateAge(1990));
// console.log(calculateAge(2300));

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
// 
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
//     } else {
//         console.log('Это футуре');
//     }
// 
//     
// }

// logInfoAbout('Никита', 1996)

// end function

// 9 Массивы (arrays)

// const cars = ['Хендэ', 'Мерс', 'Форд'] // - так правильно
// const cars = new Array('Хендэ', 'Мерс', 'Форд')
// console.log(cars.length);
// console.log(cars[2]);

// cars[2] = 'Киа'
// cars[cars.length] = 'Мазда'
// console.log(cars);

// end arrays





