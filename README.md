# 1. HTML

## 1.1. HTML Document Structure

1. HTML document

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Title of Browser</title>
        </head>
        <body>
            <img src="img.png" alt="alternate text">
        </body>
    </html>
    ```

    - `<!DOCTYPE html>` required preamble
    - `<html>` root element
    - `<head>` container for non-viewable contents, only 1
    - `<title>` titel of page shown in browser
    - `<body>` container for contents to show, only 1

### 1.1.1. Element

1. Structure: `<tag key="value"> content </tag>`
    - tag
        - opening tag (required)
        - closing tag (optional)
        - attributes (optional)
    - content (optional)

1. Marking up text
    - `<h1>` headings
    - `<p>` paragraphs
    - `<ul>`, `<ol>` list and `<li>` item

1. Common elements summary
    - `<h1>` headings, 1-6, block level e (new line)
        - Usually 1 `<h1>` only
    - `<p>` paragraph, block level e (new line)
    - `<ul>` / `<ol>` : `<li>`
        - multi-level INSIDE the parent element
    - `<div>` group things together, block level e (new line)
    - `<span>` group things together, inline

1. HTML element reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

### 1.1.2. Attribute

1. class: grouping
    - multiple: `<td class="c1 c2 c3">`

1. name

1. id

1. Attribute reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

## 1.2. Element Bundles

### 1.2.1. Tables

1. Structure:
    - `<table>` table root
        - `<thead>` header region
            - `<tr>` header row
                - `<th>` data cell (`<td>` + `<b>`)
        - `<tbody>` body region
            - `<tr>` body row
                - `<td>` data cell

1. Table reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

### 1.2.2. Form

1. Structure
    - `<form>` form root
        - `<lable>` lable for input field
        - `<input>` input field
        - `<button>` action button (can also be `<input>`)

1. `<form>`, block level element
    - Attribute
        - action: address the form send data to
        - method: HTTP method
    - contents to be submitted together

1. `<label>` relation with `<input>`
    - `<label>text <input> </label>` no need for id to use label
    - `<label for="key">text</label>    <input id="key">`

#### 1.2.2.1. "input", "select" element

1. Common attribute
    - `id` unique
    - `disabled` can be input/selected
    - `name` grouping
    - `required` non-empty validation
    - `title`: tip when cursor is hovoring
    - `type=...` type & native validation
    - `value`

1. Common `input[type]` and specific attribute
    - "checkbox"
    - "email" 
    - "password"
        - `pattern` regex
    - "radio"
        - `name` to group
        - `value` to set value
    - "text"

1. "select": dropdown menu
    - `option` to add option
    - common attribute
        - "disabled" use with "selected" for placeholder 
        - "selected"

1. input element reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input


# 2. CSS

## 2.1. Structure

1. CSS (cascading style sheets) document

    ```css
    selector {
        property1: value;
        property2: value;
    }
    ```    

1. Location
    - Inline: tedias, every element
    - `<style type="text/css">` seperated, better but still in html file, GOOD for debugging
    - `<link rel="stylesheet" type="text/css" href>` Best, seperate file

## 2.2. Selector

1. Basic
    - `type_sel` tag name
    - `.class_sel` group hook for elements
    - `#id_sel` unique hook for 1 element
    - `element[attr]` obj have the given attr
    - `*` star, select all obj

1. Grouping
    - `#id, .class, type` multi "OR", seperated by ","
    - `e[attr1][attr2]` multi-attribute "AND"

1. Combinators
    - `parent child` descendant in any level, seperated by " "
    - `parent > child` direct child (not recursively), seperated by ">"
    - `e1 ~ e2` general sibling, e2 FOLLOWS e1 and have same parent
    - `d1 + e2` adjacent sibling, e2 IMMEDIATELY FOLLOWS e1 and have same parent

1. Pseudo
    - classes: function, dynamic (take bonas quiz 1 for example)
        - `ul:nth-of-type()` n-th element
            - `:nth-of-type(n)` n-th element
            - `:nth-of-type(even)` even element
        - `hover`
        - `visited`

1. Tip
    - Inspector tool for precise selection.

1. MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors


## 2.3. Inheritance and specify

1. specifity:
    - weight of selector, only applies when targeted by multiple CSS declarations
    - increase of specifity
        - `*` universal
        - `tag`, `::before` pseudo element
        - `.class`, `[type="radio"]` attr, `:hover` pseudo class
        - `#id`
    - all same -> apply last

1. MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## 2.4. Common property

1. color
    - build-in: hard to remembrer name => good for debugging
    - Hexadecimal:
        - `#rrggbb` each 2 digit for r, g, b channel
    - RGB:
        - `rgb(r, g, b)` each channel 0-255
    - RGGB
        - `rgba(r, g, b, a` add alpha channel, 0.0-1.0, for transparent

1. border:
    - color, width, style: all required
    - `border [width] [style] [color]` shortcut of above, no comma
    
1. text-decoration
    - `line-through` strick text out

1. float

## 2.5. Background

1. No repeating bg img:

``` css
html {
    height: 100%;
}
```

## 2.6. Font

1. font-family
    - OS wise supporting

1. font-size
    - approach
        - keyword
        - px
        - em: parent font-size, default 16px
    - MDN

1. font-weight: thickness
    - keyword
    - numeric: 100-800 (some fonts)

1. line-height: ratio

1. text-align

1. text-decoration
    - underline
    - line-through

1. text-shadow: x-div, y-div, radius, color
    - can set multiple shadows in the same line

1. Embed Google fonts: https://fonts.google.com/


## 2.7. Box Model

1. element is represented as a rectangular box
    - margin: between border, other element
        - `margin: [top] [r] [bottom] [l]`
        - `margin: [top&b] [l&r]`
        - `margin: 1px`
        - `margin-left:`
        - `margin: auto`: center element
    - border
        - `border [width] [style] [color]`
    - padding: between border, content
        - `margin: [top] [r] [bottom] [l]`
        - `padding: 1px`
        - `padding-left: `
    - content
        - `width/height: 50`

1. Responsive vertical margin/padding
    - `margin-top / margin-bottom`, `padding-top / padding-bottom` are relative to width of containing block!

# 3. JavaScript

## 3.1. Data Structure

### 3.1.1. Primitives

1. Five primitives
    - number
    - string
    - boolean
    - null
        - None
    - undefined
        - declared but not defined

1. Common Methods
    - `.toString()` convert to string
    - `.valueOf()` convert to number

1. Variable: `var name = val`
    - Not type fixed

#### 3.1.1.1. Number

1. Always 64-bit float, 1 sign + 52 mantissa + 11 exponent
    - Integers are accurate for up to 15 digits.
    - The max number of decimals is 17
    - Convert to _int_ for serious calculation, float arithmetic is not always accurate, then convert back:

        ```js
        var x = 0.2 + 0.1;                  // 0.30000000000000004
        var x = (0.2 * 10 + 0.1 * 10) / 10; // 0.3
        ```

1. Operators: 
    - `+, -, *, /, %, **`
    - In(/de)creament: `++, --`, both front/end ok

1. Addition and concatenation
    - `+`: left-side domination:

        ```JS
        var x = 10, y = 20, z = "30";
        var res = x + y + z             // "3030"
        var res = z + x + y             // "301020"
        ```

    - Operators other than `+` :try to convert to number

        ```JS
        var x = "100", y = "10";
        var z = x + y                   // "10010"
        var z = x - y                   // 90
        var z = x * y                   // 1000.
        var z = x / y                   // 10

    - Force convertion to number: unary operators

        ```js
        var z = (+x) + (+y)             // 110
        var z = (+"100") + (+"10")      // 110, only first brackets can be ommited

        var x = + "100", y = + "10";    // 100, 10
        var z = x + y                   // 110
        ```


1. Methods
    - `(123).toExponential(n)` exp notation, round for n digits, default no round.
    - `(123).toFixed(n)`       fixed length decimal, round for n digits, default no decimal
    - `(123).toPrecision(arg)` fixed length number, round for n digits, default no round.

    > Comparison: "und" for undefind

    n   | (9.66).toExponential(n) | (9.66).toFixed(n) | (9.66).toPrecision(n)
    --- | ---                     | ---               | ---
    und | 9.66e+0                 | 10                | 9.66
    1   | 9.7e+0                  | 9.7               | 1e+1
    3   | 9.6600e+0               | 9.6600            | 9.660


1. Convert to Number
    - `Number(x)`               type conversion, == unary `+` opr
    - `parseInt(str, ?radix)`   parse to integer with radix, ignore exp notation
    - `parseFloat(str)`         parse to float

    > Comparision

    str                      | Number(str)   | parseInt(str)
    ---                      | ---           | ---
    `"20px"`                 | NaN           | 20
    `"010"`                  | 10            | 8 (`radix=10` => 10)
    `"0xF"`                  | 15            | 15
    `"2e1"`                  | 20            | 2
    `true`                   | 1             | NaN
    `new Date("2017-09-30")` | 1506729600000 | NaN


1. "Number" class properties
    - `Number.MAX_VALUE`
    - `Number.MIN_VALUE`
    - `Number.POSITIVE_INFINITY` => `Infinity`
    - `Number.NEGATIVE_INFINITY` => `-Infinity`
    - `Number.NaN` "Not-a-Number", `var x = 100 / "Apple";`

#### 3.1.1.2. String

1. Quote:
    - Double / single valid.
    - Escape: `\`

1. Methods
    - Find a substr: return index or -1
        - `.indexOf(x, ?i)`     FIRST, from `start` foward,   include `i`.
        - `.lastIndexOf(x, ?i)` LAST,  from `start` backward, include `i`.
        - `.search(x)`          FIRST or regEx

    - Slice

        Method               | Pos index   | Neg index
        ---                  | ---         | ---
        `.slice(i, ?j)`      | s[i, j)     | backwards      // j can be neg
        `.substring(i, ?j)`  | s[i, j)     | not accepted
        `.substr(i, ?l)`     | s[i, i + l) | s[i, i - l]

    - Extract
        - `.charAt(i)`     char        or empty str
        - `.charCodeAt(i)` UTF-16 char or empty str
        - `s[i]`           char        or `undefined`, ES5+, read only (no error)

    - Replace
        - `.replace(x, y)`
            - `x`: specific val: first match
            - `x`: regEx, between `//`
                - `//i`: match first
                - `//g`: match all

    - Split: return an array
        - `.split(x)`  split on `x`.
        - `.split("")` split each char.
        - `s.split()`  `[s]`
    
    - repeat:
        - `.repeate(n)`

1. Property
    - `.length`

1. Template literals: string w/ embedded exp
    - ``text ${exp}``
    - Multiline

        ```js
        console.log(`\
        string text line 1
        string text line 2`);
        ```

    - Nesting

        ```js
        const x = `do ${eat() ? 'eat' : 
            `not ${notDrink() ? 'drink': 'dehydrate'}`}`
        ```

    - Tagged templates: customized parsing

#### 3.1.1.3. Boolean

1. Operator
    - Comparison
        - `>, >=, <, <=, ==, !=` value only, because of type Coercion
        - `===, !==` value and type
    - Logical
        - `&&, ||, !`
    - Ternary
        - `varName = condition ? <true action> : <false action>`
        - `condition ? <true action> : <false action>`

1. Truthy / falsy vals for logical ops
    - Falthy
        - false
        - 0
        - ""
        - null
        - undefined
        - NaN
    - Truthy: everything else

1. wtf

    ```js
    true == "1"         // true, all other but 1 are false

    null == undefined   // true

    Nan == Nan          // false
    ```

### 3.1.2. Arrays

1. Create
    - Use `var arr = [item1, item2, ...]`
    - DO NOT use `Array()`, causing confusion.

        ```js
        var arr = new Array(10, 11)   // [10, 11]
        var arr = new Array(10)       // [empty × 2]
        ```

    - Elements can be diff data type

1. Method
    - `.forEach` loop: callback function (like Ruby)
        - Callback function args: `element, ?index, ?arr`

        ```js
        arr.forEach( (e, i, arr) => { x...; i... ; arr...; } );
        ```

1. Properties
    - `.length`

1. WTF:

    ```js
    arr = [1, 2];
    arr["test"]
    ```



### 3.1.3. Object

1. Init
    - `var obj = {}`
    - `var obj = {...:..., }`
    - `var obj = new Object()`

1. No require for datatype uniformity

1. Dot notation
    - Not work for
        - Starting with number
        - property name with space

1. Method:
    - `this`


## 3.2. Control Flow

1. Conditional
    - `if ... else if ... else`

1. Loop
    - `while (<condition>) {<body>}`
    - `for (<init>; condition; step) {<body>}`

## 3.3. Integrated Library

1. Math
    - `.random()` random number (0, 1)
    - `.floor()`  get integer part

## 3.4. Scope


## 3.5. Function

1. Declaration vs. expression
    - https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

1. Anonymous function vs. arrow function
    - Arrow function == anonymous function except
        - Can't be used as constructors

            ```js
            <!-- won't work, can't used for constructor -->
            Array.prototype.myForEach = fn => fn(this.length);
            ```

        - Omit parentheisis when only 1 param, omit return and brackets when only return exists

            ```js
            <!-- identical -->
            arr.map((element) => {
                return element.length; 
                }
            );
            arr.map(element => element.length);
            ```

        - Cautious when using `this`

            ```js
            fn_reg = function() { document.querySelector("#p1").innerHTML += this; }
            fn_arrow = () =>    { document.querySelector("#p2").innerHTML += this; }

            window.addEventListener("load", hello);     // owner of fn_arrow
            document.getElementById("btn").addEventListener("click", hello);
            ```

### 3.5.1. "this" keyword


## 3.6. DOM

1. Document Object Model
    - `<script> should be at the bottom to avoid DOM not loaded yet`

1. Get elementHandle, `document` 
    - `.querySelector`           match first, `.[class]`, `#[id]`, `[tag]`
    - `.querySelectorAll`        match all 
    - `.getElementById`          match one, id is unique, 
    - `.getElementsByClassName`  match all
    - `.getElementsByTagName`    match all
    - Multi match returns lists instead of array, need to loop through to use

1. Style: best practice of changing style in JS
    - `[elementHandle].classList`  not array, no `.push ...`
        - `.add`
        - `.remove`
        - `.toggle` turn a class on/off

1. Content
    - `[elementHandle]`
        - `.textContent`    plain text only
        - `.innerText`      plain text only
        - `.innerHTML`      preserve HTML syntax

1. Attribute
    - `[elementHandle]`
        - `getAttribute("<attr_name>")`
        - `setAttribute("<attr_name>", "val")`

### 3.6.1. Events

1. Process: select element => add event listener
    - `[elementHandle].addEventListener(eventType, fn)`
    - Can add multi listeners to an element

1. Event types
    - mouse: `click, mouseover, mouseout`
    - content: `change`
    - ref: https://developer.mozilla.org/en-US/docs/Web/API/Event

## 3.7. Chrome

1. Built-in methods
    - `alert`
    - `console.log`
    - `console.dir`
    - `prompt`          get input
    - `setInterval`     trigger a function at an interval

1. Console
    - Always return the last value eval-ed


# 4. Bootstrap

A front-end library, fast prototype, responsive

## 4.1. Components

1. Button: class based style
    - `.btn`: bind with Bootstrap button
    - `.btn-default`: color
    - `.btn-lg`: size

1. Jumbotron

1. Container
    - fast nice space and center

1. Form
    - `.form-control`: make inputs bootstrap binded
    - `.form-group`: spacing
    - `.form-inline`: inline form

1. Navbar
    - `.nav navbar-collapse`: contents to collapse
    - Hamburger button to expand
        - `.navbar-toggle collapsed`
        - `#data-target`
    - `navbar-fixed-top`: padding 70px

1. Thumbnail
    - `.thumbnail`

## 4.2. Grid system

1. Purpose
    - Responsive for diff screen size
    - Split between 12 columns

1. Gird size: 
    - 4 sizes -> 4 layout
        - `.col-xs-` 
        - `.col-sm-`
        - `.col-md-`
        - `.col-lg-`
    - Small to large size layout inheritance

1. Nested grids
    - Sub-level `<div>` can be split in two further 4 sizes

## 4.3. Bootstrap 4

1. Differences and migration: https://getbootstrap.com/docs/4.4/migration/
    - Primary unit to `rem`(#times of root `.font-size`) from `px`
    - Global font-size to `16px` from `14px`d
    - Grid system
        - Move to Flexbox
        - 5 sizes -> 5 layout
    - Cards replaced panels, thumbnails and wells
    - Colors scheme unified: more contextual and background
    - Blockquote

1. Spacing Utilities helper class
    - Border / margin: add, subtract, color, radius
    - Dynamic according to size (`breakpoint` is sm, md, lg, or xl)
        - `{property}{sides}-{size}` for xs
        - `{property}{sides}-{breakpoint}-{size}` for sm, md, lg, and xl.
    - Inheritance: small to large.
    - ref: https://getbootstrap.com/docs/4.4/utilities/spacing/

1. Display Utilities
    - Hide / display at different size
    - `.d-{value}` for xs
    - `.d-{breakpoint}-{value}` for sm, md, lg, and xl.

1. Navbar
    - `.navbar-expand-{breakpoint}`: expand at breakpoint
    - `.navbar-{color}`, `.bg-{color}`: color of text and bg
    - Flexbox enabled by default

1. Containers
    - `.container` have space in margin
    - `.container-fluid` no margin space (responsive)

### 4.3.1. Flexbox

1. Alignment
    - control contents
        - `justify-content-{breakpoint}-{}`: horizontal align
            - start(default), end, center, around, between
        - `align-items-{breakpoint}-{}`: vertical align
            - start(default), end, center
    - overwrite in child
        - `align-self-{}`: overwrite `align-items` in parent

1. Sequence
    - `flex-row-{}`: None, reverse
    - `flex-column-{}`: None, reverse

### 4.3.2. Grid System

1. Gird size: still add to 12
    - 5 sizes -> 5 layout
        - `.col-` (default, xs)
        - `.col-sm-` -> `.col-xs-` in bs3
        - `.col-md-` -> `.col-sm-` in bs3
        - `.col-lg-` -> `.col-md-` in bs3
        - `.col-xl-` -> `.col-lg-` in bs3
    - Small to large size layout inheritance
    - default take all 12 cols

1. CDN

```html
<!-- Style sheet -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<!-- js lib -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```

### 4.3.3. Card

## 4.4. Reference

1. Doc
    - 3.3.7: https://getbootstrap.com/docs/3.3/
    - Up to date: https://getbootstrap.com/docs/



# 5. Node.js

1. Not compatible with Google Drive Folder!

1. package.json, to get node_modules/
    - dependencies:NOT to name the project (or the folder that the project lives inside of) the same as any of the node packages being used
    - `npm init` create package.json
    - `npm install --save [name] ` add to package.json
    - `npm install -g [name] ` install on system
    - Project names need to be all lowercase and contain url friendly characters, e.g., no spaces, instead use a hyphen.

## 5.1. Express

1. Why express
    - Popularity
    - lightweight

1. Skeleton
    - In project folder `npx express-generator`




1. Auto restart when changing:
    - `nodemon`

## 5.2. Route

1. `app.[method]("[srcName]", callBackFn(req, res) {} )`
    - req: request obj,  info of how router triggered
    - res: response info, how to react

1. Wildcard
    - `*`
    - Route placeholder: match a path/router patter, eg.
        - `/:sub`: matches "/anything/" but not "/anything/else"
        - `/:sub/:subSub`: matches "/anything/else" but not "/anything/"
        - accessable throungh `req.params`
    - query string
    - body param

1. Order
    - First match reponds

1. .ejs file
    - Passing var: res.render("fileName.ejs", {varInEjs: varInAppJs})
    - To ommit ext:
    
        ```js
        app.set("vioew engine", "ejs);
        ...
            res.render("fileName", {var: varInside});
        ```

### 5.2.1. POST

1. Receive data: method=POST, name=key
    - `req.body` => {key: val, ...}

    ```js
    app.use(bodyParser.urlencoded({extended: true}));
    ...
    app.post(..., (res, req) =>
        req.body)
    ```

1. Listen to request
    - `app.listen([port], callBackFn)`

1. Path:for files in public/ folder
    - User `/style.css` instead of `style.css` to fix it under root

### 5.2.2. EJS

1. Tag
    - `<%- include("path/aprtial.ejs") %>` include partial
    - `<%= %>` run and render the return value
    - `<% %>` run the code only

1. Partials

# 6. React

## 6.1. Intro

1. Start a Python http server at current folder
    - `python -m http.server`

## 6.2. official tutorial
### 6.2.1. Create React App on local machine

```sh
npx create-react-app my-app
```

Common component:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './...css';
```

### 6.2.2. React Component

A component takes in params called *__props__*

#### 6.2.2.1. Class Component

``` js
// each square of the board
class Square extends React.Component {
  // 1. constructor:
  //    - always call super when defining the constructor of a subclass
  //    - store state: this.state
  // 2. to change state (convention):
  //    - this.setState({key : val})
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  // render square
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

#### 6.2.2.2. Lifting state up

1. Avoid ask states from child
    - difficult to understand
    - susceptible to bugs
    - hard to refactor

1. Best approach To interact with multiple children data
    - tell child what to do by passing a prop
    - keeps the child components in sync with each other and with the parent component.

1. When lifting functions up, possibly creating closures.

```js
class Square extends React.Component {
  render() {
    return (
      <button 
        className="square" 
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component {
  // lift child state to common parent
  constructor(props) {
    super(props);
    this.state = {
      squares : Array(9).fill(null),
    }
  }

  // click action
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares : squares});
  }

  // click action also lifted up
  // coz modify boards state now
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick = {() => this.handleClick(i)}
      />
    );
  }
  
  // render board
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{sttaus}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          .....
        </div>
        <div className="board-row">...</div>
        <div className="board-row">...</div>
      </div>
    );
  }
}
```

#### 6.2.2.3. Function Components

1. Simpler, better way for stateless components.

```js
// Square component is stateless after "lift-up"
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

// refactor as a function component, simpler
funciton Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
  );
}
```

# 7. Philosophy

1. DRY: don't repeat yourself.

1. Separation of concers
    - HTML, CSS, JavaScript for structure, presentation, behavior SEPERATELY.


1. 60s explaination of how Internet works
    - DNS: domain -> IP
    - Server:
        - Routes to resource per HTTP request
        - Backend: output data
        - Frontend: construct webpage
    - Client: display webpage

1. Static vs Dynamic site:
    - Server side page generation (send back HTML, CSS, JS)

1. Generic stack
    - Frontend:
        - HTML, JavaScript, CSS
        - Framework
    - Backend
        - Language + framework (Python + Flask / JS + Express)
        - Server
        - Database MySQL / MongoDB

1. HTTP
    - Address bar can only make get request

## 7.1. Design Patterns

1. The way we structure code

1. Module
    - Orgnized
    - Avoid namespace collision

# 8. Resources

## 8.1. Icon

1. Font awesome: https://use.fontawesome.com/releases/v5.11.2/css/all.css