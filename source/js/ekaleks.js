"use strict"

  var link = document.querySelector(".popap-certificate-img");
  var popup = document.querySelector(".popap-certificate");
  var close = document.querySelector(".popap-certificate_close");
    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("popap-certificate_show");
    });
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("popap-certificate_show");
    });
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        popup.classList.remove("popap-certificate_show");
      }
    });
