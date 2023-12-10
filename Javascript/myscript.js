function showAlert() {
      alert('Welcome to our website!');
       // This will show the alert message
    }
    function customAlert(alertMessage) {
  var customAlert = document.getElementById('custom-alert');
  customAlert.style.display = 'block';
  customAlert.style.backgroundColor = '#f44336';
  customAlert.style.color = 'white';
  customAlert.style.padding = '20px';
  customAlert.style.borderRadius = '5px';
  customAlert.style.marginBottom = '15px';
  customAlert.style.textAlign = 'center';
  customAlert.style.fontFamily = 'Arial, sans-serif';
  customAlert.style.fontSize = '18px';
  customAlert.style.fontWeight = 'bold';
  customAlert.style.width = '300px';
  customAlert.style.maxWidth = '100%';
  customAlert.style.maxHeight = '100%';
  customAlert.style.overflow = 'auto';
  customAlert.style.overflowWrap = 'break-word';
  customAlert.style.wordWrap = 'break-word';
  customAlert.style.whiteSpace = 'normal';
  customAlert.style.cursor = 'pointer';
  customAlert.innerHTML = alertMessage;
}


const menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

//Review section JS Code

let review = document.querySelector('#review'),
    dots = document.querySelectorAll('#review-dots li'),
    reviewContent = document.querySelectorAll('#review-content .review-box'),
    leftArrow = document.querySelector('#left-arrow'),
    rightArrow = document.querySelector('#right-arrow'),
    reviewSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    reviewTimer;

window.onload = function () {
    function playSlide(slide) {
        for (let i = 0; i < dots.length; i++) {
            reviewContent[i].classList.remove('active');
            reviewContent[i].classList.remove('inactive');
            dots[i].classList.remove('active');
        }
        if (slide < 0) {
            slide = currentSlide = reviewContent.length - 1;
        }
        if (slide > reviewContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            reviewContent[currentActive].classList.add("inactive");
        }
        reviewContent[slide].classList.add("active");
        dots[slide].classList.add("active");
        currentActive = currentSlide;

        clearTimeout(reviewTimer);
        reviewTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, reviewSpeed)
    }
    leftArrow.addEventListener("click", () => {
        playSlide(currentSlide -= 1);
    })
    rightArrow.addEventListener("click", () => {
        playSlide(currentSlide += 1);
    })
    for (let j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", () => {
            playSlide(currentSlide = dots.indexOf(this));
        })
    }
    playSlide(currentSlide);
}

//Scrollspy
const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
        if (current === 'about') {
            document.querySelector('.like .fa-thumbs-up').classList.add('active');
        } else {
            document.querySelector('.like .fa-thumbs-up').classList.remove('active');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*=' + current + ']').classList.add('active');
    });
});
