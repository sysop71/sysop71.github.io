$().ready(function() {
  $.ajax({
      url: "https://ow-api.com/v1/stats/xbl/sysop71/profile"
  }).then(function(data) {
     $('.ow-name').append(data.name);
     $('.ow-icon').append(data.icon);
  });
});