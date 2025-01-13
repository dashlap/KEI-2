let a = 17
let num = Number( prompt('Введите число:') )
switch (true) {
    case a>num:
        alert('Неправильно, введите число больше!')
        break;
    case a<num:
        alert('Неправильно, введите число меньше!')
        break;
    case a===num:
        alert('Правильно, молодец!')
        break;
    default:
        alert('Число не распознано')
        break;
}