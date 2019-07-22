$(document).ready(function() {
  $.ajax({
      url: "https://ow-api.com/v1/stats/xbl/sysop71/profile"
  }).then(function(data) {
     $('.ow-name').append(data.name);
     $('.ow-icon').append("<img src=" + data.icon + " />");
     $('.ow-levelIcon').append("<img src=" + data.levelIcon + " />");
  });
});