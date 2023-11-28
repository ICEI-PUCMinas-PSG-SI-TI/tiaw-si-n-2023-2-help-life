document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Aqui você pode adicionar a lógica para verificar o nome de usuário e senha.
  // Por exemplo, você pode compará-los com valores armazenados em um banco de dados ou em um objeto JavaScript.

  if (username === "seu_usuario" && password === "sua_senha") {
    alert("Login bem-sucedido!");
    // Redirecionar para a página de destino, se necessário.
  } else {
    alert("Nome de usuário ou senha incorretos. Tente novamente.");
  }
});
// Este código verifica se o formulário de login foi enviado com sucesso. Se sim, ele verifica se o nome de usuário e senha estão corretos. Se sim, ele exibe uma mensagem de sucesso e redireciona para a página de destino. Se não, ele exibe uma mensagem de erro e solicita que o usuário tente novamente.  