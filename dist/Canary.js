( function() {

	var Canary = function () {}

	Canary.toJPG = function( src, callback ) {
		_prepare( src, callback, 'image/jpeg' );
	}

	Canary.toPNG = function( src, callback ) {
		_prepare( src, callback, 'image/png' );
	}

	var _prepare = function( src, callback, filetype ) { 
		if( typeof src !== 'string' )
			throw new TypeError( 'Source must be a string' );

		if( !src )
			throw new Error( 'No Image Source Defined.' );

		if( !callback || typeof callback !== 'function' )
			throw new Error( 'Callback is not defined or not of type "function"' );

		if( !filetype )
			filetype = 'image/png';

		var canvas = _createHiddenCanvas( );
		var context = canvas.getContext( '2d' );
		var image = new Image( );

		image.onload = function( ) { 
			context.drawImage( image, 0, 0 );

			var s = canvas.toDataURL( filetype );
			_removeHiddenCanvas( canvas );
			callback.call( this, s );
		}

		image.src = src;
	}

	var _createHiddenCanvas = function( ) { 
		var canvas = document.createElement( 'canvas' );
		canvas.style.display = 'none';
		_addHiddenCanvas( canvas );
		return canvas;
	}

	var _addHiddenCanvas = function( canvas ) { 
		document.body.appendChild( canvas );
	}

	var _removeHiddenCanvas = function( canvas ) { 
		document.body.removeChild( canvas );
	}

	window.Canary = Canary;

})();