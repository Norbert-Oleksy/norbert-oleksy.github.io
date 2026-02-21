const contactsSection = `
    <div class="social-links-footer">
        <a href="https://www.linkedin.com/in/norbert-oleksy" class="social-link" target="_blank" aria-label="Linkedin">
            <i class="fab fa-linkedin"></i>
            <span class="social-tooltip">Linkedin</span>
        </a>
        <a href="https://github.com/Norbert-Oleksy" class="social-link" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
            <span class="social-tooltip">GitHub</span>
        </a>
        <a href="https://norbert-oleksy.itch.io/" class="social-link" target="_blank" aria-label="itch.io">
            <i class="fa-brands fa-itch-io"></i> <span class="social-tooltip">itch.io</span>
        </a>
        <a href="https://www.youtube.com/@Norbert-Oleksy" class="social-link" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
            <span class="social-tooltip">YouTube</span>
        </a>
        <a href="https://www.artstation.com/norbert-oleksy" class="social-link" target="_blank" aria-label="ArtStation">
            <i class="fa-brands fa-artstation"></i>
            <span class="social-tooltip">ArtStation</span>
        </a>
    </div>
`;

const placeholder = document.getElementById("contacts-placeholder");
if (placeholder) {
    placeholder.innerHTML = contactsSection;
}