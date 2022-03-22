##

This document covers typescript and babel for nodejs project

#

How it is done :

##

Babel is used for transpiling the .ts code to .js code using "@babel/preset-typescript" which doesnt include the type checking as part of compiling the ts code

For type checking, we are using tsc compiler to run in noEmit mode , which you can see in the compiler option in tsconfig.json

If you want to generate types for the javascript code generate, enable emitDeclarationOnly:true and declartion:true options which emit only declartion in .t.ds file (when noEmit:true is not required)

Finally generate source maps as part of transpiling for debugging.

#

Commands

`npm run watch ` // to type check and compile in watch mode```

`npm run build` //to compile and build without watch```

To run the nodejs build file

`node --enable-source-maps lib/index.js`
