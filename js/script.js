let i = 0;
const text = ["","I build websites, mostly trash."];
const typewriter = document.getElementById('typewriter');

function typeWriter() {
    if (i === 0) {
        typewriter.innerHTML = `<span class="big-hi">${text[0]}</span>`;
        i++;
        setTimeout(() => {
            typewriter.innerHTML += `<span class="smaller-text"></span>`;
            typeNextPart();
        }, 1000);
    }
}

function typeNextPart() {
    let j = 0;
    function type() {
        if (j < text[1].length) {
            const smallerText = typewriter.querySelector('.smaller-text');
            smallerText.textContent += text[1].charAt(j);
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
window.onload = typeWriter;