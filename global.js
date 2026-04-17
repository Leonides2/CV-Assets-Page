const container = document.querySelector('.container');
const shadow = document.querySelector('.shadow');

function syncShadow() {
  const rect = container.getBoundingClientRect();
  shadow.style.top    = rect.top - 5 + 'px';
  shadow.style.left   = rect.left - 5 + 'px';
  shadow.style.width  = rect.width + 10 + 'px';
  shadow.style.height = rect.height + 10 + 'px';
}



document.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;

  shadow.style.setProperty('--cx', cx + 'px');
  shadow.style.setProperty('--cy', cy + 'px');
});

document.addEventListener('mouseleave', () => {
  shadow.style.setProperty('--cx', '-9999px');
  shadow.style.setProperty('--cy', '-9999px');
});

document.addEventListener('DOMContentLoaded', () => {
  syncShadow();
  window.addEventListener('resize', syncShadow);
});