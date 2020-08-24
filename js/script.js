window.addEventListener("DOMContentLoaded", function () {
  //Toggle-menu
  let toggleMenuOpen = document.querySelector(".toggle-menu"),
    toggleMenuClose = document.querySelector(".toggle-close"),
    toggleMenu = document.querySelector(".toggle-container");

  toggleMenuOpen.addEventListener("click", function () {
    toggleMenu.classList.add("toggle-open");
  });

  toggleMenuClose.addEventListener("click", function () {
    toggleMenu.classList.remove("toggle-open");
  });
  //popup form
  let form = document.querySelector(".main-form"),
    validName = document.querySelector("#name"),
    validEmail = document.querySelector("#email"),
    validPhone = document.querySelector("#phone");

  let modalFormWindow = document.querySelector(".popup"),
    buttonOpen = document.querySelectorAll(".button-request"),
    buttonClouse = document.querySelector(".modal-close"),
    overFlow = document.querySelector(".black-wrapper");

  function openModal() {
    // event.preventDefault();
    modalFormWindow.classList.add("open");
    document.body.style.overflow = "hidden";
    overFlow.classList.add("overflow-show");
    clearInterval(timeOpen);
  }

  function closeModal() {
    // event.preventDefault();
    modalFormWindow.classList.remove("open");
    document.body.style.overflow = "";
    overFlow.classList.remove("overflow-show");
    validName.classList.remove("invalid-field");
    validPhone.classList.remove("invalid-field");
    validEmail.classList.remove("invalid-field");
    validName.value = "";
    validPhone.value = "";
    validEmail.value = "";
    clearInterval(timeOpen);
  }

  buttonOpen.forEach(function (item, idex) {
    item.addEventListener("click", openModal);
  });

  buttonClouse.addEventListener("click", closeModal);

  //Timer for modal
  const timeOpen = setInterval(openModal, 15000);

  // End page -> Open Modal

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //Validation Form

  function validationEmail() {
    let validReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return validReg.test(validEmail.value);
  }

  form.addEventListener("submit", function (event) {
    if (validName.value === "" || validName.value === null) {
      validName.classList.add("invalid-field");
      console.log(validName.value);
      event.preventDefault();
    } else {
      validName.classList.remove("invalid-field");
      console.log(validName.value);
    }
    if (
      validEmail.value === "" ||
      validEmail.value === null ||
      validationEmail() != true
    ) {
      validEmail.classList.add("invalid-field");
      event.preventDefault();
    } else {
      validEmail.classList.remove("invalid-field");
    }
    if (validPhone.value === "" || validPhone.value === null) {
      validPhone.classList.add("invalid-field");
      event.preventDefault();
    } else {
      validPhone.classList.remove("invalid-field");
    }
  });

  //Slider
  let slide = document.querySelectorAll(".blog-list--item"),
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev");
  let indexSlide = 1;

  function showSlide(n) {
    if (n > slide.length) {
      indexSlide = 1;
    }
    if (n < 1) {
      indexSlide = slide.length - 1;
    }
    slide.forEach((item) => {
      item.classList.remove("active-slide");
    });

    slide[indexSlide - 1].classList.add("active-slide");
    slide[indexSlide].classList.add("active-slide");
    console.log(indexSlide);
  }

  function plusSlide(n) {
    showSlide((indexSlide += n));
  }

  prev.addEventListener("click", () => {
    plusSlide(-2);
  });

  next.addEventListener("click", () => {
    plusSlide(2);
  });
});
