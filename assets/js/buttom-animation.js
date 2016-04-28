$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$( "#logo" ).bind({
  click: function() {
        $(this).removeClass();
        $(this).animateCss('bounceOut');
        setTimeout(function(){ $('#logo').remove(); }, 700);
        $('#slogan').removeClass('animated flipInY');
        $('#slogan').addClass('animated fadeOut');
        setTimeout(function(){ $('.anime').stop().addClass('active'); }, 800);
        setTimeout(function(){ $('#formulario').stop().addClass('active animated FadeIn'); }, 1500);
        setTimeout(function(){ $('#logo2').stop().addClass('active animated FadeInUp'); }, 1500);
        $('.boton_quienes_somos').addClass('animated fadeOut');
        $('.boton_consulta').addClass('animated fadeOut');
        
  },
  mouseenter: function() {
        $(this).removeClass();
        $(this).animateCss('rubberBand');
  },
  mouseleave: function() {
        $(this).animateCss('rubberBand');
  }
});

$( ".boton_quienes_somos" ).bind({
  click: function() {
            $('#logo').removeClass();
        $('#logo').animateCss('bounceOut');
        setTimeout(function(){ $('#logo').remove(); }, 700);
        $('#slogan').removeClass('animated flipInY');
        $('#slogan').addClass('animated fadeOut');
        setTimeout(function(){ $('.anime').stop().addClass('active'); }, 800);
        setTimeout(function(){ $('#quienes_somos').stop().addClass('active animated FadeIn'); }, 1500);
        setTimeout(function(){ $('#logo2').stop().addClass('active animated FadeInUp'); }, 1500);
        $('.boton_quienes_somos').addClass('animated fadeOut');
        $('.boton_consulta').addClass('animated fadeOut');
        
  },
});

$( ".boton_consulta" ).bind({
  click: function() {
                $('#logo').removeClass();
        $('#logo').animateCss('bounceOut');
        setTimeout(function(){ $('#logo').remove(); }, 700);
        $('#slogan').removeClass('animated flipInY');
        $('#slogan').addClass('animated fadeOut');
        setTimeout(function(){ $('.anime').stop().addClass('active'); }, 800);
        setTimeout(function(){ $('#formulario').stop().addClass('active animated FadeIn'); }, 1500);
        setTimeout(function(){ $('#logo2').stop().addClass('active animated FadeInUp'); }, 1500);
        $('.boton_quienes_somos').addClass('animated fadeOut');
        $('.boton_consulta').addClass('animated fadeOut');
        
  },
});