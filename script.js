document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-site');
    const warningDiv = document.getElementById('warning');
    const portfolioDiv = document.getElementById('portfolio');

    enterButton.addEventListener('click', () => {
        warningDiv.classList.add('hidden');
        portfolioDiv.classList.remove('hidden');
    });
});
