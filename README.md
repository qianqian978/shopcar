# React实例 加入购物车

![image](https://github.com/qianqian978/shopcar/blob/master/src/images/carpic.png)

## Getting Started

### run运行

下载后进入目录npm install；
命令下 gulp server运行
浏览器输入:http://localhost:5000/

### Code

- **Native JavaScript**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="author" content="simbawu">
  <title>Digital Keyboard</title>
</head>
<body>
  <div id="values"></div>
  <div id="app"></div>
  <script src="./digitalKeyboard.js"></script>
</body>
</html>
```

```javascript
//digitalKeyboard.js
import DigitalKeyboard from 'digital-keyboard';

function inputValue(value){
  console.log(value); //DigitalKeyboard return value
  document.querySelector('#values').innerHTML = value;
}

new DigitalKeyboard(
    {
        el: document.querySelector('#app'), 
        type: 'idcard', 
        inputValue: inputValue
    }
);
```

- **React**

```jsx
import React from 'react';
import DigitalKeyboard from "digital-keyboard";
class KeyboardPage extends React.Component {

  constructor(){
    super();

    this.inputValue = this.inputValue.bind(this);
    this._renderKeyboard = this._renderKeyboard.bind(this);
  }

  componentDidMount(){
    this._renderKeyboard();
  }
    
  inputValue(value){
    console.log(value); //DigitalKeyboard return value
  }

  _renderKeyboard(){
    return new DigitalKeyboard (
      {
        el: this.refs.digitalKeyboard,
        type: 'number',
        inputValue: this.inputValue
      }
    );
  }

  render(){
    return (
      <div ref='digitalKeyboard'></div>
    )
  }
}

export default KeyboardPage;
```

- **Vue**

```js
<template>
  <div></div>
</template>
<script>
import DigitalKeyboard from "digital-keyboard";
export default {
  mounted () {
    this._renderDigitalKeyboard();
  },
  methods: () {
    _renderDigitalKeyboard() {
    	return new DigitalKeyboard (
          {
            el: this.$el,
            type: 'number',
            inputValue: this.inputValue
          }
        );
    },
     
    inputValue(value) {
      console.log(value); //DigitalKeyboard return value
    }
  }
}
</script>
```
## How to Contribute

Anyone and everyone is welcome to contribute to this project. The best way to start is by checking our [open issues](https://github.com/simbawus/DigitalKeyboard/issues),[submit a new issues](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=bug) or [feature request](https://github.com/simbawus/DigitalKeyboard/issues/new?labels=enhancement), participate in discussions, upvote or downvote the issues you like or dislike.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).

