// Case management functionality
document.querySelectorAll('.case-actions .btn').forEach(button => {
    button.addEventListener('click', function() {
        const caseItem = this.closest('.case-item');
        const caseTitle = caseItem.querySelector('h3').textContent;
        
        if (this.classList.contains('btn-danger')) {
            if (confirm(`Вы уверены, что хотите удалить дело "${caseTitle}"?`)) {
                caseItem.remove();
                alert('Дело удалено! Эта функция будет полностью реализована в бэкенде');
            }
        } else if (this.classList.contains('btn-accent')) {
            alert(`Дело "${caseTitle}" перемещено на форум! Эта функция будет полностью реализована в бэкенде`);
        }
    });
});