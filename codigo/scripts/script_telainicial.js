window.addEventListener('load', () =>{

   const userReceptorProx = {
      nomeReceptor: "João Castro",
      hospital: "Hospital das Clínicas",
      hemocentro: "Hemominas BH",
      horario:"15:00",
   };
   const userReceptorPass = {
      nomeReceptor: "Claudia de Melo",
      hospital: "Hospital da Baleia",
      hemocentro: "Hemocentro Uberaba",
      horario:"16:30",
   };

   var usuarioL = localStorage.getItem("users");
   var agendamentoL = localStorage.getItem("agendamentos");
   var usuario = JSON.parse(usuarioL);
   var agendamento = JSON.parse(agendamentoL);
   const userRProx = JSON.stringify(userReceptorProx);
   const userRPass = JSON.stringify(userReceptorPass);

   localStorage.setItem("userReceptorProx", userRProx);
   localStorage.setItem("userReceptorPass", userRPass);

   renderDoador(usuario[0]);
   renderReceptorProx(agendamento[1]);
   //renderReceptorPass(userReceptorPass);
});

function renderDoador(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#nome-usuario').append(`${item.name}`);
   $('#tipo-sanguineo').append(`${item.bloodType}`);
   $('#div-img-perfil').append(`<img id="img-perfil" src="${item.fotoPerfil}" alt="Foto de perfil"/>`);
 };

function renderReceptorProx(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#prox-nome-receptor').append(`${item.nomeReceptor}`);
   $('#prox-hospital-receptor').append(`${item.hospital}`);
   $('#prox-hemocentro').append(`${item.hemocentro}`); 
   $('#prox-horario').append(`${item.dataDoacao}`); 
};

function renderReceptorPass(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#pass-nome-receptor').append(`${item.nomeReceptor}`);
   $('#pass-hospital-receptor').append(`${item.hospital}`);
   $('#pass-hemocentro').append(`${item.hemocentro}`); 
   $('#pass-horario').append(`${item.horario}`); 
};
