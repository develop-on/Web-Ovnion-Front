$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
//******* Funciones para abrir y cerrar dialogos ******************************************* //
function  open(dialog) {
 //remove class **************************************
        $('#logo').removeClass();
        $('#slogan').removeClass('animated flipInY');
        $('#logo2').removeClass('active animated FadeOut');
//****************************************************
        $('#logo').animateCss('bounceOut');
        setTimeout(function(){ $('#logo').hide(); }, 700);
        $('#slogan').addClass('animated fadeOut');
        setTimeout(function(){ $('.anime').stop().addClass('active'); }, 800);
        setTimeout(function(){ $(dialog).stop().addClass('active animated FadeIn'); }, 1500);
        setTimeout(function(){ $('#logo2').stop().addClass('active animated FadeInUp'); }, 1500);
        setTimeout(function(){ $('.boton_quienes_somos, .boton_consulta').addClass('animated FadeOut'); }, 100);
}

function  close(dialog) {
 //remove class **************************************
        $('.anime').removeClass('active');
        setTimeout(function(){ $('.boton_quienes_somos, .boton_consulta').removeClass('animated FadeOut'); }, 800);
        $(dialog).removeClass('active');
//****************************************************
        $('#logo2').addClass('active animated FadeOut');
        setTimeout(function(){ $('#logo').show(); }, 800);
        setTimeout(function(){ $('#logo').stop().addClass('active animated FadeIn'); }, 800);
        setTimeout(function(){ $('#slogan').stop().addClass('active animated flipInY'); }, 800);
        setTimeout(function(){ $('.boton_quienes_somos, .boton_consulta').addClass('animated FadeIn'); }, 800);
}
//^***************************************************************************************//

//******* Cerrar Dialogo ******* //
$( ".cerrar_dialogo1" ).bind({
  click: function() {
      close('#quienes_somos');       
  },
});

$( ".cerrar_dialogo2" ).bind({
  click: function() {
      close('#formulario');       
  },
});
//*******************************//


//******* Click Logo  ***************** //

$( "#logo" ).bind({
  click: function() {
      open('#formulario');        
  },
  mouseenter: function() {
        $(this).removeClass();
        $(this).animateCss('rubberBand');
  },
  mouseleave: function() {
        $(this).animateCss('rubberBand');
  }
});
//**************************************//

//******* Click quienes somos  ***************** //
$( ".boton_quienes_somos" ).bind({
  click: function() {
open('#quienes_somos');  
        
  },
});
//**************************************//

//******* Click consulta  ***************** //
$( ".boton_consulta" ).bind({
  click: function() {
open('#formulario');  
        
  },
});

//**************************************//