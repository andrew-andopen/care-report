const titleTag = document.querySelector(".title h1");
const readMoreTag = document.querySelector(".title h1.read-more");
const firstImageTag = document.querySelector(".image-1");

firstImageTag.classList.add("scroll-indicator");

window.onscroll = function (ev) {
  if (
    window.innerHeight + window.scrollY >=
    document.body.scrollHeight - 1200
  ) {
    readMoreTag.classList.remove("fade");
    titleTag.classList.add("fade");
  } else {
    readMoreTag.classList.add("fade");
    titleTag.classList.remove("fade");
  }
};

const navyTag = document.querySelector(".navy");
const navyTagImg = document.querySelector(".navy img");
const bookTag = document.querySelector(".book");
const bookTagImg = document.querySelector(".book img");

document.addEventListener("scroll", function () {
  firstImageTag.classList.remove("scroll-indicator");

  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;
  const imageTwo = document.querySelector(".image-2");

  const topImage = imageTwo.offsetTop;
  const midImage = topImage + imageTwo.offsetHeight / 2;

  const distanceToImage = midViewport - midImage;

  navyTagImg.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  bookTagImg.style.transform = "rotate(" + window.pageYOffset / 8 + "deg)";

  navyTag.style.transform = `translate(0, ${distanceToImage * 0.6}px)`;
  bookTag.style.transform = `translate(0, ${distanceToImage * 0.2}px)`;
});

const downloadButton = document.getElementById("download-link");
const downloadTitle = document.getElementById("download-title");
const downloadSub = document.getElementById("download-sub");

const siteLink = document.getElementById("site-link");

const downloader = () => {
  downloadTitle.innerHTML = "Hold tight...";
  downloadSub.style.opacity = 0;

  setTimeout(function () {
    downloadSub.style.opacity = 1;
    downloadTitle.innerHTML = "Enjoy the read!";
    downloadSub.innerHTML =
      "A copy of the &Open Care Report should be in your downloads folder.";

    downloadButton.style.display = "none";
    siteLink.style.display = "block";
  }, 1000);
};

downloadButton.addEventListener("click", () => {
  downloader();
});

//Submit form via AJAX and show success page
// var form = document.getElementById('submission-form');
// var bodyTag = document.querySelector('body');
// const buttonTag = document.querySelector('.download');
// const downloadTitle = document.querySelector('.top h3');
// const downloadBody = document.querySelector('.top p');

// const firstName = document.getElementById('first-name');
// const emailTag = document.getElementById('email');

// form.onsubmit = function (event) {
//   event.preventDefault();
//   var formData = new FormData(form);
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', form.action, true);
//   xhr.onload = function (e) {
//     console.log(xhr);
//     var response = JSON.parse(xhr.response);
//     if (xhr.status === 200) {
//       form.style.display = 'none';
//       buttonTag.style.display = 'block';
//       downloadTitle.innerHTML = `Thanks ${firstName.value}`;
//       downloadBody.innerHTML = `We've sent a copy of the &Open care report to ${email.value}.`;
//     } else {
//     }
//   };
//   xhr.send(formData);
// };

// const buttonTag = document.querySelector('.download');
// const downloadTitle = document.querySelector('.top h3');
// const downloadBody = document.querySelector('.top p');

// const firstName = document.getElementById('mce-FNAME');
// const emailTag = document.getElementById('mce-EMAIL');

// const formTotalTag = document.getElementById('mc_embed_signup');

// var mc1Submitted = false;
// jQuery('#mc-embedded-subscribe-form').on('submit reset', function (event) {
//   console.log(event);
//   if ('submit' === event.type) {
//     mc1Submitted = true;
//   } else if ('reset' === event.type && mc1Submitted) {
//     console.log('success');
//     downloadTitle.innerHTML = `Thanks ${firstName.value}`;
//     downloadBody.innerHTML = `We've sent a copy of the &Open care report to ${emailTag.value}.`;
//     formTotalTag.style.display = 'none';
//   }
// });
