
// No exemplo abaixo vc verá que ocorrerá um erro, isso porque tem um 'const nome' não utilizado. Você verá também que 
// neste caso não é executado o console com a string, pois no JS quando estoura um erro ele interrompe a execução do código, perdendo as etapas seguintes. 

//=====================================================================================================================
// Tratando o problema acima com try/catch

try{

    const name = 'Exemplo 1';

    // Erros no JS são uma classe e vocês pode instaciar seu próprio erro.
    const myError = new Error('Oh No! Deu erro!'); //Instanciando um erro
    throw myError; //Dispara o erro instanciado

}catch (err){
    console.log('Error: ', err);} // Catch aponta erro ocorrido
finally{
    console.log('\nKeep going . . .\n'); // O finelly faz com que seja executado caso exista erro ou não
}

//=====================================================================================================================
// Também pode-se estender a classe de erro criando erros personalizados. 

//Criando um class CustonError que é uma extensão da Error(node-modules)
class CustonError extends Error 
{
    constructor({ message, data }){
        super(message);
        this.data = data
    }
}
try{

    const name = 'Exemplo 2';
    const myError = new CustonError({
        message: 'Oh no! Caiu aqui!',
        data: {
            type: 'Tipo de Error Exemplo!'
        }    
    }); 
    throw myError; 

}catch (err){
    console.log('Error: ', err);
    console.log('Tipo: ', err.data);
    // A partir deste momento podemos dar um tratativa de acordo com o tipo de erro. Por exemplo:

    if (err.data.type === 'Tipo de Error Exemplo!') {
        console.log('Relax, é apenas um erro de exemplo !!!');
    }else{
        console.log('Não é o erro esperado !!!');
    }

} 
finally{
    console.log('\nKeep going . . .\n'); 
}