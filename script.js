var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
    
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link"); // Corrected here
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab"); // Corrected here
        }
        
        document.getElementById(tabname).classList.add("active-tab");
        event.target.classList.add("active-link");
      }

      var sidemenu=document.getElementById("sidemenu")

      function openmenu(){
        sidemenu.style.right="0";
      }

      function closemenu(){
        sidemenu.style.right="-250px";
      }

      const scriptURL = 'https://script.google.com/macros/s/AKfycbw91QPV_d07zxUH28HkyJQ0FDd-1AoCKWrwAvSxf-qCFIQh3Ygk3vnwpXJfk8Z-PEmI/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = 'Message sent successfully' 
            setTimeout(function () {
                msg.innerHTML=""
                }, 5000)
                form.reset()
                })
                .catch(error => console.error('Error:', error))
          })
 