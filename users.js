// User management functionality
document.querySelectorAll('.user-actions .btn').forEach(button => {
    button.addEventListener('click', function() {
        const userItem = this.closest('.user-item');
        const userName = userItem.querySelector('h3').textContent;
        
        if (this.classList.contains('btn-danger')) {
            if (confirm(`Вы уверены, что хотите удалить пользователя "${userName}"?`)) {
                userItem.remove();
                alert('Пользователь удален! Эта функция будет полностью реализована в бэкенде');
            }
        } else if (this.classList.contains('btn-sm') && !this.classList.contains('btn-danger')) {
            // Edit button clicked
            const userEditModal = document.getElementById('userEditModal');
            if (userEditModal) {
                // In a real app, we would load user data here
                document.getElementById('editUsername').value = userName.split(' ')[0];
                document.getElementById('editFullname').value = userName;
                userEditModal.classList.add('show');
            }
        }
    });
});