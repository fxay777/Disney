document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero'); // Changed to select a single hero section
    const alturaHero = heroSection ? heroSection.clientHeight : 0; // Added null check

    window.addEventListener('scroll', function() {
        const positionAtual = window.scrollY;

        if (positionAtual > alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAsAbas();
            if (aba) {
                aba.classList.add('shows__list--is-active');
                removeBotaoAtivo();
                event.target.classList.add('shows__tabs__button--is-active');
            }
        });
    });

    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta);
    });
});

function abreOuFechaResposta(event) {
    const className = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentNode;
    elementoPai.classList.toggle(className);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}

function escondeTodasAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    });
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); // Adjusted class name to have consistent hyphenation
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}
