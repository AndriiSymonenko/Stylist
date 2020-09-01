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
  let formEnd = document.querySelector(".main-form"),
    formInput = formEnd.querySelectorAll("input");


  function clearInput(selector, classDelete) {
    selector.forEach((item) => {
      item.classList.remove(classDelete);
      item.style.border = "";
    });
  }


  let modalFormWindow = document.querySelector(".popup"),
    buttonOpen = document.querySelectorAll(".button-request"),
    buttonClouse = document.querySelector(".modal-close"),
    overFlow = document.querySelector(".black-wrapper");

  function openModal() {
    modalFormWindow.classList.add("open");
    document.body.style.overflow = "hidden";
    overFlow.classList.add("overflow-show");
    clearInterval(timeOpen);
  }

  function closeModal() {
    modalFormWindow.classList.remove("open");
    document.body.style.overflow = "";
    overFlow.classList.remove("overflow-show");
    clearInput(formInput, "invalid-field");
    formEnd.reset();
    btnEvent.forEach(item => {
      item.disabled = true;
    });
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

  let btnEvent = document.querySelectorAll(".validate-button");
  btnEvent.forEach(item => {
    item.disabled = true;
  })


  const regExpName = /\w/i;
  const regExpPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const regExpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;




  function inputValidate(inputSelector, classElement, regExp) {
    let input = document.querySelector(`#${inputSelector}`)
    input.addEventListener("input", () => {
      if (!input.value || !regExp.test(input.value)) {
        btnEvent.forEach(item => {
          item.disabled = true;
        });
        input.classList.add(classElement);
        input.style.border = "";
      } else {
        input.classList.remove(classElement);
        input.style.border = "2px solid #80bd57";
        btnEvent.forEach(item => {
          item.disabled = false;
        });
        submitForm("main-form", "name", "email", "phone");
      }

    });

  }


  inputValidate('name', "invalid-field", regExpName);
  inputValidate('phone', "invalid-field", regExpPhone);
  inputValidate('email', "invalid-field", regExpEmail);



  function submitForm(formSelector, nameSelector, emailSelector, phoneSelector) {
    form = document.querySelector(`.${formSelector}`);
    Name = document.querySelector(`#${nameSelector}`);
    Email = document.querySelector(`#${emailSelector}`);
    Phone = document.querySelector(`#${phoneSelector}`);
    form.addEventListener("click", function (event) {
      if (Name.value === "" || Name.value === null) {
        event.preventDefault();
      }
      if (Email.value === "" || Email.value === null) {
        event.preventDefault();
      }
      if (Phone.value === "" || Phone.value === null) {
        event.preventDefault();
      }
    });
  }

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