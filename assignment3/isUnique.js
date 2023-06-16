const isUnique = (str) => {
    let obj = {};

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]) return false;
        else obj[str[i]] = 1;
    }

    return true;
}


console.log(isUnique('sara')); // returns false
console.log(isUnique('sugar'));// returns true