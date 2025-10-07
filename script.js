const openBtn = document.getElementById('openMenuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebarBtn');
const overlay = document.getElementById('overlay');
const firstNavLink = sidebar.querySelector('nav a');
const lastFocusableElement = closeBtn; // Ou o último item focável na sidebar
const returnFocusToBtn = openBtn; // O botão para onde o foco deve retornar

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Move o foco para o primeiro link na sidebar
    firstNavLink.focus();
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Retorna o foco para o botão que abriu a sidebar
    returnFocusToBtn.focus();
}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

sidebar.querySelectorAll('nav a').forEach(a => a.addEventListener('click', closeSidebar));

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 220 ? 'flex' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* THEME TOGGLE */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateThemeIcon() {
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'Imagens/day-night.png';
        themeIcon.alt = 'Modo Noturno';
    } else {
        themeIcon.src = 'Imagens/day-night.png';
        themeIcon.alt = 'Modo Diurno';
    }
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    updateThemeIcon();
});

// Funcionalidade da pesquisa
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sections = document.querySelectorAll('main section');
const noResultsMessage = document.getElementById('no-results');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let foundMatch = false;

    if (searchTerm === '') {
        sections.forEach(section => {
            section.style.display = 'block';
        });
        noResultsMessage.style.display = 'none';
        return;
    }

    sections.forEach(section => {
        const videoCards = section.querySelectorAll('.video-card');
        let hasMatchInSection = false;

        videoCards.forEach(card => {
            const title = card.querySelector('div:last-child').textContent.toLowerCase();
            const sectionTitle = section.querySelector('h2').textContent.toLowerCase();

            if (title.includes(searchTerm) || sectionTitle.includes(searchTerm)) {
                card.style.display = 'flex';
                hasMatchInSection = true;
                foundMatch = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (hasMatchInSection) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    if (!foundMatch) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}

searchInput.addEventListener('input', performSearch);
searchBtn.addEventListener('click', performSearch);