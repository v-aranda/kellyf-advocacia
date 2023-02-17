window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "var(--navbg)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
   
  }
}


  const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },    

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  })

  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    loop: true,
    effect: "flip",
    grabCursor: false,

    autoplay: {
      delay: 3500,
    },

    })
  
  function initMap() {} // now it IS a function and it is in global

    $(() => {
      initMap = function() {
        // your code like...
        var map = new google.maps.Map(document.getElementById('map'), {/*your code*/});
        // and other stuff...
      }
    })
