var form = document.getElementById("myForm"),
    titulo_Pergunta = document.getElementById("titulo"),
    descricao_Pergunta = document.getElementById("descricao"),
    categoria_Pergunta = document.getElementById("categoria"),
    email_Pergunta = document.getElementById("email"),
    submitBtn = document.querySelector(".submit"),
    questionsInfo = document.getElementById("data"),
    modal = document.getElementById("form-pergunta"),
    modalTitle = document.querySelector("#form-pergunta .modal-title"),
    newQuestionBtn = document.querySelector(".novaPergunta"),
    respostaEmail

let originalData = localStorage.getItem('perguntas') ? JSON.parse(localStorage.getItem('perguntas')) : [] 
let getData = [...originalData]

let isEdit = false, editId
showInfo()

newQuestionBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit',
        modalTitle.innerText = "Cadastro de Perguntas"
    isEdit = false
    form.reset()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(!form.checkValidity())
    {
        displayMessage("Preencha o formulário corretamente.");
                    return;
    }
    if(categoria_Pergunta.value == "Selecione a categoria")
    {
        alert("Preencha o formulário corretamente.");
                    return;
    }
    else {

    if (email_Pergunta.checked) {
        respostaEmail = "Sim"
    }
    else {
        respostaEmail = "Não"
    }

    const information = {
        questionTitle: titulo_Pergunta.value,
        questionDescription: descricao_Pergunta.value,
        questionCategory: categoria_Pergunta.value,
        questionEmail: respostaEmail

    }

    if (!isEdit) {
        getData.push(information)
    }
    else {
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('perguntas', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Cadastro de Perguntas"

    showInfo()

    form.reset()
}

})

function showInfo() {
    document.querySelectorAll('.perguntasDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="perguntasDetails">
            <td>${index + 1}</td>
            <td>${element.questionTitle}</td>
            <td>${element.questionDescription}</td>
            <td>${element.questionCategory}</td>
            <td>${element.questionEmail}</td>
            
            <td>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.questionTitle}', '${element.questionDescription}', '${element.questionCategory}', '${element.questionEmail}')" data-bs-toggle="modal" data-bs-target="#form-pergunta"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>               
            </td>
        </tr>`

        questionsInfo.innerHTML += createElement
    })
}
showInfo()

function readInfo(titulo, descricao, categoria, email) {
  
    document.querySelector('#showTitulo').value = titulo,
    document.querySelector("#showDescricao").value = descricao,
    document.querySelector("#showCategoria").value = categoria,
    document.querySelector("#showEmail").value = email
   

}



function editInfo(index, titulo, descricao, categoria, email) {
    isEdit = true
    editId = index

    if (email_Pergunta.checked) {
        email = "Sim"
    }
    else {
        email = "Não"
    }

        titulo_Pergunta.value = titulo,
        descricao_Pergunta.value = descricao,
        categoria_Pergunta.value = categoria,
        email_Pergunta.value = email

    submitBtn.innerText = "Editar"
    modalTitle.innerText = "Atualização de Formulário"
}

function deleteInfo(index) {
    if (confirm("Deseja realmente deletar ? ")) {
        getData.splice(index, 1)
        localStorage.setItem("perguntas", JSON.stringify(getData))
        showInfo()
    }
}




