"use strict";var door=document.querySelector("#door");door.addEventListener("click",function(){door.classList.add("open");var e=document.querySelector("#white-full"),t=document.querySelector("#init-page"),o=document.querySelector("#content");e.style.opacity=1,setTimeout(function(){t.style.display="none",o.style.display="",e.style.opacity=0},1e3)});