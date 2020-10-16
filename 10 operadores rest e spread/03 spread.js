var args= [1,2,3];

console.log(args[0],args[1],args[2])

//ecma5
// apply() esta disponivel em todos os metodos do javascript

console.log.apply(console, args);

// ecma6 operador spread
console.log(...args)
