define( ['jquery'], function ($) {
  var _self = {}
    , authPayload = {
        token: 'KEDFNJKicieREzQMlFFQlWsLGXISxqOP'
      }
  ;

  _self.getStateLocations = function () {
    return $.ajax(
      'http://ncdc.noaa.gov/cdo-web/api/v2/locations'

    , {
        headers: authPayload
      , type: 'GET'
      }
    );

  };

  _self.getStateNormsMonthly = function () {
    return $.ajax(
      'http://ncdc.noaa.gov/cdo-web/api/v2/data?startdate=2003-03-14&enddate=2013-03-14&limit=100&datatypeid=MLY-TAVG-NORMAL&locationid=FIPS:11&datasetid=normal_mly'

    , {
        headers: authPayload
      , type: 'GET'
      }
    );
  }

  _self.getStateNormsAnnual = function () {
    return $.ajax(
      'http://ncdc.noaa.gov/cdo-web/api/v2/data?startdate=2003-03-14&enddate=2013-03-14&limit=100&datatypeid=ANN-TAVG-NORMAL&locationid=FIPS:11&datasetid=normal_ann'

    , {
        headers: authPayload
      , type: 'GET'
      }
    );
  }

  return _self;
});
