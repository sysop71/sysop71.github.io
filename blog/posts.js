var url = "posts.json";

$.getJSON(url, function (posts) {
  $.each(posts, function (i, post) {
    $('.content').append($('<p />', { 'class': 'title' }).text(post.title));
    $('.content').append($('<p />', { 'class': 'subtitle' }).text(post.title));
    $('.content').append($('<p />').text(post.body));
  });
});
