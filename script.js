$(function () {

 //slick//
 $('.infomation-contents').slick({
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '15%',
 })

 //Question&Answer//
 $('.Question').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('js-bar');
 })

 //scrollの表示非表示//
 $('.scroll').hide();
 $(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
   $('.scroll').fadeIn();
  } else {
   $('.scroll').fadeOut();
  }
 });

 //clickでtopscroll//
 $('.scroll').click(function () {
  $('body,html').animate({
   scrollTop: 0
  }, 500);
  return false;
 });

});
