# Minimum

![](https://github.styleci.io/repos/371812650/shield?branch=master)

Helper function, that helps to delay promise execution. Just pass `Promise` and `delay` and work like with common functions, for example, `axios`.

## Install

```
$ npm install @qubeekio/minimum
```

## Usage

```js

// Would be executed after 300 milliseconds.

await Minimum(this.$axios.$get('/api'), 300).then((res) => {
  this.items = res.options
}).catch((err) => {
  this.isLoading = false
})
```
