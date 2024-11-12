{
    function greet(name) {
        return `Assalomu alaykum ${name}`;
    }
    console.log(greet("Shuxrat"));
}



{
    const greet = function(name) {
        return `Assalomu alaykum ${name}`;
    };
    console.log(greet("Shuxrat")); 
}


{
    const greet = (name) => `Assalomu alaykum ${name}`;
    console.log(greet("Shuxrat"));
}




//2-masala

{
    const range = function(a, b) {
        let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr;
    };
    console.log(range(3, 6)); 
}


{
    const range = function(a, b) {
        let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr;
    };
    console.log(range(3, 6)); 
}


{
    const range = (a, b) => {
        let arr = [];
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr;
    };
    console.log(range(3, 6));
}




//3-masala

{
    function toNumber(bool) {
        return bool ? 1 : 0;
    }
    console.log(toNumber(true)); 
    console.log(toNumber(false)); 
}


{
    const toNumber = function(bool) {
        return bool ? 1 : 0;
    };
    console.log(toNumber(true)); 
    console.log(toNumber(false));
    
}

{
    const toNumber = (bool) => bool ? 1 : 0;
    console.log(toNumber(true)); 
    console.log(toNumber(false)); 
}



//4-masala
{
    function getFirstLetter(name) {
        return name[0];
    }
    console.log(getFirstLetter("Shuxrat")); 
}


{
    const getFirstLetter = function(name) {
        return name[0];
    };
    console.log(getFirstLetter("Shuxrat")); 
}


{
    const getFirstLetter = (name) => name[0];
    console.log(getFirstLetter("Shuxrat")); 
}


//5-masala
{
    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(5, 3, 7)); 
}

{
    const sum = function(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    };
    console.log(sum(5, 3, 7));
} 



{
    const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(5, 3, 7)); 
}
