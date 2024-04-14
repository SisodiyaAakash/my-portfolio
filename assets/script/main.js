function scriptWrapper($) {
   // pelicanUi represents Aakash Sisodiya Theme
   var pelicanUi = {
      /**
       * Main entry point
       * NOTE: If not using await in the function
       * need to remove async keyword for better execution
       */
      initialize: async function () {
         await pelicanUi.customFunctions();
         pelicanUi.scrollFunctions();
         pelicanUi.sliderFunctions();
         pelicanUi.registerEventHandlers();
         pelicanUi.hideLoader(); // It should load in the end after everything loads properly
      },

      /**
       * Custom Functions
       */
      customFunctions: function () {
         // Initializing the Animation On Scroll
         AOS.init();
      },

      /**
       * Scroll Functions 
       */
      scrollFunctions: function () {
         // Header position variation on scroll
         $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
               $('header#header').addClass('fixed-header');
            } else {
               $('header#header').removeClass('fixed-header');
            }
         });
      },

      /**
       * Slider Functions
       */
      sliderFunctions: function () {
         // Slider specific functions
      },

      /**
       * Hide loader gif
       */
      hideLoader: function () {
         // $('section.loader-wrap').remove();
         $('section.loader-wrap').addClass('hide');

         $('html, body').animate({ scrollTop: 0 });
         return false;
      },

      /**
       * Registers event handlers
       */
      registerEventHandlers: function () {
         // Event Handlers
         $(document).on('click', 'button#dark-mode-btn', pelicanUi.toggleThemeMode);
      },

      /**
       * On Click of Toggle Light/Dark Mode Button
       * This function will be called
       * This function will toggle the theme between the dark and Light (default) mode
       */
      toggleThemeMode: function (e) {
         e.preventDefault();
         // Show loader-wrap
         $('section.loader-wrap').removeClass('hide');

         // For Entire Project
         $(this).find('span').toggleClass('hide');
         $('body').toggleClass('dark-mode');

         // For loader
         var loaderImg = $('.loader-wrap img.loader-gif');
         var currentImgSrc = loaderImg.attr('src');
         var newImgSrc = currentImgSrc.includes('dark-mode') ? './assets/media/brand/default-animated-logo.gif' : './assets/media/brand/dark-mode-animated-logo.gif';
         loaderImg.attr('src', newImgSrc);

         // Hiding loader-wrap after toggleTheme is completed
         setTimeout(function () {
            $('section.loader-wrap').addClass('hide');
         }, 500);
      },

   }; // end pelicanUi

   $(document).ready(pelicanUi.initialize);

} // end pelicanUiWrapper()

scriptWrapper(jQuery);
