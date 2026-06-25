const user = {
    name: "ane",
    number: 605734503,
    city: "Donostia",
    active: true
}

console.log(user['name'])
console.log(user.number)

//Reasignar el valor 
user.active = false

const newUsers = [
    {
        name: "Flor",
        number: 678734923,
        city: "Buenos Aires",
        active: true
    },
    {
        name: "Silvia",
        number: 968698886789,
        city: "Madrid",
        active: false
    }
]

//Para crear un array común con todos los usuarios (sumar objeto user y array newUsers)
const totalUsers = [user, ...newUsers]

//Para saber la largura del array
console.log(totalUsers.length())

//Para mostrar los datos de Flor
console.log(totalUsers[1])
const foundUser = totalUsers.find((user) => user.name === "Flor" )

//Para mostrar el número 3
const numbers = [2, 3, 1]
const foundNumber = numbers.find((number) => number === 3);
