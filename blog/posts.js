var url = "posts.json";

$.getJSON(url, function (posts) {
  $.each(posts, function (i, post) {
    $('.post-content').append($('<p />', { 'class': 'title has-text-grey-dark' }).text(post.title));
    $('.post-content').append($('<p />', { 'class': 'subtitle has-text-grey' }).text(post.subtitle));
    $('.post-content').append($('<p />', { 'class': 'subtitle has-text-grey is-size-7' }).text(post.date));
    $('.post-content').append($('<p />').text(post.body));
  });
});
