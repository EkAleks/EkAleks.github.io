    var link = document.querySelector(".popap-certificate-img");
	var popup = document.querySelector(".popap-certificate");
	var close = document.querySelector(".popap-certificate_close");
   
  
	link.addEventListener("click", function(event) {
       event.preventDefault();
	   popup.classList.add("popap-certificate_show");
      });
	close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popap-certificate_show");
   });
   
   
        
  