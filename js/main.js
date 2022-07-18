var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right == "-500px";
menuBtn.onclick = function() {
if (sideNav.style.right == "-500px") {
sideNav.style.right = "0";
menu.src = "img/close.png";
} else {
sideNav.style.right = "-500px";
menu.src = "img/hamburger.png";
}
}
$(document).ready(function() {
$("a").on('click', function(event) {
if (this.hash !== "") {
event.preventDefault();
var hash = this.hash;
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function() {
window.location.hash = hash;
});
}
});
});
// .........................................scroll down..................

var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});
btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});
// .............................................
$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
dots:false,
nav:true,
mouseDrag:false,
autoplay:true,
animateOut: 'slideOutUp',
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});
// ..................circile Chart...............sideNav
function radial_animate() { 
$('svg.radial-progress').each(function( index, value ) { 
$(this).find($('circle.bar--animated')).removeAttr( 'style' );    
// Get element in Veiw port
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
if(elementBottom > viewportTop && elementTop < viewportBottom) {
var percent = $(value).data('countervalue');
var radius = $(this).find($('circle.bar--animated')).attr('r');
var circumference = 2 * Math.PI * radius;
var strokeDashOffset = circumference - ((percent * circumference) / 100);
$(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
}
});
}
// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {    
$('.countervalue').each(function(){
if ($(this).hasClass('start')){
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
if (elementBottom > viewportTop && elementTop < viewportBottom) {
$(this).removeClass('start');
$('.countervalue').text();
var myNumbers = $(this).text();
if (myNumbers == Math.floor(myNumbers)) {
$(this).animate({
Counter: $(this).text()
}, {
duration: 2800,
easing: 'swing',
step: function(now) {
$(this).text(Math.ceil(now)  + '%');                                
}
});
} else {
$(this).animate({
Counter: $(this).text()
}, {
duration: 2800,
easing: 'swing',
step: function(now) {                                
$(this).text(now.toFixed(2)  + '$'); 
}
});
}
radial_animate();
}
}
});
}
$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);
// ..................................scrolldown..............................check_if_in_view


$(".iletisim_form input,.iletisim_form textarea").focus(function() {
    $(".iletisim_form label[for='" + this.id + "']").attr("style","padding-left:0px;top:0px;font-size: 11px;");
    $(this).parent().parent().addClass(this.id);
    $(".style").html("<style>div."+this.id+" span:before{width:100%;}</style>");
  }).blur(function() {
    $(".style").html("<style>div."+this.id+" span:before{width:0%;}</style>");
    if($(this).val() == ""){
    
    }else{
   
    }
  });




  // .....................................................................


  
(function(){
const popup = document.querySelector(".popup");
const popupItems = document.querySelectorAll(".popup__item");
const popupWrap = document.querySelector(".popup__wrap");
const popupOverlay = document.querySelector(".popup__overlay");
const popupClose = document.querySelector(".popup__close");
const btnsPopup = document.querySelectorAll(".btn-popup");

btnsPopup.forEach((btn) => {
  btn.addEventListener("click", () => {
    showPopup(btn.getAttribute("data-popup"));
  });
});

const showPopup = (index) => {
  popupItems.forEach((popup) => {
    popup.classList.remove("show");
  });
  popup.style.display = "block";
  document
    .querySelector(`.popup__item[data-popup="${index}"]`)
    .classList.add("show");

  popupWrap.classList = `popup__wrap popup__wrap--${index}`;
  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
};

const closePopup = () => {
  popup.classList.remove("show");
  setTimeout(() => {
    popup.style.display = "";
    popupWrap.classList = `popup__wrap`;
  }, 500);
};

popupOverlay.addEventListener("click", closePopup);
popupClose.addEventListener("click", closePopup);

})();