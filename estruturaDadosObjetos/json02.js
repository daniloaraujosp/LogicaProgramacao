let invoice = {
    name: "Danilo",
    age: 28,
    products: {
        0: ["Mouse 2wxm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`------------------------`)

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }

    
}

