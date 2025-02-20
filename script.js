const noButton = document.getElementById("noButton");
noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noButton.style.transition = 'left 0.2s, top 0.2s';
});
