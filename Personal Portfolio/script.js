function tabs(tabId) {
  let tabContent = document.querySelectorAll(".tab-hide");

  tabContent.forEach((val) => {
    val.classList.remove("active-tab");
  });

  document.getElementById(tabId).style.color = "";
  document.getElementById(tabId).classList.add("active-tab");
}

// Reponsive Project Section

document.querySelectorAll(".text-box").forEach((box, indx) => {
  let circle = document.querySelectorAll(".circle");

  box.addEventListener("mouseover", function () {
    box.style.transform = "translateY(-10px)";
    box.style.transition = ".8s ease-in-out";
    circle[indx].style.top = "45%";
    circle[indx].style.transition = ".8s ease-in-out";
  });

  box.addEventListener("mouseout", () => {
    box.style.transition = ".8s ease-in-out";
    box.style.transform = "translateY(0)";
    circle[indx].style.top = "50%";
    circle[indx].style.transition = ".8s ease-in-out";
  });
});

// Skill hover Effect

let skills = document.querySelectorAll(".skill-container div");
let skill = Array.from(skills);

skill.forEach((data, indx) => {
  data.addEventListener("mouseover", (value) => {
    data.style.color = "#1f1f1fff";
    data.style.backgroundColor = "#ababab89";
    data.style.transform = "scale(1.05)";
  });
  data.addEventListener("mouseout", () => {
    data.style.color = "#fff";
    data.style.backgroundColor = "#353535";
    data.style.transform = "scale(1)";
  });
});

// Hamburger

document.querySelector("#hamburger").addEventListener("click", (data) => {
  document.querySelector("nav ul").style.right = "0";
  document.querySelector("nav ul").classList.toggle('navActive')
  document.querySelector("nav ul").classList.toggle('scroll')
  setTimeout(function () {
    document.querySelector("#close-nav").style.display = "block";
  }, 350);
});

document.getElementById("close-nav").addEventListener("click", () => {
  document.querySelector("nav ul").style.right = "-100%";
  document.querySelector("nav ul").classList.toggle('navActive')
  document.querySelector("nav ul").style.transition = ".3s ease-in-out";
  document.querySelector("#close-nav").style.display = "none";
   document.querySelector("nav ul").classList.toggle('scroll');
});

document.querySelectorAll("nav ul li").forEach((data) => {
  data.addEventListener("click", () => {
    document.querySelector("nav ul").style.right = "-100%";
     document.querySelector("nav ul").classList.toggle('navActive')
    document.querySelector("#close-nav").style.display = "none";
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    document.querySelector("#close-nav").style.display = "none";
    document.querySelector('nav ul').style.width = '100%';
  }
});
// Responsiveness

function updateProject() {
  if (window.innerWidth <= 725) {
    document
      .querySelectorAll("#projects .time-line .text-box")
      .forEach((data) => {
        data.classList.remove("right");
        data.classList.add("left");
      });
  } else {
    document
      .querySelectorAll("#projects .time-line .text-box")
      .forEach((data, indx) => {
        if (indx % 2 === 0) {
          data.classList.add("right");
          data.classList.remove("left");
        } else {
          data.classList.add("left");
          data.classList.remove("right");
        }
      });
  }
}
updateProject();

window.addEventListener("resize", updateProject);

// contact form validation

document.getElementById("contact").addEventListener("submit", (data) => {
  data.preventDefault();
  let EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let email = document.querySelector("#email");
  let emailRes = EmailRegex.test(email.value);
  let valid = true;

  if (emailRes) {
    document.querySelector("#emailErr").style.display = "none";
  } else {
    document.querySelector("#emailErr").style.display = "block";
    document.querySelector("#emailErr").textContent =
      "please enter Valid E-mail";
    document.querySelector("#emailErr").style.color = "red";
    valid = false;
  }
  let name = document.querySelector("#name");
  if (name.value.length >= 2) {
    document.querySelector("#nameErr").style.display = "none";
  } else {
    document.querySelector("#nameErr").textContent = "Enter valid name";
    document.querySelector("#nameErr").style.color = "red";
    valid = false;
  }

  if (valid) {
    Array.from(data.target.elements).forEach((el) => {
      if (el.type !== "submit") {
        el.value = "";
      }
    });
  }
});

// Photo Animination
let photo = document.querySelector(".photo");
let move = true;

let interval = setInterval(() => {
  if (move) {
    move = false;
    photo.style.transform = "translateY(-25px)";
  } else {
    move = true;
    photo.style.transform = "translateY(25px)";
  }
}, 7 * 1000);

// Light And Dark Theme

let theme = document.querySelector("nav button");
let mode = "dark";
theme.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (mode === "dark") {
    mode = "light";
    document.querySelector("nav button i").classList.remove("fa-sun");
    document.querySelector("nav button i").classList.add("fa-moon");
    console.log(mode);
  } else {
    mode = "dark";
    document.querySelector("nav button i").classList.add("fa-sun");
    document.querySelector("nav button i").classList.remove("fa-moon");
    console.log(mode);
  }

  // navbar Togle
  document.querySelector("nav").classList.toggle("navToggle");

  // navLink toggle
  document.querySelectorAll("nav ul li a").forEach((val) => {
    val.classList.toggle("navToggleA");
  });

  // Body Light Theme
  document.querySelector("body").classList.toggle("light");

  // SubTitle Toggle
  document.querySelectorAll(".sub-title").forEach((val) => {
    val.classList.toggle("sub-titleToggle");
  });

  // Tab-link Toggle
  document.querySelectorAll(".tab-links").forEach((val) => {
    val.classList.toggle("tab-linksToggle");
  });

  // Tab - Content Span /Skill Education and Experience
  document.querySelectorAll("#tab-content #skills li span").forEach((val) => {
    val.classList.toggle("tab-contentToggleAboutSpan");
  });
  document
    .querySelectorAll("#tab-content #education li span")
    .forEach((val) => {
      val.classList.toggle("tab-contentToggleAboutSpan");
    });
  document
    .querySelectorAll("#tab-content #experience li span")
    .forEach((val) => {
      val.classList.toggle("tab-contentToggleAboutSpan");
    });

  // Skill Class Toggle with Hover
  document.querySelectorAll(".skill-container").forEach((val) => {
    val.classList.toggle("skill-containerToggle");
  });

  document.querySelectorAll(".skill-container h2").forEach((data) => {
    data.classList.toggle("skill-containerDefaultH2Toggle");
  });

  document.querySelectorAll(".skill-container div").forEach((data) => {
    data.classList.toggle("skill-containerDefaultDivToggle");
  });

  document.querySelectorAll(".skill-container div").forEach((data) => {
    data.addEventListener("mouseover", () => {
      data.classList.add("skill-containerDivToggle");
    });
    data.addEventListener("mouseout", () => {
      data.classList.remove("skill-containerDivToggle");
    });
  });

  // Project class Toggle
  document.querySelectorAll(".text-box").forEach((data) => {
    data.classList.toggle("text-boxToggle");
    data.style.border = "none";
  });
  document.querySelectorAll(".text-box a").forEach((data) => {
    data.classList.toggle("text-boxToggleA");
  });
  document.querySelectorAll(".text-box p").forEach((data) => {
    data.classList.toggle("text-boxToggleP");
  });

  // Toggle Contact Left And Right with Social icon

  document
    .querySelectorAll(".contact-left .social-icon a i")
    .forEach((data) => {
      data.classList.toggle("contact-leftToggleI");
    });

  document
    .querySelector(".contact-right textarea")
    .classList.toggle("contact-rightToggle");
  document.querySelectorAll(".contact-right input").forEach((data) => {
    if (data.type !== "submit") data.classList.toggle("contact-rightToggle");
  });

  // Toggle Copyright
  document.querySelector(".copy").classList.toggle("copyToggle");

  // toggle btns

  document.querySelectorAll(".btn").forEach((data) => {
    data.classList.toggle("btnToggle");
  });

  document
    .querySelector(".header-text h1")
    .classList.toggle("header-textH1Toggle");
  document.querySelector("nav ul").classList.toggle("navUlToggle");

  // services Theme Toggle

  let service = document.querySelectorAll('.services-box');
  Array.from(service).forEach((data)=>{
    data.classList.toggle('services-box-Toggle')
  })

  let layerService = document.getElementsByClassName('layer');
  Array.from(layerService).forEach((data)=>{
    data.classList.toggle('layerToggle')
  })
}