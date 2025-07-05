// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Update icon
    themeToggle.innerHTML = newTheme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Save preference
    localStorage.setItem('theme', newTheme);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
} else {
    // Default to dark theme
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// User Dropdown
const userBtn = document.getElementById('userBtn');
const userDropdown = document.getElementById('userDropdown');

if (userBtn) {
    userBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (userDropdown && !userDropdown.contains(e.target) {
        userDropdown.classList.remove('show');
    }
});

// Modal Handling
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');

// Login modal
if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('show');
    });
}

// Register modal
if (registerBtn && registerModal) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.add('show');
    });
}

// Close modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('show');
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// Form Submissions
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Функция входа будет реализована в бэкенде');
        loginModal.classList.remove('show');
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Функция регистрации будет реализована в бэкенде');
        registerModal.classList.remove('show');
    });
}

// New Case Button
const newCaseBtn = document.getElementById('newCaseBtn');
const newCaseModal = document.getElementById('newCaseModal');

if (newCaseBtn && newCaseModal) {
    newCaseBtn.addEventListener('click', () => {
        newCaseModal.classList.add('show');
    });
}

// Case Form Submission
const caseForm = document.getElementById('caseForm');
if (caseForm) {
    caseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Дело создано! Эта функция будет полностью реализована в бэкенде');
        newCaseModal.classList.remove('show');
    });
}

// Add User Button
const addUserBtn = document.getElementById('addUserBtn');
const userEditModal = document.getElementById('userEditModal');

if (addUserBtn && userEditModal) {
    addUserBtn.addEventListener('click', () => {
        userEditModal.classList.add('show');
    });
}

// User Edit Form
const userEditForm = document.getElementById('userEditForm');
if (userEditForm) {
    userEditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Изменения сохранены! Эта функция будет полностью реализована в бэкенде');
        userEditModal.classList.remove('show');
    });
}