//Artur Alves Pinto

/*
// Var, int, string, console.log-----------------------------------------------
var nome = "Artur Alves"; //string
var idade = 25; // inteiro
var frase = "Japão é o melhor time do mundo";

alert(nome + " tem " + idade + " anos "); // + para string concatena para int soma.

console.log(nome); // mostra inspecionando no navegado, na aba CONSOLE, a informação.
console.log(idade);

console.log(frase.replace("Japão","Brasil")); // Permiti trocar informação de uma string.
//console.log(frase.toUpperCase()); //Deixa tudo maíusculo.
//console.log(frase.toLowerCase()); //Deixa tudo minúsculo.


//Array------------------------------------------------------------------------
var lista = ["op1","op2","op3"];
//console.log(lista[0]); // Imprime só o primeiro elemento da lista.

lista.push("op4"); // adciona mais um elemento ao array.
lista.pop(); // remove o último elemento da lista.
lista.reverse(); //inverte ordem da lista.

console.log(lista.toString()); // transforma array em string
console.log(lista.join(" - ")) // Separa os elementos/espaços com o elemento entre parentese


// Dicinário -> Como se fosse um json (elemento: parametro)
var fruta = {nome:"morango", cor:"vermelho"}
console.log(fruta)
var cesta = [{nome:"morango", cor:"vermelho"}, {nome:"uva", cor:"roxo"}] // Este e um dicionário de arrays
console.log(cesta)


// Condicionais e Estrutura de repetição-------------------------------------------------------
var idade = prompt("Qual a sua idade?"); // Permite interação user por popup
if(idade >= 18) {
    alert("Maior de Idade")
}else{
    alert("Menor de idade")
}

var count = 0;
while(count < 5){
    count = count+1;
    console.log(count); // ou pode ser usado count++
};

var count;
for(count=0; count<5; count++){}

var d = new Date(); // Data
alert(d.getDate()); // Dá o get na informação que deseja (osb: mes precisa ter sempre +1 pois a contagem começa do zero)


// Utilizando funções
// É definida a função e os parâmetros de entrada e retornado operação da função
function soma(n1,n2){
    return n1 + n2;
}
function setReplace(frase,nome,novoNome){
    return frase.replace(nome,novoNome);
}

function validaIdade(idade){
    var valida;
    if(idade >= 21){
        valida = true;
    }else{
        valida = false;
    }
    return valida;
}

alert(soma(5,10));
alert(setReplace("Vai joão !","joão","pedro"));

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));*/

function botao(){
    //alert("Obrigado por clicar");
    document.getElementById("click").innerHTML = "<b>Obrigado por clicar!</b>"; //chama no js um elemento e inseri um html
    console.log(document.getElementById("click"));
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one");// quando chamar vai redirecionar a uma pagina //abre em outra aba
    //window.location.href = "https://web.digitalinnovation.one/course";// outra opção de redirecionar //abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"; //ação com mouse
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"; //ação com mouse
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Bem Vindo!");
}

function funcaoChange(elemento){
    alert(elemento.value);
}