# tileslider
A simple slider, that displayes multiple tiles in a row. A tile gets visible/active by click or by time (automation)

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
        <div class="content"> add some content </div>
    </div>
    <div class="slide">
        <div class="content"> add some other content </div>
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
    tileslider(true);
```   

Specify the speed of the autoslide
```js
    tileslider(true, 5000);
```   
The `5000` will let the slider slide automatically after 5sec (5000 milliseconds).