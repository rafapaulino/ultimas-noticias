(function (window, document, $, undefined) {
    'use strict';

    var themeDropDown = (function () {

        var $private = {};
        var $public = {};

        //inicia o processo de tab no dropdown
        $public.tabDropDown = function() {
            $('.dropdown').bind('keydown', function (evt) {
                var $this = $(this);
                $this.addClass("show");
                var menu = $this.find('.dropdown-menu');
                menu.addClass('show');
                switch(evt.keyCode) {
                    case 13: // Enter key
                    //case 32: // Space bar
                    case 38: // Up arrow
                    case 27: // Escape key
                        $this.removeClass("show");
                        menu.removeClass('show');
                        $this.focus();
                        break;
                }
              });
        };
        //inicia a busca no dropdown
        $public.initDropDown = function() {
            $( window ).on("load", function() {

                $('.dropdown-theme input.form-control').on('keyup', function(){
                    var $this = $(this);
                    var value = $this.val();
                    value = value.toLowerCase();
                    var parent = $this.parent();
                    var elem = parent.find('a.dropdown-item');

                    elem.each(function( index ) {
                        var item = $(this).text();
                        if (item.toLowerCase().indexOf(value) > -1) {
                            $(this).removeClass('d-none');
                        } else {
                            $(this).addClass('d-none');
                        }
                    });

                });
            });              
        };
        return $public;
    })();

    // Global
    window.themeDropDown = themeDropDown;
    themeDropDown.initDropDown();
    themeDropDown.tabDropDown();
})(window, document, jQuery);

