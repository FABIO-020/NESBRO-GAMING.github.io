$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

 const downloadBtn = document.querySelector(".download-btn");
    const countdown = document.querySelector(".countdown");
    const pleaseWaitText = document.querySelector(".pleaseWait-text");
    const manualDownloadText = document.querySelector(".manualDownload-text");
    const manualDownloadLink = document.querySelector(".manualDownload-link");
    var timeLeft = 10;

    downloadBtn.addEventListener("click", () => {
      downloadBtn.style.display = "none";
      countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

      var downloadTimer = setInterval(function timeCount(){
        timeLeft -= 1;
        countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";

        if(timeLeft <= 0){
          clearInterval(downloadTimer);
          pleaseWaitText.style.display = "block";
          let download_href = "cv.zip"; //enter the downloadable file link URL here
          window.location.href = download_href;
          manualDownloadLink.href = download_href;

          setTimeout(() => {
            pleaseWaitText.style.display = "none";
            manualDownloadText.style.display = "block";
          }, 4000);
        }
      }, 1000);
    });
    