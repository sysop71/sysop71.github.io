var url = "posts.json";

$.getJSON(url, function (posts) {
  $.each(posts, function (i, post) {
    $('.content').append($('<p />', { 'class': 'title has-text-grey-dark' }).text(post.title));
    $('.content').append($('<p />', { 'class': 'subtitle has-text-grey' }).text(post.title));
    $('.content').append($('<p />').text(post.body));
  });
});
