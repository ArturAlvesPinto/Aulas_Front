
//JavaScript ES6 Avançado.
//Rest, spread, operator, destruction
//Artur Alves


console.log("\n\nRest:_______________________________________________________________________\n");
//Rest Operator - Pega todos parametrôs de uma função e tranforma em um array.
// Suponha uma função soma, porém a ser usada com um valor ilimitado.

//Modo clássico, antes do ES6.
function sum(a,b){
    var value = 0;
    for(var i=0; i < arguments.length; i++){
        value += arguments[i]
    }
    return value
}   console.log(sum(5,5,5,5,5,5));

//Com ES6 - Rest Operator
function sum2(...args){ //define os argumentos passados. Fornece para a função os argumentos em foma de array, podendo usar as função array
    return args.reduce( (acc, value) => acc + value, 0 ); //reduce ((accumulator, currentValue) => accumulator + currentValue, initialValue)
}   console.log(sum2(5,5,5,5,5,5));

//Tambem podemos usar REST com outros parametros (Exemplo com arrow function)
const sum3 = (a,b,...argsRest) => { return console.log(a,b,argsRest)};
(sum3(5,5,1,2,3,4));

//Mandando um rest para outra função (Neste caso esta função executará a função soma 2)
const multiply = (...rest) => { return sum2.apply(undefined, rest) }; //.apply aplica os argumentos passados em outra função.
console.log(multiply(5,5,5,5));


//--------------------------------------------------------------------------------------------------
console.log("\n\nSpread:_______________________________________________________________________\n");
//Spread Operator - Pega todos itens de um array e transforma em parametros para ma função (Sempre que ver o 3 pontos e, funções é um Rest
//Passa como parametros Strings, Arrays, Objetos e Objetos Iteraveis

// Ex passando como parametro
const str = 'digital innovetion one';
const arr  = [1,2,3,4]

function logArgs(...args){
    console.log(args);
}
logArgs(...str);
logArgs(...arr);

//Tambem pode ser usada para construir arrays literais
var arr2  = arr.concat([5,6,7]); //Modo classico
arr2 = [...arr, 5, 6, 7]; //Com spread
arr2Clone = [...arr2]; //Clonando arrays
console.log(arr2Clone);

// Usadno em Objetos literais
//Em objetos literais o spread só utilizado para construir novos objetos, pois ele é usado em objetos iteraveis.
const obj = {
    teste : 123
};
const obj2 = {
    ...obj,
    deu : 456
};
console.log(obj);
console.log(obj2);

const obj3 = {
    valor : 123,
    subObj : {
        valor : 123
    }
};
const obj4 = {...obj3} // é feito deste modo para que alterando o obj4 o obj3 não seja alterado tbm, que aconteceria se fizessemos obj4 = obj3
// note que isto não funciona para um subojeto, ou seja, o subObj do obj3 teve seu valor alterado quando alteramos o do obj4
// para subobjetos teria que fazer mais um spread do subobjeto.
obj4.valor = 456;
obj4.subObj.valor = 456;
console.log(obj3);
console.log(obj4);


//--------------------------------------------------------------------------------------------------
console.log("\n\nDestruction:_______________________________________________________________________\n");
// No js pegamos partes de variáveis e usamos em outras variáveis.
// Ex Arrays:

var arrFrutas = ['apple', 'banana', 'orange', ['tomato']];
var maca = arrFrutas[0], banana = arrFrutas[1], laranja = arrFrutas[2], tomate = arrFrutas[3][0]; //forma classica e inviável
var [maca1, banana1, laranja1, [tomate1]] = ['apple', 'banana', 'orange', ['tomate']]; // Destruction assigment

console.log('\nArrays ex:');
console.log(maca, maca1);
console.log(tomate, tomate1); // em casos de array dentro de arrays (+ de 1 nvl)

// Ex Obj:

var ObjNome = {
    name : 'Artur',
    props : {
        age : 26,
        sex : 'Man'
    }
}
var { name: nameVar } = ObjNome; //o mesmo que var nameVar = obj.name;
var { props: {age: ageVar, sex: sexVar}} = ObjNome;
console.log('\n\nObj ex:');
console.log(nameVar);
console.log(ageVar, sexVar);

