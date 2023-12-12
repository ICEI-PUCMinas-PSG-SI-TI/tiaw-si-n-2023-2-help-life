// Função para lidar com o agendamento
    function agendar() {
      // Obter o valor da data do input
      var inputData = document.getElementById('dataInput').value;

      // Verificar se uma data foi inserida
      if (inputData.trim() !== '') {
        // Obter os dados existentes no Local Storage (se houver)
        var agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

        // Adicionar a nova data aos agendamentos
        agendamentos.push(inputData);

        // Armazenar os agendamentos atualizados no Local Storage
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        // Calcular a diferença em milissegundos entre a data agendada e a data atual
        var diffMillis = new Date(inputData) - new Date();

        // Calcular a diferença em dias
        var diffDays = diffMillis / (1000 * 60 * 60 * 24);

        // Exibir um popup se a diferença for menor que 3 dias
        if (diffDays < 3) {
          alert('Menos de 3 dias até a data marcada!');
        } else {
          alert('Agendamento realizado com sucesso!');
        }
      } else {
        alert('Por favor, selecione uma data válida.');
      }
    }
    function exibirPopupAviso() {
      // Obter os dados existentes no Local Storage (se houver)
      var agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

      // Verificar se há agendamentos
      if (agendamentos.length > 0) {
        // Obter a data do primeiro agendamento
        var dataAgendamento = new Date(agendamentos[0]);

        // Calcular a diferença em milissegundos entre a data do agendamento e a data atual
        var diffMillis = dataAgendamento - new Date();

        // Calcular a diferença em dias
        var diffDays = diffMillis / (1000 * 60 * 60 * 24);

        // Exibir a data marcada na tela
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('dataMarcada').innerText = 'Doação marcada para: ' + dataAgendamento.toLocaleDateString('pt-BR', options);
        dataMarcada.style.color='#8C36FB'
        dataMarcada.style.fontWeight='bold'
        dataMarcada.style.fontSize='20px'
        // Exibir um popup se a diferença for menor que 3 dias
        if (diffDays < 3) {
          alert('Menos de 3 dias até a data marcada!');
        }
      }
    }

    // Chamar a função ao carregar a página
    window.onload = exibirPopupAviso;