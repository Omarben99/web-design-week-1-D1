// EXTRA 1: Rimuovere il link "Twitter" sotto alla sezione "Altro" nell'elemento "aside"
document.addEventListener("DOMContentLoaded", function () {
    const twitterLink = document.querySelector('aside .list-unstyled li a[href*="Twitter"]');
    if (twitterLink) {
        twitterLink.parentElement.remove(); // Rimuove l'elemento padre <li>
    }
});

// EXTRA 2: Rimuovere il corrispondente elemento padre cliccando sul link "Continua a leggere"
const continuaLinks = document.querySelectorAll('.stretched-link, .font-weight-bold');

continuaLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Previene il comportamento predefinito del link
        const parentElement = link.closest('.col-md-6, .blog-post');
        if (parentElement) {
            parentElement.remove(); // Rimuove l'elemento padre più vicino
        }
    });
});

// EXTRA 3: Mostrare un alert con il nome dell'autore al passaggio del cursore
const authors = document.querySelectorAll('.blog-post-meta a');

authors.forEach(author => {
    author.addEventListener('mouseenter', function () {
        alert(`Autore: ${author.textContent}`);
    });
});
