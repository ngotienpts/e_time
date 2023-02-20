document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // show header mb
  var headerMb = document.querySelector(".header.fixed");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      // if (backTop) {
      //   backTop.onclick = function () {
      //     document.body.scrollTop = 0;
      //     document.documentElement.scrollTop = 0;
      //   };
      // }

      // header mb
      if (headerMb) {
        var navMb = headerMb.querySelector(".nav");
        var newsStop = headerMb.querySelector(".newstop");
        var navItems = headerMb.querySelectorAll(".nav-item");
        navMb.onclick = function () {
          this.classList.add("active");
          headerMb.classList.add("active-overlay");
        };
        newsStop.onclick = function () {
          this.classList.add("active");
          headerMb.classList.add("active-overlay");
        };
        navItems.forEach(function (item) {
          var icon = item.querySelector(".icon-down.block");
          if (icon && icon != null) {
            icon.onclick = () => {
              item.classList.toggle("active");
            };
          }
        });
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (headerMb) {
          var navMb = headerMb.querySelector(".nav");
          var newsStop = headerMb.querySelector(".newstop");
          if (
            !navMb.contains(e.target) &&
            !newsStop.contains(e.target) &&
            !e.target.matches(".nav-box")
          ) {
            navMb.classList.remove("active");
            newsStop.classList.remove("active");
            headerMb.classList.remove("active-overlay");
          }
        }
      });
    },
    // fancybox
    fancybox: function () {
      if (fancyboxes) {
        fancyboxes.forEach(function (fancybox) {
          $(".fancybox-full a").fancybox();
        });
      }
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // slider primary
    sliderPrimary: function () {
      var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        navigation: {
          nextEl: ".right",
          prevEl: ".left",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    },
    // slider secondary
    sliderSecondary: function () {
      var swiper2 = new Swiper(".content-slide", {
        navigation: {
          nextEl: ".slide-box .right",
          prevEl: ".slide-box .left",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    },
    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.centerSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 30,
      });
    },
    // sticky bar cate
    stickyCate: function () {
      $(".leftSidebarCate,.rightSidebarCate").theiaStickySidebar({
        additionalMarginTop: 30,
      });
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // fancybox
      this.fancybox();
      // sticky bar home 1
      this.stickyHome1();
      // sticky bar cate
      this.stickyCate();
      // slider primary
      this.sliderPrimary();
      // slider secondary
      this.sliderSecondary();
    },
  };

  app.start();
});
