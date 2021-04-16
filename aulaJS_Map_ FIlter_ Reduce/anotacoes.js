/*
Aula Map, Filter Reduce (JS).
Anotações:
*/ 

// Exemplo 1 : FOR ... Loop básico, remove duplicatas no array.

/*for (var i = 0; i< array.length() ; i++) {
    if (array.indexOf( array[i] ) === i) {
        models.push(array[i]);   
    }
}*/

// O mesmo pode ser feito utilizando um filter. Porém de maneira mais simples.

/*var UnicPreoducts = array.filter( function(elem, i, array){
    return  array.indexOf(elem) === i;
} );*/



//      ARRAY.PROTOTYPE.FILTER()
/*
    Cria novo array com todos elementos que passaram no teste ad função fornecida.
    
    var newArray = arr.filter(callback[,thisArg])
*/
//Exemplo

const pets = [
    {
        name:'rex',
        type:'dog',
        age: 10,
        weight: 5 //peso
    },
    {
        name:'miau',
        type:'cat',
        age: 2,
        weight: 1
    },
    {
        name:'glup',
        type:'fish',
        age: 2,
        weight: 0.05
    },
    {
        name:'pe de pano',
        type:'horse',
        age: 5,
        weight: 15
    },
    {
        name:'rex2',
        type:'dog',
        age: 7,
        weight: 8
    },
    {
        name:'miau2',
        type:'cat',
        age: 4,
        weight: 2
    }
]

const MenorQue = (numero) => {return numero < 5;}

// Filtrando elementos que age é < 5
const newPet = pets.filter((pets)=>{return MenorQue(pets.age);
}) //Filter intera sobre cada elemento do array. O arrowFunction é chamado para cada elemento do array.
//Um filter deve retornar um teste lógico.

console.log("\nExemplo 1 (Filter): ----------------------------------------");
console.log(pets);
console.log(newPet);



//      ARRAY.PROTYPE.MAP()
/*
    Chama o callback para cada elemento e devolve um novo array diferente do inicial com mesma quantidade de elementos.

    var newArray = arr.map(callback[,thisArg])
*/
//Exemplo (usando o array pets)

const petsName = pets.map((pets) => {
    return pets.name
})

const forEachPetsName = [];
pets.forEach((pets) => {
    forEachPetsName.push(pets.name);// faz a mesma coisa trocando map por forEach.
})

console.log("\nExemplo 2 (Map): ----------------------------------------");
console.log(petsName);
console.log(forEachPetsName);



//      ARRAY.PROTYPE.REDUCE()
/*
    Executa uma função para cada elemento retornando um único valor de retorno.

    var newArray = arr.reduce(callback[,valorInicial])
*/
//Exemplo (usando o array pets)
// suponha que queira somar o peso de todos os pets e retornar o total.

console.log("\nExemplo 3 (Reduce): ----------------------------------------");
const totalWeight = pets.reduce((total, pets) => { //variáveis acc (atual(Neste caso TOTAL) - que se mantem a cada iteração) e cur (current(Neste caso PESO) - que está sendo percorrido)
    
    console.log(`\nTotal AGE: ${total.totalAge}             Total Weight: ${total.totalWeight}`);
    console.log(`${pets.name} AGE: + ${pets.age}          ${pets.name} Weight: + ${pets.weight}`);

    return {
        totalAge: total.totalAge + pets.age,
        totalWeight: total.totalWeight + pets.weight
    }
}, { totalAge: 0, totalWeight: 0}) // zero (0) é o valor incial do acc (total)

console.log(totalWeight);



//      Exemplos Bonus, PROMISES (Node.js)
/*
    Uma promise é comumente definida como um proxy para um valor que eventualmente estará disponível.
    Basicamente, uma vez que uma promise é chamada, ela inicia em pending state (pendente).
    Isto significa que a função caller (que chamou a promise) continua sua execução enquanto espera pela
    promise terminar seu próprio processamento e retornar ao caller com algum feedback.

    Quando esse retorno acontece, a promise é retornada em resolved state ou rejected state.
    
*/

const itens = ['a', 'b', 'c', 'd'];

(async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve (`${element} - promise`)
        })
    }

    const itemMapPromise = itens.map(promiseFunction); // executa o promise para cada item do array
    
    const itemMap = await Promise.all(itemMapPromise); // promise.all vai receber um array de promese e resolver todos elementos

    console.log("\nExemplo Bonus (Promise): ----------------------------------------\n");
    console.log(itemMap + "\n"); //await resolve a promisse
})()

