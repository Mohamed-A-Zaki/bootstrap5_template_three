/************************ start color options *****************************/
get_main_color_from_localstorage();
set_main_color_to_localstorage();

let color_options = document.querySelectorAll(".color-options ul li");

color_options.forEach((element) => {
  element.style.backgroundColor = `${element.dataset.color}`;

  if (element.dataset.color === localStorage.getItem("--main-color")) {
    element.classList.add("active");
  }

  element.onclick = function () {
    // remove active class from all
    color_options.forEach((element) => {
      element.classList.remove("active");
    });

    // add active class to current btn
    element.classList.add("active");

    document.documentElement.style.setProperty(
      "--main-color",
      `${element.dataset.color}`
    );

    set_main_color_to_localstorage();
  };
});

function get_main_color_from_css() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--main-color")
    .trim();
}
function get_main_color_from_localstorage() {
  document.documentElement.style.setProperty(
    "--main-color",
    `${localStorage.getItem("--main-color") || get_main_color_from_css()}`
  );
}
function set_main_color_to_localstorage() {
  localStorage.setItem("--main-color", `${get_main_color_from_css()}`);
}
/****************************** End color options **************************/

/*********************** start random background options *******************/
let random_bg_btns = document.querySelectorAll(".background-options .badge");
let random_background = localStorage.getItem("random_background") || "true";

localStorage.setItem("random_background", random_background);

if (localStorage.getItem("random_background") === "true") {
  random_bg_btns[0].classList.add("active");
} else {
  random_bg_btns[1].classList.add("active");
}

random_bg_btns.forEach((element) => {
  element.onclick = function () {
    // remove active class from all btns
    random_bg_btns.forEach((element) => {
      element.classList.remove("active");
    });

    // add active class to current btn
    element.classList.add("active");

    // set random_background
    random_background = element.textContent === "Yes" ? "true" : "false";
    localStorage.setItem("random_background", random_background);
    random_background_fun();
  };
});
/*********************** End random background options ********************/

/*************************** Start bullets options **************************/
let bullets_options_btns = document.querySelectorAll(".bullets-options .badge");
let bullets_section = document.querySelector(".bullets");
let show_bullets = localStorage.getItem("show_bullets") || "true";

localStorage.setItem("show_bullets", show_bullets);

show_hide_bullets();

if (localStorage.getItem("show_bullets") === "true") {
  bullets_options_btns[0].classList.add("active");
} else {
  bullets_options_btns[1].classList.add("active");
}

bullets_options_btns.forEach((element) => {
  element.onclick = function () {
    // remove active class from all btns
    bullets_options_btns.forEach((element) => {
      element.classList.remove("active");
    });

    // add active class to current btn
    element.classList.add("active");

    show_bullets = element.textContent === "Yes" ? "true" : "false";
    localStorage.setItem("show_bullets", show_bullets);
    show_hide_bullets();
  };
});

function show_hide_bullets() {
  if (show_bullets === "false") {
    bullets_section.classList.add("hide");
  } else {
    bullets_section.classList.remove("hide");
  }
}
/*************************** End bullets options **************************/

/*************************** Start Reset options **************************/
document.querySelector(".reset button").onclick = function () {
  localStorage.clear();
  location.reload(true);
};
/*************************** End Reset options ****************************/

/*********************** Enable tooltips everywhere ***********************/
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
/*********************** Enable tooltips everywhere ***********************/

/********************** Start Landing Section *****************************/
random_background_fun();

function random_background_fun() {
  if (random_background === "true") {
    // get landing section to set background image
    let landing_section = document.querySelector(".landing");
    // array of images
    let images_arr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

    let count = setInterval(() => {
      // get random image
      let random_image =
        images_arr[Math.floor(Math.random() * images_arr.length)];
      // set random image
      landing_section.style.cssText = `background-image: url(../imgs/${random_image})`;
      // clrear if random_background == false
      if (random_background === "false") clearInterval(count);
    }, 2500);
  }
}
/************************* End Landing Section ****************************/

/********************** Start Our Skills Section **************************/
let skills_section = document.querySelector(".our-skills");
let skills_progress_bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", function () {
  if (scrollY >= skills_section.offsetTop - 250) {
    skills_progress_bars.forEach((element) => {
      element.style.width = `${element.getAttribute("aria-valuenow")}%`;
    });
  }
});
/*********************** End Our Skills Section ***************************/

/*********************** Start Gallery Section ***************************/
let gallery_images = document.querySelectorAll(".gallery img");
let modal_body_img = document.querySelector(".gallery .modal-body img");
let modal_title = document.querySelector(".gallery .modal-title");

gallery_images.forEach((img, index) => {
  img.onclick = function () {
    modal_body_img.src = `${img.src}`;
    modal_title.innerHTML = `img_${index + 1}`;
  };
});
/************************ End Gallery Section ****************************/
