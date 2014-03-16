define( ['d3', 'underscore', 'getter'], function (d3, _, get) {
  var _self = {}
    , _defaultTarget = '#graph'
    , _setAttrs
    , _parseTemp
    , _parseDate
    , Graph
    , GraphDefaults
    , NodeDefaults
  ;

  Graph = function ( target, opt ) {
    var opts = _.extend( GraphDefaults, opt )
      , myNode;

    this.target = target || _defaultTarget;
    this.root = myNode = d3.select(this.target).append( opts.type );

    _setAttrs( this.root, _.omit(opts, 'type'))

  };

  GraphDefaults = {
    type: 'ul'
  };

  NodeDefaults = {
    type: 'li'
  };

  _setAttrs = function ( node, attrs ) {
    _.each(attrs, function ( val, key ) {
      node.attr(key, val);
    })
  };

  // puts temp into proper precision from string value.
  _parseTemp = function (num) {
    return +(Math.round(num + "e+0")  + "e-1");
  };

  _parseDate = function (str) {
    return str.replace(/^(\d{4}).*$/, '$1');
  };

  _getDateTempString = function (o) {
    return _parseDate(o.date) + ' ' + _parseTemp(o.value);
  };


  _self.showTemps = function (dat, opt) {
    var opts = _.extend( NodeDefaults, opt );

    this.nodes = this.root.selectAll( opts.type )
                  .data(dat)
                  .enter()
                    .append( opts.type )

    _setAttrs( this.nodes, _.omit(opts, 'type') );
    this.nodes.text( _getDateTempString )

  };

  Graph.prototype = _self;
  return Graph;
});
