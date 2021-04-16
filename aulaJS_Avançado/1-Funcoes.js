
//JavaScript ES6 Avançado.
//Funções
//Artur Alves

console.log("\nFunções:_______________________________________________________________________\n");
    //Formato padrão:

    var sum = function(a,b){
        return a + b;
    };    console.log(sum(5, 5));

    //Arrow Funtion? (Obrigatoriamente tem que usar "() => {}")
    // Função anônima, ou seja, só pode utiliza-las atribuindo uma variável ou passando como paramêtro

    var sum = ((a,b)=>{return a+b;});
    console.log(sum(5,15));

    //Funções contrutoras
    //Usadas para construir objetos. Não da para estruturar como arrowFunction

    function Car(){
        this.foo = 'bar';
    }    console.log(new Car());



console.log("\n\nDefault Functions Arguments:________________________________________________\n");
    
    //Método Verboso
    function multiply(a,b){
        if(typeof b === 'undefined'){b=1;} //caso a pessoa não passe o 2º parâmetro
        return a*b
    }   console.log(multiply(5));

    //Usando o ECS 6 podemos atribuir, direto na entrada, um valor padrão quando o parametro não for passado.
    function multiply2(a,b=randonNumber()){ // podemos passar valores, parametros ou funções(Sempre que executada resulta em um novo valor pode ser usada para gerar id's.)
        return a*b
    }   console.log(multiply2(5));

    function randonNumber(){ // função que gera um número aleátorio.
        console.log("Gerando número aleatório:")
        return Math.random()*10;
    }   console.log(multiply2(5));
        console.log(multiply2(5));


console.log("\n\nObject Literals:_____________________________________________________________\n");

    // Maneira classica de escrever objetos

    var prop2 = 'valor prop2 deste objeto'
    var obj = {
        prop1 : 'valor prop1 deste objeto', //tambem pode ser passado uma variável aqui, veja abaixo
        prop2 // aqui se a variável/função possui o mesmo nome que a propriedade/metodo não precisa fazer prop2 : prop2, basta declarar direto. 
    };  console.log(obj);

    // usando métodos
    function method(){ console.log('chamou método')}
    var objMet = {
        method
    };  objMet.method();

    //Criando propriedade para o objeto maneira clássca.
    var propName = 'nome prop';
    var obj = {};
    obj[propName] = 'valor prop'; //dentro das chaves poderia ser colocado qualquer tipo de operação(ver abaixo).
    console.log(obj);

    //Com o ECS o método anterior é facilitado.
    var prop2Name = 'nome prop2';
    var obj2 = {[prop2Name + ' alguma coisa'] : 'valor prop2'};
    console.log(obj2);