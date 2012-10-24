/***************************************************************************
 *	Author:	Brad Kahl
 *	Date:	10.24.12
 *	Description: creates a dynamic quote that one can postion absolutely.
 **************************************************************************/


	<div class="quote">
		<!-- <div class="top"></div>
		<div class="content">
			
			<div class="message">
				<div class="open-quote"></div>
				<span>Sed ipsum arcu, cons</span>
				<p>Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.</p>
				<div class="close-quote"></div>
			</div>
			
			<div class="from">~ Pilot contributor</div>
			
		</div>
		<div class="bottom"></div> -->
	</div>
	
function createQuote(id, opts){
	
	var elements;
	
	elements = "<div class='top'></div>";
	elements += "<div class='content'>";
		elements += "<div class='message'>";
			elements = "<div class='open-quote'></div>";
			elements = "<span>"++"</span>";
			elements = "<p>"++"</p>";
			elements = "<div class='close-quote'></div>";
		elements += "</div>";
	elements += "</div>";
	elements = "<div class='bottom'></div>";
		
	$(id).append(elements);
	
}

(function($){
    $.fn.quote = function(options){
        var id = $(this), opts;

        $.fn.quote.defaults = {
			message: 'Sed ipsum arcu, cons Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.Proin quis vehicula nunc. Quisque vehicula enim ac diam euismod et pellentesque eros lacinia. Proin tempor hendrerit nunc non adipiscing. Quisque in condimentu magna.',
			from: 'Pilot contributor'
        };

        opts = $.extend({}, $.fn.quote.defaults, options);

        //createQuote(id, opts);
    
        return this;    
    };

}(jQuery));