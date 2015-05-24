$(document).ready(function() {

    $('#fader').fadeOut(3000);

    var orbCount = 0;
    $('#orbits.button').click(function() {
        if (orbCount === 0) {
            $('#orbText').text('Show orbits');
            $('.orbit, #moon-orb').css('border-style', 'hidden');
            orbCount++;
        }
        else {
            $('#orbText').text('Hide orbits');
            $('.orbit, #moon-orb').css('border-style', 'dotted');
            orbCount--;
        }

    });
    $('#anim.button').click(stopAnimation);

    var animCount = 0;
    function stopAnimation() {
        if (animCount === 0) {
            $('*').css('-webkit-animation-play-state', 'paused');
            $('#animText').text('Play animation');
            animCount++;
        }
        else {
            $('*').css('-webkit-animation-play-state', 'running');
            $('#animText').text('Stop animation');
            animCount--;
        }
    }

    $('body').dblclick(stopAnimation);

    window.onload = function() {
        document.onselectstart = function() {
            return false;
        }
    };
});