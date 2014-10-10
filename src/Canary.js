( function() {

	var Canary = function () {
	}

	Canary.toJPG = function( src, callback ) {
		var assets = _prepare( src );

		assets.Image.onload = function( ) { 
			assets.Canvas.width = assets.Image.width;
			assets.Canvas.height = assets.Image.height;
			assets.Context.drawImage( assets.Image, 0, 0 );

			var s = assets.Canvas.toDataURL( 'image/jpeg' );
			_removeHiddenCanvas( assets.Canvas );
			callback( s );
		}

		assets.Image.src = assets.Source;
	}

	Canary.toPNG = function( src, callback ) {
		var assets = _prepare( src );

		assets.Image.onload = function( ) { 
			assets.Canvas.width = assets.Image.width;
			assets.Canvas.height = assets.Image.height;
			assets.Context.drawImage( assets.Image, 0, 0 );

			var s = assets.Canvas.toDataURL( 'image/png' );
			_removeHiddenCanvas( assets.Canvas );
			callback( s );
		}

		assets.Image.src = assets.Source;
	}

	var _prepare = function( src ) { 
		console.log( Canary );
		if( !src )
			throw new Error( 'No Image Source Defined.' );

		var canvas = _createHiddenCanvas( );
		var context = canvas.getContext( '2d' );
		var image = new Image( );
		
		var assets = { 
			Canvas : canvas,
			Context : context,
			Image : image,
			Source : src
		};

		return assets;
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