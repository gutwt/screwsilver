// Animate products when page loads
window.addEventListener('load', () => {
  document.querySelector('.products').style.opacity = '1';
  document.querySelector('.products').style.transform = 'translateY(0)';
});

// Example of making sidebar filters interactive
const filters = document.querySelectorAll('.filter-group input');

filters.forEach(filter => {
  filter.addEventListener('change', () => {
    console.log('Filter changed:', filter.value);
    // You can trigger actual filtering here if you want later.
  });
});
