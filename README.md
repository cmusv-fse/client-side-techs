# web techs for FSE 18652

Under this umbrella project, there are several examples for your reference. 

### Bootstrap

This is a tease for you to play with Bootstrap if you are not familiar with it. Simply open any HTML in your favorite browser and make some quick experiments.

### FSE-code-architecture-demo

This repository is a light modified version from `express-generator`. You could see a clear MVC paradigm - model, view, controller.

### jQuery

This repository is setup for an in class activity to give you some hands on practice during recitation. If you are not familiar with jQuery, it's a good practice.

### Webpack

Webpack is a powerful tool for frontend asset bundler. It allows you to use `babel` to write es2015(es6) code with module import syntax together with other latest ECMAScript new features. 

You could also benefit from NPM echo system for your frontend libraries, 

e.g. simply `npm install bootstrap` or `yarn add bootstrap`, then you could do 

```
import 'bootstrap'
```

in your codebase to import bootstrap library

Webpack could also be used to import images, fonts, stylesheets, with different loaders. 

```
// with less-loader
import './style.less'
// with sass-loader
import './style.scss'
// with file-loader
import logo from './logo.png'
// with html-loader
import HomePage from './home-page.html'
```
