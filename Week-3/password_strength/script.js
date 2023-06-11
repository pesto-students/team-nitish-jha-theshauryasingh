
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
        // console.log(character)
        if ( !(isNaN(Number(character)))){
            // console.log('.. ', Number(character));
            continue;
        } else if (character == character.toUpperCase()) {
            // console.log(',, ', character);
            return true;
        }
    }
    return false;
}
