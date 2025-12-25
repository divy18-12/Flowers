document.addEventListener("DOMContentLoaded", () => {

  const startMessage = document.getElementById("startMessage");
  const music = document.getElementById("bgMusic");

  document.addEventListener("click", () => {

    // hide message screen
    if (startMessage) startMessage.style.display = "none";

    // start flowers
    document.body.classList.remove("not-loaded");

    // play music
    if (music) {
      music.volume = 0.5;
      music.play();
    }

  }, { once: true });

});
