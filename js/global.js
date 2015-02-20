$(document).ready(function(){
    $(".fade").hide(0).delay(500).fadeIn(500)
});

$(function()
{
    var $dropdowns = $('li.dropdown'); // Specifying the element is faster for older browsers

    /**
     * Mouse events
     *
     * @description Mimic hoverIntent plugin by waiting for the mouse to 'settle' within the target before triggering
     */
    $dropdowns
        .on('mouseover', function() // Mouseenter (used with .hover()) does not trigger when user enters from outside document window
        {
            var $this = $(this);

            if ($this.prop('hoverTimeout'))
            {
                $this.prop('hoverTimeout', clearTimeout($this.prop('hoverTimeout')));
            }

            $this.prop('hoverIntent', setTimeout(function()
            {
                $this.addClass('hover');
            }, 250));
        })
        .on('mouseleave', function()
        {
            var $this = $(this);

            if ($this.prop('hoverIntent'))
            {
                $this.prop('hoverIntent', clearTimeout($this.prop('hoverIntent')));
            }

            $this.prop('hoverTimeout', setTimeout(function()
            {
                $this.removeClass('hover');
            }, 250));
        });

    /**
     * Touch events
     *
     * @description Support click to open if we're dealing with a touchscreen
     */
    if ('ontouchstart' in document.documentElement)
    {
        $dropdowns.each(function()
        {
            var $this = $(this);

            this.addEventListener('touchstart', function(e)
            {
                if (e.touches.length === 1)
                {
                    // Prevent touch events within dropdown bubbling down to document
                    e.stopPropagation();

                    // Toggle hover
                    if (!$this.hasClass('hover'))
                    {
                        // Prevent link on first touch
                        if (e.target === this || e.target.parentNode === this)
                        {
                            e.preventDefault();
                        }

                        // Hide other open dropdowns
                        $dropdowns.removeClass('hover');
                        $this.addClass('hover');

                        // Hide dropdown on touch outside
                        document.addEventListener('touchstart', closeDropdown = function(e)
                        {
                            e.stopPropagation();

                            $this.removeClass('hover');
                            document.removeEventListener('touchstart', closeDropdown);
                        });
                    }
                }
            }, false);
        });
    }
    
});

$(document).ready(function(){
$('.sp').first().addClass('active');
$('.sp').hide();    
$('.active').show();

    $('#button-next').click(function(){

    $('.active').removeClass('active').addClass('oldActive');    
                   if ( $('.oldActive').is(':last-child')) {
        $('.sp').first().addClass('active');
        }
        else{
        $('.oldActive').next().addClass('active');
        }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
        
        
    });
    
    $('#button-previous').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
           if ( $('.oldActive').is(':first-child')) {
        $('.sp').last().addClass('active');
        }
           else{
    $('.oldActive').prev().addClass('active');
           }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
    });
     
});

$(document).ready(function(){
$('.sp').first().addClass('active');
$('.sp').hide();    
$('.active').show();

    $('#button-next').click(function(){

    $('.active').removeClass('active').addClass('oldActive');    
                   if ( $('.oldActive').is(':last-child')) {
        $('.sp').first().addClass('active');
        }
        else{
        $('.oldActive').next().addClass('active');
        }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
        
        
    });
    
       $('#button-previous').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
           if ( $('.oldActive').is(':first-child')) {
        $('.sp').last().addClass('active');
        }
           else{
    $('.oldActive').prev().addClass('active');
           }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
    });

});

