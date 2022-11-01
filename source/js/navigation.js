const nav = document.querySelector(".page-nav");
const navCommonInner = document.querySelector(".page-nav__common-inner");
const navToggle = document.querySelector(".page-nav__toggler");
const logoColor = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".page-nav__menu-link")

navToggle.addEventListener("click", function(){
  nav.classList.toggle("page-nav--closed");
  nav.classList.toggle("page-nav--opened");
  navCommonInner.classList.add("page-nav__common-inner--white");
  logoColor.classList.add("logo--color");
  navToggle.classList.toggle("page-nav__toggler--closed");
  navToggle.classList.toggle("page-nav__toggler--opened");
  if( scrollY === 0 && nav.classList.contains("page-nav--closed")) {
    navCommonInner.classList.remove("page-nav__common-inner--white");
    logoColor.classList.remove("logo--color");
    navToggle.classList.remove("page-nav__toggler--close");
  }
});

window.addEventListener("scroll", function(){
  navCommonInner.classList.add("page-nav__common-inner--white");
  logoColor.classList.add("logo--color");
  if( scrollY === 0 && nav.classList.contains("page-nav--closed")) {
    navCommonInner.classList.remove("page-nav__common-inner--white");
    logoColor.classList.remove("logo--color");
    navToggle.classList.remove("page-nav__toggler--close");
  }
});

for (const navLink of navLinks) {
  navLink.onclick = function() {
    nav.classList.toggle("page-nav--opened");
    nav.classList.toggle("page-nav--closed");
    navToggle.classList.toggle("page-nav__toggler--closed");
    navToggle.classList.toggle("page-nav__toggler--opened");
  }
}
