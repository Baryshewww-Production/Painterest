const nav=document.querySelector(".page-nav"),navCommonInner=document.querySelector(".page-nav__common-inner"),navToggle=document.querySelector(".page-nav__toggler"),logoColor=document.querySelector(".logo"),navLinks=document.querySelectorAll(".page-nav__menu-link");navToggle.addEventListener("click",(function(){nav.classList.toggle("page-nav--closed"),nav.classList.toggle("page-nav--opened"),navCommonInner.classList.add("page-nav__common-inner--white"),logoColor.classList.add("logo--color"),navToggle.classList.toggle("page-nav__toggler--closed"),navToggle.classList.toggle("page-nav__toggler--opened"),0===scrollY&&nav.classList.contains("page-nav--closed")&&(navCommonInner.classList.remove("page-nav__common-inner--white"),logoColor.classList.remove("logo--color"),navToggle.classList.remove("page-nav__toggler--close"))})),window.addEventListener("scroll",(function(){navCommonInner.classList.add("page-nav__common-inner--white"),logoColor.classList.add("logo--color"),0===scrollY&&nav.classList.contains("page-nav--closed")&&(navCommonInner.classList.remove("page-nav__common-inner--white"),logoColor.classList.remove("logo--color"),navToggle.classList.remove("page-nav__toggler--close"))}));for(const o of navLinks)o.onclick=function(){nav.classList.toggle("page-nav--opened"),nav.classList.toggle("page-nav--closed"),navToggle.classList.toggle("page-nav__toggler--closed"),navToggle.classList.toggle("page-nav__toggler--opened")};