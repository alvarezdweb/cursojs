        var menuButton = document.getElementById('menuButton');
        menuButton.addEventListener('click', function (e) {
            menuButton.classList.toggle('is-active');
            e.preventDefault();
        });

        window.estado = 0;

        function openNav(estado) {
          if (estado == 0) {
            document.getElementById("menu__bar__links").style.transform = "translateX(0)";
            document.getElementById("menu__bar__links").style.transition = "all .5s";
    
            window.estado++;
          } else if (estado == 1) {
            document.getElementById("menu__bar__links").style.transform = "translateY(-190px)";
            document.getElementById("menu__bar__links").style.transition = "all .5s";
            window.estado--;
          }
        }

        function myFunction(x) {
          if (x.matches) {
            document.getElementById("menu__bar__links").style.transform = "translateX(0)";
            document.getElementById("menu__bar__links").style.boxShadow = "0px 0px 30px rgba(127, 137, 161, 0.5)";
            document.getElementById("menu__bar__links").style.transition = "transform 0s";
    
          } else {
            document.getElementById("menu__bar__links").style.transform = "translateX(-250px)";
            document.getElementById("menu__bar__links").style.boxShadow = "none";
            document.getElementById("menu__bar__links").style.transition = "transform 0s";
          }
        }