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

