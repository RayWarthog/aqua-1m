"use strict";var door=document.querySelector("#door"),door_back=document.querySelector("#door_back");door.addEventListener("click",function(){open_door()}),door_back.addEventListener("click",function(){open_door()});var door_opened=!1;function open_door(){var e,o,t;document.querySelector("#door").classList.add("open"),door_opened||(door_opened=!0,e=document.querySelector("#white-full"),o=document.querySelector("#init-page"),t=document.querySelector("#content"),e.style.opacity=1,setTimeout(function(){o.style.display="none",t.style.display="",e.style.opacity=0,init()},1e3))}function init(){AOS.init({delay:50,duration:1e3,mirror:!0,once:!1});var e=document.querySelector("#credits"),e=new Masonry(e,{itemSelector:".credits-section",columnWidth:300});new GreenAudioPlayer("#cover-audio-container"),new SimpleLightbox("#artbook-gallery a").on("error.simplelightbox",function(e){console.log(e)}),e.on("layoutComplete",function(){AOS.refresh()})}