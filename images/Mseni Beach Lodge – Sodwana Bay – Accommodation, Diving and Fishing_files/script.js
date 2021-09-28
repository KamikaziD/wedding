(function(){
	var hclink = document.getElementById("hc-ratingRatingHotel__hclink");
	hclink.innerHTML = '<img src="https://media.datahc.com/ratinghotel/stellar2/hc_logo_whitebg.png" alt="HotelsCombined"//>';
	
	var hotelname = document.getElementById("hc-ratingRatingHotel__hotelname");
	var hotelfilename = document.getElementById("hc-data__hotellink").innerHTML.trim();
	var hotellink = 'https://www.hotelscombined.com/Hotel/' + hotelfilename + '.htm'

	if (!isWebFontLoaded()) {
		var script = document.createElement('script');
		script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		document.head.appendChild(script);
	}

	applyFontOrWait();
	
	function isWebFontLoaded(){
		try{
			WebFont;
		} catch(e){
			return false;
		}		
		return true;
	}

	function applyFontOrWait(){
		if (isWebFontLoaded()) {
			hotelname.setAttribute('href', hotellink)
				WebFont.load({
				google: {
				  families: ['Open Sans']
				}
			});		
		} else {
			setTimeout(applyFontOrWait, 100);
		}
	}		
})();