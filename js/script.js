document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notice-form');
    const noticesContainer = document.getElementById('notices-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Coleta os dados do formulário
        const title = document.getElementById('notice-title').value;
        const content = document.getElementById('notice-content').value;
        const date = document.getElementById('notice-date').value;
        const recipientsSelect = document.getElementById('notice-recipients');
        
        // Formata os destinatários selecionados
        const recipients = Array.from(recipientsSelect.selectedOptions)
                                .map(option => option.text)
                                .join(', ');

        // 2. Cria o card de aviso (HTML)
        const noticeCard = document.createElement('div');
        noticeCard.classList.add('notice-card');
        
        noticeCard.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Para:</strong> ${recipients}</p>
            <p><strong>Data de Comunicação:</strong> ${formatDate(date)}</p>
            <hr>
            <p>${content}</p>
        `;

        // 3. Remove a mensagem de estado vazio
        const emptyState = noticesContainer.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }

        // 4. Adiciona o novo aviso ao topo da lista
        noticesContainer.prepend(noticeCard);

        // 5. Limpa o formulário após o registro
        form.reset();
    });
    
    // Função auxiliar para formatar a data (opcional)
    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
});
            fetch('/footer.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('footer').innerHTML = html);
            
            fetch('/navbar.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('nav').innerHTML = html); 
            
             fetch('/login/login.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('login').innerHTML = html);

            fetch('/login/nacionality.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('nacionality').innerHTML = html);

            fetch('/login/state.html')
            .then(resp => resp.text())
            .then(html => document.getElementById('states').innerHTML = html); 