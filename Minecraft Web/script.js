function hamburger() {
    var x = document.getElementById("ham-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  function favicon_click() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }


  function img_click(){ 

    var m_l = document.getElementById("m-l");
    var m_d = document.getElementById("m-d");
    var m = document.getElementById("m");

   m.onclick = function(){
     m.style.border = "5px solid #000000";
      m_l.style.border = "none";
      m_d.style.border = "none";
    }

    m_l.onclick = function(){
      m_l.style.border = "5px solid #000000";
      m.style.border = "none";
      m_d.style.border = "none";
    }

    m_d.onclick = function(){
      m_d.style.border = "5px solid #000000";
      m.style.border = "none";
      m_l.style.border = "none";
    }


  }

  function buy_Now(){

    if(document.getElementById("email-home").value == ""){
      alert("Please enter your email address");
    }else{
      alert("Thank you for your purchase");
    }


  }

  var slideIndex = 1;

  plusSlides(1);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
     plusSlides(1);
  });



//     Create an Indexed Database called Gaming, which will store information (GameName, GameType,
// Rating) on 10 different games, allow the user to see the list of games, to add a new game and to
// delete a game 



