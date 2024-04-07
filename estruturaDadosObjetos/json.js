// JSON - JavaScript Object Notation
// composto de chave e valor com o objetivo de transferir dados

const nome = "Danilo"
let idade = 28
let products = ["Mouse 2xwn", "Teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(nome, products, productsValues, idade)

function generateInvoice(nome, products, productsValues, idade){
    console.log("O comprador é " + nome)
    console.log("A idade é " + idade)
    console.log("--------------" )
    console.log("O produto é " + products[1])
    console.log("O produto é " + productsValues[1])
}