// Buoi 1
var mass_Mark = 78
var height_Mark = 1.69
var mass_John = 92
var height_John = 1.95
BMI = (x, y) => {
    return x/y**2
}
mark_BMI = BMI(mass_Mark, height_Mark).toFixed(2)
john_BMI = BMI(mass_John, height_John).toFixed(2)
console.log("Challenge 1: ")
console.log("BMI Mark = " + mark_BMI)
console.log("BMI John = " + john_BMI)

markHigherBMI = (mark_BMI, john_BMI) => {
    return  mark_BMI > john_BMI
}
console.log("BMI cua Mark  lon hon John khong: " + markHigherBMI(mark_BMI, john_BMI))

//Challenge 2:
console.log("Challenge 2: ")
console.log("#1: ")
if(markHigherBMI(mark_BMI, john_BMI)==true) 
    console.log("Mark's BMI is higher than John's!")
else   
    console.log("John's BMI is higher than Mark's!")
console.log("#2: ")
if(markHigherBMI(mark_BMI, john_BMI)==true) 
    console.log(`Mark's BMI(${mark_BMI}) is higher than John's!`)
else   
    console.log(`John's BMI(${john_BMI}) is higher than Mark's!`)