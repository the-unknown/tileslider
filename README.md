# tileslider
A simple slider, that displayes multiple tiles in a row. A tile gets visible/active by click or by time (automation).

![Screenshot of tileslider](https://i.imgur.com/Ywx0ZcW.png)

The slide animation is completly done in CSS, so please make sure you import the CSS as well. 

There are no other dependencies.

## Installation
```bash 
    npm i tileslider 
```
or
```bash 
    yarn add tileslider 
```

## Usage

import as module
```js
    //import javascript
    import tileslider from 'tileslider'
    //import css
    import 'tileslider/tileslider.css'
```    

### Vanilla JS

In your HTML add a div with the class `tileslider` and place two child-divs inside with class `slide`. Place your content inside of the the slides.
```html
  <div class="tileslider">
    <div class="slide">
        <!-- add some content -->
    </div>
    <div class="slide">
        <!-- add some content -->
    </div>
  </div>
```

Place the main-function of the slider somewhere in your JavaScript code:
```js
    tileslider();
```    

## Functions

### Basic
This is the basic start. The slider is static and will not slide automatically
```js
    tileslider();
```   
### Automatic
Use this to activate the automatic slide feature.
```js
    tileslider({
        auto: true
    });
```   

Specify the speed of the autoslide
```js
    tileslider({
        auto: true,
        interval: 5000
    });
```   
The `5000` will let the slider slide automatically after 5sec (5000 milliseconds).

### Custom Classes
Set custom classes for the main slider as well as the slides themselves. 
__CAUTION__ If you use custom classes, the CSS styles will no longer work. So you have to write you own CSS for style and transitions.
```js
    tileslider({
        mainClass: ".slider",
        slideClass: ".tile"
    });
```   