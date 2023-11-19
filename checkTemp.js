
function checkTemp(temperature) {
    if (temperature >= 0 && temperature <= 20) {
        return -1; 
    } else if (temperature >= 21 && temperature <= 40) {
        return 0; 
    } else if (temperature >= 41 && temperature <= 60) {
        return 1; 
    } else {
        return "Temperatuur ei ole määratud vahemikes.";
    }
}

//kasutusnäide
const temperature1 = 15;
const temperature2 = 30;
const temperature3 = 50;

console.log(checkTemp(temperature1)); 
console.log(checkTemp(temperature2)); 
console.log(checkTemp(temperature3)); 
