# 1. HTML Intro

1. General rule: `</tag key="value"> content </tag>`

1. HTML element
    - tag
        - opening tag
        - closing tag (optional)
        - attributes (optional)
    - content (optional)

1. HTML document

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <!-- character set your document should use to UTF-8 -->
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <img src="images/firefox-icon.png" alt="My test image">
      </body>
    </html>
    ```

    - `<!DOCTYPE html>` required preamble
    - `<html>` root element
    - `<head>` container for non-viewable contents, only 1
    - `<title>` titel of page shown in browser
    - `<body>` container for contents to show, only 1

1. Marking up text
    - headings
    - paragraphs
    - lists: ul/ol

1. HTML element reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

1. Common elements
    - `<h1>` headings, 1-6, block level e (new line)
    - `<p>` paragraph, block level e (new line)
    - `<ul>` / `<ol>` : `<li>`
        - multi-level INSIDE the parent element
    - `<div>` group things together, block level e (new line)
    - `<span>` group things together, inline

1. Attribute reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

1. Common attibute
    - `src` in <img> ... 
    - `href` in <a>

## 1.1. Tables

1. Table reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

1. `<thead>` also needs `<tr>` inside
    - `<th>`: `<td>` + `<b>`

## 1.2. Forms

1. `<form>`, block level element
    - Attribute
        - action: addr the form send data to
        - method: HTTP method
    - contents to be submitted together

1. `<input type=...>`
    - MDN input reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
    - simple validation
        - `required`
        - `type` to restrict type
    - `title`: tip when cursor is hovoring

1. `<label>`
    - `<label>text <input> </label>` no need for id to use label
    - `<label for="key">text</label>    <input id="key">`

1. Radio btn
    - `name` to connect (only can choose 1)
    - `value` to set value

1. dropdown
    - `<select>`

1. textarea

1. Checkbox

check box

1. MDN
    - web dev wiki

# 2. CSS Intro

1. CSS: cascading style sheets

1. General rule
    - duplicate css => last one take effects

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

1. Color
    - build-in: hard to remembrer name => good for debugging
    - Hexadecimal:
        - `#rrggbb` each 2 digit for r, g, b channel
    - RGB:
        - `rgb(r, g, b)` each channel 0-255
    - RGGB
        - `rgba(r, g, b, a` add alpha channel, 0.0-1.0, for transparent

1. border:
    - color, width, style: all required
    - `border [width] [style] [color]` shortcut of above, no comma between properties

1. Common selectors
    - MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
    - Basic
        - `type_sel` tag name
        - `.class_sel` group hook for elements
        - `#id_sel` unique hook for 1 element
        - `element[attr]` obj have the given attr
        - `*` star, select all obj
    - Grouping
        - `#id, .class, type` multi "OR", seperated by ","
        - `e[attr1][attr2]` multi-attribute "AND"
    - Combinators
        - `parent child` descendant in any level, seperated by " "
        - `parent > child` direct child (not recursively), seperated by ">"
        - `e1 ~ e2` general sibling, e2 FOLLOWS e1 and have same parent
        - `d1 + e2` adjacent sibling, e2 IMMEDIATELY FOLLOWS e1 and have same parent
    - Pseudo
        - classes: function, dynamic (take bonas quiz 1 for example)
            - `ul:nth-of-type()` n-th element
                - `:nth-of-type(n)` n-th element
                - `:nth-of-type(even)` even element
            - `hover`
            - `visited`

1. Inheritance and specify
    - specifity: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
        - weight of selector, only applies when targeted by multiple CSS declarations
        - increase of specifity
            - `*` universal
            - `tag`, `::before` pseudo element
            - `.class`, `[type="radio"]` attr, `:hover` pseudo class
            - `#id`
        - all same -> apply last


1. common property
    - `text-decoration`
        - `line-through` strick text out

1. Checkbox elements cannot be styled directly.