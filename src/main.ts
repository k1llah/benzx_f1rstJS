import './style.css'
// Запросите у пользователя число, возведите это число во
// 2-ю степень и выведите на экран.

// const numbUser = prompt('Введите число', '0')
// alert(numbUser**2)

// Запросите у пользователя 2 числа и выведите среднее ариф-
// метическое этих чисел.

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

