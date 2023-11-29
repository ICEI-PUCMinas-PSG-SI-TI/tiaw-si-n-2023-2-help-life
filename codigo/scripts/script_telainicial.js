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

   const userDoador = {
      nomeDoador: "Letícia Pereira",
      tipoSanguineo: "O+",
      fotoPerfil:"https://images.unsplash.com/photo-1608229330163-deab857ea5b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      proximaDoacao: {
         hemocentro: "Hemominas BH",
         horario:"15:00",
      },
      doacaoPassada: {
         hemocentro: "Hemominas BH",
         horario:"15:00",
      },

   };

   const userD = JSON.stringify(userDoador);
   const userRProx = JSON.stringify(userReceptorProx);
   const userRPass = JSON.stringify(userReceptorPass);

   localStorage.setItem("userDoador", userD);
   localStorage.setItem("userReceptorProx", userRProx);
   localStorage.setItem("userReceptorPass", userRPass);

   renderDoador(userDoador);
   renderReceptorProx(userReceptorProx);
   renderReceptorPass(userReceptorPass);
});

function renderDoador(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#nome-usuario').append(`${item.nomeDoador}`);
   $('#tipo-sanguineo').append(`${item.tipoSanguineo}`);
   $('#div-img-perfil').append(`<img id="img-perfil" src="${item.fotoPerfil}" alt="Foto de perfil"/>`);
 };

function renderReceptorProx(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#prox-nome-receptor').append(`${item.nomeReceptor}`);
   $('#prox-hospital-receptor').append(`${item.hospital}`);
   $('#prox-hemocentro').append(`${item.hemocentro}`); 
   $('#prox-horario').append(`${item.horario}`); 
};

function renderReceptorPass(item) {
   // Adicionando uma div com o item e a quantidade na div .items
   $('#pass-nome-receptor').append(`${item.nomeReceptor}`);
   $('#pass-hospital-receptor').append(`${item.hospital}`);
   $('#pass-hemocentro').append(`${item.hemocentro}`); 
   $('#pass-horario').append(`${item.horario}`); 
};
