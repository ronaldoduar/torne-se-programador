// Vars /////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////


// Functions ////////////////////////////////////////////////////////////////


function createForm(){
	iframe = "<iframe src=\"controls/createForm.aspx?idForm=" + idForm + "&idFolder=" + idFolder + "\" frameborder=0 width=100% height=100 ></iframe>"
	getLayerAlpha( iframe )
}

/////////////////////////////////////////////////////////////////////////////

// Actions Document /////////////////////////////////////////////////////////
//document.onmousedown = hideLoading
//document.oncontextmenu	= new Function ("return false");
//document.onkeydown = keysFunctions

//if( window.addEventListener ) window.addEventListener( "load", function() { createLoading()	}, false )
//else if( window.attachEvent ) window.attachEvent( "onload", function() { createLoading() } )	
/////////////////////////////////////////////////////////////////////////////