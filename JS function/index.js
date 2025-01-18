function calc1 () {
    let a = Number(prompt ("Введите первое число:"));
    let b = Number(prompt ("Введите второе число:"));
    let c = Number(prompt ("Введите третье число:"));
    let  result
    result = a+b+c
    console.log(`В этой функции выводится ${result.toFixed(2)}`) //result.toFixed(2) - 2 знака после запятой
}

function calc2 () {
    let a = Number(prompt ("Введите первое число:"));
    let b = Number(prompt ("Введите второе число:"));
    let c = Number(prompt ("Введите третье число:"));
    let  result
    result = a-b-c
    console.log(result)
}

function calc3 () {
    let a = Number(prompt ("Введите первое число:"));
    let b = Number(prompt ("Введите второе число:"));
    let c = Number(prompt ("Введите третье число:"));
    let  result
    result = a*b*c
    console.log(result)
}

const calc4 = (a,b,c) => {
    let  result
    result = a+b+c
    console.log(result)
}

const calc5 = (a,b,c) => {
    let  result
    result = a-b-c
    console.log(result)
}

const calc6 = (a,b,c) => {
    let  result
    result = a*b*c
    console.log(result)
}