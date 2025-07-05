// BBCode insertion
function insertBBCode(tag) {
    const textarea = document.getElementById('topicContent');
    if (!textarea) return;
    
    const startTag = `[${tag}]`;
    const endTag = `[/${tag}]`;
    
    // Get current selection
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    // Insert BBCode tags
    if (selectedText) {
        textarea.value = textarea.value.substring(0, start) + 
                         startTag + selectedText + endTag + 
                         textarea.value.substring(end);
    } else {
        textarea.value += startTag + endTag;
        textarea.setSelectionRange(start + startTag.length, start + startTag.length);
    }
    
    // Focus back on textarea
    textarea.focus();
}

// Topic Form Submission
const topicForm = document.getElementById('topicForm');
if (topicForm) {
    topicForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('topicTitle').value;
        const category = document.getElementById('topicCategory').value;
        const content = document.getElementById('topicContent').value;
        
        if (!title || !category || !content) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        
        alert(`Тема "${title}" создана! Эта функция будет полностью реализована в бэкенде`);
        
        // Reset form
        topicForm.reset();
    });
}