### notes from day 1

I learned how to resolve conflicts: when having committed two different things to each file in both locations, a merging error will occur and you need to delete the delimiters that populate automatically to highlight the problem and then merge the two with the following command:
    git commit -am "notes(danny) made changes"
    then you can git push
git add (file)
    stages a file to be ready to receive commits
git pull
    pulls changes from an edited repository to stay up to date
git push
    changes other cloned respository to have the same changes



### Notes from startup day
 see the README file under this folder to get a summary of the technologies we will be focusing on with the startup application. 
 


### Notes from AWS
Learned about a lot of different things pertaining to AWS. Launched my own instance from the AWS site/console 
Ran a couple given commands to launch a remote shell console for the site. 
Command to launch remote terminal: ssh -i ~/tha_key.ssh/tha_key.pem ubuntu@3.86.179.239
Elastic IP address: 44.221.223.106


### Notes from doing the html deliverable
in order to get your thing to deploy to your domain you have to run the deploy files file (will look like deployFiles.sh)si
- The command to do it is: ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
- that last "startup" is where you want these files to be. So like deploying simon to my page with that command makes simon show up at simon.landminegame.com

### Midterm notes

## From the test review session (missed the first 15 mins)
260 TEST REVIEW NOTES
- [ ] valid JSON: the key is always a string, i.e. {“x”:3} (double quotes), this will turn into the javascript object {x:3}
- [ ] document.querySelector(‘p’).addEventListener(‘mouseover’, console.log). This is different from the queryselectall one, it inly adds mouseover listener to the FIRST p element, not all of them. Dont let the console.log confuse you
- [ ] <a href=“link”>
- [ ] To point to another DNS record, use the CNAME DNS record type
- [ ] CNAME, say lds.org is an alias for churchofjesuschrist.org, it would still take you there, but lds.org would remain
- [ ] A
- [ ] TEXT
- [ ] SOA
- [ ] div#header, the # means the id of it
- [ ] div.header, div with the class attribute of header
- [ ] CSS padding: 1em puts padding around content
- [ ] With JS => arrow functions, don’t need any return statement, it will just return what it evaluates to
- [ ] DOM textContent property — sets the child text first the an element
- [ ] not a valid JS function — function f(x) = {}
- [ ] Css box order - margin, border, padding, content
- [ ] Regex .match function (/A|f/i) — anything on the inside of the slashes if has an a OR f for this one^
- [ ] Promises (tough quesh, go back to it) — if all asynchronous, .catch() only if it fails, .finally() always goes
- [ ] Valid javascript OBJECT {x:3} uses a colon, not =
- [ ] DNS subdomain — c260.cs.byu.edu
- [ ] byu.edu — root domain
- [ ] edu — top domain
- [ ] flex column — children are rows within that column — flex direction column-reverse just flips everything upside down, so two divs with hello and world with those styles would have world hello on two separate lines

## Own Notes -- Going through every module and writing anything and everything
# HTTPS
- HTTPS uses TLS protocol to secure connections -- negotiates a shared secret and then uses it to encrypt connections
- Caddy uses Let's Encrypt to generate secure certificates
- You don't often manually make changes to your server/caddyfile, but to shell into your server, use this command => ssh -i [key pair file] ubuntu@[yourdomainnamehere]
- to edit caddyfile -- use command => vi caddyfile -- to exit => :wq and then sudo service caddy restart
- We edited it to route requests using port 443 (HTTPS) instead of port 80. Initially, it had :80 instead of a domain name outside the french braces. Not having :80 there makes 443 the default
startup.landminegame.com {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
}

# HTML stuff -- mostly taken from the curriculum .md, it's already nicely formatted :]

# Form element stuff

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |


The main purpose of the `form` element is to submit the values of the inputs it contains. Before JavaScript was introduced the `form` container element was essential because it was the only way for the browser to send the input data to a web server as part of a request to process the input and generate a new web page displaying the result of the input. With JavaScript we have much more control over input data and what is done with it. For example, in a single page application the JavaScript will dynamically rebuild the HTML elements to reflect the results of the user interaction. With this ability the data may not even be sent to the server. This greatly reduces the necessity of the `form` element, but it is often still used simply as a container. Just remember that you are not required to have a form element to use input elements.

Here is an example of a simple form that submits the value of a `textarea` element.

```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```
# Input element

The input element represents many different input types. You set the type of input with the `type` attribute. There are several different types to choose from. This includes different flavors of textual, numeric, date, and color inputs.

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

# HTMl media
- **Images**
 ```html
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```
- **Video**
```html
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```
# CSS Stuff
- **Declarations**
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

- There are many units you can use for stuff like padding or margin. Absolute => px, in (inches), ... -- Relative => em (multiplier of letter 'm' in parent font), % percentage of parent element, ...

- **FLEX**
Example:
```css
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```
```css
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```
- Explanation of above^^ => flex: 0 30px; gives the header 80 pixels always. since flex is zero, it will not change size. Main has flex: 1;, this means it will take all remaining space (it's the only non-zero value. The space it gets will be SUM of all the numbers / # of numbers)
- flex-direction; says where to put the elements if they need to be squeezed (side by side or on top of each other) => i.e. a phone would work way better with column flex. You can do a media query to find out what orientation we are in (portrait or landscape) and adjust flex to column in the case of portrait mode. You can also allow headers and footers to go away if you don't have enough room. 
**LIKE SO**
```css
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```

# Include Bootstrap
- <meta name="viewport" content="width=device-width, initial-scale=1"> => this is for bootstrap to figure out what size device you're on
- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">


## JAVASCRIPT

# General stuff: variables, syntax, etc...
- JS is a weakly typed language, it will change variable types for you depending on what context they're used in. Examples:
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true

- JS has regular looking if, else if, else statements (using {}) 
- common way to say if else: ? : -- example => a === 1 ? console.log(1) : console.log('not 1');
- has do while. do {} while (condition);
- for in -- for (const name in object) -- iterates over an objects property names, array's index
- for of -- same as for in, just gives values
- while(true) {if (condition) {do thing; continue;} else {break;}}

# JSON
- A **JSON** document contains one of the following data types:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

- usually it'll contain objects
**example**
```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
- convert JSON to and from JS and with JSON.parse and JSON.stringify
```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
- JSON can't represent the JS undefined object, so it just gets dropped

# Modules
- to import: 
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>

# Objects and Classes:
```js
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```
- can access the properties of an object with dot or with []
- the "new" operator causes the object's constructor to be called
- output entries, keys, or values with console.log(Object.entries(obj)) -- I guess you use the data type as the function, and specify which object in the parentheses

**class example**
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

- these examples use "extends" to use inheritance
- if you wanted to make any attribute private, preface it with a "#" => i.e. class Person {#name;}

# Promises
**simple example**
```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```
- using .then .catch .finally
```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

# regex
- strings support many functions: .match .replace .test .search .split
```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
- create them using class constructor or object literal:
```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

# rest
```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
- rest is for when we don't necessarily know how many parameters we're gonna have

# spread
- Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters.

```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

# exceptions
```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```
- uses try, catch, finally, throw syntax. 

# DOM
- accessing DOM:
```js 
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
- displays all elements ^
```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```
- accesses all p elements ^

-The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

- DOM allows injecting of event listeners as well:
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
# Async Promises and whatnot
- use the await syntax (only allowed when async is used to define a function)
**A couple examples**
```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```
```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```