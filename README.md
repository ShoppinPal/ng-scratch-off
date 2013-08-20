## Angular Scratch Off Directive
An angular directive to create CSS based scratch off elements.

## Download
Grab the latest release from [here](http://github.com/ShoppinPal/ng-scratch-off/releases).

## Usage
Include `ng-scratch-off.min.js` before your app's script file.
```html
<script src="angular.js" type="text/javascript"></script>
<script src="ng-scratch-off.min.js" type="text/javascript"></script>
<script src="your-app.js" type="text/javascript"></script>
```
Add `shoppinpal.scratch-off` as a dependency for your app.
```js
angular.module('your-app', ['shoppinpal.scratch-off']);
```
Then use it as an element, attribute or class and specify a width and height.
```html
<div class="scratch-off"></div>
```