document.addEventListener("DOMContentLoaded", function(){
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }

  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-links");
  menuBtn.addEventListener("click", ()=> menu.classList.toggle("show"));
});
