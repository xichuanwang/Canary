describe( "Test JPG Feature", function(){
	var src = '/base/tests/aabbcc.gif';
	var jpgData = null;

	beforeEach( function(done){
		Canary.toJPG( src, function( data ){
			jpgData = data;
			done();
		});
	});

	describe ('data', function (){
		it( "should be a string", function() {
			expect( typeof jpgData ).toEqual( 'string' );
		});

		it("should be base64 formatted JPG", function() {
			var rgx = new RegExp("data:image/jpeg;base64");
			expect( rgx.test(jpgData) ).toEqual( true );
		});
	});

});

describe( "Test PNG Feature", function(){
	var src = '/base/tests/aabbcc.gif';
	var pngData = null;

	beforeEach( function(done){
		Canary.toPNG( src, function( data ){
			pngData = data;
			done();
		});
	});

	describe ('data', function (){
		it( "should be a string", function() {
			expect( typeof pngData ).toEqual( 'string' );
		});

		it("should be base64 formatted PNG", function() {
			var rgx = new RegExp("data:image/png;base64");
			expect( rgx.test(pngData) ).toEqual( true );
		});

	});

});
