$(document).ready(function() {
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
    var animCount = 0;
    $('#anim.button').click(function() {
        if (animCount === 0) {
            $('.planet, #moon-orb, #sun').css('-webkit-animation-play-state', 'paused');
            $('#animText').text('Play animation');
            animCount++;
        }
        else {
            $('.planet, #moon-orb, #sun').css('-webkit-animation-play-state', 'running');
            $('#animText').text('Stop animation');
            animCount--;
        }
    });
});