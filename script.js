const audios = [
    new Audio("/resources/audio_001_edited.mp3"),
    new Audio("/resources/audio002_ch.mp3"),
    new Audio("/resources/audio003_modi.mp3"),
    new Audio("/resources/audio003.mp3"),
    new Audio("/resources/audio005.mp3")
];

function togglePlayPause(event, audioIndex) {
    event.stopPropagation();

    var playIcon = event.currentTarget;
    var pauseIcon = playIcon.querySelector('.pause');

    var currentAudio = audios[audioIndex];

    if (currentAudio.paused) {
        currentAudio.play();
        playIcon.querySelector('.triangle').classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        currentAudio.pause();
        playIcon.querySelector('.triangle').classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}
