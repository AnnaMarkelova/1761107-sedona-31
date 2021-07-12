const searchHotelButtom = document.querySelector(".button-search");
const searchHotelPopup = document.querySelector(".search-form");
const searchHotelEffects = document.querySelector(".search-form-effects");
const searchButtom = document.querySelector(".button-search-hotel");
const searchHotelCheckin = document.querySelector("#appointment-chekintime");
const searchHotelCheckout = document.querySelector("#appointment-chekouttime");
const searchHotelAdult = document.querySelector("#appointment-соunt_adult");
const searchHotelChild = document.querySelector("#appointment-count_child");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Adult");
} catch (err) {
  isStorageSupport = false;
}

searchHotelButtom.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (searchHotelPopup.classList.contains("visually-hidden")) {
        searchHotelPopup.classList.remove("visually-hidden");
        searchHotelPopup.classList.add("search-form-effects"); 
      } else {
        searchHotelPopup.classList.add("visually-hidden");
        searchHotelPopup.classList.remove("search-form-effects");
      }

    if (storage) {
        searchHotelAdult.value = storage;
      }
    
    searchHotelPopup.classList.remove("modal-error");
})

searchHotelPopup.addEventListener("submit", function(evt) {
    if (!searchHotelCheckin.value || !searchHotelCheckout.value || !searchHotelAdult.value || !searchHotelChild.value) {
        evt.preventDefault();
        searchHotelPopup.classList.remove("search-form-effects");
        searchHotelPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("Adult", searchHotelAdult.value);
            localStorage.setItem("Child", searchHotelChild.value);
        }  
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!searchHotelPopup.classList.contains("visually-hidden")) {
        evt.preventDefault();
        searchHotelPopup.classList.add("visually-hidden");
        searchHotelPopup.classList.remove("search-form-effects");
        searchHotelPopup.classList.remove("modal-error");
      } 
    }
  });
