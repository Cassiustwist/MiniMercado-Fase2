// Validação simples do formulário de cadastro
function validarFormulario() {
    const form = document.getElementById('formCadastro');
    if (form) {
        form.addEventListener('submit', function (e) {
            const nome = form.nome.value.trim();
            const cpf = form.cpf.value.trim();
            const email = form.email.value.trim();

            if (!nome || !cpf || !email) {
                alert('Por favor, preencha os campos obrigatórios: Nome, CPF e E-mail');
                e.preventDefault();
            }
        });
    }
}

// Inicializa a validação quando a página carrega
document.addEventListener('DOMContentLoaded', validarFormulario);
