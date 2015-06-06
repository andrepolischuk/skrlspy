# skrlspy

  > Scroll spy

## Install

```sh
npm install --save skrlspy
```

```sh
component install andrepolischuk/skrlspy
```

## Usage

  Set sections and nav classes via `data-skrlspy` and `data-skrlspy-nav` attributes:

```html
<body data-skrlspy=".section" data-skrlspy-nav=".nav">
```

## API

```js
slrlspy(options);
```

  Example:

```js
skrlspy({
  section : '.section',
  nav : '.nav'
});
```

  Options:

  * `section` - section class or ID
  * `nav` - navigation class or ID
  * `navActiveClass` - navigation active children classname
  * `change` - function called when changing section

## Support

  * Internet Explorer 8+
  * Chrome
  * Safari
  * Firefox
  * Opera

## License

  MIT
