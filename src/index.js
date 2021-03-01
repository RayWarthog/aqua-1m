function init() {
    AOS.init({
        delay: 50,
        duration: 1000,
        mirror: true,
        once: false,
    });
    
    let credits = document.querySelector('#credits');
    let credits_msnry = new Masonry(credits, {
        itemSelector: '.credits-section',
        columnWidth: 300
    });

    // new GreenAudioPlayer('#cover-audio-container');

    let gallery_a = new SimpleLightbox('#artbook-gallery a');
    gallery_a.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
    });

    credits_msnry.on('layoutComplete', function(){
        AOS.refresh();
    });

    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

init();
