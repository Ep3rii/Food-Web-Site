$(document).ready(function() {
    // Evento de clique para o botão de rolagem suave
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  
    // Exibir o menu de navegação quando clicar no botão de menu
    $('#btn-menu').click(function() {
      $('nav ul').toggleClass('mostrar');
    });
  
    // Animação de rolagem da seção de destaques
    $(window).scroll(function() {
      if ($(this).scrollTop() > $('#destaque').offset().top - $(this).height()) {
        $('#destaque h2').addClass('animar');
        $('#destaque p').addClass('animar');
        $('#destaque .botao').addClass('animar');
      }
    });
  
    // Adicionar classes de animação para cada item do cardápio
    $('#cardapio li').each(function() {
      var delay = $(this).index() * 200;
      $(this).addClass('animar').css('animation-delay', delay + 'ms');
    });
  
    // Verificar se o formulário de contato foi enviado com sucesso
    $('#formulario-contato').submit(function(event) {
      event.preventDefault();
      var nome = $('#nome').val();
      var email = $('#email').val();
      var mensagem = $('#mensagem').val();
      if (nome && email && mensagem) {
        alert('Obrigado por entrar em contato!');
        $('#nome').val('');
        $('#email').val('');
        $('#mensagem').val('');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  });
  