mass_Mark = 78
height_Mark = 1.69

mass_John = 92
height_John = 1.95

BMI = (mass, height) => {
    return mass / height ** 2
}

BMI_Mark = BMI(mass_Mark, height_Mark).toFixed(1)
BMI_John = BMI(mass_John, height_John).toFixed(1)

console.log("Mark's BMI: " + BMI_Mark)
console.log("John's BMI: " + BMI_John)

markHigherBMI = (BMI_Mark, BMI_John) => {
    if (BMI_Mark > BMI_John) {
        return true
    }
    return false
}

console.log("Mark has a higher BMI than John? " + markHigherBMI(BMI_Mark, BMI_John))

//Challenge 2

markHigherBMI = (BMI_Mark, BMI_John) => {
    if (BMI_Mark > BMI_John) {
        return "Mark's BMI is higher than John's!"
    }
    return "John's BMI is higher than Mark's!"
}
console.log(markHigherBMI(BMI_Mark, BMI_John))

markHigherBMI = (BMI_Mark, BMI_John) => {
    if (BMI_Mark > BMI_John) {
        return `Mark's BMI(${BMI_Mark}) is higher than John's (${BMI_John})!`
    }
    return "John's BMI is higher than Mark's!"
}
console.log(markHigherBMI(BMI_Mark, BMI_John))

//Chanlenge 3
let score_Dophins = [97, 112, 101]
let score_Koalas = [109, 95, 106]
let sum_Dophins = 0
let sum_Koalas = 0
score_Dophins.forEach((element) => {
    sum_Dophins += element
})
score_Koalas.forEach((element) => {
    sum_Koalas += element
})
avg_Dophins = sum_Dophins / score_Dophins.length
avg_Koalas = sum_Koalas / score_Koalas.length
console.log(avg_Dophins.toFixed(2))
console.log(avg_Koalas.toFixed(2))

comp = (x, y) => {
    if (x > y & x > 100)
        return "Dophins win"
    else if (x < y & y > 100)
        return "Koalas win"
    else if (x > 100 & y > 100)
        return "Hoa"
    else
        return "Khong co doi nao thang cuoc"
}

console.log(comp(avg_Dophins, avg_Koalas))


//Challenge 4
var bill = 275
calcTip = (bill) => {
    return (bill > 50 && bill < 300) ? bill * 15 / 100 : bill * 20 / 100
}
let total = calcTip(bill) + bill
let inra = `The bill was ${bill}, the tip was ${calcTip(bill)} and the total value ${total}`
console.log(inra)

//Chalenge 5
var score_D1 = 44
var score_D2 = 23
var score_D3 = 71

var score_K1 = 65
var score_K2 = 54
var score_K3 = 49
var calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}

avgD = calcAverage(score_D1, score_D2, score_D3)
avgK = calcAverage(score_K1, score_K2, score_K3)

var checkWinner = (avgD, avgK) => {
    if (avgD > avgK & avgD >= 2 * avgK)
        return `Dolhins win (${avgD} vs ${avgK})`
    else if (avgD < avgK & avgK >= 2 * avgD)
        return `Koalas win (${avgK} vs ${avgD})`
    else
        return "Khong co doi nao thang"
}

console.log(checkWinner(avgD, avgK))

//Challenge 6
var calnTip = (x) => {
    return (x > 50 && x < 300) ? x * 15 / 100 : x * 20 / 100
}

let arrBill = [125, 555, 44]
let arrTip = []

for (let x of arrBill) {
    arrTip.push(calnTip(x))
}
console.log("Mang chua Tips: " + arrTip)

let arrTotal = []
for (let i = 0; i < arrBill.length; i++) {
    arrTotal.push(arrBill[i] + arrTip[i])
}
console.log("Mang chua Total: " + arrTotal)

//Challenge 7
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}
mark.calcBMI = function() {
    return this.mass / this.height ** 2
}
john.calcBMI = function() {
    return this.mass / this.height ** 2
}

if(mark.calcBMI() < john.calcBMI()) 
   console.log(`John's BMI ${john.calcBMI().toFixed(2)} is higher than Mark's ${mark.calcBMI().toFixed(2)}!`)
else
    console.log(`Mark's BMI ${mark.calcBMI().toFixed(2)} is higher than John's ${john.calcBMI().toFixed(2)}!`)

//Challenge 8
let bill9 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tip9 = []
let total9 = []
for(let i = 0; i < bill9.length; i++){
    tip9.push(calnTip(bill9[i]))
}
for(let i = 0; i < bill9.length; i++){
    total9.push(calnTip(bill9[i])+bill9[i])
}
let tong = 0
let calcAverage9 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        tong = tong + arr[i]
    }
    return tong/arr.length
}
console.log(calcAverage9(bill9))
console.log(calcAverage9(tip9))
console.log(calcAverage9(total9))



//Challenge 9
let data1 = [17, 21, 23]
let data2 = [12, 5, -5, 0, 4]

let printForecast = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i]}oC trong ${i+1} ngay`)
    }
}

console.log(printForecast(data1))
console.log(printForecast(data2))