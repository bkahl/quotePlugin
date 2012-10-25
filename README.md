# What is quotePlugin?

quotePlugin is a jQjuery plugin that allows user's to dynamically create as many quotes within
a webpage when needed by specifying it's selector id.

## How to Install?

Either clone this project or download the zip file to get the jquery.quotePlugin.js file.

## How to Use?

### Basic Setup

First, add jquery.quotePlugin.js to your project "js" directory.

```js
yourProject/ ->
		* images/
		* css/
		* js/ ->
			* jquery.quotePlugin.js
		* index.html
```

Then, reference the jquery.quotePlugin.js file within your index.html file at the bottom of the "body" tag NOT in the "head" tag like so:

```js
<body>
	<script src="js/jquery.quotePlugin.js"></script>
</body>
```

Second, add style.css to your project "css" directory.

```js
yourProject/ ->
		* images/
		* css/ -> 
			* style.css
		* js/
		* index.html
```

Then, reference the style.css file within the "head" tag of your index.html file like so:

```js
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

```js
yourProject/ ->
		* images/ ->
			* bottom.png
			* close-quote.png
			* content.png
			* open-quote.png
			* top.png
		* css/
		* index.html
```

### How To Make A Quote Using Quote Plugin

First, create a dom element with a unique ID and add it within the "body" tag like so:

```js
<body>
	<div class="container">
		<div id="quote1"></div>
	</div>
</body>
```

Lastly, pass the value of the quote into the quote() parameters like so:

```js
<script>
	$().ready(function() {
		$('#quote1').quote({
			layout: { bottom: 20, left: 35 },
			firstLine: 'This is my first line of the quote',
			message: 'This is my quote starting after line 1',
			fromWho: 'author'
		});
	});
</script>
```

### Things To Note About quotePlugin Properties

layout : Can take the following options, (top,left,bottom,right).
firstLine : Takes the first line of the quote, this property has a different font style then the message.
message : Main quote after the first line.
fromWho : Author name of the quote.