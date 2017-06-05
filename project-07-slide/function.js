/**
 * Created by PC on 18/05/2017.
 */

$(function() {
    let thoigian = setInterval(function () {
        $('.next').trigger('click');
    }, 3000);

   $('.next').click(function() {
       clearInterval(thoigian);

       let active = $('.active');
       let sau = active.next();

       let vitri = $('.xanh').index() + 1;
       $('.nutslide ul li').removeClass('xanh');
       if (vitri === $('.nutslide ul li').length) {
           vitri = 0;
       }
       $('.nutslide ul li:nth-child(' + (vitri + 1) + ')').addClass('xanh');

       if(sau.length === 0) {
           active.addClass('dirasangtrai').one('webkitAnimationEnd', function () {
               $(this).removeClass('dirasangtrai').removeClass('active');
           });
           $('._1slide:nth-child(1)').addClass('divaosangphai').one('webkitAnimationEnd', function () {
               $(this).removeClass('divaosangphai').addClass('active');
           });
       } else {
           active.addClass('dirasangtrai').one('webkitAnimationEnd', function () {
               $(this).removeClass('dirasangtrai').removeClass('active');
           });
           sau.addClass('divaosangphai').one('webkitAnimationEnd', function () {
               $(this).removeClass('divaosangphai').addClass('active');
           });
       }
       thoigian = setInterval(function () {
           $('.next').trigger('click');
       }, 3000);
   });

   $('.prev').click(function () {
       clearInterval(thoigian);

       let active = $('.active');
       let trc = active.prev();

       let vitri = $('.xanh').index() + 1;
       $('.nutslide ul li').removeClass('xanh');
       if (vitri === 1) {
           vitri = $('.nutslide ul li').length + 1;
       }
       $('.nutslide ul li:nth-child(' + (vitri - 1) + ')').addClass('xanh');


       if (trc.length === 0) {
           active.addClass('dirasangphai').one('webkitAnimationEnd', function () {
               $(this).removeClass('dirasangphai').removeClass('active');
           });
           $('._1slide:nth-child(4)').addClass('divaosangtrai').one('webkitAnimationEnd', function () {
               $(this).removeClass('divaosangtrai').addClass('active');
           });
       } else {
           active.addClass('dirasangphai').one('webkitAnimationEnd', function () {
               $(this).removeClass('dirasangphai').removeClass('active');
           });
           trc.addClass('divaosangtrai').one('webkitAnimationEnd', function () {
               $(this).removeClass('divaosangtrai').addClass('active');
           });
       }
       thoigian = setInterval(function () {
           $('.next').trigger('click');
       }, 3000);
   });

   $('.nutslide ul li').click(function () {
       $('.nutslide ul li').removeClass('xanh');
       $(this).addClass('xanh');

       $('.active').addClass('dirasangphai').one('webkitAnimationEnd', function () {
           $(this).removeClass('dirasangphai').removeClass('active');
       });
       $('.anhslide ._1slide:nth-child(' + ($(this).index()+1) + ')').addClass('divaosangtrai').one('webkitAnimationEnd', function () {
           $(this).removeClass('divaosangtrai').addClass('active');
       });
   });
});