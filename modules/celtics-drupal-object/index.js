module.exports = (function() {
  var obj = {};
  if (window.location.href.indexOf('nba.com') > -1) {
    obj = Drupal;
  } else {
    $.ajax({
      type: 'GET',
      url: 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/misc/drupalObject.json',
      async: false,
      success: function(data) {
        obj = data;
      }
    });
  }
  return obj;
})();
