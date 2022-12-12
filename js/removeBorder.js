// REMOVE HEADER BORDER WHEN SCROLLED TO BOTTOM
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
    document.getElementById("header").classList.add("header-noborder");
  } else {
    document.getElementById("header").classList.remove("header-noborder");
  }
};
