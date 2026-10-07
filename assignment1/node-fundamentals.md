# Node.js Fundamentals

## What is Node.js?
It is a open souce and cross platform runtime enviroment for executing javascript code outside of a browser. It is used to built backend services like API. It is good for building highly scable , data intensive and real time apps . It is used for agile development 

## How does Node.js differ from running JavaScript in the browser?
Node.js will help javscript to start ouside the browser and also helps to read and write files, start a web browser , read enviroment variables, work with OS services and backend libraries like Express   

## What is the V8 engine, and how does Node use it?
V8 engine is a fast performace engine google originally bulit for the chrome browser . It executes JS but compiling into machine code. Node.js uses V8 to run JavaScript outside the browser and adds backend features such as file-system access, networking, and environment variables.

## What are some key use cases for Node.js?
Web APIs and servers, Command Line tools,  Real time apps such as chat or live dashboards that pushes updates instantly , build tools and scripts 

## Explain the difference between CommonJS and ES Modules. Give a code example of each.


**CommonJS (default in Node.js):**
```js
CommonJS is the traditionalmodule system. It uses require to import and module.export to export.
```
function add(a, b) {
  return a + b;
}
module.exports = { add };
const { add } = require("./mathUtils");

console.log(add(2, 3));
**ES Modules (supported in modern Node.js):**
```js
ES Modules is morden Js it uses export and import 
``` 

export function add(a, b) {
  return a + b;
}

import { add } from "./math.js";

console.log(add(2, 3));