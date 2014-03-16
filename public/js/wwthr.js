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
    d3: { exports: 'd3' },
    underscore: { exports: '_' }
  }

});

// Start the main app logic.
requirejs([ 'domReady', 'app/ajaxRepo', 'app/graph'  ],
function (   ready,      ajaxRepo,       Graph       ) {

  ready( function () {
    console.log('DOM ready');

    var AnnGraph = new Graph ('#graph', { id: 'annGraph' })
      , MlyGraph = new Graph ('#graph', { id: 'mlyGraph' })
    ;

    // get annual norms and graph
    ajaxRepo.getStateNormsAnnual().done( function (r) {
      AnnGraph.showTemps( r.results );
    });

    // get annual norms and graph
    ajaxRepo.getStateNormsMonthly().done( function (r) {
      MlyGraph.showTemps( r.results );
    });
  });

});
