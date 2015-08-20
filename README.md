# WheelZoom

A simple tool allowing you to zoom images with your scrollwheel.

<img src="https://static.pexels.com/photos/1029/landscape-mountains-nature-clouds.jpg"
     class="wheelzoom"
     height="320"
     width="480">

Usage:
```
// assign wheelzoom
wheelzoom(document.querySelectorAll('img'));

// assign and set the zoom percent
wheelzoom(document.querySelectorAll('img'), {zoom:0.05});

// zooming out can be triggered by calling 'wheelzoom.reset'
document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.reset'));

// wheelzoom can be removed from an element by calling 'wheelzoom.destroy'
document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.destroy'));
```

[http://www.jacklmoore.com/wheelzoom](http://www.jacklmoore.com/wheelzoom)

<script src="https://raw.githubusercontent.com/jackmoore/wheelzoom/master/wheelzoom.js"></script>
<script>
  wheelzoom(document.querySelector('.wheelzoom'));
</script>
