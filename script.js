document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('flipCard').addEventListener('click', () => {
        document.getElementById('flipCard').classList.toggle('flipped');
    });

    // Flip when buttons are clicked (without triggering card click)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('flipCard').classList.toggle('flipped');
        });
    });
})

