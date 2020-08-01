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

  buttonOpen.forEach(function (item, idex) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      modalFormWindow.classList.add("open");
      document.body.style.overflow = "hidden";
      overFlow.classList.add("overflow-show");
    });
  });
  buttonClouse.addEventListener("click", function (event) {
    event.preventDefault();
    modalFormWindow.classList.remove("open");
    document.body.style.overflow = "";
    overFlow.classList.remove("overflow-show");
    validName.classList.remove("invalid-field");
    validPhone.classList.remove("invalid-field");
    validEmail.classList.remove("invalid-field");
    validName.value = "";
    validPhone.value = "";
    validEmail.value = "";
  });



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

  //map form
  let formMap = document.querySelector(".main-form-map"),
    validNameMap = document.querySelector("#name-map"),
    validEmailMap = document.querySelector("#email-map"),
    validPhoneMap = document.querySelector("#phone-map");

  //Validation Form

  function validationEmailMap() {
    let validReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return validReg.test(validEmailMap.value);
  }

  formMap.addEventListener("submit", function (event) {
    if (validNameMap.value === "" || validNameMap.value === null) {
      validNameMap.classList.add("invalid-field");
      console.log(validNameMap.value);
      event.preventDefault();
    } else {
      validName.classList.remove("invalid-field");
      console.log(validNameMap.value);
    }
    if (
      validEmailMap.value === "" ||
      validEmailMap.value === null ||
      validationEmailMap() != true
    ) {
      validEmailMap.classList.add("invalid-field");
      event.preventDefault();
    } else {
      validEmailMap.classList.remove("invalid-field");
    }
    if (validPhoneMap.value === "" || validPhone.value === null) {
      validPhoneMap.classList.add("invalid-field");
      event.preventDefault();
    } else {
      validPhoneMap.classList.remove("invalid-field");
    }
  });


});