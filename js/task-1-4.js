const orderPieces = prompt('Введите необходимое количество товара');

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
let totalPrice = pricePerDroid * orderPieces; // Write code on this line
let balanceCredit = credits - totalPrice;
let payExtra = totalPrice - credits;
const ACCESS_DENIED = `Недостаточно средств на счету! 
    Ваш баланс ${credits}. 
    Сумма покупки ${totalPrice}.
    Необходимо дополнительно внести ${payExtra}`;

let message;

if (orderPieces === null) {
    message = CANCELED_BY_USER;
} else if (credits >= totalPrice) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
    alert (message = ACCESS_DENIED);
}

console.log(message);