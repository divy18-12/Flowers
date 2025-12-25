onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    document.getElementById("cornerMessage").classList.add("show");

    clearTimeout(c);
  }, 1000);
};
