# tileslider
A simple slider, that displayes multiple tiles in a row. A tile gets visible/active by click or by time (automation)

## Installation
``` 
    npm i tileslider 
```
or
``` 
    yarn add tileslider 
```

## Usage

import as module
```
    import tileslider from 'tileslider'
```    

### Vanilla JS

In your HTML add a div with the class `tileslider` and place two child-divs inside with class `slide`. Place your content inside of the the slides.
```
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
```
    tileslider();
```    