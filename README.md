# What is quotePlugin?

quotePlugin is a jQjuery plugin that allows user's to dynamically create as many quotes within
a webpage when needed by specifying it's selector id.

## How to Install?

Either clone this project or download the zip file to get the jquery.quotePlugin.js file.

## How to Use?

### Basic Setup

First, add jquery.quotePlugin.js to your project "js" directory.

```html
yourProject/ ->
		* images/
		* css/
		* js/ ->
			* jquery.quotePlugin.js
		* index.html
```

Then, reference the jquery.quotePlugin.js file within your index.html file at the bottom of the "body" tag NOT in the "head" tag like so:

```html
<body>
	<script src="js/jquery.quotePlugin.js"></script>
</body>
```

Second, add style.css to your project "css" directory.

```html
yourProject/ ->
		* images/
		* css/ -> 
			* style.css
		* js/
		* index.html
```

Then, reference the style.css file within the "head" tag of your index.html file like so:

```html
<html>
	<title></title>
	<head>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
	
	</body>
</html>
```

Lastly, add all the images from the zip/clone into your "images" directory like so:

```html
yourProject/ ->
		* images/ ->
			* background.png
			* bottom-arrow-default.png
			* bottom-arrow-flipped.png
			* bottom-edge.png
			* bottom-left.png
			* bottom-right.png
			* close-quote.png
			* left-arrow-default.png
			* left-arrow-flipped.png
			* left-edge.png
			* open-quote.png
			* right-arrow-default.png
			* right-arrow-flipped.png
			* right-edge.png
			* top-arrow-default.png
			* top-arrow-flipped.png
			* top-edge.png
			* top-left.png
			* top-right.png
		* css/
		* index.html
```

```html
***NOTE*** At some point I'll convert these images to a sprite, which is recommended.
```

### How To Make A Quote Using Quote Plugin

First, create a dom element with a unique ID and add it within the "body" tag like so:

```html
<body>
	<div class="container">
		<div id="quote1"></div>
	</div>
</body>
```

Lastly, pass the value of the quote into the quote() parameters like so:

```html
<script>
	$().ready(function() {
		$('#quote1').quote({
			layout: { bottom: 20, left: 35, width: 400 }, 		// posible values: top, right, bottom, left, width
			firstLine: 'This is my first line of the quote',
			message: 'This is my quote starting after line 1',
			fromWho: 'author',
			arrowTarget: 'bottom', 								// possible values: top, right, bottom, left
			arrowImg: 'default', 								// possible values: default, flipped
			arrowPixelPositioning: 77
		});
	});
</script>
```
### Things To Note About quotePlugin Properties

1. layout : Can take the following options, (top,left,bottom,right,width).
2. firstLine : Takes the first line of the quote, this property has a different font style then the message.
3. message : Main quote after the first line.
4. fromWho : Author name of the quote.
5. arrowTarget : Can take the following options, (top,left,bottom,right).
6. arrowImg : Can take the following options, (default, flipped).
7. arrowPixelPositioning : Can take any numeric value to position the tail of the speech bubble around the quote.
