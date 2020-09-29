        var menuButton = document.getElementById('menuButton');
        menuButton.addEventListener('click', function (e) {
            menuButton.classList.toggle('is-active');
            e.preventDefault();
        });

        window.estado = 0;

        function openNav(estado) {
          if (estado == 0) {
            document.getElementById("menu__bar__links").style.transform = "translateY(0)";
            document.getElementById("menu__bar__links").style.transition = "all .5s";
            
    
            window.estado++;
          } else if (estado == 1) {
            document.getElementById("menu__bar__links").style.transform = "translateY(-160px)";
            document.getElementById("menu__bar__links").style.transition = "all .5s";
            window.estado--;
          }
        }

        function myFunction(x) {
          if (x.matches) {
            document.getElementById("menu__bar__links").style.transform = "translateY(0)";
            document.getElementById("menu__bar__links").style.transition = "transform 0s";

            
    
          } else {
            document.getElementById("menu__bar__links").style.transform = "translateY(-160px)";
            document.getElementById("menu__bar__links").style.transition = "transform 0s";

            
          }
        }
    
        var x = window.matchMedia("(min-width: 768px)")
        myFunction(x)
        x.addListener(myFunction)

  

   