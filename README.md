# [fitie]

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[fitie] is an [object-fit] polyfill for Internet Explorer browsers.

The `object-fit` property defines how an element responds to the height and width of its content box. It’s intended for images, videos and other embeddable media formats.

To start using `object-fit` in Internet Explorer 8 - 11, add an `object-fit` property to your CSS file.

```css
img.cover, video.cover {
	object-fit: cover;
}
```

Then, somewhere in the document, include a link to [fitie].

```html
<script src="fitie.js"></script>
```

That’s it. Enjoy!

[ci]:      https://travis-ci.org/jonathantneal/fitie
[ci-img]:  https://img.shields.io/travis/jonathantneal/fitie.svg
[npm]:     https://www.npmjs.com/package/fitie
[npm-img]: https://img.shields.io/npm/v/fitie.svg

[fitie]:      https://github.com/jonathantneal/fitie
[object-fit]: http://www.w3.org/TR/css3-images/#the-object-fit
