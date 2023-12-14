// Função para lidar com a submissão do formulário
document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página

  // Coleta os dados do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const username = document.getElementById("username").value;
  const cpf = document.getElementById("cpf").value;
  const birthdate = document.getElementById("birthdate").value;
  const password = document.getElementById("password").value;
  const bloodType = document.getElementById("blood-type").value;

  // Crie um objeto com os dados do usuário
  const newUser = {
    name,
    email,
    phone,
    username,
    cpf,
    birthdate,
    password,
    bloodType
  };

  // Salve o novo usuário no seu arquivo JSON (data.json) ou banco de dados
  // Simulando o armazenamento no localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));


  // Redirecione o usuário para a tela de login após o cadastro
  window.location.href = "escolhausuario.html";
});