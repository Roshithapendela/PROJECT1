document.getElementById('consultation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Consultation booked!');
    this.reset();
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.toggle').textContent = '+';
        });

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
            item.querySelector('.toggle').textContent = '-';
        }
    });
});
