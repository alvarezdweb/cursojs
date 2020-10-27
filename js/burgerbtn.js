        
        let menuButton = $('#menuButton');
        let menuLinks = $('#menu__bar__links');


        const mQuery = () => {
          if($(window).width()>=768){
            menuLinks.css('transform','translateY(0px)')
            menuLinks.css('transition','transform 0s')
            menuButton.removeClass('is-active');

          }else{
            menuLinks.css('transform','translateY(-160px)')
            menuButton.removeClass('is-active');
            menuLinks.css('transition','transform 0s')


          }
        }

        const burgenBtn = () => {
          if(menuButton.hasClass('is-active')){
            menuLinks.css('transform','translateY(-160px)')
            menuButton.removeClass('is-active');
            menuLinks.css('transition','transform .3s')

          }else{
            menuLinks.css('transform','translateY(0px)')
            menuButton.addClass('is-active');
            menuLinks.css('transition','transform .3s')

          }
        }
        $(document).ready(mQuery);
        $(window).resize(mQuery);
        menuButton.click(burgenBtn);
        

  

   