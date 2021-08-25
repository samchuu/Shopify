const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".inner__close__icon");
const sideMenu = document.querySelector(".side__menu");
const shopCategories = document.querySelector(".show__menu");
const innerMenu = document.querySelector(".nav__inner__menu");
const desktopInnerMenu = document.querySelector(
  ".desktop__navigation__lower ul"
);
const mobileShift = document.querySelector(".shift__wrapper");
const stickyNavigation = document.querySelector(".sticky__navigation__wrapper");
const smallImages = document.querySelectorAll("div.koiski__image");
const categoryWrapper = document.querySelector(".categories__wrapper");
const koiskiWrapper = document.querySelector(".koiski__wrapper");
// sticky navigation
window.addEventListener("scroll", () => {
  stickyNavigation.classList.toggle("sticky__open", window.scrollY > 200);
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY, window.innerWidth);
  if (window.innerWidth < 875) {
    categoryWrapper.classList.toggle("categories__show", window.scrollY > 1242);
    koiskiWrapper.classList.toggle(
      "koiski__wrapper__show",
      window.scrollY > 5750
    );
  } else if (window.innerWidth < 1366) {
    categoryWrapper.classList.toggle("categories__show", window.scrollY > 942);
    koiskiWrapper.style.display = "flex";
  } else if (window.innerWidth > 1367) {
    categoryWrapper.classList.toggle("categories__show", window.scrollY > 1260);
    koiskiWrapper.classList.toggle(
      "koiski__wrapper__show",
      window.scrollY > 3081
    );
  }
});
// show hamburger menu
function toggleNav() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");
    sideMenu.classList.toggle("open");
    mobileShift.classList.toggle("shift");
    innerMenu.classList.remove("inner__mobile__open");
    // remove scroll when modal is active
    document.querySelector("body").classList.toggle("active");
  });
  // close icon for mobiles
  closeIcon.addEventListener("click", () => {
    innerMenu.classList.remove("inner__mobile__open");
  });
}

function showInnerMenu() {
  shopCategories.addEventListener("click", () => {
    innerMenu.classList.toggle("inner__mobile__open");
  });
}

function showDesktopInnerMenu() {
  desktopInnerMenu.addEventListener("click", () => {
    innerMenu.classList.toggle("inner__desktop__open");
  });
}

// koiski images
for (let small of smallImages) {
  small.addEventListener(
    "mouseover",
    () => {
      const answer = small.firstElementChild;
      answer.style.display = "block";
    },
    false
  );
}

for (let small of smallImages) {
  small.addEventListener(
    "mouseout",
    () => {
      const answer = small.firstElementChild;
      answer.style.display = "none";
    },
    false
  );
}

toggleNav();
showInnerMenu();
showDesktopInnerMenu();
