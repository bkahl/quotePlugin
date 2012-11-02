/***************************************************************************
 *	Author:	Brad Kahl
 *	Date:	10.24.12
 *	Description: creates a dynamic quote that one can postion absolutely.
 **************************************************************************/
function createQuote(id, opts){
	
	var elements, 
		top = opts.layout.top || null,
		right = opts.layout.right || null,
		bottom = opts.layout.bottom || null,
		left = opts.layout.left || null,
		width = opts.width,
		bottomArrowRightPositionInPixels = opts.bottomArrowRightPositionInPixels;
		
	// creates markup
	elements = "<div class='quote'>";
		elements += "<div class='top-left-corner'></div>";
		elements += "<div class='top-edge'></div>";
		elements += "<div class='top-right-corner'></div>";
		
		elements += "<div class='left-edge'></div>";
		elements += "<div class='right-edge'></div>";
		
		elements += "<div class='content'>";
			elements += "<div class='message'>";
				elements += "<div class='open-quote'></div>";
				elements += "<span>"+opts.firstLine+"</span>";
				elements += "<p>"+opts.message+"</p>";
				elements += "<div class='close-quote'></div>";
			elements += "</div>";
			elements += "<div class='from'>~ "+opts.fromWho+"</div>";
		elements += "</div>";
		
		elements += "<div class='bottom-left-corner'></div>";
		elements += "<div class='bottom-edge'></div>";
		elements += "<div class='bottom-right-corner'></div>";
		
		elements += "<div class='bottom-arrow'></div>";	
	elements += "</div>";
		
	// append markup to selector
	$(id).append(elements).css('position','absolute');

	// subract 32 from the width becuase the corner images are 16px a piece and when added up,
	// they go into the negatives, causing the element to be 32px bigger then what's requested
	// by the user.
	$('#'+id.attr('id')+' > .quote').css('width',width-32);
	
	// position the bottom arrow with the user's input for right positioning
	$('#'+id.attr('id')+' > .quote > .bottom-arrow').css('right',bottomArrowRightPositionInPixels);
	
	// relatively postion quote within container based upon user input in the ['layout'] property on the quote()
	if(top){
		$(id).css('top',top);
	}
	if(right){
		$(id).css('right',right);
	}
	if(bottom){
		$(id).css('bottom',bottom);
	}
	if(left){
		$(id).css('left',left);
	}
	
}

(function($){
    $.fn.quote = function(options){
        var id = $(this), defaults, opts;

		// default quote used if user doesn't input their own data	
		defaults = {
			layout: { top: 0, left: 0 },
			width: 280,
			firstLine: 'Sed ipsum arcu, cons',
			message: 'Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.',
			fromWho: 'Pilot contributor',
			bottomArrowRightPositionInPixels: 77	
		};

        opts = $.extend({}, defaults, options);
	
        createQuote(id, opts);
    
        return this;    
    };
}(jQuery));