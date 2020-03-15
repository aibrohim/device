var link_map = document.querySelector(".modal-opener-map");
var link_form = document.querySelector(".modal-opener-form");
var map_popup = document.querySelector(".modal-map");
var form_popup = document.querySelector(".modal-write-us");
var map_close = document.querySelector(".map-closer");
var form_close = document.querySelector(".form-closer");
var form = form_popup.querySelector("form");
var name_login = document.querySelector("[name=name");
var email_login = document.querySelector("[name=email");
var letter_login = document.querySelector("[name=letter");

link_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-opened");
  map_popup.focus();
}); 

link_form.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_popup.classList.add("modal-opened");
  name_login.focus();
});

form_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_popup.classList.remove("modal-opened");
  form_popup.classList.remove("modal-error");
});


map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-opened");
});

form.addEventListener("submit", function(evt) {
  if (!name_login.value || !email_login.value || !letter_login.value) {
    evt.preventDefault();
    form_popup.classList.remove("modal-error");
    form_popup.offsetWidth = form_popup.offsetWidth;
    form_popup.classList.add("modal-error");
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form_popup.classList.contains("modal-opened")) {
      evt.preventDefault();
      form_popup.classList.remove("modal-opened");
      form_popup.classList.remove("modal-error");
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-opened")) {
      evt.preventDefault();
      map_popup.classList.remove("modal-opened");
    }
  }
})