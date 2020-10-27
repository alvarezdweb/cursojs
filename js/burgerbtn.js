        
        let menuButton = $('#menuButton');
        let menuLinks = $('#menu__bar__links');


        const mQuery = () => {
          if($(window).width()>=768){
            menuLinks.css('transform','translateY(0px)')
            menuLinks.css('transition','0s')

          }else{
            menuLinks.css('transform','translateY(-160px)')
            menuLinks.css('transition','0s')
          }
        }

        const burgenBtn = () => {
          if(menuButton.hasClass('is-active')){
            menuLinks.css('transform','translateY(-160px)')
            menuLinks.css('transition','.3s')
            menuButton.removeClass('is-active');
          }else{
            menuLinks.css('transform','translateY(0px)')
            menuLinks.css('transition','.3s')

            menuButton.addClass('is-active');
          }
        }
        $(document).ready(mQuery);
        $(window).resize(mQuery);
        menuButton.click(burgenBtn);
        

  

   