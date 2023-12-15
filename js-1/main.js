function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  var hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
}

// Tambahkan event listener untuk menanggapi klik pada dokumen
document.addEventListener('click', function(event) {
  var menu = document.getElementById("menu");
  var hamburger = document.querySelector(".hamburger");

  // Periksa apakah yang diklik bukan bagian dari menu atau ikon hamburger
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.style.display = "none";
    hamburger.classList.remove("active");
  }
});