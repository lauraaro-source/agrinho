// ======== Modo Escuro ========
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ======== Mensagens Dinâmicas dos Produtos ========
const btnsInfo = document.querySelectorAll('.btn-info');
btnsInfo.forEach(btn => {
    btn.addEventListener('click', () => {
        const produto = btn.getAttribute('data-produto');
        alert(`Mais informações sobre ${produto}: Produto sustentável e de alta qualidade!`);
    });
});

// ======== Validação Simples do Formulário ========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos!';
        formMessage.style.color = 'red';
        return;
    }

    // Mensagem de sucesso
    formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado por nos contatar.';
    formMessage.style.color = 'green';

    // Limpar o formulário
    contactForm.reset();
});

// ======== Pequena animação de scroll ========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
