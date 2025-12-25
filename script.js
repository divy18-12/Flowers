function startExperience() {
  // hide the message screen
  const msg = document.getElementById("startMessage");
  if (msg) msg.style.display = "none";

  // start flowers
  document.body.classList.remove("not-loaded");

  // play music
  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.5;
    music.play();
  }
}
