
//script Java per l'accordion
      var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
    
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
        });
        }

//per fare la "responsive navbar" NON FUNZIONA
             function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "navbar") {
            x.className += " responsive";
          } else {
            x.className = "navbar";
          }
        }   


// tab  
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// collegamento accordion e tabs (Funzione per aprire una tab specifica in base all'ID passato nell'URL)
        window.onload = function() {
            var urlParams = new URLSearchParams(window.location.search);
            var tab = urlParams.get('tab');
            if (tab) {
                var tabLink = document.querySelector(`.tablinks[onclick="openCity(event, '${tab}')"]`);
                if (tabLink) {
                    tabLink.click();
                }
            } else {
                // Se non c'è un parametro tab, apri la prima tab per default
                document.querySelector('.tablinks').click();
            }
        };

// tab nella pagina altro

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



