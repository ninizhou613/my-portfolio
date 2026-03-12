// 1. Typing Effect for Hero Section
const typingTextElement = document.getElementById('typing-text');
const words = ['AI Product Manager.', 'Global Marketing Strategist.', 'Data Storyteller.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typingSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// 2. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// 3. Timeline Interactivity
function toggleTimeline(element) {
    element.classList.toggle('active');
}

// 4. Insights Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const insightCards = document.querySelectorAll('.insight-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        insightCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 5. Projects Modal Logic
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

const projectData = {
    project1: {
        title: "AI Data Agent for Game Analytics",
        desc: "Built a robust AI agent that integrates with internal data pipelines. It utilizes LLMs to parse natural language queries from non-technical stakeholders, generates accurate SQL, and visualizes the results via intuitive dashboards. Reduced data retrieval bottlenecks by 40%."
    },
    project2: {
        title: "Down Syndrome Media Representation",
        desc: "Conducted comprehensive qualitative and quantitative research analyzing the portrayal of individuals with Down Syndrome in modern entertainment media. This project highlighted key gaps in inclusivity and offered a framework for authentic representation."
    }
};

function openModal(projectId) {
    modalTitle.textContent = projectData[projectId].title;
    modalDesc.textContent = projectData[projectId].desc;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// 6. Basic Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    formStatus.textContent = "Thank you! Your message has been sent successfully.";
    formStatus.className = "success";
    formStatus.style.display = "block";
    formStatus.style.color = "green";
    formStatus.style.marginTop = "15px";
    contactForm.reset();
    
    setTimeout(() => {
        formStatus.style.display = "none";
    }, 5000);
});
