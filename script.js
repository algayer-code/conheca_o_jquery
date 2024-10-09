$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();

        let task = $('#taskInput').val();

        if (task) {
            let taskItem = '<li>' + task + '<button class="delete-btn"><img src="./imagens/delete-icon.png" alt="Excluir"></button></li>';
            $('#taskList').append(taskItem);
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#taskList').on('click', '.delete-btn', function(event) {
        event.stopPropagation();
        $(this).parent().remove();
    });
});
