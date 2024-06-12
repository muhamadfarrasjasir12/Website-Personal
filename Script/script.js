// Function fixed header

window.onscroll = function () {
  fixedHeader()
};
var header = document.getElementById("nav");
var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Nav

function personal() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("personal").href = "#show_personal";
  } else {
    document.getElementById("personal").href = "#";
  }
}

function edu() {
  document.getElementById("edu").href = "#show_edu";
}

function person() {
  document.getElementById("person").href = "#show_person";
}

function skill() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("skill").href = "#show_skills";
  } else {
    document.getElementById("skill").href = "#";
  }
}