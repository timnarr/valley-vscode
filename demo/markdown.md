# Markdown Demo Syntax
based on https://daringfireball.net/projects/markdown/syntax


## Headings

This is an H1
=============

This is an H2
-------------

# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5
###### This is an H6

# This is an H1 #
## This is an H2 ##
### This is an H3 ###


## Emphasis

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

_Or a **combination** of both_

~~Strikethrough~~


## Blockquotes

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. *Aliquam hendrerit* mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam **semper ipsum sit** amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

### Nested Blockqoute
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");


## Lists

### Unordered
+ Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
* Integer molestie lorem at massa

### Ordered
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

### List containing other Markdown elements
*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
*   A list item with `code`


## Code Blocks

### Inline code
Use the `printf()` function.
``There is a literal backtick (`) here.``
A backtick-delimited string in a code span: `` `foo` ``

### Indented code
This is a normal paragraph:

    This is a code block.

### Block code "fences"
```
    Sample text here...
```

### Block code with Syntax highlighting
``` js
    var foo = function (bar) {
    return bar++;
    };

    console.log(foo(5));
```

## Horizontal Rules

* * *

***

*****

- - -

---------------------------------------


## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

### Inline Links
[link text](http://example.com/)
[link with title](http://example.com/ "title text!")


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
