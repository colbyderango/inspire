(function(){
	
	
	var qs = this;
	var quoteService = new QuoteService();
	//Get your QuoteService
	
	
	new Vue({
	el: '#quote',
	data:{
		quote: {},
		active: false
	},
	mounted: function(){
		quoteService.getQuote(this.setQuote)
		
	},
	computed: {
		currentQuote: function(){
			if(this.quote){
				return this.quote.quote
			}
		}
	},
	
	
	methods: {
      setQuote: function(quote){
		  this.quote = JSON.parse(quote)
	  },
	mouseOver: function(){
            this.active = !this.active  
        }
    }


})
}())
