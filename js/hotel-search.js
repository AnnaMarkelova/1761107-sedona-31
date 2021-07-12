const SearchHotelButtom = document.querySelector(".button-search");
const SearchHotelPopup = document.querySelector(".search-form");
const SearchHotelEffects = document.querySelector(".search-form-effects");
const SearchButtom = document.querySelector(".button-search-hotel");
const SearchHotelCheckin = document.querySelector("#appointment-chekintime");
const SearchHotelCheckout = document.querySelector("#appointment-chekouttime");
const SearchHotelAdult = document.querySelector("#appointment-соunt_adult");
const SearchHotelChild = document.querySelector("#appointment-count_child");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("Adult");
} catch (err) {
  isStorageSupport = false;
}

SearchHotelButtom.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (SearchHotelPopup.classList.contains("visually-hidden")) {
        SearchHotelPopup.classList.remove("visually-hidden");
        SearchHotelPopup.classList.add("search-form-effects"); 
      } else {
        SearchHotelPopup.classList.add("visually-hidden");
        SearchHotelPopup.classList.remove("search-form-effects");
      }

    if (storage) {
        SearchHotelAdult.value = storage;
      }
    
    SearchHotelPopup.classList.remove("modal-error");
})

SearchHotelPopup.addEventListener("submit", function(evt) {
    if (!SearchHotelCheckin.value || !SearchHotelCheckout.value || !SearchHotelAdult.value || !SearchHotelChild.value) {
        evt.preventDefault();
        SearchHotelPopup.classList.remove("search-form-effects");
        SearchHotelPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("Adult", SearchHotelAdult.value);
            localStorage.setItem("Child", SearchHotelChild.value);
        }  
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!SearchHotelPopup.classList.contains("visually-hidden")) {
        evt.preventDefault();
        SearchHotelPopup.classList.add("visually-hidden");
        SearchHotelPopup.classList.remove("search-form-effects");
        SearchHotelPopup.classList.remove("modal-error");
      } 
    }
  });
