  // loading

 
$('.portfolio').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   animate
var waypoint = new Waypoint({
    element: document.getElementById('service'),
    handler: function(direction) {
     if(direction === 'down'){
       document.querySelector(".navbar").classList.add("navbar-control")
       document.querySelector(".navbar").classList.add("animate__fadeInDown")
       document.querySelector(".navbar").classList.add("shadow-gray-700")
     }else{
        document.querySelector(".navbar").classList.remove("navbar-control")
        document.querySelector(".navbar").classList.remove("animate__fadeInDown")
        document.querySelector(".navbar").classList.remove("shadow-gray-700")
     }
    },
    offset: '5%'
  })

  var waypoint = new Waypoint({
    element: document.getElementById('price'),
    handler: function(direction) {
     if(direction === 'down'){
        document.querySelector(".footer-fix").classList.add("show")
        document.querySelector(".footer-fixed").classList.add("animate__fadeInDown")
     }else{
      document.querySelector(".footer-fixed").classList.remove("animate__fadeInDown")
      document.querySelector(".footer-fix").classList.remove("show")
     }
    },
    offset: '5%'
  })

  const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme','dark')
    localStorage.setItem('data-theme','dark')
  }

  const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme','light')
    localStorage.setItem('data-theme','light')
  }

  let theme = localStorage.getItem('data-theme');
  if(theme === 'dark'){
      changeThemeToDark();
  }else{
      changeThemeToLight()
  }

  let changeTheme = document.getElementById('changeTheme')
  changeTheme.addEventListener('click',()=>{
    let theme = localStorage.getItem('data-theme');
    if(theme === 'dark'){
        changeThemeToLight();
        changeTheme.setAttribute('checked','checked')
    }else{
        changeThemeToDark()
    }
  })

  // menu icon

  let menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('show');
  })

  // scroll reveal
  ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration : '2000',
    reset: true,
    scale:0.8,
    viewFactor:0.2
  }).reveal('.headline',{
    interval:300
  });

  



  