let userName = getFirstName("Carlos-Alneida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Amaral Silveira Cantos", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}