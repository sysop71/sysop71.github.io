$(document).ready(function() {
  $.ajax({
      url: "https://ow-api.com/v1/stats/xbl/sysop71/profile"
  }).then(function(data) {
     $('.ow-name').append(data.name);
     $('.ow-icon').append("<img src=" + data.icon + " />");
     $('.ow-comp-cards').append(data.competitiveStats.awards.cards);
     $('.ow-comp-medals').append(data.competitiveStats.awards.medals);
     $('.ow-comp-played').append(data.competitiveStats.games.played);
     $('.ow-comp-won').append(data.competitiveStats.games.won);
     $('.ow-qp-cards').append(data.quickPlayStats.awards.cards);
     $('.ow-qp-medals').append(data.quickPlayStats.awards.medals);
     $('.ow-qp-played').append(data.quickPlayStats.games.played);
     $('.ow-qp-won').append(data.quickPlayStats.games.won);
     $('.ow-rating').append(data.rating);
     $('.ow-level').append(data.prestige +""+ data.level);
  });
});