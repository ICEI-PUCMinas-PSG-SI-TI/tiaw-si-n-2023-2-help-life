window.addEventListener('load', () =>{

    const campanhaAtiva = {
       dataCriacao: "01/08/2023",
       hospital: "Hospital das Clínicas",
       hemocentro: "Hemominas BH",
       statusAtual:"Ativa",
    };
    const userReceptorPass = {
        dataCriacao: "24/05/2023",
       hospital: "Hospital da Baleia",
       hemocentro: "Hemocentro Uberaba",
       statusEncerrada:"Encerrada",
    };
 
    const userDoador = {
       nomeDoador: "Letícia Pereira",
       tipoSanguineo: "O+",
       fotoPerfil:"https://images.unsplash.com/photo-1608229330163-deab857ea5b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       proximaDoacao: {
          hemocentro: "Hemominas BH",
          status:"Ativa",
       },
       doacaoPassada: {
          hemocentro: "Hemominas BH",
          status:"Encerrada",
       },
 
    };
 
    const userD = JSON.stringify(userDoador);
    const campAtiva = JSON.stringify(campanhaAtiva);
    const userRPass = JSON.stringify(userReceptorPass);
 
    localStorage.setItem("userDoador", userD);
    localStorage.setItem("userReceptorProx", campAtiva);
    localStorage.setItem("userReceptorPass", userRPass);
 
    renderDoador(userDoador);
    renderReceptorProx(campanhaAtiva);
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
    $('#prox-nome-receptor').append(`${item.dataCriacao}`);
    $('#prox-hospital-receptor').append(`${item.hospital}`);
    $('#prox-hemocentro').append(`${item.hemocentro}`); 
    $('#statusAtual').append(`${item.statusAtual}`); 
 };
 
 function renderReceptorPass(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('#pass-nome-receptor').append(`${item.dataCriacao}`);
    $('#pass-hospital-receptor').append(`${item.hospital}`);
    $('#pass-hemocentro').append(`${item.hemocentro}`); 
    $('#statusEncerrada').append(`${item.statusEncerrada}`); 
 };
 