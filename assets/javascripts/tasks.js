// Generated by CoffeeScript 1.4.0
var Task;

Task = {
  add: function(title) {
    return $('ul#tasks').append("<li>" + title + "</li>");
  }
};

$(function() {
  return $('#new-task').submit(function(ev) {
    ev.preventDefault();
    Task.add($(this).find('input').val());
    this.reset();
    return false;
  });
});
