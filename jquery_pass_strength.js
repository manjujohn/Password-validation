(function($){

$.fn.passwordStrength=function(options){

	var that=this;


	var defaults=$.extend({

		minlength : 6,
		hasUppercase  :false,
		hasSpecialChar : false,
		hasNumber : false
	},options);
	
	var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
	this.keyup(function(){

	var upper=0;
	var lower=0;
	var num=0;
	
		var html="";
		var len=that.val();
		
		if(len.length<defaults.minlength)
		{
			html+="<div>"+"Insufficient number of characters!!"+"</div>";
		}
		

			for(var i=0;i<len.length;i++)
			{
				var temp=len[i].charCodeAt();
    
    
   					if(temp>=65 && temp<=90)
    					 {
       
    					upper++;
      
     					}
    				
      				 if(!isNaN(len[i]))
      				{
      					num++;
      				}

      				
						
			}
			if(defaults.hasUppercase && upper==0)
			{
				html+="<div>"+"Password must contain an uppercase!!"+"</div>";
				console.log(html);
			}
				
			if(defaults.hasSpecialChar && num==0)
			{
				html+="<div>"+"Password must contain a number!!"+"</div>";
			}
			if(defaults.hasNumber && (/^[a-zA-Z0-9- ]*$/.test(len)))
			{
					
				html+="<div>"+"Password must contain a special character!!"+"</div>";
					
			}
			$(defaults.dest).html(html);

	});


};

})(jQuery);



