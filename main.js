$(document).ready(function () {
    // Função responsável por abrir o formulário de tarefas
    $('header button').click(function () {
        $('form').slideDown(1000);
    });

    // Função responsável por fechar o formulário de tarefas
    $('#cancel').click(function () {
        $('form').slideUp();
    });

    // Incluir nova tarefa no HTML
    $('form').on("submit", function (e) {
        // Previne o comportamento padrão do formulário
        e.preventDefault();

        // Obtém o valor do campo de entrada com id "new-task"
        const newTask = $('#new-task').val();

        // Cria um elemento <li> com o texto da nova tarefa
        const newItem = $(`
            <li style="display:none;">
                ${newTask} 
                <button id="btn-ok" class="delete">✓</button>
            </li>
        `);

        // Adiciona o novo item à lista de tarefas
        $('ul').append(newItem);

        // Exibe o novo item com efeito de deslizamento
        newItem.slideDown();

        // Limpa o campo de entrada
        $('#new-task').val('');
    });

    // Função para excluir uma tarefa
    $('ul').on('click', '.delete', function () {
        $(this).parent().slideUp(function () {
            $(this).remove();
        });
    });
});