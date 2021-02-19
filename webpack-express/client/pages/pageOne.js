// you could use es2015 import/export
import $ from 'jquery';

$(() => {
  $('.modal .save-btn').on('click', () => {
    alert('save button clicked');
    $('.modal').modal('hide');
  })
});
