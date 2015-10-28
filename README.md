# Library chat widget

Here are the files we used at the Skokie Public Library to make our own chat widget for the [Libraryh3lp](https://us.libraryh3lp.com/) service. Don't use Libraryh3lp? These files probably won't be much help, sorry.

## Why bother?

Good question! If clean, minimally designed things are your jam, then this widget might appeal to you. More to the point, though, our chat transactions tripled once we started using the widget, and having it appear on every page of the site (and we integrated with our catalog without any issue).

## What's included

There are four basic components included here:

- `skin.css`: styles for the skin you'll need to create in the Libraryh3lp admin.
- `chat_widget.html`: Basic HTML for the widget.
- `chat_widget.css`: Styles for the chat widget on your website. Or, use `chat_widget.scss` if you're into that.
- `chat_widget.js`: A few lines of JavaScript (well, jQuery flavored JS) to make the widget work.

[Download the files](https://github.com/skokielibrary/chat-widget/archive/master.zip) or use [clone them](https://github.com/skokielibrary/chat-widget.git) using git.

## How to set it up

### Libraryh3lp

First things first, you need a Libraryh3lp account, a queue, and a skin. This would theoretically work with any skin, so you don't have to use the `skin.css` file included here. We just opted for a more minimal look and feel. Consult their documentation for how to do this.

### HTML

We suggest starting with the HTML file. Place it somehwhere on your site, preferably a template or component (or whatever horrendous terminology Drupal uses) that gets loaded on every page. We place the code near the bottom of the page, but it doesn't really matter.

There are two variables you'll need to update before saving and moving on to the next step:

- `{{chatqueue}}`
- `{{chatskin}}`

### CSS

Include the CSS file, or better yet, use the `.scss` version as an include with your Sass files. If you're going the Sass route, you may want to update the `$primary-color` variable to match your site (or change the variable name altogether to match your naming scheme).

### JavaScript

At this time, the widget assumes that you're using jQuery on your site. A non-jQuery version would be easy, but we were already loading it on our site, we just went this route? Similar to the HTML files, be sure to replace `{{chatqueue}}` with the name of your queue. The script uses this to check the "presence API", to see if anyone is staffing your chat service or not and needs this name to do it.

> Note: The widget's default behavior is to hide when no one is staff the widget. If you don't want to hide it, you could opt to swap out the message instead.

## Additional setup

There's really no other setup, unless you want to recompile a new CSS file form the Sass version. In which case, you'll need to download this repository, then do:

`npm install`

This assumes you have [node.js](https://nodejs.org/en/) already installed. If you do, this command install the Gulp.js build system. Once you make changes to the Sass file, you can run `gulp` to generate the new CSS file.

Again, this is totally optional.

## Questions?

We can't really help with the Libraryh3lp end of things, but feel free to create an issue if you're having trouble.
