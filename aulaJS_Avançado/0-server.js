// Criação de server para testes async
// Executar para teste em index no public e no public/sub

const express = require('express');
const server = express();

server.use('/',express.static('public')); /*Faz mesma coisa do abaixo*/
/*server.get('/',(req,res) => {

    //variavel de requição precisa ter:  req = {headers, method, url}

    //req = 

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Usando Fetch</title>
    </head>
    <body>
    
    <h1>Usando Fetch</h1>
    
    </body>
    
    <script type="text/JavaScript">
        //JavaScript ES6 Avançado.
        //Fetch-Async-Await//Artur Alves
                    
                    
        console.log('Fetch-Async-Await_______________________________________________________________');
        // Tradicionalmente para fazer requisições era utilizado um api do browser chamado xmlhttprequest
        // Atualmente existe uma nova api chamado fetch, porém trabalha com promisses e não callbak.
        //Ex, chamada para o local host:
        
        let url = "http://localhost:8080"
        let config = { method : 'POST' }
        
        fetch(url, config).then(responseStream => {
            console.log(responseStream);
        });
              
        </script>
    
    </html>
    `)
})*/
server.post('/',(req, res)=>{
    res.json({
        "data" : [1, 2, 3]
    })
})

server.post('/sub',(req, res)=>{
    res.json({
        "data" : [4, 5, 6]
    })
})


server.listen(8080, () =>{

    console.log('Servidor está em: http://localhost:8080');
    console.log('Para desligar o server aperte ctrl+c');

})