const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specialCharacters = ['!','@','#','$','%','^','&','*','?'];
const lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function createPassword() {
    let password = [];
    function charTypeSelector() {
        return Math.floor(Math.random() * 4);
    }
    function charSelector(charType) {
        let length = charType.length;
        return Math.floor((Math.random() * length));
    }
    // randomly select indeces for character types
    for(i=16; i > 0; i--) {
        let charType = charTypeSelector();
        if(charType === 0) {
            password.push(numbers[charSelector(numbers)]);
        } else if (charType === 1) {
            password.push(specialCharacters[charSelector(specialCharacters)]);
        }else if (charType === 2) {
            password.push(lowerLetters[charSelector(lowerLetters)]);
        }else if (charType === 3) {
            password.push(upperLetters[charSelector(upperLetters)]);
        } else {
            console.log(`error selecting charType on index ${i}`);
        }
    }
    let stringPassword = password.toString();
    console.log(stringPassword.replace(/,/g,""));
}

createPassword();

