$(document).ready(function () {
  var gnbList = $('.gnb_list');
  var gnbListItem = $('.gnb_list > li');
  var gnbSubList = $('.gnb_sub_list');
  var imgsliderItem = $('.imgslider > ul > li');
  var sliderBtnPrev = $('.slider_btn.prev');
  var sliderBtnNext = $('.slider_btn.next');
  var index = 0;

  function dropDownMenu() {
    gnbListItem.mouseenter(function () {
      gnbSubList.stop().slideDown();
    });
    gnbList.mouseleave(function () {
      gnbSubList.stop().slideUp();
    });
    console.log(1111);
  }

  function slideImg(speed) {
    sliderBtnNext.click(function () {
      if (index < 3) {
        ++index;
      } else if (index === 3) {
        index = 0;
      }
      imgsliderItem.eq(index).stop().fadeIn(speed);
      imgsliderItem.eq(index).siblings().stop().fadeOut(speed);
    });

    sliderBtnPrev.click(function () {
      if (index !== 0) {
        --index;
      } else if (index === 0) {
        index = 3;
      }
      imgsliderItem.eq(index).stop().fadeIn(speed);
      imgsliderItem.eq(index).siblings().stop().fadeOut(speed);
    });
  }

  var slideAuto = setInterval(function () {
    if (index < 3) {
      ++index;
    } else if (index === 3) {
      index = 0;
    }
    imgsliderItem.eq(index).stop().fadeIn(1000);
    imgsliderItem.eq(index).siblings().stop().fadeOut(1000);
  }, 3000);

  clearInterval(slideAuto);

  dropDownMenu();
  slideImg(1000);
});
