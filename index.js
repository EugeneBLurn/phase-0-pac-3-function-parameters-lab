function introduction(name)
{ return `Hi, my name is ${name}.`}

function introductionWithLanguage(name, language)
{ return `Hi, my name is ${name} and I am learning to program in ${language}.` }

//example : function sayHelloTo(firstName = "User") {
//   console.log(`Hello, ${firstName}!`);
//}

function introductionWithLanguageOptional(firstName = `Gracie`, language = `JavaScript`)
{ return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`) }

//'Hi, my name is Gracie and I am learning to program in JavaScript.'