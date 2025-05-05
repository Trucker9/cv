let i = 0;
const text = ["","I build websites,", " Mostly trash." ];
const typewriter = document.getElementById('typewriter');

function typeWriter() {
    if (i === 0) {
        typewriter.innerHTML = `<span class="big-hi">${text[0]}</span>`;
        i++;
        setTimeout(() => {
            typewriter.innerHTML += `<span class="smaller-text"></span>`;
            typeNextPart(1);
        }, 500);
        setTimeout(() => {
            typewriter.innerHTML += `<span class="smaller-text"></span>`;
            typeNextPart(2);
        }, 2000);
    }
}

function typeNextPart(a) {
    let j = 0;
    function type() {
        if (j < text[a].length) {
            const smallerText = typewriter.querySelector('.smaller-text');
            smallerText.textContent += text[a].charAt(j);
            j++;
            setTimeout(type, 50);
        }
    }
    type();
}

function scrollToContent() {
    const content = document.querySelector('main');
    content.scrollIntoView({ behavior: 'smooth' });
}

// Start the typewriter effect when page loads
typeWriter()

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});