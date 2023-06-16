const contains = (obj, val) => {
    let result = false;

    for(let key in obj) {
        if(obj[key] === val) return true;
        if(obj[key] instanceof Object) result = contains(obj[key], val);
    }

    return result;
}

var nestedObject = {

    data: {

        info: {

            stuff: {

                thing: {

                    moreStuff: {

                        magicNumber: 44,

                        something: 'foo2'

                    }

                }

            },

            property: 'some value'

        }

    }

}

console.log(contains(nestedObject, 44)); // returns true
console.log(contains(nestedObject, 'hello')); //returns false
console.log(contains(nestedObject, 'some value')); //returns true