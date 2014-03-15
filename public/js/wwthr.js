requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app'
  },
  map: {
    // this maps jQuery in noconflict mode.
    // http://requirejs.org/docs/jquery.html#cdnconfig
    '*': { 'jquery': 'jquery-private' },
    'jquery-private': { 'jquery': 'jquery' }
  },

  shim: {
    // shims for application core bits.
    d3: { exports: 'd3' }
  }

});

// Start the main app logic.
requirejs([ 'domReady'  ],
function (   ready      ) {

  ready( function () {
    console.log('DOM ready')
  });

});
