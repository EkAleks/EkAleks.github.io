   var link = document.querySelector(".btn-search");
	var popup = document.querySelector(".form-search-hotel");
	var close = document.querySelector(".form-search-hotel-close");
	link.addEventListener("click", function(event) {
       event.preventDefault();
	   popup.classList.add("form-search-hotel-show");
      });
	close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("form-search-hotel-show");
        });