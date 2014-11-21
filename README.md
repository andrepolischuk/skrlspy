# Skrlspy

  Scroll spy

## Instalation

  Via script tag in page sources:

```html
<script src="//cdn.rawgit.com/andrepolischuk/skrlspy/1.0.0/skrlspy.min.js"></script>
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
