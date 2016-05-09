var audio = document.getElementById('player');

var playButton = $('.play-button')
var pauseButton = $('.pause-button')

playButton.click(function() {
  playButton.toggleClass('hidden');
  pauseButton.toggleClass('hidden');

  audio.volume = 1.0;
  audio.play();

  return false;
});
