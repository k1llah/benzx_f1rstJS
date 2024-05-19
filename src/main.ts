import './style.css'


// Запросите у пользователя число, возведите это число во
// 2-ю степень и выведите на экран.

// const numbUser = prompt('Введите число', '0')
// alert(numbUser**2)

// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let numbUser = parseFloat(prompt('Введите число', '0') as string)
// let numbUser2 = parseFloat(prompt('Введите число', '0') as string)
// alert((numbUser+numbUser2)/2)


// Запросите у пользователя длину стороны квадрата и вы-
// ведите площадь такого квадрата.

// let firstSide = prompt('Введите число', '0')
// alert(firstSide*firstSide)

// Реализуйте конвертор из километров в мили (пользователь
//     вводит километры, программа выводит мили). 1 км = 0,621371
//     миль. Это значение укажите в коде как константу.

// const km = 0.621371
// const resultUser = prompt('Введите число', '0')
// alert(resultUser*km)

// Реализуйте калькулятор. Пользователь вводит два числа,
// а программа выводит результаты действий + - * / между
// этими числами.
// let firstNumb = parseFloat(prompt('Введите число', '0'))
// let secondNumb = parseFloat(prompt('Введите число', '0') as string)
// alert(`${firstNumb+secondNumb} ${firstNumb-secondNumb} ${firstNumb*secondNumb} ${firstNumb/secondNumb}`)

// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.


// let hoursUser = parseFloat(prompt('hh:mm') as string)
// const remainsTxt = 'Часа(ов) осталось до завтрашнего дня'
// const dayHour = 24.00
// alert(dayHour-hoursUser + ` ${remainsTxt}`)


// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).




// Пользователь вводит значения a и b для формулы a * x + b = 0,
// а программа считает и выводит значение x.

// const meaningA = parseFloat(prompt('Введите значение для переменной а', '0') as string)

// const meaningB = parseFloat(prompt('Введите значение для переменной b', '0') as string)

// const calculations = {
//     meaningX: meaningA / (meaningB * (-1))
// }

// const textMeaning = 'Значение x равно - '
// alert(`${textMeaning}` + calculations.meaningX )

// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.


// const salaryGuy = 250
// const procentToSalary = 0.10

// let summ = parseFloat(prompt('Введите общую сумму продаж за месяц', 10000) as string)


// alert(salaryGuy + (summ * procentToSalary))


// ДЗ

// 1
// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
// let name = prompt('Введите ваше имя')
// alert('Привет,' + ` ${name}`)


// 2
// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.

// let yO = prompt('Введите свой возраст', '2004')
// const currentYear = 2023
// alert(currentYear - yO)

// 3
// Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.

// let lenghtSqr = parseFloat(prompt('Введите длину стороны квадрата', ' 10 см')as string)
// alert (lenghtSqr * 4 + ' см')

// 5
// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.

// let distance = parseFloat(prompt('Введите расстояние в километрах', '200 км') as string)
// let timing = parseFloat(prompt('Введите время за которое хотите добраться', '3 часа') as string)

// let resultOf = Math.round(distance / timing) + " км/ч"

// alert(resultOf)

// Реализуйте конвертор валют. Пользователь вводит долла-
// ры, программа переводит в евро. Курс валюты храните в
// константе.

// const dollarExchangeRate = 90.50

// let userConvert = parseFloat(prompt('Введите количество золотых долларов, для того, чтобы перевести их в гнилые рубли', '777')as string)

// let convert = userConvert * dollarExchangeRate

// alert(convert + ' Рублей(я) будут стоить указанное кол-во долларов' )


// switch if else  ДЗ 

// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

// let age = parseFloat(prompt('Введите свой возраст', '20') as string)

// if (age <= 2 ){
//     alert('Ты еще малыш совсем, ищи соску, как ты тут оказался')
// }

// else if(age <= 18){
//     alert('Ну уже неплохо, но молоко на губах не высохло, так что иди уроки делай')
// }
// else if(age <= 60){
//     alert('Ты либо очень старый, либо я ошибаюсь')
// }
// else {
//     alert('Ты ходячая пенсия, хотя если ты в России, не факт, скоро пенсионный возраст будет поднят до соточки')
// }


// 2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).


// let numberInt = parseFloat(prompt('Введите число от 0 до 9', '0-9') as string)
// switch (numberInt) {
//     case 1:
//         alert('!')
//         break
//     case 2:
//         alert('@')
//         break
//     case 3:
//         alert('#')
//         break

//     case 4:
//         alert('$')
//         break

//     case 5:
//         alert('%')
//         break

//     case 6:
//         alert('^')
//         break
//     case 7:
//         alert('&')
//         break
//     case 8:
//         alert('*')
//         break

//     case 9:
//         alert('(')
//         break
//     default:
//         alert('Введенное значение не найдено, введите цифру из диапазона от 0 до 9')
// }


// 6
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

// let breefOf = prompt('Введите в какую валюту вы хотите перевести свои любимые рубли, EUR, UAN, AZN','Eur')
// let exchangeValue = parseFloat(prompt('Введите количество денег, которые вы хотели бы перевести в калькуляторе валют', '10000') as string)
// const course = {
//     Eur: 100.76,
//     Uan: 12.59,
//     Azn: 53.24
// }

// switch(breefOf){
//     case 'Eur': 
//     alert(exchangeValue * course.Eur)
//     break
//     case 'Uan':
//     alert(exchangeValue * course.Uan)
//     break
//     case 'Azn':
//     alert(exchangeValue * course.Azn)
//     break
//     default:
//         alert('Вы ввели что то не так, проверьте еще раз, первая буква в названии валюты должна быть заглавной')
// }

// 7
// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

// let summWithoutSale = parseFloat(prompt('Введите сумму покупки', '2500') as string)
// const textAlert = `К оплате со скидкой: `
// if (summWithoutSale <= 300){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.030)))
// }
// else if (summWithoutSale <= 500){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.050)))
// }
// else if (summWithoutSale >= 501 ){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.070)))
// }
// else {
//     alert('Упс, что-то не так, попробуйте еще раз')
// }



// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.
// const answers = {
//     answerFirst: prompt('Сколько у человека хромосом?', 'Варианты ответов: 46, 48, 44'),
//     answerSecond: prompt('Сколько у человека ребер в теле?', 'Варианты ответов: 18, 16, 24'),
//     answerThird: prompt('Сколько часовых поясов в мире?', 'Варианты ответов: 23, 7, 24, 9')
// }
// let points = 0
// if (answers.answerFirst == '46'){
//     points += 2
// }

// if (answers.answerSecond == '24'){
//     points += 2
// }

// if (answers.answerThird == '24'){
//     points += 2
// }
// if(points > 0){
//     alert(`Вы набрали ${points} Очка(ов)`)
// }
// else {
//     alert('К сожалению вы не набрали ни одного очка, попробуйте еще раз')
// }


// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.



// let intDay = parseFloat(prompt('Введите сегодняшнее число', '22')as string)
// let intMonth = parseFloat(prompt('Введите сегодняшнее число', '05')as string)
// let intYear = parseFloat(prompt('Введите сегодняшнее число', '2023')as string)

// let zero = '0'
// if (intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12){
//     if (intDay == 31) {
//         intDay = 0
//         intMonth++
//     }
//     if (intMonth == 12) intMonth = 1
// } else {
//     if (intDay == 30) {
//         intDay = 0
//         intMonth++
//     }
//     if (intMonth == 2) {
//         if (intDay == 29) {
//             intDay = 0
//             intMonth++
//         }
//         if (intDay == 28) {
//             if ((intYear%4==0 && intYear%100!=0) || intYear%400==0 ) {

//             } else {
//                 intDay = 0
//                 intMonth++
//             }
//         }
//     }
// }



// intDay += 1
// let resultDate =  intDay + ' ' + zero + intMonth + ' ' + intYear
// alert(resultDate)

// let password

// let login = prompt('Кто там','')

// if (login == 'Админ') {
//     password = prompt('Пароль','')

//     if(password == 'Я главный'){
//         alert('Здравствуйте')
//     }
//     else if(login  === null){
//         alert('Отменено')
//     }
//     else {
//         alert('Неверный пароль')
//     }
// }
// if (login != 'Админ'){
//     alert('Я вас не знаю')
// }

// const number = +prompt('Введите число между 0 и 3', '')
// switch (number){
//     case 0:

//         alert('Вы ввели число 0')
//     break
//     case 1:
//         alert('Вы ввели число 1')
//     break

//     case 3:
//         alert('Вы ввели число 2 а может и 3')
//         break
//         default:
//             alert('Введи нормально идиот')
// }

// let age  = +prompt('Введите свой возраст', ' 15')
// if (age >= 14 && age <= 90){
//     alert(true)
// }
// else if(age < 14 || age > 90){
//     alert(false)
// }
// else{
//     alert('Введи нормально')
// }



// 1
// Запросить у пользователя номер месяца и вывести на экран
// его название.

// let monthInt = parseFloat(prompt('Введите месяц цифрой', '1')as string)
// switch(monthInt){
//     case 1:
//         alert('Январь')
//         break
//         case 2:
//         alert('Февраль')
//         break
//         case 3:
//         alert('Март')
//         break
//         case 4:
//         alert('Апрель')
//         break
//         case 5:
//         alert('Май')
//         break
//         case 6:
//         alert('Июнь')
//         break
//         case 7:
//         alert('Июль')
//         break
//         case 8:
//         alert('Август')
//         break
//         case 9:
//         alert('Сентябрь')
//         break
//         case 10:
//         alert('Октябрь')
//         break
//         case 11:
//         alert('Ноябрь')
//         break
//         case 12:
//         alert('Декабрь')
//         break
//         default:
//             alert('Дурак?????????????????????')
// }


// 2
// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.

// let calcPrompt1 = parseFloat(prompt('Введите число или цифру для вычислений','2')as string)
// let symbolInt = prompt('Ввдеите знак, который будет производить вычисление', ' +, /, *, -')
// let calcPrompt2 = parseFloat(prompt('Введите число или цифру для вычислений','10')as string)
// switch(symbolInt){
//     case '+':
//         alert(calcPrompt1 + calcPrompt2)
//         break
//         case '-':
//             alert(calcPrompt1 - calcPrompt2)
//             break
//             case '*':
//                 alert(calcPrompt1 * calcPrompt2)
//                 break
//                 case '/':
//         alert(calcPrompt1 / calcPrompt2)
//         break
//         default:
//             alert('Дурак?????????????????????')
// }


// 1
// Запросить 2 числа и вывести большее из них.
// let intNumb = parseFloat(prompt('Введите число', '30')as string)
// let intNumb2 = parseFloat(prompt('Введите число', '10')as string)

// let difference = (intNumb > intNumb2 || intNumb < intNumb2) ? 'Первое число больше второго': 'Второе число больше первого' 
// alert(difference)

// let i = 0 
// while (i < 3){
//     alert(`number ${i}!`)
//     i++
// }

// let intNumber = +(prompt('Введите число >100', '0') as string)
// for (intNumber; intNumber>100; ){
//     if(intNumber!>100) {
//         alert(intNumber) 
//         continue
//     }
//     else{
//        alert('thanks') 
//     }
// }
// let i = 2
// let n = 10
// for(i; i<=n; i++){
//     let isSimple = true
//     for (let j = 2; j<i;j++){
//         if (i%j > 0) {
//             isSimple = false
//             break
//         }
//     }
//     if (isSimple)
// }



// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.


// let a = parseFloat(prompt('Введите число в любом диапазоне от нуля', '')as string)
// let n = parseFloat(prompt('Введите число в любом диапазоне от нуля', '')as string)
// let sum = 0
// while (a<=n){
//     sum+=a
//     a++
// }
// alert(sum)

// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.

// let answer = true
// while (answer) {
//   let intNumb1 = parseFloat(prompt('Введите число/цифру, которое хотите вычислить', '12') as string)
//   let intSign = prompt('Введите знак, который будет вычислять', '+ - * /')
//   let intNumb2 = parseFloat(prompt('Введите число/цыфру, которое хотите вычислить', '12') as string)
//   let res = 0
//   switch (intSign) {
//     case '-':
//       res = intNumb1 - intNumb2
//       break
//     case '+':
//       res = intNumb1 + intNumb2
//       break
//     case '*':
//       res = intNumb1 * intNumb2
//       break
//     case '/':
//       res = intNumb1 / intNumb2
//       break
//   }
//   answer = confirm(`Результат ${res}. Посчитать что-нибудь ещё?`)
// }

// 8
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.




// let day = true;
// let nextDay = prompt('Напишите сегодняшний день, чтобы увидеть следующий', 'Пятница') as string;
// while (day) {

//   switch (nextDay) {
//     case 'Понедельник':
//       nextDay = 'Вторник'
//       break
//     case 'Вторник':
//       nextDay = 'Среда'
//       break
//     case 'Среда':
//       nextDay = 'Четверг'
//       break
//     case 'Четверг':
//       nextDay = 'Пятница'
//       break
//     case 'Пятница':
//       nextDay = 'Суббота'
//       break
//     case 'Суббота':
//       nextDay = 'Воскресенье'
//       break
//     case 'Воскресенье':
//       nextDay = 'Понедельник'
//       break
//     default:
//       nextDay = 'Понедельник'
// }

//   day = confirm(`Cледующий день ${nextDay}, хотите узнать следующий день?`);
// }





// 3
// Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
// let intNumber = parseFloat(prompt('Введите число, которое будете возводить в степень','22')as string)
// let degreeInt = parseFloat(prompt('Введите степень, в которую будете возводить число','2')as string)
// let resultOfCalc = 1;

// while (degreeInt > 0) {
//     resultOfCalc *= intNumber;
//     degreeInt--;
// }

// alert(resultOfCalc)





// 1
// Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.

// let intAnswer
// do{
//     intAnswer = parseFloat(prompt('Решите пример 2 + 2 * 2, введите ответ в строку','')as string)
//     if(intAnswer == 6){
//         alert('Молодчина')
//     } else if(intAnswer != 6){
//        alert('Все плохо, пробуем еще раз')
//     }
// } while(intAnswer != 6)


// 3
// Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.
// let intNumb = parseFloat(prompt('Введите число, а я выведу все кратные числа от 0 до 100', '30')as string)
// for(let i = 1; i<=100;  i++){
//     if(i % intNumb == 0){
//         alert(i)
//     }
// }


// 5
// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.

// let intNumber = parseFloat(prompt('Введите число, а я проверю простое ли оно','25')as string)
// let isPrime = true
// for (let i = 2; i<=intNumber / 2; i++){
//     if(intNumber/i == 0){
//         isPrime = false
//         break
//     }
//     if (isPrime) {
//         alert('Ваше число простое');
//     } else {
//         alert('Вы ввели не простое число');
// }
// }

// 1
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.


// let a:any = prompt('Введите число, а я выведу то, которое больше','10')
// let b:any = prompt('Введите число, а я выведу то, которое больше','22')
// function defference(a:any,b:any){
//     if(a<b){
//         alert(`${b} больше`)
//     }
//     else{
//         alert(`${a} больше`)
//     }
//     return
// }
// defference(a,b)

// 2
// Написать функцию, которая возводит переданное число
// в указанную степень.

// let numbToDegree = parseFloat(prompt('Введите число, а я возведу его в степень','3')as string)
// let degree = parseFloat(prompt('Введите степень, в которую надо возвести число, которое вы ввели выше','2')as string)
// function degreeCalculation(numbToDegree:any, degree:any){
//     let resultOfCalculation = numbToDegree**degree
//     alert(`Ответ: ${resultOfCalculation}`)
//     return
// }
// degreeCalculation(numbToDegree,degree)

// 3
// Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.

// let intNumber = parseFloat(prompt('Введите число/цифру, а я посчитаю его', '12')as string)
// let intSign = prompt('Введите знак, для дальнейших вычислений', '-, +, /, *')
// let intNumber2 = parseFloat(prompt('Введите число/цифру, а я посчитаю его', '22')as string)
// function userCalculation(intNumber: any, intSign:any, intNumber2: any) {
//     let resultOf;
//     switch (intSign) {
//         case '-':
//             resultOf = intNumber - intNumber2
//             break
//         case '+':
//             resultOf = intNumber + intNumber2
//             break
//         case '/':
//             resultOf = intNumber / intNumber2
//             break
//         case '*':
//             resultOf = intNumber * intNumber2
//             break
//     }
//     alert(resultOf)
//     return
// }
// userCalculation(intNumber,intSign,intNumber2)



// 8
// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает большее из них.


// let intNumbers = 0
// let intNumbers2 = 0 
// let intNumbers3 =  0
// let intNumbers4 = 0
// let intNumbers5 = 0
// function booleanResult(intNumbers,intNumbers2,intNumbers3,intNumbers4,intNumbers5){
//     return intNumbers + intNumbers2
// }



//Функция, которая может принимать неограниченное количество переменных
// function getNmax(...args:any){
//     let sum = 0
//     for (let i = 0;i<args.lenght;i++){
//         sum+=args[i]
//     }
//     return sum
// }
// console.log(getN)

// 9
// Написать функцию, которая выводит все четные или не-
// четные числа, в указанном пользователем диапазоне. Какие
// числа выводить, определяется третьим параметром типа
// bool (true – четные, false – нечетные).

// let inputNumber = parseFloat(prompt('Введите диапазон чисел, а я выведу все четные или нечетные', '10') as string)
// let inputNumber2 = parseFloat(prompt('Введите второе число в диапазоне', '20') as string)
// let oddEven = !!prompt('Четные (1) или нечетные (отмена)??')

// function showOddOrEven(inputNumber: any, inputNumber2: any, oddEven: any) {
//   for (let i = inputNumber; i <= inputNumber2; i++) {
//     if (oddEven) {
//       if (i % 2 !== 0) {
//         console.log(i)
//       }
//     } else {
//       if (oddEven % 2 == 0) {
//         console.log(i)
//       }
//     }
//   }
//   return
// }
// showOddOrEven(inputNumber, inputNumber2, oddEven)


// 10 Написать функцию, которая принимает дату (день, месяц,
//   год) и возвращает дату следующего дня в виде строки
//   «дд.мм.гггг». Проверку на високосный год желательно
//   написать отдельной функцией.

// let day = parseFloat(prompt('Введите текущее число, месяц, год, а я выведу следующий', '10') as string)
// let month = parseFloat(prompt('Месяц,', '11') as string)
// let year = parseFloat(prompt('Год,', '2023') as string)


// function isLeapYear(year: number): boolean {
//   if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){

//   }
//   return 
// }

// function shownextDate(day: number, month: number, year: number) {
//   if (month == 2) {
//     if (isLeapYear(year) && day == 28) {
//       day = 1;
//     } else if (!isLeapYear(year) && day == 28) {
//       day = 1;
//       month = 3;
//     } else if (day === 29) {
//       day = 1;
//       month = 3;
//     } else {
//       day++;
//     }
//   } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 30) {
//     day = 1;
//     month++;
//   } else if (day === 31) {
//     day = 1;
//     if (month === 12) {
//       month = 1;
//       year++;
//     } else {
//       month++;
//     }
//   } else {
//     day++;
//   }

//   alert(`${day}.${month}.${year}`);
// }

// shownextDate(day, month, year);



// 1
// Написать функцию, которая вычисляет факториал задан-
// ного числа.


// let intNumber = parseFloat(prompt('Введите число, а я посчитаю его факториал','')as string)
// function factorial(intNumber:number){
//     return (intNumber == 1) ? intNumber : intNumber * factorial(intNumber - 1)
// }
// alert(factorial(intNumber))


// let uName = ''
// let toDos = [] as string[]

// const appDiv = document.getElementById('app')
// // if (appDiv) appDiv.innerHTML += `<p>Добро пожаловать на сайт</p>`
// function render() {
//   let isLogin = Boolean(uName)
//   if (appDiv) appDiv.innerHTML = ''
//   const pElelement = document.createElement('p')
//   pElelement.textContent = uName ? `${uName}, добро пожаловать на сайт` : `Добро пожаловать на сайт`
//   if (appDiv) appDiv.appendChild(pElelement) 

//   const button = document.createElement('button')
//   button.textContent = isLogin ? 'LogOut' : 'Login'
//   button.addEventListener('click', ()=>{
//     uName = isLogin ? '' : 'Niko'
//     toDos = !isLogin ? ['проснуться', 'позавтракать', 'умыться', 'работать', 'лечь спать'] : []
//     render()
//   })
//   if (appDiv) appDiv.appendChild(button) 
//   if (isLogin) {
//     const olElement = document.createElement('ol')
// for (let i=0;i<toDos.length;i++) {
//   const listElement = document.createElement('li')
//   listElement.textContent = toDos[i]
//   olElement.appendChild(listElement)
// }
//     for (let el of toDos) {
//       const listElement = document.createElement('li')
//       listElement.textContent = el
//       olElement.appendChild(listElement)
//     }
//     if (appDiv) appDiv.appendChild(olElement)
//   }
// }

// render()



// 3
// Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321
// let userNumbInt = parseFloat(prompt('Введите любое число, а я выведу его наоборот','1234')as string)
// let revertNumbers = [] 
// function revertFunction (num){
//   const numStr = num.toString()
//   const reversedStr = numStr.split('').reverse('').join('')
//   const reversedNum = parseFloat(reversedStr)
//   return reversedNum as any

// }
// const reversed = revertFunction(userNumbInt);
// alert('Вот ваше число наоборот: ' + reversed);


// 1
// Написать функцию возведения числа в степень.
// let number = 4
// let result:any
// function solveDegree (result:any){
//   if(number == 1){

//   } else{
//     result = number**number
//   }
//   return result
// }
// console.log(solveDegree(result))

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// let feauters = {}as any
// function isEmpty(feauters:any){
//   for(let keys in feauters){
//     keys
//     return false 
//   }
//  return true
// }
// alert (isEmpty(feauters))
// feauters['age'] = 22
// alert(isEmpty(feauters))

// Сумма свойств объекта

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pette: 130
// } as any
// let result=0;
// for (let key in salaries){
//   result += salaries[key]
// }
// console.log(result)


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// const objectOfNumbers = {
//   salaryGuy: 1_200,
//   anotherSalary: 1_000,
//   title: 'My salary',
// }
// function multiplyNumeric(objectOfNumbers:any){
//   for(let key in objectOfNumbers){
//     if(typeof objectOfNumbers[key] === 'number'){
//       objectOfNumbers[key] *= 2
//     }
//   }
//   console.log(objectOfNumbers)
// }
// multiplyNumeric(objectOfNumbers)

// Создать объект, описывающий прямоугольник (хранит коор-
//   динаты левой верхней и правой нижней точек), и написать следу-
//   ющие функции для работы с таким объектом.

// type Rect = {
//   x0:number,
//   y0:number,
//   x1:number,
//   y1:number,
// }

// const rect:Rect = {
//   x0:50,
//   y0:50,
//   x1:100,
//   y1:100,
// }

// const rectDiv = document.getElementById('rect')

// const moveLeftTopButton = document.getElementById('moveLeftTop')
// moveLeftTopButton?.addEventListener('click', () => { changeRectPosition(rect, -10, -10) })
// const moveTopButton = document.getElementById('moveTop')
// moveTopButton?.addEventListener('click', () => { changeRectPositionY(rect, -10) })
// const moveRightTopButton = document.getElementById('moveRightTop')
// moveRightTopButton?.addEventListener('click', () => { changeRectPosition(rect, 10, -10) })
// const moveLeftButton = document.getElementById('moveLeft')
// moveLeftButton?.addEventListener('click', () => { changeRectPositionX(rect, -10) })
// const moveRightButton = document.getElementById('moveRight')
// moveRightButton?.addEventListener('click', () => { changeRectPositionX(rect, 10) })
// const moveLeftBottomButton = document.getElementById('moveLeftBottom')
// moveLeftBottomButton?.addEventListener('click', () => { changeRectPosition(rect, -10, 10) })
// const moveBottomButton = document.getElementById('moveBottom')
// moveBottomButton?.addEventListener('click', () => { changeRectPositionY(rect, 10) })
// const moveRightBottomButton = document.getElementById('moveRightBottom')
// moveRightBottomButton?.addEventListener('click', () => { changeRectPosition(rect, 10, 10) })

// const squeezeX = document.getElementById('squeezeX')
// squeezeX?.addEventListener('click', () => { changeRectWidth(rect, -10) })
// const expandX = document.getElementById('expandX')
// expandX?.addEventListener('click', () => { changeRectWidth(rect, 10) })
// const squeezeY = document.getElementById('squeezeY')
// squeezeY?.addEventListener('click', () => { changeRectHeight(rect, -10) })
// const expandY = document.getElementById('expandY')
// expandY?.addEventListener('click', () => { changeRectHeight(rect, 10) })


// console.log(rectDiv)
// function renderRect(rect:Rect) {
//   if (rectDiv) {
//     rectDiv.style.top = rect.y0 + 'px'
//     rectDiv.style.left = rect.x0 + 'px'
//     rectDiv.style.width = getRectWidth(rect) + 'px'
//     rectDiv.style.height = getRectHeight(rect) + 'px'
//   }
// }
// renderRect(rect)

// // 1 Функция принимает объект - прямоугольник и выводит
// // информацию о нем(где какая точка расположена).

// function showRectInfo(rect: Rect) {
//   console.log(`top-left (${rect.x0}, ${rect.y0}) bootom-rigth (${rect.x1}, ${rect.y1})`)
// }
// showRectInfo(rect)

// // 2 Функция принимает объект - прямоугольник и возвращает
// // его ширину.

// function getRectWidth(rect: Rect) {
//   return rect.x1 - rect.x0
// }

// // 3 Функция принимает объект - прямоугольник и возвращает
// // его высоту.

// function getRectHeight(rect: Rect) {
//   return rect.y1 - rect.y0
// }

// // 4 Функция принимает объект - прямоугольник и возвращает
// // его площадь.

// function getRectArea(rect: Rect) {
//   return getRectWidth(rect) * getRectHeight(rect)
// }
// console.log(`площадь прямоугольника ${getRectArea(rect)}px`)

// // 5 Функция принимает объект - прямоугольник и возвращает
// // его периметр.

// function getRectPerimetr(rect: Rect) {
//   return getRectWidth(rect) * 2 + getRectHeight(rect) * 2 
// }
// console.log(`периметр прямоугольника ${getRectPerimetr(rect)}px`)

// // 6 Функция изменения ширины прямоугольника.Она прини -
// // мает объект - прямоугольник и на сколько единиц изменить
// // ширину.

// function changeRectWidth(rect: Rect, n:number) {
//   rect.x1 += n
//   renderRect(rect)
// }

// // 7 Функция изменения высоты прямоугольника.Она прини -
// // мает объект - прямоугольник и на сколько единиц изменить
// // высоту.

// function changeRectHeight(rect: Rect, n: number) {
//   rect.y1 += n
//   renderRect(rect)
// }

// // 8 Функция изменения ширины и высоты прямоугольника.
// // Она принимает объект - прямоугольник и два значения –
// // для изменения ширины и высоты.

// function changeRectWidthAndHeight(rect: Rect, x: number, y:number) {
//   changeRectWidth(rect, x)
//   changeRectHeight(rect, y)
//   renderRect(rect)
// }

// // 9 Функция смещения прямоугольника по оси X.Она при -
// // нимает объект - прямоугольник и на сколько единиц его
// // сдвинуть.

// function changeRectPositionX(rect: Rect, n: number) {
//   rect.x0 += n
//   rect.x1 += n
//   renderRect(rect)
// }

// // 10 Функция смещения прямоугольника по оси Y.Она при -
// // нимает объект - прямоугольник и на сколько единиц его
// // сдвинуть.

// function changeRectPositionY(rect: Rect, n: number) {
//   rect.y0 += n
//   rect.y1 += n
//   renderRect(rect)
// }

// // 11 Функция смещения прямоугольника и по оси X и по
// // оси Y.Она принимает объект - прямоугольник и два значе -
// // ния: сдвиг по оси X и сдвиг по оси Y.

// function changeRectPosition(rect: Rect, x: number, y: number) {
//   changeRectPositionX(rect, x)
//   changeRectPositionY(rect, y)
//   renderRect(rect)
// }

// 12 Функция для проверки, находится ли точка внутри пря -
// моугольника.Она принимает объект - прямоугольник и
// координаты точки.

// Создайте объект library, который будет представлять библиотеку. Библиотека должна хранить информацию о книгах.

// const library = {

// }
// library.book1 = {
//   title: 'Красаная таблетка',
//   author: 'Курпатов',
//   year: '2017',
// }
// library.book2 = {
//   title: 'Хирург',
//   author: 'Тесс Геритсен',
//   year: 2001
// }
// function listBooks(library:any) {
//   for (let bookKey in library) {
//     if (library.hasOwnProperty(bookKey)) {
//       const book = library[bookKey];
//       console.log(`Название: ${book.title}, Автор: ${book.author}, Год издания: ${book.year}`);
//     }
//   }
// }
// listBooks(library)


// function addBook(library, title, author, year){
//   const newBookKey = `book${Object.keys(library).length + 1}`;
//   library[newBookKey] = {
//     title: title,
//     author: author,
//     year: year,
//   }
// }
// addBook(library,'Гарри Поттер и филосовский камень','Джоан Роулинг',1997)
// listBooks(library)



// Создать объект, описывающий автомобиль (производитель,
//   модель, год выпуска, средняя скорость), и следующие функции
//   для работы с этим объектом.
// const carInfo:any = {
//   car0:{
//   manufacturer: 'Ferrari',
//   model:'Spyder',
//   yearOfRelease: 1999,
//   averageSpeed: 150, 
//   },
//   car1: {
//     manufacturer: 'Toyota',
//     model: 'Camry',
//     yearOfRelease: 2020,
//     averageSpeed: 60,
//   },
//   car2: {
//     manufacturer: 'Honda',
//     model: 'Civic',
//     yearOfRelease: 2019,
//     averageSpeed: 55,
//   },
// }

//   1
//   Функция для вывода на экран информации об автомобиле.
// function showInfoAboutCar(carInfo:any){
//   for(let infoCar in carInfo){
//       const car = carInfo[infoCar]
//       console.log(`Производитель ${car.manufacturer}, Модель ${car.model}, Год производства ${car.yearOfRelease}, Средняя скорость ${car.averageSpeed} `)
//   }
// }
// showInfoAboutCar(carInfo)
// //   2
// //   Функция для подсчета необходимого времени для пре-
// //   одоления переданного расстояния со средней скоростью.
// //   Учтите, что через каждые 4 часа дороги водителю необхо-
// //   димо делать перерыв на 1 час.
// let distance = 20
// function caclOvercomingTheDistance(distance: number, carInfo: any) {
//   for (let carKey in carInfo) {
//     const car = carInfo[carKey]
//     const timeWithoutStops = distance / car.averageSpeed
//     const timeWithStops = timeWithoutStops + Math.floor(timeWithoutStops/4)
//     console.log(`На автомобиле ${car.manufacturer} ${car.model} ${car.yearOfRelease} года выпуска, для преодоления дистанции в ${distance} км. с олтдыхом каждые 4 часа пути, потребуется ${timeWithStops.toFixed(2)} ч.`)
//     console.log(`Без остановок эту дистанцию можно преодолеть за ${timeWithoutStops.toFixed(2)} ч.`)
//   }  
// }
// caclOvercomingTheDistance(800, carInfo)
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
const listProducts = [
  {
    name: 'Pasta',
    quantity: 2,
    purchased: true,
  },
  {
    name: 'Meat',
    quantity: 3,
    purchased: false,
  },
  {
    name: 'Sauce',
    quantity: 1,
    purchased: false,
  },
]

const nameInput = document.getElementById('name') as HTMLInputElement
const quantityInput = document.getElementById('quantity') as HTMLInputElement
const addButton = document.getElementById('add') as HTMLElement
const purshasesDiv = document.getElementById('purshases') as HTMLElement

purshasesDiv.addEventListener('click', (event) => {
  const target = event.target as HTMLElement
  if (target.tagName != 'BUTTON') return
  togglePurchased(listProducts, target.dataset.name)
})

addButton.addEventListener('click', () => {
  addPurchase(listProducts, nameInput.value, +quantityInput.value)
  nameInput.value = ''
  quantityInput.value = ''
})

function showProducts(listProducts: any) {
  purshasesDiv.innerHTML = ''
  // Вывод некупленных продуктов
  purshasesDiv.innerHTML += '<p>Некупленные продукты:</p><ol>'
  for (let product of listProducts) {
    if (!product.purchased)
      purshasesDiv.innerHTML += `<li>Название: ${product.name}, Количество: ${product.quantity} 
    <button data-name="${product.name}">V</button></li>`
  }
  purshasesDiv.innerHTML += '</ol>'

  // Вывод купленных продуктов
  purshasesDiv.innerHTML += '<p>Купленные продукты:</p><ol>'
  for (let product of listProducts) {
    if (product.purchased)
      purshasesDiv.innerHTML += `<li>Название: ${product.name}, Количество: ${product.quantity}
    <button data-name="${product.name}">X</button></li>`
  }
  purshasesDiv.innerHTML += '</ol>'
}
showProducts(listProducts)



// 2
// Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.    
function addPurchase(listProducts: any, productName: string, quantity: number) {
  for (let product of listProducts) {
    if (product.name == productName) {
      product.quantity += quantity
      showProducts(listProducts)
      return
    }
  }
  listProducts.push({
    name: productName,
    quantity,
    purchased: false,
  })
  showProducts(listProducts)
}
// 3
// Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
function togglePurchased(listProducts: any, productName: string | undefined) {
  for (let product of listProducts) {
    if (product.name == productName) {
      product.purchased = !product.purchased
      showProducts(listProducts)
    }
  }
}





// let styles = ['Джаз', 'Блюз']


// styles.push('Рок-н-ролл')
// console.log(styles)


// function findCenter(styles){
//   let centerIndex = Math.floor(styles.lenght/2)
//   styles[centerIndex] = 'Классика'
// }
// findCenter(styles)
// // Удалите первый элемент массива и покажите его.


// console.log(styles.shift())

// // Вставьте Рэп и Регги в начало массива.

// styles.unshift('Реп и Регги')
// console.log(styles)





// // Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8]
// arr.sort(function(a,b){
//   return b - a
// })
// console.log(arr)


// // Отсортировать пользователей по возрасту
// // важность: 5
// // Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// let arrayOfData = [
// { name: "Вася", age: 25 },
// { name: "Петя", age: 30 },
// { name: "Маша", age: 28 },
// ]



// function sortByAge(arrayOfData:any){
//   arrayOfData.sort((a,b) => a.age - b.age)
//   console.log(arrayOfData)
// }
// sortByAge(arrayOfData)



// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// let arrR = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", ":-O"]

// function unique(arr:string[]) {
//   let newArr = [] as any
//   for(let i = 0; i<arr.length; i++){
//    if (!newArr.includes(arr[i])){
//     newArr.push(arr[i])
//    }
//   }
//   return newArr;
// }
// let uniqueArr = unique(arrR)
// console.log(uniqueArr)





// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// function reduceFunc(users:any){
//   const newObj = {} as any
//   for(let el of users){
//     newObj[el.id] = el
//   }
//   return newObj
// }
// const reduceObj = users.reduce((a:any,el) => {
//   a[el.id]=el
//   return a
// },{})
// // const reduceObj = users.reduce((a:any,el:any) => {
// //   a[el.id] = el
// //   return a
// // },{})
// console.log(reduceObj)
// console.log(reduceFunc(users))


// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 

function shuffle(arr: any) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
let arr2 = [1, 2, 3]
shuffle(arr2)
console.log(arr2)

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySortedArr(arr3: any) {
  const newArray = arr3.slice().sort()
  console.log(newArray)
  return newArray

}
copySortedArr(arr3)

// Сортировать в порядке по убыванию
// важность: 4
let arrToSort = [5, 2, 1, -10, 8];
function sorting(arrToSort: any) {
  arrToSort.sort(function (a:any, b:any) {
    return b - a
  })
  console.log(arrToSort)
}
sorting(arrToSort)

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

let arrToFilter = [5, 3, 8, 1];
let a = 2
let b = 5
function filterFunc(arrToFilter: any, a: any, b: any) {
  let filtered = arrToFilter.filter(function (item: any) {
    return item >= a && item <= b;
  })

  console.log(filtered)
}
filterFunc(arrToFilter, a, b)
console.log(arrToFilter)


// Слияние массивов с условием: У вас есть два массива чисел. Создайте новый массив, в котором будут только те элементы, которые есть и в первом, и во втором массиве.
let arrNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 29, 14, 30, 25, 90]
let arrNumbs2 = [2, 5, 7, 20, 25, 29, 30, 70, 87]

let newArrOfNumbs = [] as any
function mergeArrays(arrNumbs: any, arrNumbs2: any) {
  arrNumbs.forEach((element: any) => {
    if (arrNumbs2.includes(element) && !newArrOfNumbs.includes(element)) {
      newArrOfNumbs.push(element)
    }
  });
  // или можно юзать indexOf
  console.log(newArrOfNumbs)
}
mergeArrays(arrNumbs, arrNumbs2)

// Обратный порядок: Создайте функцию, которая принимает массив и возвращает новый массив, элементы которого идут в обратном порядке.

let arrRev = [1, 2, 3, 4, 5, 6, 7] 
function reverse(arrRev:any) {
  arrRev.reverse()
  console.log(arrRev)
}
reverse(arrRev)

// Карта объектов в массив: Преобразуйте массив объектов в массив значений определенного свойства объектов. Например, если у вас есть массив объектов с свойством "возраст", создайте массив, содержащий все значения возрастов.
let users = [
  {
    name: 'john',
    city: 'sochi',
    age: 15,
    sex: 'male',
  },
  {
    name: 'Roman',
    city: 'Krasnodar',
    age: 19,
    sex: 'male',
  },
  {
    name: 'Ann',
    city: 'Italy',
    age: 30,
    sex: 'female',
  },
  {
    name: 'James',
    city: 'new york',
    age: 20,
    sex: 'male',
  }
]
let ageArr = [] as any
function pushAgeArr(users: any) {
  ageArr = users.map((el: { age: any }) => el.age)
  console.log(ageArr)
}
pushAgeArr(users)




// Поиск наиболее часто встречающегося элемента: Напишите функцию, которая находит элемент, который встречается наибольшее количество раз в массиве.
// Слияние и фильтрация массивов объектов: У вас есть два массива объектов





// // Агрегирование данных: У вас есть массив объектов с числовыми значениями (например, продажами товаров за месяц). 
// Найдите сумму, среднее и максимальное значение этих числовых данных.
let arrayOfGoods = [
  {
    name: 'vans knew school',
    quantity: 1,
    price: 15600
  },
  {
    name: 'adidas campus',
    quantity: 1,
    price: 17400
  },
  {
    name: 'nike air trainer',
    quantity: 1,
    price: 22300
  },
] as any
function averagePrice(arrayOfGoods: any) {
  const agregate = {
    sum: 0,
    average: 0,
    max: 0
  }
  agregate.sum = arrayOfGoods.reduce((sum: number, el: any) => sum += el.quantity * el.price, 0)
  agregate.average = agregate.sum / arrayOfGoods.length
  agregate.max = Math.max(...arrayOfGoods.map((el: any) => el.quantity * el.price))
  return agregate
}
console.log(averagePrice(arrayOfGoods))

console.log('Object.keys(arrayOfGoods[0])')
for (let el of Object.keys(arrayOfGoods[0])) {
  console.log(el, arrayOfGoods[0][el])
}
console.log('Object.values(arrayOfGoods[0])')
for (let el of Object.values(arrayOfGoods[0])) {
  console.log(el)
}
console.log('Object.entries(arrayOfGoods[0])', Object.entries(arrayOfGoods[0]))
for (let el of Object.entries(arrayOfGoods[0])) {
  console.log(el, el[0], el[1])
}



// Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.


let str = 'Стол'
function palindromCheck(str: string) {
  const i = Math.floor(str.length / 2)
  if (str.length % 2 == 0) {
    return str.slice(0, i) == str.slice(i + 1).split('').reverse().join('')
  }
  else {
    return str.slice(0, i) == str.slice(i).split('').reverse().join('')
  }

}
console.log(palindromCheck(str))


// 7
// Написать функцию, которая считает количество слов в
// предложении.


let sentence = 'Привет мир'

function countWords(sentence: string) {
  let letters = sentence.slice()
  console.log(letters.length)
}
countWords(sentence)




// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
function inBetween(a: number, b: number) {
  return function (x: any) {
    return x >= a && x <= b
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredArray = arr.filter(inBetween(5, 9))
console.log(filteredArray)
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
let filterArr = [1, 2, 5] as any
function inArray(arrToFilter: any, filterArr: any) {
  return arrToFilter.filter(function (el: any) {
    return filterArr.includes(el)
  })
}

let filteredInArr = inArray(arrToFilter, filterArr)
console.log(filteredInArr)




function makeArmy() {
  let shooters = [];

  let i = 0;
  for (let j = i; j < 10; j++) {
    let shooter = function () { // функция shooter
      console.log(j) // должна выводить порядковый номер
    }
    shooters.push(shooter) // и добавлять стрелка в массив

  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.




// Обратный порядок: Напишите функцию, которая переворачивает порядок элементов в массиве.
let arrayReverse = [2, 3, 1, 8, 6, 4, 7, 4, 9]

function filterReverse(arrayReverse: any) {
  arrayReverse.sort((a: any, b: any) => b - a)
  console.log(arrayReverse)
}
filterReverse(arrayReverse)


// 8
// Написать функцию, которая возвращает самое длинное
// слово из предложения.

let phrase = 'Привет я недопрограммист помогите мне изучить js'
function mostLenghtWord(phrase: string) {
  let lenghtW = phrase.split(' ')
  let resultWord = ''
  lenghtW.forEach(el => {
    if (el.length > resultWord.length) {
      resultWord = el
    }
  });
  return resultWord
}
const resultWord = mostLenghtWord(phrase)
console.log(`Это слово самое длинное - '${resultWord}'`)



// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// let cheque = [
//   {
//     name:'Наушники airpods max',
//     quantity: 1,
//     price: 55000,
//   },
//   {
//     name:'Iphone 14 PRO 128',
//     quantity: 1,
//     price: 55000,
//   },
//   {
//     name:'Charger',
//     quantity: 2,
//     price: 4500,
//   }
// ]
// // 1 Распечатка чека на экран.
// function chequeOutput(cheque:any){
//   alert(`  Название вашего товара ${cheque[0].name},
//   Количество: ${cheque[0].quantity},
//   Цена товара - ${cheque[0].price},

//   Название вашего товара ${cheque[1].name},
//   Количество: ${cheque[1].quantity},
//   Цена товара - ${cheque[1].price},

//   Название вашего товара ${cheque[2].name},
//   Количество: ${cheque[2].quantity},
//   Цена товара - ${cheque[2].price}`)
// }
// chequeOutput(cheque)

// // 2 Подсчет общей суммы покупки.
// function totalAmount(cheque:any){
//   let totalPrice = 0
//   cheque.forEach(element => {
//     totalPrice += element.quantity * element.price
//   });
//   alert(`Сумма вашей покупки составит - ${totalPrice}`)
// }
// totalAmount(cheque)
// // 3 Получение самой дорогой покупки в чеке.
// function mostExpensive(cheque:any){
//   let mostExpensiveGood = null as any
//   cheque.forEach(element => {
//    if(!mostExpensiveGood || element.price > mostExpensiveGood.price){
//     mostExpensiveGood = element
//    }
//   });
//   return mostExpensiveGood
// }

// const mostExpensiveItem = mostExpensive(cheque);

// if (mostExpensiveItem) {
//   alert(`Самая дорогая покупка: ${mostExpensiveItem.name}, Цена: ${mostExpensiveItem.price} руб.`);
// } else {
//   alert('Чек пуст.');
// }
// // 4 Подсчет средней стоимости одного товара в чеке.
// function averageAmount(cheque:any){
//   let averagePrice = cheque.price / 2 
//   alert(`Средняя цена за товар составит - ${averagePrice}`)
// }
// averageAmount(cheque)




// Задание 1
// Реализовать класс, описывающий окружность. В классе долж-
// ны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
class circle {
  private radius = 0 as number
  constructor(radius: number) {
    this.radius = radius
  }
  // ■ get-свойство, возвращающее радиус окружности;
  get Radius() {
    return this.radius
  }
  // ■ set-свойство, устанавливающее радиус окружности;
  set Radius(valR) {
    this.radius += valR
  }
  // ■ get-свойство, возвращающее диаметр окружности;
  get Diameter() {
    return this.radius * 2
  }
  // ■ метод, вычисляющий площадь окружности;
  calculateArea() {
    return Math.floor(Math.PI * this.radius * this.radius)
  }
  // ■ метод, вычисляющий длину окружности.
  calculateCircumference() {
    return Math.floor(2 * Math.PI * this.radius)
  }
}
const myCircle = new circle(5)
// Продемонстрировать работу свойств и методов.
console.log(`Радиус окружности: ${myCircle.Radius}`)
console.log(`Диаметр окружности: ${myCircle.Diameter}`)
console.log(`Площадь окружности: ${myCircle.calculateArea()}`)
console.log(`Длина окружности: ${myCircle.calculateCircumference()}`)





// Задание 2
// Реализовать класс, описывающий html элемент.
// Создаем экземпляр класса HtmlElement
// Добавляем атрибут и стиль
// ■ метод для добавления вложенного элемента в начало те-
// кущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().
// Обратите внимание. Чтобы получить весь этот html в виде
// строки должно быть достаточно вызвать метод getHtml только
// у тега с идентификатором wrapper.
// class HtmlElement {
//   tag: string
//   paired: boolean
//   text: string
//   attrs: string[] = []
//   styles: string[] = []
//   htmlElements: HtmlElement[] = []
//   constructor(tag: string, paired: boolean, text: string) {
//     this.tag = tag
//     this.paired = paired
//     this.text = text
//   }
//   setAttr(name: string, value: string) {
//     this.attrs.push(`${name}="${value}"`)
//   }
//   setStyle(name: string, value: string) {
//     this.styles.push(`${name}:${value}`)
//   }
//   append(element: HtmlElement) {
//     this.htmlElements.push(element)
//   }
//   prepend(element: HtmlElement) {
//     this.htmlElements.unshift(element)
//   }
//   getHtml(): string {
//     if (this.styles.length) {
//       this.setAttr('style', this.styles.join(';'))
//     }
//     if (this.paired) {
//       return `<${this.tag} ${this.attrs.join(' ')}>${this.text}
// ${this.htmlElements.map(el => el.getHtml()).join('')} 
// </${this.tag}>`
//     } else {
//       return `<${this.tag} ${this.attrs.join(' ')}>`
//     }
//   }
// }

// const wrapper = new HtmlElement('div', true, '')
// wrapper.setAttr('id', 'wrapper')

// const innerDiv = new HtmlElement('div', true, '')

// const h3 = new HtmlElement('h3', true, 'What is Lorem Ipsum?')
// const img = new HtmlElement('img', false, '')
// img.setAttr('src', 'https://img.goodfon.com/original/1280x1024/7/9a/cvety-cvetok-buket-priroda.jpg')
// img.setAttr('alt', 'Lorem Ipsum')

// const p = new HtmlElement('p', true, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias harum fuga magni quasi ex pariatur reprehenderit laudantium esse. Veritatis maiores qui fugiat nostrum, quo nihil sit recusandae aspernatur incidunt dolore.')

// const href = new HtmlElement('a', true, 'More...')
// href.setAttr('href', 'https://www.lipsum.com/')
// href.setAttr('target', '_blank')

// p.append(href)
// innerDiv.append(h3)
// innerDiv.append(img)
// innerDiv.append(p)
// wrapper.append(innerDiv)
// wrapper.append(innerDiv)
// document.body.insertAdjacentHTML('beforeend', wrapper.getHtml())



// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде стро-
// ки.

class CssClass {
  nameClass: string
  arrStyles: string[] = []
  constructor(nameClass: string) {
    this.nameClass = nameClass
  }
  setStyle(key: any, value: any) {
    this.arrStyles.push(`${key}:${value};`)
  }
  deleteStyle(key: any, value: any) {
    const i = this.arrStyles.indexOf(`${key}:${value}`)
    if (i != -1) this.arrStyles.splice(i, 1)
  }
  getCss(): string {
    return `.${this.nameClass} {${this.arrStyles.join('')}}`
  }
}
const dFlex = new CssClass('wrap')
dFlex.setStyle('display', 'flex')
console.log(dFlex.getCss())


// class HtmlBlock{
//   cssClasses: [] = CssClass[] = []
//   rootElement:HtmlElement | null = null
// }





























// Сколько сегодня прошло секунд?
// важность: 5
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:


function getSecondsToday(date: Date) {
  return date.getHours() * 3600 +
    date.getMinutes() * 60 +
    date.getSeconds()
}
function getSecondsTodayRemaining(date: Date) {
  return 24 * 3600 - getSecondsToday(date)
}
function getHoursToday(date: Date) {
  return 24 - date.getHours()
}
function getHoursTodayRemaining(date: Date) {
  return 24 - getHoursToday(date)
}


console.log(`Секунд в данный момент прошло с начала дня - ${getSecondsToday(new Date())}`)
console.log(`Секунд осталось до конца дня - ${getSecondsTodayRemaining(new Date())}`)

console.log(`Часов в данный момент прошло с начала дня - ${getHoursToday(new Date())}`)
console.log(`Часов осталось до конца дня - ${getHoursTodayRemaining(new Date())}`)





// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// function formatDate(date:Date){
//   // Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".


function formatDate(date: Date) {
  const now = Date.now();
  const diff = now - date.getTime();

  if (diff < 5 * 60 * 1000) {
    return `${Math.floor(diff / 1000)} прямо сейчас`;
  } else if (diff < 60 * 1000) {
    return `${Math.floor(diff / 1000)} сек. назад`;
  } else if (diff < 60 * 60 * 1000) {
    return `${Math.floor(diff / (60 * 1000))} мин. назад`;
  } else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date().getTime() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date().getTime() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date().getTime() - 5 * 60 * 1000))); // "5 мин. назад"

// console.log(formatDate(newDate(new Date().getTime)))
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date().getTime() - 86400 * 1000)));
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.







// Последнее число месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
function getLastDayOfMonth(year: number, month: number) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}
console.log(getLastDayOfMonth(2012, 2))




function getDateAgo(date: Date, days: any) {
  date.setDate(date.getDate() - days)
  return date.getDate()
}
let date = new Date(2015, 0, 2)
console.log(getDateAgo(date, 2))



// // Форматирование даты: Создайте функцию, которая принимает объект Date и возвращает дату в более человекочитаемом формате, 
// например, "12 октября 2023 года".
function formatDate2(date1: Date) {
  const day = date1.getDate();
  const month = date1.toLocaleString('ru', { month: 'long' });
  const year = date1.getFullYear();

  return `${day} ${month} ${year} года`;
}

const date1 = new Date();
console.log(formatDate2(date1));



// Проверка на наступившую дату:
// Напишите функцию, которая принимает дату и проверяет, наступила ли она уже.
function isDateNow(targetDate: any) {
  let dateT = new Date()
  if (targetDate < dateT || targetDate > dateT) {
    return false
  }
  else if (targetDate == dateT) {
    return true
  }
}
const eventDate = new Date()
const result = isDateNow(eventDate)
isDateNow(eventDate)
if (result) {
  console.log('Ваша дата еще не наступила')
}
else {
  console.log('УРА, ваша дата наступила')
}


class Animal {
  name
  speed
  constructor(name: string) {
    this.speed = 0;
    this.name = name;
  }
  run(speed: number) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}


class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbit = new Rabbit("Белый кролик");


console.log(rabbit.name)
console.log(rabbit.speed)
rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!




// Задание 1
// Реализовать класс Button, который содержит ширину, высоту,
// текст кнопки и метод showBtn(), который выводит кнопку на экран
// с помощью тега button и функции document.write().
// Реализовать класс BootstrapButton, унаследовав его от класса
// Button. Добавить поле color и переопределить метод showBtn()
// так, чтобы кнопка выводилась со стилями и указанным цветом.
const buttonsDiv = document.getElementById('buttons') as HTMLDivElement

class Button {
  width
  height
  textButton
  constructor(width: number, height: number, textButton: string) {
    this.width = width
    this.height = height
    this.textButton = textButton
  }
  showBtn() {
    buttonsDiv.innerHTML += `<button style="width: ${this.width}px; height:${this.height}px">${this.textButton}</button>`
  }
}
class BootstrapButton extends Button {
  color
  constructor(width: number, height: number, textButton: string, color: string) {
    super(width, height, textButton)
    this.color = color
  }
  showBtn() {
    buttonsDiv.innerHTML += `<button style="width: ${this.width}px; height:${this.height}px; background-color: ${this.color};">${this.textButton}</button>`
  }
}
const btn1 = new Button(50, 50, 'red')
btn1.showBtn()
const btn2 = new BootstrapButton(50, 50, 'red', 'red')
btn2.showBtn()



// Реализовать класс, описывающий геометрическую фигуру со
// свойствами и методами:
// ■ get-свойство для получения названия фигуры;
// ■ метод для вывода информации о фигуре (стороны и их
// длина);
// ■ метод для вычисления площади фигуры;
// ■ метод для вычисления периметра фигуры.
// Реализуйте классы-наследники: квадрат, прямоугольник и
// треугольник. Переопределите методы вывода и вычислений в
// классах-наследниках.
// Создайте массив с различными фигурами и выведите инфор-
// мацию о каждой фигуре, включая площадь и периметр.


class Figure {
  get name() {
    return ''
  }
  getSquare(): null | number {
    return null
  }
  getPerimeter(): null | number {
    return null
  }
  getInfo() {
    return ''
  }
}
class Square extends Figure {
  _name = 'square'
  side
  constructor(side: number) {
    super()
    this.side = side
  }
  get name() {
    return this._name
  }
  getSquare() {
    return this.side ** 2
  }
  getPerimeter() {
    return this.side * 4
  }
  getInfo() {
    return `${this._name} width side ${this.side} square = ${this.getSquare()} perimeter = ${this.getPerimeter()}`
  }
}
const squareCall = new Square(12)
console.log(squareCall.getInfo())


// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.
const markerInput = document.getElementById('marker') as HTMLInputElement
const typeMarker = document.getElementById('type_marker') as HTMLDivElement
const refuillButton = document.getElementById('refill') as HTMLButtonElement
class Marker {
  color
  ink = 100
  constructor(color: string, ink: number) {
    this.color = color
    this.ink = ink
  }
  draw(data: string) {
    typeMarker.innerHTML += `<span style="opacity: ${this.ink / 100}; color:${this.color}">${data}</span>`
    if (data != ' ') this.ink -= 0.5
  }
  refuill() {
    console.log(this.ink)
    this.ink = 100
  }
}
const myMarker = new Marker("red", 80);

refuillButton.addEventListener('click', (e) => {
  // @ts-ignore
  if (e.target.id == 'refill') {

    console.log(myMarker.ink)
    myMarker.refuill()

  }
})


markerInput.addEventListener('input', (e) => {
  const inputEvent = e as InputEvent
  if (inputEvent.inputType == 'insertText') {
    if (typeof inputEvent.data == 'string') myMarker.draw(inputEvent.data)
  }
})
// При вызове typeMarker() цвет будет установлен в синий




// Реализуйте класс ExtendedDate, унаследовав его от стандарт-
// ного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если буду-
// щая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.


class ExtendedDate extends Date {

  printText() {
    const day = this.getDate();
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    console.log(this,day,months)
  }
}

console.log((new ExtendedDate).printText)





let omg = (null + 'a').split('ll').join('tell')
console.log(omg)



let createCounter = function (n: number) {
  let count = n
  let isFalse = false
  return function () {
    return isFalse ? (count += 1) : (isFalse = true, count)
  }
}
const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())



//     if(isFalse){
//       isFalse = false 
//       return count
//   }
//   else{
// count += 1
// return count
//   }



const digitsDiv = document.querySelector('.password') as HTMLDivElement
let inputDiv = document.querySelector('div.password_input') as HTMLDivElement
const pushPassStatus = document.querySelector('.window_info_password') as HTMLDivElement
const showTrueMessage = document.querySelector('.text_message') as HTMLDivElement
const pTime = document.querySelector('.time') as HTMLParagraphElement
const pDate = document.querySelector('.date') as HTMLParagraphElement
const lockButton = document.querySelector('.lock') as HTMLButtonElement
let pass = ''
function getDateAndTime() {
  const newD = new Date()
  let hours = newD.getHours()
  let minutes = newD.getMinutes()
  let hoursString = (hours < 10) ? "0" + hours : hours.toString();
  let minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();


  pTime.innerHTML = `${hoursString}:${minutesString}`

}
function getDate(){
  const newD = new Date()
  let options: Intl.DateTimeFormatOptions = { weekday: 'long' }
  let dayNow = newD.toLocaleDateString('en-US', options)
  let getDateNumb = newD.getDate()
  pDate.innerHTML = `${dayNow} ${getDateNumb} Another day`
  setInterval(getDate,10000)
}
getDate()

setInterval(getDateAndTime, 1000);
getDateAndTime()
console.log(getDateAndTime())
pTime.innerHTML = ``
const enterText = 'Enter your Password'
const correctPassword = '552820'
digitsDiv.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (pass.length < 6 || pass.length == 5) {
    if (target.tagName == 'BUTTON') {
      if (target.dataset.val) pass += target.dataset.val
    }
  }

  if (target.dataset.action) pass = pass.slice(0, pass.length - 1)

  inputDiv.textContent = '*'.repeat(pass.length)

  
  if (pass === correctPassword) {
    pushPassStatus.innerHTML = `<h3 class = "passCheck"> Password is correct! </h3>`
    showTrueMessage.innerHTML = `<p class = "messageTrue">Ваш чек доступен по ссылке: ofd.ru/b/ee8a9ba606d4e580374f51e7d401f830</p> `
    lockButton.addEventListener('click',()=>{
      showTrueMessage.innerHTML = `<p class = "messageTrue">Text Message</p> `
      pushPassStatus.innerHTML = `<h3 class = "passCheck3"> ${enterText} </h3>`
      pass = ''
    })
  }

  else if (pass.length == 6 && pass !== correctPassword) {
    pass = ''
    pushPassStatus.innerHTML = `<h3 class = "passCheck2"> Password is incorrect! </h3>`
    showTrueMessage.innerHTML = `<p class = "messageTrue">Text Message</p> `

  }


  console.log(pass)
})
if(pass === ''){
  pushPassStatus.innerHTML = `<h3 class = "passCheck3"> ${enterText} </h3>`
  
}


showTrueMessage.innerHTML = `<p class = "messageTrue">Text Message</p> `


// class ButtonCount {
//   realValueParagraph = 0
//    countParagraph = document.querySelector('.count') 
//    transitionImage = document.querySelector('.like_img') 
//    buttonCount = document.querySelector('.like_count')
//    constructor(countParagraph:HTMLParagraphElement, transitionImage:HTMLImageElement, buttonCount:HTMLButtonElement,realValueParagraph:number){
//     this.countParagraph = countParagraph
//     this.transitionImage = transitionImage
//     this.buttonCount = buttonCount
//     this.realValueParagraph = realValueParagraph
//    }
//    onClick(){
//     this.buttonCount?.addEventListener('click',()=>{
//       this.realValueParagraph += 1
//     })
//    }
//    push(){
//     this.countParagraph.innerHTML = ``
//   }
  
// }



    let realValueParagraph = 0
    const countParagraph = document.querySelector('.count') as HTMLParagraphElement
    const transitionImage = document.querySelector('.like_img') as HTMLImageElement
    const buttonCount = document.querySelector('.like_count') as HTMLButtonElement
    const clearButton = document.querySelector('.clear') as HTMLButtonElement
    function onClick(){
      transitionImage.classList.add('like_img')
      buttonCount.addEventListener('click',()=>{
        realValueParagraph += 1
        countParagraph.innerHTML = `${realValueParagraph}`
        transitionImage.classList.remove('like_img')
        transitionImage.classList.add('animation')
        setTimeout(() => {
          transitionImage.classList.remove('animation');
      }, 250);
      })
        clearButton.addEventListener('click',()=>{
          realValueParagraph = 0
          countParagraph.innerHTML = `${realValueParagraph}`
        })
        
    }
    onClick()
    countParagraph.innerHTML = `${realValueParagraph}`
   

    
  //   Задание 3
  //   Реализовать класс Employee, описывающий работника, и со-
  //   здать массив работников банка.
  //   Реализовать класс EmpTable для генерации html кода таблицы
  //   со списком работников банка. Массив работников необходимо
  //   передавать через конструктор, а получать html код с помощью
  //   метода getHtml().
  //   Создать объект класса EmpTable и вывести на экран результат
  //   работы метода getHtml().
    class Employee{
      static id = localStorage.staticId || 1
      id
      name
      salary
      constructor(name: string, salary: number){
        this.id = Employee.id++
        this.name = name
        this.salary = salary
        localStorage.staticId = Employee.id
      }
    }
    
    const empArr = localStorage.empArr ? JSON.parse(localStorage.empArr) : [
      new Employee('Санек',40_000,),
      new Employee('Леха',40_000,),
      new Employee('Никитос',60_000,),
      new Employee('Андрюха',40_000,),
      new Employee('Ванечка',50_000,),
    ]
    
    let addEmploye = document.querySelector('.addEmploye') as HTMLButtonElement
    let buttonState = 'add'
    let empId = document.querySelector('.id') as HTMLInputElement
    let empName = document.querySelector('.name') as HTMLInputElement
    let empSalary = document.querySelector('.salary') as HTMLInputElement
    let table = document.querySelector('.table') as HTMLDivElement
    
    addEmploye.addEventListener('click', ()=>{
      if (empName.value && empSalary.value) {
        if (buttonState == 'add') {
          empTable.addEmployee(new Employee(empName.value, parseInt(empSalary.value)))
        } else {
          empTable.editEmployee(+empId.value, empName.value, parseInt(empSalary.value))
        }
        empId.value = ''
        empName.value = ''
        empSalary.value = ''
        empTable.render()
        addEmploye.textContent = 'Добавить'
        buttonState = 'add'
      }
    })
    
    table.onmouseover = function(event) {
      let target = event.target as HTMLElement
      if (target.tagName=='TD') target.style.background = 'pink'
    }
    
    table.onmouseout = function(event) {
      let target = event.target as HTMLElement
      if (target.tagName=='TD') target.style.background = ''
    };
    
    table.addEventListener('click', (e)=>{
      const target = e.target as HTMLElement
      if (target.dataset.action == 'delete') {
        if (target.dataset.id) empTable.removeEmployee(+target.dataset.id)
        empTable.render()
      }
      if (target.dataset.action == 'edit') {
        addEmploye.textContent = 'Сохранить'
        buttonState = 'edit'
        if (target.dataset.id) {
          const el = empTable.getEmployeeData(+target.dataset.id)
          empId.value = el?.id.toString() || ''
          empName.value = el?.name || ''
          empSalary.value = el?.salary.toString() || ''
        }
      }
    })
    
    class EmployeeTable {
      table
      constructor(table:Employee[]) {
        this.table = table
      }
      addEmployee(el:Employee) {
        this.table.push(el)
      }
      editEmployee(id:number, name:string, salary:number) {
        const i = this.table.findIndex(emp => emp.id == id)
        this.table[i].name = name
        this.table[i].salary = salary
      }
      removeEmployee(id:number) {
        const i = this.table.findIndex(el => el.id == id)
        this.table.splice(i,1)
      }
      getEmployeeData(id:number) {
        return this.table.find(el => el.id == id)
      }
      getHtml() {
        let tableHtml = `<table><thead><tr><th>ID</th><th>Name</th><th>Salary</th><th>action</th></tr></thead><tbody>`
        this.table.forEach(el=>{
          tableHtml += `<tr><td>${el.id}</td><td>${el.name}</td><td>${el.salary}</td><td>
          <button data-action="edit" data-id="${el.id}">✎</button>
          <button data-action="delete" data-id="${el.id}">☠</button>
          </td></tr>`
        })
        tableHtml += `</tbody></table>`
        return tableHtml
      }
      render() {
        table.innerHTML = this.getHtml()   
        localStorage.empArr = JSON.stringify(this.table) 
      }
    }
    
    class styledEmpTable extends EmployeeTable {
      getHtml(): string {
        let stringHtml = `
        <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        
        th {
            background-color: #f2f2f2;
        }
        </style>` 
        stringHtml += super.getHtml()
        return stringHtml
      }
    }

    // const empTable = new EmployeeTable(empArr)
    const empTable = new styledEmpTable(empArr)
    empTable.render()
    
    let user  = {
      name: ' vasya',
      age : 35
    }
    let user2 = JSON.parse(JSON.stringify(user))
    user2
   Object.freeze(user)
   console.log(user)


   let categories = document.querySelector('.Categories') as HTMLDivElement
   let dresses = document.querySelector('.dresses') as HTMLDivElement
   categories.addEventListener('click',()=>{
    dresses.classList.toggle('hide')
   })

   
   let trafficCircle = document.querySelectorAll('.circle_lights') as NodeListOf<HTMLDivElement>
   let buttonNext = document.querySelector('.next') as HTMLButtonElement

   let active = 0
   buttonNext.addEventListener('click',()=>{
      const current = trafficCircle[active] as HTMLDivElement
      current.classList.remove('light')
      active = current.dataset.val ? +current.dataset.val : 0
      trafficCircle[active].classList.add('light')
    })




//     Создать html-страницу со вкладками. С левой стороны страни-
// цы отображается несколько вкладок, по которым можно переклю-
// чаться. У каждой вкладки есть свое содержимое, но в один момент
// времени отображается содержимое только активной вкладки.

let objectParam = {
  Html:'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
  Css:'Hypertext Markup Language (CSS) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
  Js:'Hypertext Markup Language (JS) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.'
} as any
   let cols = document.querySelector('.left_cols') as HTMLDivElement
   let text = document.querySelector('.right_text') as HTMLDivElement
   

   Object.keys(objectParam).forEach((el, i)=>{
    cols.innerHTML += `<p class="direct"${i==0?'class="active"':''}>${el}</p>`
   })
   text.innerHTML = `<p>${objectParam['Html']}</p>`
   cols.addEventListener('click', (e)=>{
     const target = e.target as HTMLElement
     if (target.tagName == 'P') {
       for (let el of cols.children) {
         el.classList.remove('active')
         target.classList.add('active')
         const key = target.textContent as string
         text.innerHTML = `<p>${objectParam[key]}</p>`
        
      }
    }
   })


  //  document.addEventListener('click', e =>{console.log(e)})

  //  Задание 5
  //  Создать html-страницу, на которой пользователь может вве-
  //  сти номер месяца, год, и получить календарь на указанный месяц.
  //  Календарь можно генерировать с помощью таблицы. Начальный
  //  день недели всегда должен быть понедельник.

   
   let calendarContainer = document.querySelector('#calendarContainer') as HTMLDivElement
   let firstDay = new Date('12/1/2023')
   function generateCalendar(){
   let calendarTable = '<table>'
   calendarTable += ` <thead>
   <tr>
     <th class="tthead">Пн</th>
     <th class="tthead">Вт</th>
     <th class="tthead">Ср</th>
     <th class="tthead">Чт</th>
     <th class="tthead">Пт</th>
     <th class="tthead">Сб</th>
     <th class="tthead">Вс</th>
   </tr>
 </thead>`
 calendarTable += `<tbody class="calendar">`

    let currentDate = new Date('12/1/2023')
    console.log(currentDate)
      
      while(currentDate.getMonth() == firstDay.getMonth()){
        calendarTable += '<tr>'
        for(let i = 0; i < 7; i++){
          if(currentDate.getDay() == i || (i === 0 && currentDate.getDate() > 1)){
            calendarTable += '<td>' + currentDate.getDate() + '</td>'
            currentDate.setDate(currentDate.getDate() + 1)
          }
          else {
            calendarTable += '<td></td>';
          }
        }
        calendarTable += '</tr>';
        
      } 
      calendarTable += '</tbody></table>';
      calendarContainer.innerHTML += `${calendarTable}`
  }
generateCalendar()




 let ulTree = document.querySelector('.tree') as HTMLUListElement
  ulTree.addEventListener('click',(e)=>{
    const target = e.target as HTMLElement
    if(target.tagName == 'SPAN'){
      const li = target.parentElement
      const ul = li?.querySelector('ul')
      
      
      if(ul){
        ul.hidden = !ul.hidden
      }
    }
    
  })



  let gridTable = document.querySelector('#grid') as HTMLTableElement

  gridTable.addEventListener('click',(event)=>{
    const target = event.target as HTMLElement
    if(target.dataset.type == 'number'){
    let tBody = document.querySelector('.ttb') as HTMLTableElement
    let cells = Array.from(tBody?.querySelectorAll('.tddd'))
    let values = cells.map(cell => {
      if (cell.textContent !== null) {
          return parseInt(cell.textContent, 10)
      } else {
           return 0;
      }
    })
    values.sort((a:any,b:any) => a-b)
    cells.forEach((cell, index) => {
      cell.textContent = values[index].toString()
  })

    }
  })


  let confirmDiv = document.querySelector('.confirm_div') as HTMLDivElement
  function fade(){
  confirmDiv.addEventListener('click',(event)=>{
    let target = event.target as HTMLElement
    if(target.tagName == 'A'){
      if(confirm('Перейти по ссылке?')){

      } else {
        event.preventDefault()
      }
    }
  })
  }
  fade()



  let gallaryDiv = document.querySelector('.gallary_div') as HTMLDivElement
  let changeMainPic = document.querySelector('.main') as HTMLImageElement
  gallaryDiv.addEventListener('click',(event)=>{
    let target = event.target as HTMLImageElement
    if(target.tagName == 'IMG'){
      // target as HTMLImageElement
      changeMainPic.src = target.src
    }
  })
  const imgArr = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
  ]
  
  const renderSlider = (arr:string[]) => {
    let htmlString = `<div id="slider_div" class="slider_div">
        <div class="arrow fs">←</div>
        <div class="arrow sc">→</div>`
    for (let i=0; i<arr.length; i+=3) {
      if (i==0) {
        htmlString += `<div class="three_imgs bim" style="margin-left: 90px;" data-type="active">`
      } else {
        htmlString += `<div class="three_imgs">`
      }
      let to = (i + 2 < arr.length) ? i+2 : arr.length-1
      for (let a = i; a<=to; a++) {
        htmlString += `<img src="${arr[a]}" alt="" class="slider_img">`
      }
      htmlString += `</div>`
    }
    htmlString += `</div>`
    document.body.insertAdjacentHTML('beforeend', htmlString)
  }
  
  renderSlider(imgArr)
  
  let marginLeft = document.querySelector('.bim') as HTMLDivElement
  let sliderDiv = document.querySelector('.slider_div') as HTMLDivElement
  let currentIndex = 0
  const maxIndex = 2
  sliderDiv.addEventListener('click', (event) => {
    let target = event.target as HTMLElement
    if (target.classList.contains('fs')) {
      if (currentIndex==0) {
        currentIndex = maxIndex
        marginLeft.style.marginLeft = 2*-800 + 90 +'px'
      } else {
        marginLeft.style.marginLeft = parseInt(marginLeft.style.marginLeft) + 800 +'px'
        currentIndex--
      }
    }
    if (target.classList.contains('sc')) {
      if (currentIndex == maxIndex) {
        currentIndex = 0
        marginLeft.style.marginLeft = 90 + 'px'
  
      } else {
        marginLeft.style.marginLeft = parseInt(marginLeft.style.marginLeft) + -800 + 'px'
        currentIndex++
      }
    }
  })


let ul = document.querySelector('#ul') as HTMLUListElement

ul.addEventListener('click',(event)=>{
  let target = event.target as HTMLElement
  if(target.dataset.value == 'active'){
    target.classList.toggle('background_changed')
  }
  if(event.metaKey || event.ctrlKey && target.classList.contains('color_based')){
    let elements = document.querySelectorAll('.color_based');
    elements.forEach((el)=>{
       el.classList.toggle('background_changed')
    })
  }
})




let form = document.querySelector('.form_block') as HTMLDivElement
let first = document.querySelector('.first_part') as HTMLDivElement
let second = document.querySelector('.second_part') as HTMLDivElement
let hideBlock = document.querySelector('.hide_toggler') as HTMLDivElement
let hideH2 = document.querySelector('.hide_title') as HTMLHeadingElement
let hideP = document.querySelector('.text_toggler') as HTMLParagraphElement
let counterSwitches = 0
form.addEventListener('click',(event)=>{
  let target = event.target as HTMLElement
  if(target.classList.contains('switcher') && counterSwitches == 0){
    hideBlock.classList.add('bonus')
    first.classList.add('hide_first')
    setTimeout(()=> first.classList.add('z_index'), 250)
    counterSwitches++
    second.classList.remove('hide')
    setTimeout(()=> second.classList.remove('z_index'),200)
    if(counterSwitches == 1){
      hideH2.textContent = 'Welcome back!'
      hideP.textContent = 'Enter your personal details to use all of site Tearlirec'
    }
  }
  else if(target.classList.contains('switcher') && counterSwitches == 1){
    hideBlock.classList.remove('bonus')
    first.classList.remove('hide_first')
    setTimeout(()=> second.classList.add('z_index'), 250)
    second.classList.add('hide')
    setTimeout(()=> first.classList.remove('z_index'), 200)
    counterSwitches--
  }
  if(counterSwitches == 0){
    hideH2.textContent = 'Hello friend!'
    hideP.textContent = 'Register with your personal details to use all of site features'
  }
})



let blockList = document.querySelector('.block_list') as HTMLDivElement
blockList.addEventListener('click', (event) => {
  let target = event.target as HTMLElement
  if (target.classList.contains('circle_toggle')) {
    let infoList = target.closest('.info_list') as HTMLElement
    let hiddenBlock = infoList.querySelector('.hidden_info') as HTMLDivElement
    target.classList.toggle('toggle_active')
    hiddenBlock.dataset.hidden = hiddenBlock.dataset.hidden=='0' ? '1' : '0'
    if (hiddenBlock.dataset.hidden == '0') {
      const rect = hiddenBlock.children[0].getBoundingClientRect()
      hiddenBlock.style.height = rect.height + 'px'
      hiddenBlock.style.color = 'white'
      hiddenBlock.style.transition = 'height 1s, color 1s 0.3s'  
    } else {
      hiddenBlock.style.height = '0'
      hiddenBlock.style.color = 'transparent'
      hiddenBlock.style.transition = 'height 0.7s 0.1s, color 0.3s'
    }
  }
})

let timer:number
let tooltip = document.createElement('div')
tooltip.className = 'tooltip'
tooltip.style.opacity = '0'

let tooltipElement = document.querySelector('.toggle') as HTMLDivElement
tooltipElement.addEventListener('mouseover', (event) => {
  let rTarget = event.relatedTarget as HTMLElement
  if (rTarget && rTarget.className.includes('toggle')) return
  let target = event.target as HTMLElement
  const selector = target.closest('.toggle') as HTMLElement | null
  if (selector?.dataset.tooltip) {
    timer = setTimeout(()=>{
      console.log('start')
      tooltip.textContent = selector.dataset.tooltip as string
      document.body.append(tooltip)
      const rect = selector.getBoundingClientRect()
      const tRect = tooltip.getBoundingClientRect()
      tooltip.style.left = rect.left - (Math.max(rect.width, tRect.width)-Math.min(rect.width, tRect.width))/2 + 'px'
      if (rect.top<50) {
        tooltip.style.top = rect.bottom + window.scrollY + 10 + 'px'
        tooltip.className = 'tooltip bottom'
      } else {
        tooltip.style.top = rect.top + window.scrollY - 40 + 'px'
        tooltip.className = 'tooltip top'
      }
      tooltip.style.opacity = '1'
    }, 500)
  }
})
tooltipElement.addEventListener('mouseout', (event) => {
  let target = event.relatedTarget as HTMLElement
  if (target) {
    const selector = target.closest('.toggle') as HTMLElement | null
    if (selector) return
    console.log('end')
    clearTimeout(timer)
    tooltip.style.opacity = '0'
    setTimeout(() => {
    tooltip.remove()}, 500)
  }
})

console.log(1+2+3)







