const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'fetchBooks()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "sends a fetch request to 'https://5e2dbab63b0d640014be0eb6.mockapi.io/api/v0/books'", async () => {
      chai.spy.on( window, 'fetch' );
      await fetchBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'https://5e2dbab63b0d640014be0eb6.mockapi.io/api/v0/books' );
    } )

    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
})
