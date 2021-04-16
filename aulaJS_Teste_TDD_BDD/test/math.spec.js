// Aplicação de teste usando o Mocha (Nomeia-se .spec.js para convencão de teste)
// Precisa criar diretório e arquivo de teste
// Escopo da atividade ao final

const assert = require('assert'); // Módulo assert nativo do Node
const Math = require('../src/math.js'); // importa a classe math
const expect = require('chai').expect; // importa funcao expect do chai
const sinon = require('sinon'); // importa o sinon

let valueDinamic = 0;


// Mocha
//==============================================================================================

// Funcao describe -> 1º argumento descrição do teste, 2º argumento funcao.
describe('Math class', function(){

    //==========================================================================================
    //hooks - formas de executar código e evitar repetição.
    beforeEach(function(){
        valueDinamic = 12
    }); // Faz com que valueDinamic seja 12 antes de cada função

    //==========================================================================================
    // Funcao it -> Descreve comportamento esperado da classe.
    it ('Sum two numbers', function(done){
        const math = new Math();  
        this.timeout(3000); // para fazer testes com timeouts superiores a 2000ms

        valueDinamic = 8; //Muda o valueDinamic para 8

        math.sum(valueDinamic,2, (value)=>{
            assert.equal (value, 10); //assert verifica pelo instacia equal da class se dois objetos são iguais.
            done();
        })          
    }); 

    //==========================================================================================
    it('Multiply two numbers'); // Este aparece como teste pendente.


    //==========================================================================================
    /*it.only('Subtract two numbers', function(){
        const math = new Math();

        assert.equal(math.subtract(valueDinamic,8), 4);

    }); // O only faz com que seja executado somente este teste.*/

    //==========================================================================================
    it.skip('Division two numbers'); // Skip faz com que este não seja executado.
    //=



    // Teste usando a lib expect Chai.
    //==========================================================================================
    //=
    it ('Subtract two numbers', function(){ // utilizando do hook aula passada que será será 12

        const math = new Math();

        expect(math.subtract(valueDinamic,2)).to.equal(10); // utilizando o expect          

    });

    //==========================================================================================
    it ('Compare Property de Objects', function(){ 

        const math = new Math();
        const obj = { name : 'Artur Alves' }; // criação de objeto

        expect(obj).to.have.property('name'); // testa com expect se o objeto tem determinda propriedade.        
        //mude acima para simular um erro
        expect(obj).to.have.property('name').equal('Artur Alves') // testa se o valor do obj name é 'Artur Alves'
    });

    //==========================================================================================
    it ('Compare two Objects', function(){ 

        const math = new Math();
        const obj = { name : 'Artur Alves' }; // criação de objeto
        const obj2 = { name : 'Artur Alves' };

        // expect(obj).to.equal(obj2) // Neste formato o JS não aceita fazer a comparação, posi o to.equal é equivalente a comparação de obj com outro sem considerar os valores em si

        expect(obj).to.deep.equal(obj2); // Com o deep podemos comparar os valores dos objetos.

    });
    //=



    // Teste usando o Sinon.
    //==========================================================================================
    //=
    it('Call req with sum and index values', function(){
        const math = new Math();
        const req = {}; // É colocado vazio pois não está sendo chamado na class.
        const res = {
            load: sinon.spy() // Usa o spy do sinon. Basicamente uma função espiã que verifica se será invocado corretamente.
        }

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true; //Verifica se a função foi chamada ou não.
        expect(res.load.args[0][0]).to.equal('index'); //verifica se o primeiro argumento da função é index
        expect(res.load.args[0][1]).to.equal(10); //verifica se o segundo arg é a soma dos dois últimos parametros.

    });
    //=

}); 




//==============================================================================================
//  Escopo dos testes Mocha:

//Primeiro -> replicamos um erro com o math.sum sem nada e apontou um erro undefined == 10 (Pois não é igual).
//Segundo  -> aplicou a crição de soma na função Sum para retornar e passar o teste sendo igual a 10.
//Terceiro -> Aplicou como se fosse assíncrono. Colocanod um callback para mais um parametro na class.
//Quarto   -> O teste 3 irá falhar, ele vai passar e apontar o erro só depois, para isso é aplicado o paramentro "done" no "it", para lidar com coisas assícronas.
//Quinto   -> Foi colocado timeout superior a 2000 e não passou, pois quando usado o mocha o timeout máximo de testes é 2000 ms.
//Sexto    -> Foi colocado um this.timeout para podermos exceder o tempo 2000 no callback.
//Setimo   -> Foi escrito mais um teste (multiply) e visto que quando executado aparece como 1 teste penderte.
//Oitavo   -> Foi utilizado o only para que executasse só aquele teste e o skip para que apenas aquele não fosse executado.
//Nono     -> Foi falado sobre hooks e adicionado um valueDinamic e colocado que ele fosse 12 antes de cada function. Isso pode ser feito por exemplo para qlqr tipo de código antes de cada "teste".

// No mocha não é recomendado usar arrow function, apenas functions para ter controle das chamadas e escopos.



//==============================================================================================
//  Escopo dos testes Chai:

//Primeiro -> Foi aplicado o método expect na math.subtract para teste usando o chai.
//Sgundo   -> Foi criado um objeto e testado com o expect se aquele objeto tem uma determindada propriedade e em seguida se aquela propriedade tem determinado valor.
//Terceiro -> Foi criado novo obj para comparar dois objetos.


//==============================================================================================
//  Escopo dos testes Sinon:

//Primeiro -> Foi criado uma printSum na class math.js. Esta tem como parametrôs um req um res um a e um b.
//Segundo  -> Foi criado um novo teste 'it' onde foi estabelecido objetos req e res. No res foi colocado uma propriedade load com o valor o spy(sinon) para monitorar a chamada da função.
//Terceiro -> Foi testado se o valor do primeiro argumento da função possuia o valor 'index'. Foi testado se o segundo argumento é a soma dos dois ultimos paramentros de 'math.printSum(req, res, 5, 5);'