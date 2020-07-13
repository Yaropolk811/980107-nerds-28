(function() {
  var link = document.querySelector(".link-appointment");

  var popup = document.querySelector(".modal-appointment");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector(".appointment-form");
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }



  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
      console.log("Нужно ввести имя и e-mail");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести текст сообщения");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

}());
