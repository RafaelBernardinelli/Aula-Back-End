// 1 -> Escreva na tela todos os números pares de 0 a 100 

const numerosPares = () => {
    let array = []

    for(let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            array.push(i)
        }
    }

    let colocaNoArray = array.map(it => it)
    console.log(colocaNoArray)
}

numerosPares()

// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

const somaNumeros = (array) => {
    let soma = 0
    array.forEach(element => {
        soma += element
    });
    return soma
}

console.log(somaNumeros([5, 6, 7]))


// 3 -> Crie uma função que remova todos os números negativos de um array

const removeNegativo = (array) => {
    let novoArray = []
    return novoArray = array.filter(it => it > 0)
}


console.log(removeNegativo([-1,-5,8,10]))


// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2

const multiplicaNumeros = (array) => {
    let array2 = []
    array2 = array.map(it => it * 2)
    console.log(array2)
}

multiplicaNumeros([1,5,6])


// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado

const soma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        let resultado = numero1 + numero2;
        if (resultado % 2 === 0) {
            resolve('sucess')
        } else {
            reject('error')
        }

    })
}

soma(2,2).then(value => {
       console.log('é par')
    }).catch(err => {
       console.log('é impar')
    })

