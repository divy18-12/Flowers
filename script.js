onload = () => {
  const overlay = document.getElementById("startMessage");

  // wait for user click
  document.addEventListener("click", () => {
    // hide message
    overlay.style.display = "none";

    // start flowers
    document.body.classList.remove("not-loaded");
  }, { once: true });
};
