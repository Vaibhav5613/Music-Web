// app.js

document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.material-symbols-outlined');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const songId = button.id;
            const audioElement = document.getElementById(`audio$ {songId}`);

            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        });
    });
});