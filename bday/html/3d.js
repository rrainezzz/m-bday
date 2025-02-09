document.addEventListener("DOMContentLoaded", function () {
    if (!window.audioPlayer) {
        window.audioPlayer = new Audio("3d.mp3");
        window.audioPlayer.loop = true;
        window.audioPlayer.autoplay = true;
        window.audioPlayer.volume = 0.6;

        let savedTime = localStorage.getItem("audioPosition");
        if (savedTime) {
            window.audioPlayer.currentTime = parseFloat(savedTime);
        }
        window.audioPlayer.currentTime = 2;
        window.audioPlayer.play();

        setInterval(() => {
            localStorage.setItem("audioPosition", window.audioPlayer.currentTime);
        }, 1000);
    }
});
