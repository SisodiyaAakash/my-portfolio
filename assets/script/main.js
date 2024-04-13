function scriptWrapper($) {
   // pelicanUi represents Aakash Sisodiya Theme
   var pelicanUi = {
      /**
       * Main entry point
       * NOTE: If not using await in the function
       * need to remove async keyword for better execution
       */
      initialize: async function () {
         pelicanUi.customFunctions();
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
         $('section.loader-wrap').remove();

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
         // For Entire Project
         $(this).find('span').toggleClass('hide');
         $('body').toggleClass('dark-mode');

         // For loader
         $('.loader-wrap img.loader-gif').toggleClass('hide');
      },
   }; // end pelicanUi

   $(document).ready(pelicanUi.initialize);

} // end pelicanUiWrapper()

scriptWrapper(jQuery);
