//JavaScript ES6 Avançado.
    //Fetch-Async-Await-EventEmmiter
    //Artur Alves
    //Fetch e Async em index.html

// EventEmitter ----------------------------------------------------------------------------------------------------|
    // É algo exclusivo do NODE
    // Primeiro precisa importar o módule (events)
    // Para utilizar esta classe, basta instacia-la

    const EventEmitter = require('events'); //Instanciando a classe
    const emitter = new EventEmitter();

    emitter.on('User logged', data =>{ // criação do consumidor do evento
        console.log(data);
    });
    emitter.emit('User logged',{ user: 'Artur Alves'}); // emite o evento*/
    
    
    //Poderia ser feito usando um método usando um classe.
    class Users extends EventEmitter{
        userLogged(data1) {
        this.emit('User logged', data1);
        }
    }
    const users = new Users();
    users.on('User logged', data1 =>{ // criação do consumidor do evento // para consumir apenas uma vez existe um método chamado once
        console.log(data1);
    });
    users.userLogged({user : 'usuario vindo da class'});
    users.userLogged({user : 'usuario vindo da class2'}); // troq linha 27 de user.on por user.once e este não logará
    
    