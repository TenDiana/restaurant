$(document).ready(function () {
 $('.burger').on('click', function () {
  $('.burger').toggleClass('active');
  $('.header__left').toggleClass('active');
  $('.header__right').toggleClass('active');
  $('.first-screen__text').toggleClass('active');
  $('.first-screen__vertically-group').toggleClass('active');
  $('.first-screen__btn-left').toggleClass('active');
  $('.first-screen__btn-right').toggleClass('active');
  $('.first-screen__center').toggleClass('active');

 })
});