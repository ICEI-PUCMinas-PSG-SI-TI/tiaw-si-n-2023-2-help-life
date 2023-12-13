// Função para lidar com a submissão do formulário
function post()  // esses parâmetros não precisa no nosso; no de DIW precisou
{

  // criação do objeto que contem as informações a serem inseridas
 var dados = {}       
    
    dados.name = document.getElementById('name').value,
    dados.email = document.getElementById('email').value,    
    dados.phone = document.getElementById('phone').value,    
    dados.username = document.getElementById('username').value,    
    dados.cpf = document.getElementById('cpf').value,
    dados.birthdate = document.getElementById('birthdate').value,    
    dados.password = document.getElementById('password').value,    
    dados.bloodType = document.getElementById('blood-type').value

  // transforma o objeto em texto e armazena na varivel json
  var json = JSON.stringify(dados);
  
  console.log(json);

  var pstr = new XMLHttpRequest();
  pstr.open('POST', 'https://jsonserver-help-life.ana-beatrizbe59.repl.co/user/1', true);   // mpetodo de inserção
  pstr.setRequestHeader('Content-type', 'application/json; charset=utf-8');  // cabeçalhfixo que deve conter quando se quer fazer uma inserção
  pstr.onload = function()
  {
    var objPstr = JSON.parse(pstr.responseText);
    if(objPstr.readyState == 4 && objPstr.status == "201")   // caso dê certo envia uma mensagem
    {
       
        console.log("Cadastro feito com sucesso");
    }
    else
    {
     
      console.log("Erro no cadastro do usuário");    // caso a requisição não dê certo envia outra mensagem
    }
  }
  pstr.send(json);    // envio da varivel que eu criei que está armazenando os dados novos para o json
}

function EditarCadastro()
{
  var dados = {};
    dados.name = document.getElementById('name').value,
    dados.email = document.getElementById('email').value,    
    dados.phone = document.getElementById('phone').value,    
    dados.username = document.getElementById('username').value,    
    dados.cpf = document.getElementById('cpf').value,
    dados.birthdate = document.getElementById('birthdate').value,    
    dados.password = document.getElementById('password').value,    
    dados.bloodType = document.getElementById('blood-type').value;
    dados.donatorProfile.proximaDoacao.receptor = "";

    var json1 = JSON.stringify(dados);

    var xhr1 = new XMLHttpRequest();  
    xhr1.open('PUT', 'https://jsonserver-help-life-2.ana-beatrizbe59.repl.co/user/1', true)
    xhr1.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr1.onload = function() {
      var users = JSON.parse(xhr1.responseText);
      if(xhr1.readyState == 4 && xhr1.status == "200")
      {
        alert("Dados alterados com sucesso");
      }
      else
      {
        alert("Erro ao alterar dados")
      }
    }
    xhr1.send(json1);
  
}
