var door = document.querySelector("#door");
door.addEventListener("click", function() {
    door.classList.add('open');

    var white_full = document.querySelector("#white-full");
    var init_page = document.querySelector('#init-page');
    var content = document.querySelector('#content');
    
    white_full.style.opacity = 1;
    setTimeout(function(){
        init_page.style.display = 'none';
        content.style.display = "";
        white_full.style.opacity = 0;
    }, 1000);
});
