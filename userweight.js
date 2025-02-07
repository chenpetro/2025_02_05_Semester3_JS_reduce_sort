const user1Weight = prompt("Enter your weight")
const user1Height = prompt("Enter your height")

function calculateOverWeight(weight, hight){
        const user1Result = user1Weight / Math.pow(user1Height, 2)
        if(user1Result <=18.4){
            alert ('Not enough weight')
        }
        else if(user1Result >=18.4 && user1Result<=24.9){
            alert ('Normal weight')
        }
        else if(user1Result >=25 && user1Result<=39.9){
            alert ('Extra weight')
        }
        else if(user1Result >=40){
            alert ('You are fat')
        }
        else{
            console.log('');
        }
}



