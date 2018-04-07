# Spaceman Holdings LLC Homepage
## Built for https://blockchainspaceman.com
### Author: [Jordan Mynes](https://github.com/jmynes)

---

## Environment
### [Materialize SASS 1.0.0-beta](http://materializecss.com/)
  * You can compile this projects SASS into CSS using [Koala on Windows/Mac/Linux](http://koala-app.com/), or your choice of SASS compiler
  * sass/materialize.scss imports several files from sass/components/ and compiles into materialize.css
  * If you want to easily see edits, switch out materialize.css where materialize.min.css is set in index.html.
  * Otherwise, you can manually minimize CSS if you:
    * Select materialize.css in Koala (or use the relevant flag in your SASS compiler and select Output Style: CSS)
      * [Here's a graphical guide: ](https://maheshwaghmare.wordpress.com/2014/09/30/how-to-minify-css-js-less-sass/)
    * And do this for every change. I'd instead recommend editing with materialize.min.css disabled in favor of the regular file.

### Font Awesome
Replaced MaterializeCSS's Google Icon import with [Font Awesome](https://fontawesome.com/v4.7.0/icons/), because it didn't have social media icons

---