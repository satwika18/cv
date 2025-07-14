// Toggle visibility of sections
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.nextElementSibling;
    section.classList.toggle('hidden');
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll animation (simple fade-in)
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});