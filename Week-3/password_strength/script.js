
function isStrongPassword(pass) {
    if (pass.length < 8){
        return false
    } else if (pass.includes('password')){
        return false
    } else if (checkUpperCase(pass) == false){
        return false
    }
    return true
}

function checkUpperCase(string) {
    for (let i = 0; i < string.length; i++) {
        character = string[i]
        if (Number(character) != 'Nan'){
            console.log(Number(character));
            continue;
        } else if (character == character.toUpperCase()) {
            return true;
        }
    }
    return false;
}