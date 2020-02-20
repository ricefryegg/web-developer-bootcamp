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


# 3. Bootstrap

A front-end library, fast prototype, responsive

## 3.1. Components

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

## 3.2. Grid system

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

## 3.3. Reference

1. Doc
    - 3.3.7: https://getbootstrap.com/docs/3.3/
    - Up to date: https://getbootstrap.com/docs/


# 4. Resources

## 4.1. Icon

1. Font awesome: https://use.fontawesome.com/releases/v5.11.2/css/all.css