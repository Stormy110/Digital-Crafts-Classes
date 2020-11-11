// ES6 Modules Why?

/*
1-Load order does not matter.
2-Multiple items can load from a module, but only one instance of the module is created/needed.
3-You do not need to worry about global variables and namesapce issues any longer.
4-You can load only one file and the modules will handle the rest.
5-It follows patterns of many other languages.
6-It protects functions not allowing you to accidently overwrite a function.
7-React Does it this way. Might as well get started now.
*/

// Getting Started in html
/*
<!-- type="module" is the important part -->
  <script src="main.js" type="module">
  </body>
  //main.js
  //root item can act more like other js scripts
  const start = ()=>{
      console.log('This is kinda normal')
  }
  */

  // Export

  /* /modules/quote.js */
  //simple, valid and useless
  export const consoleQuote = (quote)=>{
    console.log(quote)
}

//create a blockquote item
export const formatQuote = (quote, quoter)=>{
    let b = document.createElement("blockquote")
    let p = document.createElement("p")
    let f = document.createElement("footer")
    b.append(p,f)
    p.append(quote)
    f.append(`-${quoter}`)
    return b
}
/* /modules/helpers.js */
//just a list of helper functions

//don't ask me how this works. I just cut and pasted it.
const createUUID = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

const truncate = (text, limit, after)=> {
    if (!text || !limit) return;
    let content = text.trim();
    content = content.split(' ').slice(0, limit);
    content = content.join(' ') + (after ? after : '');
    return content
};
//exporting all of the items by name at the end
export {createUUID, truncate}
/* config.js */
//You do not have to export a function
export const config = {
    id:Math.random(),
    apiKey:'anAPIKeyThatIsNotASecret'
}

// Import

/* main.js */
import {config} from "./config.js"

// use the imported function
console.log(config)
//if you want to import more than one from same source
import {consoleQuote, formatQuote} from "./modules/quote.js"
//you do not have to import everything exported!
import {createUUID} from "./modules/helpers.js"

consleQuote("Quote me NOW!")
let newId = createUUID()
console.log(newId)
//changing the name of the import
import {truncate as trunky} from "./modules/helpers.js"

let shortended = trunky(`Voluptate exercitation aliquip qui ipsum labore exercitation. Culpa ex ut proident voluptate exercitation velit consectetur duis. Commodo pariatur et fugiat ex aliqua Lorem commodo dolore non minim sit amet mollit. Nulla ullamco consectetur aliqua dolor cillum velit ea ut.`, 10)

console.log(shortended)


// DEFAULT EXPORT/IMPORT

/* config.js */

  //replace 'const config =' with 'export default'
  export default {
    
}

//main.js
import config from "./config" //no curley brackets
/* /modules/quote.js  */
// you can have a default and named
//removed export
const consoleQuote = (quote)=>{
    console.log(quote)
}

 //other functions

export default consoleQuote

/* main.js */
//quote was consoleQuote default is named whatever you choose to name it.
import quote, {formatQuote } from "./modules/quote.js" 


// IMPORTING IN MODULES

 /* config.js */
 import {createUUID} from "./modules/helpers.js"

 export default {
     id:createUUID(),
     apiKey:'anAPIKeyThatIsNotASecret'
 }