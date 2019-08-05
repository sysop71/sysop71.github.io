var url = "https://sysop71.com/blog/posts.json";

$.getJSON(url, function (jobject) {
  $.each(jobject.posts, function (i, post) {
    $('.post-content').append($('<p />', { 'class': 'title has-text-grey-dark is-uppercase' }).text(post.title));
    $('.post-content').append($('<p />', { 'class': 'subtitle has-text-grey is-lowercase' }).text(post.subtitle));
    $('.post-content').append($('<p />', { 'class': 'subtitle has-text-grey is-size-7 is-italic' }).text(post.date));
    $.each(post.body.lines, function (i, line) {
      $('.post-content').append($('<p />').text(line));
    });
  });
});
