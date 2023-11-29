function Filtrar() {
    // Obtem os dados informados pelo usuário nos filtros
    let fn = document.getElementById('filtroNome').value;
    let ft = document.getElementById('filtroTipo').value;
    let fh = document.getElementById('filtroHospital').value;
    let fr = document.getElementById('filtroRegiao').value;

    fetch("https://viniciusxr.github.io/TIAW/db.json")
        .then(res => res.json())
        .then(data => {
            let card = "";
            for (let i = 0; i < data.length; i++) {
                let cards = data[i];
  
                if ((cards.nome == fn) || (cards.tipo == ft) || (cards.hospital == fh) || (cards.regiao == fr)) {
                    card += `<div class="col">
                    <div class="card h-100" id="card-user">
                        <img src="${cards.foto}" alt="Foto receptor" width="120" height="120">
                        <div class="card-body" >
                            <h5 class="card-title" id="nome">${cards.nome}</h5>
                            <p class="card-text" id="diagniostico">Diagniostico: ${cards.diag}</p>
                            <p class="card-text" id="tipo">Tipo Sanguíneo: ${cards.tipo}</p>
                            <p class="card-text" id="hospital">Hospital: ${cards.hospital}</p>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Fazer
                                doação</button>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${cards.nome}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Nome: ${cards.nome}</p>
                                <p>E-mail: ${cards.email}</p>
                                <p>Tipo sanguíneo: ${cards.tipo}</p>
                                <p>Hospital: ${cards.hospital}</p>
                                <p>Região: ${cards.regiao}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`
                    document.getElementById('cards').innerHTML = card;
                }
                else if(fn == '' && ft == '' && fh == '' && fr == ''){
                    inicio();
                }

            }
        })


}

function inicio() {
//Constrói os cards de acordo com o arquivo db.json
    fetch("https://viniciusxr.github.io/TIAW/db.json")
        .then(res => res.json())
        .then(data => {

            let card = "";

            for (let i = 0; i < data.length; i++) {

                let cards = data[i];

                card += `<div class="col">
                <div class="card h-100" id="card-user">
                    <img src="${cards.foto}" alt="Foto receptor" width="120" height="120">
                    <div class="card-body">
                        <h5 class="card-title" id="nome">${cards.nome}</h5>
                        <p class="card-text" id="diagniostico">Diagniostico: ${cards.diag}</p>
                        <p class="card-text" id="tipo">Tipo Sanguíneo: ${cards.tipo}</p>
                        <p class="card-text" id="hospital">Hospital: ${cards.hospital}</p>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Fazer
                            doação</button>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content d-flex justif">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">${cards.nome}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Nome: ${cards.nome}</p>
                            <p>E-mail: ${cards.email}</p>
                            <p>Tipo sanguíneo: ${cards.tipo}</p>
                            <p>Hospital: ${cards.hospital}</p>
                            <p>Região: ${cards.regiao}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`
            }
            document.getElementById('cards').innerHTML = card;

        })
}