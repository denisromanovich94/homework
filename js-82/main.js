// function helloName(name) {
//     return `Hello "${name}"`;
// }
// const result = helloName("Denis")
// console.log(result)





// const numbers = [5, 12, 3, 24, 17, 1, 4, 42, 37, 22, 8, 15, 7, 30];


// function printNumbersGreaterThanTen(array) {
//     array.forEach(num => {
//         if (num > 10) {
//             console.log(num);
//         }
//     });
// }

// printNumbersGreaterThanTen(numbers);




// ===========ЭТО ЧАТ ГПТ, Я ВООБЩЕ НЕ ВДУПЛЯЮ С ДЖАВАСКРИПТА=============
//  = НО  Я  ОЗНАКОМИЛСЯ С ЭТИМ КОДОМ, И ВРОДЕ ЧИТАБЕЛЬНО И МОГУ ПОНЯТЬ ЧТО КУДА, НО САМ БЫ Я НЕ НАПИСАЛ ЭТО, ОТКУДА ТАКИЕ ЗАДАНИЯ===========

// Функция калькулятора       
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Ошибка: Деление на ноль!';
            }
            break;
        default:
            return 'Ошибка: Неизвестный оператор!';
    }

    return result; // Возвращаем результат
}

// Пример использования функции
const result1 = calculator(2, 3, 'minus');     // Вычитание
const result2 = calculator(5, 10, 'plus');      // Сложение
const result3 = calculator(4, 2, 'multiply');   // Умножение
const result4 = calculator(6, 3, 'divide');     // Деление

console.log(result1); // -1
console.log(result2); // 15
console.log(result3); // 8
console.log(result4); // 2
