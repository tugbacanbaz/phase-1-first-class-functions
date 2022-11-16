function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    let multiply=()=> 4*5;
    let anotherFunction=()=> multiply;
    return anotherFunction;
}

function returnsAnAnonymousFunction(){
    return function(){};
}
