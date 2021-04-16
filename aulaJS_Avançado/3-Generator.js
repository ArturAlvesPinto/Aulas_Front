
//JavaScript ES6 Avançado.
//Generatos
//Artur Alves

console.log('\nSymbol:_______________________________________________________________________\n');
//Symbols é uma maneira de gerar um identificador único, invocando um símbolo.
//Symbol nunca é igual a outro, não é uma strngi nem texto nem numero nem array.
//Usado para ocultar propriedades, similar a privado. 

const uniqueId = Symbol('Teste');
console.log(Symbol());

const uniqueId2 = Symbol('Teste');
console.log(uniqueId === uniqueId2); // mesmo tendo o mesmo texto é falso pq cada symbol é único.

//whell know symbols: propriedades do symbol.

const arr = [1, 2, 3, 4];
const iteracao = arr[Symbol.iterator]();
console.log(iteracao.next());
console.log(iteracao.next());
console.log(iteracao.next());
console.log(iteracao.next()); //vai iterando a cada next
console.log(iteracao.next()); //valor vem indefinido pq algumas porque a função ignora o value.

//Poderia Fazer:
while (true) {
    let value = iteracao.next()
    if (value.done) {
        console.log('Fim array. Fim interação.');
        break;
    }
}
//Com ES6
for (let value1 of arr) {
    console.log(value1);
}

// Iterator em obj
const obj = {
    values: [5,4,3,2,1],
    [Symbol.iterator]() {
        let i=0;
        return {
            next: ()=>{
                i++
                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const iter = obj[Symbol.iterator]()
console.log('\nIteração OBJ')
for (let value2 of obj) {
    console.log(value2);
} // iteração do obj;

// ou podemos aplicar o rest
const arrObj = [...obj];
console.log(arrObj);


console.log('\nGenerator:____________________________________________________________________\n');
//Generators são funções com pausa e, elas despausam e retornam valores atravez de iterações do 'value' & 'done'
// Exemplo:

function* hello() { //coloca o asterísco na function para usar o pause
    console.log('hello');
    yield 1; //pause do generator

    console.log('from');
    const value = yield 2; 

    console.log(value); //pode receber valores de fora, passados no next()
}
const it = hello(); // function com pause, necessário iterações.

console.log(it.next()); // executa até o yield
console.log(it.next());
console.log(it.next('Outside!'));


function* naturalNumbers(){ // a função nãoentrará em loop infinito por causa do yield
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}   const it2 = (naturalNumbers());
console.log('\nLoop com pause')
console.log(it2.next()); // faz a contagem a cada pausa na função naturalNumbers
console.log(it2.next());
console.log(it2.next());

console.log('\nSymbol com Generator e ForOf')
const objG = {
    values: [1,2,3,4,5,6],
    *[Symbol.iterator]() { //coloca * para virar generator
        for (var i=0; i < this.values.length; i++ ){
            yield this.values[i]
        }
    }
};
for (let value of objG){
console.log(value);
}