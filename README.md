ExpressFileManager
==================

This web app is a file manager built with express + nodejs
functions:
+ upload any types of files
+ view uploaded files
+ download any files

Installation
=======
```sh
$ git clone git@github.com:lgrcyanny/ExpressFileManager.git
$ cd ExpressFileManager
$ npm install
$ mkdir tmp
```
Then visit [http://localhost:3000/](http://localhost:3000/)

Related Techniques
==========
+ jQuery Form plugin, upload files with ajax method
+ ejs, the template engine to render html file

Links
======
http://markdawson.tumblr.com/post/18359176420/asynchronous-file-uploading-using-express-and-node-js


My Opinion
===========
I found that angularjs is in damand, since I have not found a good way to render the ajax results with ejs.
And, it's not a good idea to mix front-end render logic with back-end logic. It's better to use angularjs for front-end
and bulid back-end built node.