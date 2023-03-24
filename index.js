/** Start onscroll function */
window.onscroll = function () {
  // Start Scroll To Top
  /** Start Scroll To Top */
  let upButton = document.querySelector("a.up");
  let servicesSection = document.querySelector(".services");
  /** End Scroll To Top */
  if (window.scrollY >= servicesSection.offsetTop) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
  // End Scroll To Top

  // Start Numbers Increasing
  if (window.scrollY >= aboutSection.offsetTop + 300) {
    if (!started) {
      nums.forEach((ele) => startCount(ele));
      started = true;
    }
  }
  // End Numbers Increasing

  // Start Skills Progress
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    skillsProgress.forEach((ele) => {
      ele.style.width = ele.dataset.progress;
    });
  }
  // End Skills Progress
};
/** End onscroll function */

/** Start Portfolio Images Filter */
let switcherlis = document.querySelectorAll(".shuffle li");
let images = Array.from(document.querySelectorAll(".images-container .box"));

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImage);
});

function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manageImage() {
  images.forEach((img) => {
    img.style.display = "none";
  });

  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.cssText = `display: block;`;
  });
}
/** End Portfolio Images Filter */

/** Start Numbers Increasing */
let aboutSection = document.querySelector(".about");
let nums = document.querySelectorAll(".stats .number");
let started = false;

function startCount(el) {
  let goal = el.dataset.num;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
/** End Numbers Increasing */
/** Start Skills Progress */
let skillsSection = document.querySelector(".our-skills");
let skillsProgress = document.querySelectorAll(".our-skills span");
/** End Skills Progress */
