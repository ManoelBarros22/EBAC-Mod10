$(document).ready(function() {


    $('#Telefone').mask('(00) 00000-0000');
        
    $('form').validate({
       rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },            
            email: {
                required: true,
                email: true
            },
           cpf: {
                required: true
           },
            endereco: {
                required: true
            },
            cep: {
                required:true
            }
         
       },
       messages:{
            nome: 'Campo obrigatório',
            telefone: 'Campo obrigatório',
            email: 'Informe e-mail válido',
            cpf: 'Campo obrigatório',
            endereco: 'Campo obrigatório',
            cep: 'Campo obrigatório'

       },
       submitHandler: function(form) {
            console.log(form) 
         },
         invalidHandler: function(evento, validador) {
            let camposIncorretos =validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
         }
       }) 

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        $('html').animate({
            scrolltop: destino.offset().top
        }, 1000)
    })   
  })
  
  
