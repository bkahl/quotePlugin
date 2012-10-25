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
		left = opts.layout.left || null;
	
	// creates markup
	elements = "<div class='quote'>";
		elements += "<div class='top'></div>";
		elements += "<div class='content'>";
			elements += "<div class='message'>";
				elements += "<div class='open-quote'></div>";
				elements += "<span>"+opts.firstLine+"</span>";
				elements += "<p>"+opts.message+"</p>";
				elements += "<div class='close-quote'></div>";
			elements += "</div>";
			elements += "<div class='from'>~ "+opts.fromWho+"</div>";
		elements += "</div>";
		elements += "<div class='bottom'></div>";
	elements += "</div>";
		
	// append markup to selector
	$(id).append(elements).css('position','absolute');
	
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
        var id = $(this), opts;

		// default quote used if user doesn't input their own data
        $.fn.quote.defaults = {
			layout: { top: 0, left: 0 },
			firstLine: 'Sed ipsum arcu, cons',
			message: 'Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.',
			fromWho: 'Pilot contributor'
        };

        opts = $.extend({}, $.fn.quote.defaults, options);

        createQuote(id, opts);
    
        return this;    
    };
}(jQuery));