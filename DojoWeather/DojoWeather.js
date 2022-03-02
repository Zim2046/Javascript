var messageElement = document.querySelector('#message')

function alertLoad(){
    alert('Loading weather reports...')
}
function removeCookies(element){
  messageElement.remove()
}

//Bonus

//todo OnSelect functions  
var tempValuesHigh = document.querySelectorAll('.high');
console.log(tempValuesHigh[0].innerText)

var tempValuesLow = document.querySelectorAll('.low');
console.log(tempValuesLow[0].innerText)

function tempConvert(element){
    
    if(element.value == '°C'){
        console.log("The units  are: ",element.value);
        for (var index = 0; index < tempValuesHigh.length; index++) {
            const currentHighTemp = tempValuesHigh[index] * (9/5)+32;
            
        }
    }
    else{
        console.log("The units  are: ",element.value);

    }
    // updates and stores the newly-selected foodToOrder variable
    tempUnits = element.value;
}
// 👇🏼alerts the updated foodToOrder variable
function orderFood(){
    alert("Ordering a "+ foodToOrder)
}