//Criação da class math

class Math {
    sum = function sum(a,b, callback) {
        setTimeout(() => {
            callback (a + b);             
        }, 2000);

    };
    
    subtract = function subtract(a,b) {
        return (a - b);             
    };

    printSum = function printSum(req, res, a, b){
        res.load('index', a + b);
    }

}

module.exports = Math //Exportação da class