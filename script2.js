// Přidání efektu hover na tlačítka opravy
document.querySelectorAll('.u-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#000'; // Změna barvy pozadí na černou při hoveru
        button.style.color = '#fff'; // Změna barvy textu na bílou při hoveru
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = ''; // Obnoví původní barvu pozadí
        button.style.color = ''; // Obnoví původní barvu textu
    });
});

// Přidání kontaktního formuláře
const contactFormHTML = `
    <section class="u-align-left u-clearfix u-section-2" id="contact">
        <div class="u-clearfix u-sheet u-sheet-1">
            <h3 class="u-text u-text-default u-text-1">Kontaktujte nás</h3>
            <form class="u-form u-form-1">
                <div class="u-form-group">
                    <label for="name" class="u-label">Jméno</label>
                    <input type="text" id="name" name="name" class="u-input u-input-rectangle" required>
                </div>
                <div class="u-form-group">
                    <label for="email" class="u-label">Email</label>
                    <input type="email" id="email" name="email" class="u-input u-input-rectangle" required>
                </div>
                <div class="u-form-group">
                    <label for="message" class="u-label">Zpráva</label>
                    <textarea id="message" name="message" class="u-input u-input-rectangle" required></textarea>
                </div>
                <div class="u-align-left u-form-group u-form-submit">
                    <a href="#" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-hover-white">Odeslat</a>
                    <input type="submit" value="submit" class="u-form-control-hidden">
                </div>
            </form>
        </div>
    </section>
`;
document.body.insertAdjacentHTML('beforeend', contactFormHTML);
