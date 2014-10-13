Canary
======

Image Binary/Base64 data using HTML5 Canvas

Canary is a simple library that retrieves a Base64 encoded string from any local image path.

To prevent tainted Canvas, all source path must be loaded from the same origin. The plugin
will not work with image source pathes loaded from other origins, as this violates the
same origin policy. 

See more on CORS enabled images with Canvas at:
https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
