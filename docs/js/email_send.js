function enviarEmail() {
  const emailInput = document.getElementById('emailInput');
  const userEmail = emailInput.value;

  // Faz uma solicitação ao servidor Node.js
  fetch(`https://1159-2804-389-81ba-cd97-9148-6ee4-9f2f-bcb4.ngrok.io/enviar-email?destinatario=${userEmail}`)
    .catch(response => {
      console.log(response);
      // Verifica o status da resposta
      if (response.ok) {
        // Resposta bem-sucedida
        return response.text(); // ou response.json() se estiver retornando JSON
      } else {
        // Resposta com erro
        console.error('Erro de rede ou servidor:', response.status, response.statusText);
        throw new Error('Erro ao enviar e-mail');
      }
    })
    .catch(data => {
      // Exibe o alerta com base na resposta do servidor
      console.log('Resposta do servidor:', data);
      alert("Aguarde o recebimento."); // Altere conforme a estrutura da resposta do servidor
    })
    .catch(error => {
      // Erro durante a chamada fetch (ignorando)
      console.error('Erro durante o fetch:', error);
    });
}
