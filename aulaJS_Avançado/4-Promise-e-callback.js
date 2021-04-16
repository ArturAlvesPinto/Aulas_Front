
//JavaScript ES6 Avançado.
//Promise-e-Fetch
//Artur Alves

console.log('\nCallback e Promises_______________________________________________________________');
//O callback executa algo após uma determinada tarefa assíncrona terminar
//Exemplo

function doSomething(callback){
    setTimeout(function(){ // faz alguma coisa
        callback('First data');
    }, 1000);
}

function doOtherSomething(callback){
    setTimeout(function(){ // faz outra coisa
        callback('Second data');
    }, 1000);
}

function doAll(){ // supondo que quero executar os dois callback's
    try{ // tratamento de dados em casa de erros
        doSomething(function(data){
            var processedData = data.split('');

            try{
                doOtherSomething(function(data2){
                    var processedData2 = data2.split('');

                    try{
                        setTimeout(function(){
                            console.log('Aqui com callback');
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch(err){
                    //handelerror
                    }

                });
            } catch(err){
                //handelerror
            }

        });
    } catch(err){
        //handelerror
    }
}
doAll();


// Note que o tratamento com o callback é bem complicado. Promises vc pode tratar isso de maneira mais simples.
// Reescrevendo o trecho acima usando Promises:

const doSomethingPromise = new Promise((resolve, reject )=>{
    //throw new Error ('Algo deu errado.'); // simulando um erro na promise, descoment para testar
    setTimeout(function(){ // faz alguma coisa
        console.log('Aqui com Promises');
        resolve('First data');
    }, 1000);
});

const doOtherSomethingPromise = new Promise ((resolve, reject)=>{
    //throw new Error ('Algo deu errado.');
    setTimeout(function(){ // faz outra coisa
        resolve('Second data');
    }, 1000);
});
//para processa-las de modo sequencial só dar o console.log
console.log(doSomethingPromise); // note que ela está pedendo e foi executada antes do trecho anterior

// Uma Promise pode ter 3 estados:
/*  pending     ->  Quando está em execução
    fulfilled   ->  Quando é executada
    rejected    ->  Quando é rejeitado devido algum erro
*/

doSomethingPromise
    .then(first => {console.log(first.split('')); return doOtherSomethingPromise}) // executa a outra promisse quando acabar a primeira
    .then(second => console.log(second.split(''))) //.then executa a função só quando a promisse é concluida
    .catch(error => console.log('Ops', error)); //.catch para tratar os erros das promises

//Fazendo com que as promisses sejam resolvidas em paralelo
/*Promise.all([doSomethingPromise, doOtherSomethingPromise]).then(data=>{console.log('Promises em paralelo');console.log(data)});*/

//Promise.race([promisesAqui]).then(()=>{})// retorna a promisse que resolver primeiro.