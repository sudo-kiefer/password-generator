const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specialCharacters = ['!','@','#','$','%','^','&','*','?'];
const lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperLetters = [];
for(i = 0; i < lowerLetters.length; i++) {
    upperLetters[i] = lowerLetters[i].toUpperCase();
}


function createPassword() {
    let password = [];
    let charTypeSelector = () => {
        return Math.floor(Math.random() * 4);
    }
    let charSelector = (charType) => {
        let length = size(charType);
        return Math.floor(Math.random() * length);
    }
    // randomly select indeces for character types
    for(i=16; i > 0; i--) {
        if(charTypeSelector === 1) {
            password.push(numbers[charSelector]);
        } else if (charTypeSelector === 2) {
            password.push(specialCharacters[charSelector]);
        }else if (charTypeSelector === 3) {
            password.push(lowerLetters[charSelector]);
        }else if (charTypeSelector ===4) {
            password.push(upperLetters[charSelector]);
        }
    }
    return password.toString();
}